const SIZE = 5;
const CLEAR_SIZE = 5;
const SWAP_ENERGY_TARGET = 5;
const MAX_SWAP_TICKETS = 2;
const LONG_PRESS_MS = 360;
const SECONDARY_GOAL_BASE = 12;
const PRIMARY_GOAL_BASE = 8;
const PRIMARY_COLORS = ["red", "green", "blue"];
const TARGET_COLORS = ["yellow", "cyan", "magenta"];

const COLOR_LABELS = {
  red: "紅",
  green: "綠",
  blue: "藍",
  yellow: "黃",
  cyan: "青",
  magenta: "紫",
};

const RECIPES = {
  "green+red": "yellow",
  "blue+green": "cyan",
  "blue+red": "magenta",
};

const boardEl = document.querySelector("#board");
const scoreEl = document.querySelector("#score");
const changedEl = document.querySelector("#changed");
const bestEl = document.querySelector("#best");
const goalEl = document.querySelector("#goal");
const goalStatEl = document.querySelector("#goal-stat");
const goalMeterEl = document.querySelector("#goal-meter");
const clearSizeEl = document.querySelector("#clear-size");
const comboEl = document.querySelector("#combo");
const swapBtn = document.querySelector("#swap");
const hintBtn = document.querySelector("#hint");
const resetBtn = document.querySelector("#reset");
const resultModalEl = document.querySelector("#result-modal");
const resultKickerEl = document.querySelector("#result-kicker");
const resultTitleEl = document.querySelector("#result-title");
const resultDetailEl = document.querySelector("#result-detail");
const resultResetBtn = document.querySelector("#result-reset");

let board = [];
let selected = null;
let score = 0;
let goalsReached = 0;
let currentGoal = createGoal();
let goalReached = false;
let lastClear = 0;
let bestClear = 0;
let turns = 0;
let combo = 1;
let busy = false;
let ended = false;
let swapMode = false;
let swapSelected = null;
let swapTickets = 0;
let swapEnergy = 0;
let swapEarned = false;
let willClearKeys = new Set();
let clearingKeys = new Set();
let spawnKeys = new Set();
let dropOffsets = new Map();
let previewChangeKeys = new Set();
let previewClearKeys = new Set();
let longPressTimer = null;
let longPressTriggered = false;

function recipeKey(a, b) {
  return [a, b].sort().join("+");
}

function isPrimary(color) {
  return PRIMARY_COLORS.includes(color);
}

function mixColor(a, b) {
  if (a === b || !isPrimary(a) || !isPrimary(b)) return null;
  return RECIPES[recipeKey(a, b)] || null;
}

function createBoard() {
  let attempts = 0;

  do {
    board = Array.from({ length: SIZE }, () =>
      Array.from({ length: SIZE }, () => randomPrimary())
    );
    attempts += 1;
  } while (attempts < 300 && (findClearCells(allCells()).length > 0 || !hasMoves()));
}

function render() {
  boardEl.innerHTML = "";
  boardEl.classList.toggle("swap-mode", swapMode);
  const frag = document.createDocumentFragment();

  board.forEach((row, r) => {
    row.forEach((color, c) => {
      const key = cellKey({ row: r, col: c });

      if (!color) {
        const empty = document.createElement("div");
        empty.className = "tile empty";
        frag.appendChild(empty);
        return;
      }

      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = `tile ${color}`;
      tile.dataset.row = r;
      tile.dataset.col = c;
      tile.dataset.label = COLOR_LABELS[color];
      tile.setAttribute("role", "gridcell");
      tile.setAttribute("aria-label", `${COLOR_LABELS[color]}色塊`);

      if (selected && selected.row === r && selected.col === c) tile.classList.add("selected");
      if (swapSelected && swapSelected.row === r && swapSelected.col === c) tile.classList.add("swap-selected");
      if (swapMode && swapSelected && isAdjacent(swapSelected, { row: r, col: c })) {
        const swapInfo = getSwapInfo(swapSelected, { row: r, col: c });
        tile.classList.add("swap-target");
        tile.classList.add(swapInfo.clears.length >= CLEAR_SIZE ? "swap-clears" : "swap-position");
      }
      if (dropOffsets.has(key)) {
        tile.classList.add("drop");
        tile.style.setProperty("--drop-rows", dropOffsets.get(key));
      }
      if (spawnKeys.has(key)) tile.classList.add("spawn");
      if (previewChangeKeys.has(key)) tile.classList.add("preview-change");
      if (previewClearKeys.has(key)) tile.classList.add("preview-clear");
      if (willClearKeys.has(key)) tile.classList.add("will-clear");
      if (clearingKeys.has(key)) tile.classList.add("clearing");

      tile.addEventListener("click", onTileClick);
      tile.addEventListener("pointerdown", onTilePointerDown);
      tile.addEventListener("pointerup", cancelLongPress);
      tile.addEventListener("pointercancel", cancelLongPress);
      tile.addEventListener("pointerleave", cancelLongPress);
      tile.addEventListener("contextmenu", (event) => event.preventDefault());
      frag.appendChild(tile);
    });
  });

  boardEl.appendChild(frag);
  updateStats();
  renderMixDots();
}

function updateStats() {
  const moveCount = countMoves();
  const goalColor = currentGoal.color;

  scoreEl.textContent = score.toString();
  goalEl.textContent = goalText();
  goalStatEl.classList.toggle("reached", goalReached);
  goalStatEl.style.setProperty("--goal-color", `var(--${goalColor})`);
  goalMeterEl.style.setProperty("--goal-fill", `${Math.min(100, (currentGoal.progress / currentGoal.required) * 100)}%`);
  changedEl.textContent = lastClear ? `${lastClear}顆` : "0";
  bestEl.textContent = bestClear ? `${bestClear}顆` : "0";
  clearSizeEl.textContent = `${moveCount}步`;
  clearSizeEl.parentElement.classList.toggle("danger", moveCount <= 3);
  comboEl.textContent = `x${combo}`;
  swapBtn.textContent = `⇄ ${swapTickets}`;
  swapBtn.disabled = swapTickets === 0 && !swapMode;
  swapBtn.classList.toggle("active", swapMode);
  swapBtn.classList.toggle("earned", swapEarned);
  swapBtn.style.setProperty("--swap-fill", `${(swapEnergy / SWAP_ENERGY_TARGET) * 100}%`);
  swapBtn.setAttribute("aria-label", `交換券 ${swapTickets} 張，能量 ${swapEnergy}/${SWAP_ENERGY_TARGET}`);
}

function onTileClick(event) {
  if (busy || ended) return;
  if (longPressTriggered) {
    longPressTriggered = false;
    return;
  }

  const cell = cellFromTile(event.currentTarget);

  if (swapMode) {
    onSwapTileClick(cell);
    return;
  }

  if (!selected) {
    selected = cell;
    render();
    return;
  }

  if (sameCell(selected, cell)) {
    selected = null;
    render();
    return;
  }

  if (!isAdjacent(selected, cell)) {
    selected = cell;
    render();
    return;
  }

  attemptMove(selected, cell);
}

function onTilePointerDown(event) {
  if (busy || ended || swapTickets <= 0) return;
  const cell = cellFromTile(event.currentTarget);

  cancelLongPress();
  longPressTriggered = false;
  longPressTimer = window.setTimeout(() => {
    longPressTriggered = true;
    selected = null;
    swapMode = true;
    swapSelected = cell;
    clearPreview();
    render();
  }, LONG_PRESS_MS);
}

function cancelLongPress() {
  if (!longPressTimer) return;
  window.clearTimeout(longPressTimer);
  longPressTimer = null;
}

function onSwapTileClick(cell) {
  if (swapTickets <= 0) {
    exitSwapMode();
    return;
  }

  if (!swapSelected) {
    swapSelected = cell;
    render();
    return;
  }

  if (sameCell(swapSelected, cell)) {
    swapSelected = null;
    render();
    return;
  }

  if (!isAdjacent(swapSelected, cell)) {
    swapSelected = cell;
    render();
    return;
  }

  attemptSwap(swapSelected, cell);
}

async function attemptSwap(from, to) {
  if (busy || ended || swapTickets <= 0) return;

  busy = true;
  selected = null;
  swapSelected = null;
  swapMode = false;
  spawnKeys = new Set();
  dropOffsets = new Map();

  const fromColor = board[from.row][from.col];
  board[from.row][from.col] = board[to.row][to.col];
  board[to.row][to.col] = fromColor;

  swapTickets -= 1;
  turns += 1;
  lastClear = 0;

  render();
  await wait(180);
  await resolveClears([from, to]);

  busy = false;
  combo = 1;
  updateStats();
  checkEndState();
  render();
}

async function attemptMove(from, to) {
  if (busy || ended) return;

  const fromColor = board[from.row][from.col];
  const toColor = board[to.row][to.col];
  const result = mixColor(fromColor, toColor);
  if (!result) return;

  busy = true;
  selected = null;
  spawnKeys = new Set();
  dropOffsets = new Map();

  board[from.row][from.col] = result;
  board[to.row][to.col] = result;
  turns += 1;
  score += 20;
  trackGoalOnMix([fromColor, toColor], result);
  lastClear = 0;

  const changed = [from, to];
  render();
  await wait(180);
  await resolveClears(changed);

  busy = false;
  combo = 1;
  updateStats();
  checkEndState();
  render();
}

function renderMixDots() {
  boardEl.querySelectorAll(".mix-dot").forEach((dot) => dot.remove());
  if (busy || ended || swapMode) return;

  const boardRect = boardEl.getBoundingClientRect();

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      [
        { row, col: col + 1 },
        { row: row + 1, col },
      ]
        .filter(validCell)
        .forEach((next) => renderMixDot({ row, col }, next, boardRect));
    }
  }
}

function renderMixDot(from, to, boardRect) {
  const move = getMoveInfo(from, to);
  if (!move) return;

  const fromTile = tileFor(from);
  const toTile = tileFor(to);
  if (!fromTile || !toTile) return;

  const fromRect = fromTile.getBoundingClientRect();
  const toRect = toTile.getBoundingClientRect();
  const dot = document.createElement("button");

  dot.type = "button";
  dot.className = `mix-dot ${move.result}`;
  if (move.clears.length >= CLEAR_SIZE) dot.classList.add("ready");
  dot.dataset.clearCount = move.clearCount.toString();
  dot.style.left = `${(centerX(fromRect, boardRect) + centerX(toRect, boardRect)) / 2}px`;
  dot.style.top = `${(centerY(fromRect, boardRect) + centerY(toRect, boardRect)) / 2}px`;
  dot.setAttribute("aria-label", `${COLOR_LABELS[move.result]}色`);
  dot.addEventListener("mouseenter", () => previewMove(move));
  dot.addEventListener("mouseleave", clearPreview);
  dot.addEventListener("focus", () => previewMove(move));
  dot.addEventListener("blur", clearPreview);
  dot.addEventListener("click", (event) => {
    event.stopPropagation();
    clearPreview();
    attemptMove(from, to);
  });

  boardEl.appendChild(dot);
}

function previewMove(move) {
  clearPreview();
  previewChangeKeys = cellKeySet(move.changed);
  previewClearKeys = cellKeySet(move.clears);
  move.changed.forEach((cell) => tileFor(cell)?.classList.add("preview-change"));
  move.clears.forEach((cell) => tileFor(cell)?.classList.add("preview-clear"));
}

function previewCells(cells) {
  clearPreview();
  cells.forEach((cell) => tileFor(cell)?.classList.add("preview"));
}

function clearPreview() {
  previewChangeKeys = new Set();
  previewClearKeys = new Set();
  boardEl.querySelectorAll(".tile.preview, .tile.preview-change, .tile.preview-clear").forEach((tile) => {
    tile.classList.remove("preview", "preview-change", "preview-clear");
  });
}

function getMoveInfo(from, to) {
  const originalA = board[from.row][from.col];
  const originalB = board[to.row][to.col];
  const result = mixColor(originalA, originalB);
  if (!result) return null;

  board[from.row][from.col] = result;
  board[to.row][to.col] = result;
  const clears = findClearCells([from, to]);
  board[from.row][from.col] = originalA;
  board[to.row][to.col] = originalB;

  return {
    from,
    to,
    result,
    changed: [from, to],
    clears,
    clearCount: clears.length,
  };
}

function getSwapInfo(from, to) {
  const originalA = board[from.row][from.col];
  const originalB = board[to.row][to.col];

  board[from.row][from.col] = originalB;
  board[to.row][to.col] = originalA;
  const clears = findClearCells([from, to]);
  board[from.row][from.col] = originalA;
  board[to.row][to.col] = originalB;

  return {
    from,
    to,
    clears,
    clearCount: clears.length,
  };
}

async function resolveClears(seedCells) {
  let seeds = seedCells;
  combo = 1;

  while (seeds.length > 0) {
    const clearing = findClearCells(seeds);
    if (clearing.length === 0) return;

    lastClear = clearing.length;
    bestClear = Math.max(bestClear, lastClear);
    score += clearing.length * clearing.length * 10 * combo;
    trackGoalOnClear(clearing);
    addSwapEnergy(clearing.length);
    willClearKeys = cellKeySet(clearing);
    clearingKeys = new Set();
    updateStats();
    render();
    await wait(760);

    clearingKeys = cellKeySet(clearing);
    render();
    await wait(280);

    willClearKeys = new Set();
    clearingKeys = new Set();
    clearCells(clearing);
    render();
    await wait(140);

    seeds = applyGravity();
    render();
    await wait(320);
    spawnKeys = new Set();
    dropOffsets = new Map();
    combo += 1;
  }
}

function findClearCells(seedCells) {
  const clearMap = new Map();
  const checked = new Set();

  seedCells.forEach((seed) => {
    if (!validCell(seed) || !board[seed.row][seed.col]) return;

    const key = cellKey(seed);
    if (checked.has(key)) return;

    const group = collectGroup(seed);
    group.forEach((cell) => checked.add(cellKey(cell)));

    if (group.length >= CLEAR_SIZE) {
      group.forEach((cell) => clearMap.set(cellKey(cell), cell));
    }
  });

  return [...clearMap.values()];
}

function collectGroup(start) {
  const color = board[start.row][start.col];
  if (!color) return [];

  const cells = [];
  const visited = new Set();
  const stack = [start];

  while (stack.length) {
    const current = stack.pop();
    const key = cellKey(current);
    if (visited.has(key)) continue;

    visited.add(key);
    cells.push(current);

    neighbors(current).forEach((next) => {
      if (board[next.row][next.col] === color) stack.push(next);
    });
  }

  return cells;
}

function applyGravity() {
  const changed = [];
  spawnKeys = new Set();
  dropOffsets = new Map();

  for (let col = 0; col < SIZE; col += 1) {
    const existing = [];

    for (let row = SIZE - 1; row >= 0; row -= 1) {
      if (board[row][col]) existing.push({ color: board[row][col], row });
      board[row][col] = null;
    }

    for (let row = SIZE - 1; row >= 0; row -= 1) {
      const next = existing.shift();
      const cell = { row, col };

      if (next) {
        board[row][col] = next.color;

        if (next.row !== row) {
          changed.push(cell);
          dropOffsets.set(cellKey(cell), Math.max(1, row - next.row));
        }
      } else {
        board[row][col] = randomPrimaryFor(row, col);
        spawnKeys.add(cellKey(cell));
        changed.push(cell);
        dropOffsets.set(cellKey(cell), row + 1);
      }

    }
  }

  return uniqueCells(changed);
}

function randomPrimaryFor(row, col) {
  const colors = shuffledPrimaries();

  for (const color of colors) {
    board[row][col] = color;
    if (collectGroup({ row, col }).length < CLEAR_SIZE) return color;
  }

  board[row][col] = colors[0];
  return colors[0];
}

function createGoal(previousGoal = null) {
  const useSecondaryGoal = previousGoal ? previousGoal.type === "use-primary" : Math.random() < 0.5;
  const colorPool = useSecondaryGoal ? TARGET_COLORS : PRIMARY_COLORS;
  const availableColors = previousGoal ? colorPool.filter((color) => color !== previousGoal.color) : colorPool;
  const color = availableColors[Math.floor(Math.random() * availableColors.length)];

  if (useSecondaryGoal) {
    return {
      type: "clear-secondary",
      color,
      progress: 0,
      required: SECONDARY_GOAL_BASE + goalsReached * 2,
    };
  }

  return {
    type: "use-primary",
    color,
    progress: 0,
    required: PRIMARY_GOAL_BASE + goalsReached,
  };
}

function goalText() {
  const action = currentGoal.type === "clear-secondary" ? "消除" : "融合";
  return `${COLOR_LABELS[currentGoal.color]}${action} ${currentGoal.progress}/${currentGoal.required}`;
}

function trackGoalOnMix(colors) {
  if (currentGoal.type !== "use-primary") return;
  if (!colors.includes(currentGoal.color)) return;

  addGoalProgress(1);
}

function trackGoalOnClear(clearing) {
  if (currentGoal.type !== "clear-secondary") return;

  const targetCount = clearing.filter((cell) => board[cell.row][cell.col] === currentGoal.color).length;
  if (targetCount === 0) return;

  addGoalProgress(targetCount);
}

function addGoalProgress(amount) {
  currentGoal.progress += amount;

  while (currentGoal.progress >= currentGoal.required) {
    const finishedGoal = currentGoal;

    goalsReached += 1;
    grantGoalReward(finishedGoal);
    currentGoal = createGoal(finishedGoal);
  }

  goalReached = true;
  window.setTimeout(() => {
    goalReached = false;
    updateStats();
  }, 900);
}

function grantGoalReward(goal) {
  addSwapEnergyPoints(goal.type === "clear-secondary" ? SWAP_ENERGY_TARGET : 3);
}

function addSwapEnergy(clearCount) {
  let points = 0;

  if (clearCount >= 7) {
    points = 3;
  } else if (clearCount >= 6) {
    points = 2;
  } else if (clearCount >= 5) {
    points = 1;
  }

  addSwapEnergyPoints(points);
}

function addSwapEnergyPoints(points) {
  if (points <= 0) return;

  const ticketsBefore = swapTickets;

  if (swapTickets >= MAX_SWAP_TICKETS) {
    swapEnergy = Math.min(swapEnergy, SWAP_ENERGY_TARGET - 1);
    return;
  }

  swapEnergy += points;

  while (swapEnergy >= SWAP_ENERGY_TARGET && swapTickets < MAX_SWAP_TICKETS) {
    swapEnergy -= SWAP_ENERGY_TARGET;
    swapTickets += 1;
  }

  if (swapTickets >= MAX_SWAP_TICKETS) {
    swapEnergy = Math.min(swapEnergy, SWAP_ENERGY_TARGET - 1);
  }

  if (swapTickets > ticketsBefore) {
    swapEarned = true;
    window.setTimeout(() => {
      swapEarned = false;
      updateStats();
    }, 900);
  }
}

function findHint() {
  let best = null;

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const from = { row, col };
      const options = [
        { row, col: col + 1 },
        { row: row + 1, col },
      ];
      options
        .filter((cell) => validCell(cell))
        .forEach((to) => {
          const move = getMoveInfo(from, to);
          if (!move) return;
          if (!best || move.clearCount > best.clearCount) best = move;
        });
    }
  }

  return best;
}

function showHint() {
  if (busy || ended) return;
  const hint = findHint();
  if (!hint) return;

  boardEl.querySelectorAll(".tile").forEach((tile) => tile.classList.remove("hint"));
  hint.changed.forEach((cell) => tileFor(cell)?.classList.add("hint"));
  if (hint.clears.length) {
    hint.clears.forEach((cell) => tileFor(cell)?.classList.add("preview-clear"));
  }
  selected = hint.from;
}

function resetGame() {
  score = 0;
  goalsReached = 0;
  currentGoal = createGoal();
  goalReached = false;
  lastClear = 0;
  bestClear = 0;
  turns = 0;
  combo = 1;
  selected = null;
  swapMode = false;
  swapSelected = null;
  swapTickets = 0;
  swapEnergy = 0;
  swapEarned = false;
  busy = false;
  ended = false;
  willClearKeys = new Set();
  clearingKeys = new Set();
  spawnKeys = new Set();
  dropOffsets = new Map();
  previewChangeKeys = new Set();
  previewClearKeys = new Set();
  resultModalEl.classList.add("hidden");
  createBoard();
  render();
}

function checkEndState() {
  if (hasMoves() || swapTickets > 0) return;

  ended = true;
  resultKickerEl.textContent = "Game Over";
  resultTitleEl.textContent = "沒有可融合的位置";
  resultDetailEl.textContent = `分數 ${score}，撐了 ${turns} 回合，最大消除 ${bestClear} 顆。`;
  resultModalEl.classList.remove("hidden");
  boardEl.querySelectorAll(".mix-dot").forEach((dot) => dot.remove());
}

function toggleSwapMode() {
  if (busy || ended) return;
  if (swapTickets <= 0 && !swapMode) return;

  swapMode = !swapMode;
  selected = null;
  swapSelected = null;
  clearPreview();
  render();
}

function exitSwapMode() {
  swapMode = false;
  swapSelected = null;
  render();
}

function hasMoves() {
  return countMoves() > 0;
}

function countMoves() {
  let count = 0;

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      [
        { row, col: col + 1 },
        { row: row + 1, col },
      ]
        .filter(validCell)
        .forEach((next) => {
          if (mixColor(board[row][col], board[next.row][next.col])) count += 1;
        });
    }
  }

  return count;
}

function clearCells(cells) {
  cells.forEach(({ row, col }) => {
    board[row][col] = null;
  });
}

function allCells() {
  const cells = [];

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      cells.push({ row, col });
    }
  }

  return cells;
}

function neighbors(cell) {
  return [
    { row: cell.row - 1, col: cell.col },
    { row: cell.row + 1, col: cell.col },
    { row: cell.row, col: cell.col - 1 },
    { row: cell.row, col: cell.col + 1 },
  ].filter(validCell);
}

function validCell({ row, col }) {
  return row >= 0 && row < SIZE && col >= 0 && col < SIZE;
}

function isAdjacent(a, b) {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col) === 1;
}

function sameCell(a, b) {
  return a && b && a.row === b.row && a.col === b.col;
}

function cellFromTile(tile) {
  return {
    row: Number(tile.dataset.row),
    col: Number(tile.dataset.col),
  };
}

function tileFor({ row, col }) {
  return boardEl.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}

function centerX(rect, rootRect) {
  return rect.left - rootRect.left + rect.width / 2;
}

function centerY(rect, rootRect) {
  return rect.top - rootRect.top + rect.height / 2;
}

function randomPrimary() {
  return PRIMARY_COLORS[Math.floor(Math.random() * PRIMARY_COLORS.length)];
}

function shuffledPrimaries() {
  return [...PRIMARY_COLORS].sort(() => Math.random() - 0.5);
}

function uniqueCells(cells) {
  const unique = new Map();
  cells.forEach((cell) => unique.set(cellKey(cell), cell));
  return [...unique.values()];
}

function cellKey(cell) {
  return `${cell.row},${cell.col}`;
}

function cellKeySet(cells) {
  return new Set(cells.map(cellKey));
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

swapBtn.addEventListener("click", toggleSwapMode);
hintBtn.addEventListener("click", showHint);
resetBtn.addEventListener("click", resetGame);
resultResetBtn.addEventListener("click", resetGame);

resetGame();
