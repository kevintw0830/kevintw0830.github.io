window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44306bg739HjLdVFcQqgozR", "AdManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdManager = function(_super) {
      __extends(AdManager, _super);
      function AdManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdManager_1 = AdManager;
      AdManager.getInstance = function() {
        this.adManager || (this.adManager = new AdManager_1());
        return this.adManager;
      };
      AdManager.prototype.showBannerAd = function() {
        cc.log("showBannerAd");
        if (cc.sys.platform == cc.sys.ANDROID) {
          cc.log("showBannerAd");
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AdManager", "showBannerAd", "()V");
        }
      };
      AdManager.prototype.hideBannerAd = function() {
        cc.log("hideBannerAd");
        if (cc.sys.platform == cc.sys.ANDROID) {
          cc.log("hideBannerAd");
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AdManager", "hideBannerAd", "()V");
        }
      };
      AdManager.prototype.showInterstitialAd = function() {
        cc.log("showInterstitialAd");
        if (cc.sys.platform == cc.sys.ANDROID) {
          cc.log("showInterstitialAd");
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AdManager", "showInterstitialAd", "()V");
        }
      };
      var AdManager_1;
      AdManager.adManager = null;
      AdManager = AdManager_1 = __decorate([ ccclass ], AdManager);
      return AdManager;
    }(cc.Component);
    exports.default = AdManager;
    cc._RF.pop();
  }, {} ],
  AdView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d38400ZLtNGqo0U0uYn7YHE", "AdView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdManager_1 = require("./Tool/AdManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdView = function(_super) {
      __extends(AdView, _super);
      function AdView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ShowBannerBtn = null;
        _this.HideBannerBtn = null;
        _this.InterstitialBtn = null;
        return _this;
      }
      AdView.prototype.start = function() {};
      AdView.prototype.addEvent = function() {};
      AdView.prototype.onShowBannerAd = function() {
        AdManager_1.default.getInstance().showBannerAd();
      };
      AdView.prototype.onHideBannerAd = function() {
        AdManager_1.default.getInstance().hideBannerAd();
      };
      AdView.prototype.onShowInterstitial = function() {
        AdManager_1.default.getInstance().showInterstitialAd();
      };
      __decorate([ property(cc.Button) ], AdView.prototype, "ShowBannerBtn", void 0);
      __decorate([ property(cc.Button) ], AdView.prototype, "HideBannerBtn", void 0);
      __decorate([ property(cc.Button) ], AdView.prototype, "InterstitialBtn", void 0);
      AdView = __decorate([ ccclass ], AdView);
      return AdView;
    }(cc.Component);
    exports.default = AdView;
    cc._RF.pop();
  }, {
    "./Tool/AdManager": "AdManager"
  } ],
  AnimManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50e381Vu1ZC15Af99z0WDQp", "AnimManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  BgElement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d815+DhIlJAI1JBZqq0y1a", "BgElement");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResMgr_1 = require("../ResMgr");
    var GameConst_1 = require("../GameConst");
    var GameData_1 = require("../GameData");
    var GameElement_1 = require("./GameElement");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BgElement = function(_super) {
      __extends(BgElement, _super);
      function BgElement() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.idx_x = -1;
        _this.idx_y = -1;
        _this.myName = "";
        _this.myGameElement = null;
        _this.gameScript = null;
        _this.mySprite = null;
        _this.gameElementPrefab = null;
        return _this;
      }
      BgElement.prototype.start = function() {};
      BgElement.prototype.init = function(x, y, game) {
        this.idx_x = x;
        this.idx_y = y;
        this.gameScript = game;
        this.myName = this.idx_x + "_" + this.idx_y;
        this.node.name = this.myName;
        this.mySprite.spriteFrame = ResMgr_1.default.getCardSprite(0);
        this.node.opacity = 0;
        this.addEvent();
      };
      BgElement.prototype.addEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      BgElement.prototype.onTouchStart = function(e) {
        cc.log("onTouchStart");
      };
      BgElement.prototype.onTouchEnd = function(e) {
        cc.log("onTouchEnd", GameData_1.GameData.arrayValue[this.myName]);
        if (!this.gameScript.canPlay()) return;
        0 == GameData_1.GameData.arrayValue[this.myName] && this.addGameElement();
      };
      BgElement.prototype.onTouchCancel = function(e) {
        cc.log("onTouchCancel");
      };
      BgElement.prototype.addGameElement = function(focre) {
        void 0 === focre && (focre = false);
        this.gameScript.setGameStatus(GameConst_1.Status.anim);
        GameData_1.GameData.arrayValue[this.myName] = GameData_1.GameData.nextValue[0];
        this.myGameElement = cc.instantiate(this.gameElementPrefab);
        this.node.addChild(this.myGameElement);
        var elementScript = this.myGameElement.getComponent(GameElement_1.default);
        elementScript.init(this.idx_x, this.idx_y, this.gameScript, focre);
        elementScript.playShow();
        this.gameScript.addElement();
      };
      BgElement.prototype.playShow = function() {
        this.node.runAction(cc.fadeIn(.5));
      };
      __decorate([ property(cc.Sprite) ], BgElement.prototype, "mySprite", void 0);
      __decorate([ property(cc.Prefab) ], BgElement.prototype, "gameElementPrefab", void 0);
      BgElement = __decorate([ ccclass ], BgElement);
      return BgElement;
    }(cc.Component);
    exports.default = BgElement;
    cc._RF.pop();
  }, {
    "../GameConst": "GameConst",
    "../GameData": "GameData",
    "../ResMgr": "ResMgr",
    "./GameElement": "GameElement"
  } ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22efdADqeJI474nkHel5LKh", "EventManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager = function(_super) {
      __extends(EventManager, _super);
      function EventManager() {
        return _super.call(this) || this;
      }
      Object.defineProperty(EventManager, "instance", {
        get: function() {
          return EventManager.eventManager ? EventManager.eventManager : EventManager.eventManager = new EventManager();
        },
        enumerable: true,
        configurable: true
      });
      EventManager.prototype.registerEvent = function(msg, callback, target, useCapture) {
        void 0 === useCapture && (useCapture = true);
        this.on(msg, callback, target, useCapture);
      };
      EventManager.prototype.unregisterEvent = function(msg, callback, target, useCapture) {
        void 0 === useCapture && (useCapture = true);
        this.off(msg, callback, target, useCapture);
      };
      EventManager.prototype.postMsg = function(msg, data, useCapture) {
        void 0 === data && (data = []);
        void 0 === useCapture && (useCapture = true);
        var e = new cc.Event.EventCustom(msg, useCapture);
        e.detail = data;
        this.dispatchEvent(e);
      };
      EventManager.releaseSelf = function() {
        EventManager.eventManager = null;
      };
      EventManager.eventManager = null;
      return EventManager;
    }(cc.Node);
    exports.default = EventManager;
    cc._RF.pop();
  }, {} ],
  FirebaseMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab9f72wNhtANaJEvjmZV/aJ", "FirebaseMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Firebase = function(_super) {
      __extends(Firebase, _super);
      function Firebase() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Firebase = __decorate([ ccclass ], Firebase);
      return Firebase;
    }(cc.Component);
    exports.default = Firebase;
    cc._RF.pop();
  }, {} ],
  GameConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ca12kkMV1G3r/wloV1jFUz", "GameConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConst = function() {
      function GameConst() {}
      GameConst.ElementPlist = "GameScene/card";
      GameConst.StartMerge = "StartMerge";
      GameConst.EndMerge = "EndMerge";
      GameConst.nextLength = 2;
      GameConst.randRange = 60;
      GameConst.startMax = 2;
      GameConst.test = false;
      return GameConst;
    }();
    exports.GameConst = GameConst;
    var Status;
    (function(Status) {
      Status[Status["none"] = 0] = "none";
      Status[Status["init"] = 1] = "init";
      Status[Status["start"] = 2] = "start";
      Status[Status["play"] = 3] = "play";
      Status[Status["anim"] = 4] = "anim";
      Status[Status["merge"] = 5] = "merge";
      Status[Status["end"] = 6] = "end";
    })(Status = exports.Status || (exports.Status = {}));
    var CardType;
    (function(CardType) {
      CardType[CardType["destoryAll"] = -2] = "destoryAll";
      CardType[CardType["destory"] = -1] = "destory";
      CardType[CardType["back"] = 0] = "back";
    })(CardType = exports.CardType || (exports.CardType = {}));
    cc._RF.pop();
  }, {} ],
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55ac3po9Z9OlaFzN37tbxD3", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConst_1 = require("./GameConst");
    var GameData = function() {
      function GameData() {}
      GameData.init = function() {
        this.nextValue = [];
        this.currMaxValue = GameConst_1.GameConst.startMax;
        this.currMinValue = 1;
        this.arrayValue = [];
        this.useCount = 0;
        this.currStep = 0;
        this.score = 0;
        this.numberCountArray = [];
        this.mergeNumberArray = [];
        this.mergeCountArray = [];
        this.destoryStepArray = [];
      };
      GameData.AddNumberCount = function(value) {
        this.numberCountArray[value] ? this.numberCountArray[value]++ : this.numberCountArray[value] = 1;
      };
      GameData.GetNumberCount = function(value) {
        if (this.numberCountArray[value]) return this.numberCountArray[value];
        return 0;
      };
      GameData.AddMergeNumber = function(value) {
        this.mergeNumberArray[value] ? this.mergeNumberArray[value]++ : this.mergeNumberArray[value] = 1;
      };
      GameData.GetMergeNumber = function(value) {
        if (this.mergeNumberArray[value]) return this.mergeNumberArray[value];
        return 0;
      };
      GameData.AddMergeCount = function(value) {
        this.mergeCountArray[value] ? this.mergeCountArray[value]++ : this.mergeCountArray[value] = 1;
      };
      GameData.getValue = function(x, y) {
        var name = x + "_" + y;
        return GameData.arrayValue[name];
      };
      GameData.setValue = function(x, y, value) {
        var name = x + "_" + y;
        GameData.arrayValue[name] = value;
      };
      GameData.updateMaxValue = function(value) {
        this.currMaxValue = value;
      };
      GameData.spriteKind = 3;
      GameData.nextValue = [];
      GameData.currMaxValue = 2;
      GameData.currMinValue = 1;
      GameData.arrayValue = [];
      GameData.useCount = 0;
      GameData.currStep = 0;
      GameData.score = 0;
      GameData.numberCountArray = [];
      GameData.mergeNumberArray = [];
      GameData.mergeCountArray = [];
      GameData.destoryStepArray = [];
      return GameData;
    }();
    exports.GameData = GameData;
    cc._RF.pop();
  }, {
    "./GameConst": "GameConst"
  } ],
  GameElement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f0a6KuutdFrJpNZgjEjYwq", "GameElement");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResMgr_1 = require("../ResMgr");
    var GameConst_1 = require("../GameConst");
    var GameData_1 = require("../GameData");
    var EventManager_1 = require("../EventManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameElement = function(_super) {
      __extends(GameElement, _super);
      function GameElement() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animTime = .25;
        _this.idx_x = -1;
        _this.idx_y = -1;
        _this.myPos = cc.v2(0, 0);
        _this.myName = "";
        _this.myValue = -1;
        _this.tmpMyValue = -1;
        _this.gameScript = null;
        _this.toPos = cc.v2(0, 0);
        _this.mergeCount = 0;
        _this.tmpMergeCount = 0;
        _this.isSpecialCard = false;
        _this.dir4 = [ cc.v2(-1, 0), cc.v2(0, 1), cc.v2(1, 0), cc.v2(0, -1) ];
        _this.dir8 = [ cc.v2(-1, 0), cc.v2(-1, 1), cc.v2(0, 1), cc.v2(1, 1), cc.v2(1, 0), cc.v2(1, -1), cc.v2(0, -1), cc.v2(-1, -1) ];
        _this.mySprite = null;
        return _this;
      }
      GameElement.prototype.start = function() {};
      GameElement.prototype.init = function(x, y, game, force) {
        void 0 === force && (force = false);
        this.idx_x = x;
        this.idx_y = y;
        this.gameScript = game;
        this.myName = x + "_" + y;
        this.myPos = cc.v2(x, y);
        this.myValue = GameData_1.GameData.getValue(x, y);
        this.tmpMyValue = this.myValue;
        this.isSpecialCard = this.myValue == GameConst_1.CardType.destory || this.myValue == GameConst_1.CardType.destoryAll;
        this.mySprite.spriteFrame = ResMgr_1.default.getCardSprite(this.myValue);
        this.node.opacity = 0;
        GameData_1.GameData.AddNumberCount(this.myValue);
        if (!force) if (this.isSpecialCard) {
          var data = this.myValue == GameConst_1.CardType.destory ? GameData_1.GameData.currStep : 10 * GameData_1.GameData.currStep;
          GameData_1.GameData.destoryStepArray.push(data);
        } else GameData_1.GameData.currStep++;
        this.addEvent();
      };
      GameElement.prototype.addEvent = function() {
        EventManager_1.default.instance.registerEvent(GameConst_1.GameConst.StartMerge, this.startMerge, this);
        EventManager_1.default.instance.registerEvent(GameConst_1.GameConst.EndMerge, this.endMerge, this);
      };
      GameElement.prototype.onDestroy = function() {
        EventManager_1.default.instance.unregisterEvent(GameConst_1.GameConst.StartMerge, this.startMerge, this);
        EventManager_1.default.instance.unregisterEvent(GameConst_1.GameConst.EndMerge, this.endMerge, this);
      };
      GameElement.prototype.playShow = function() {
        this.node.runAction(cc.sequence(cc.fadeIn(this.animTime), cc.callFunc(function() {
          this.tryMerge();
        }.bind(this))));
      };
      GameElement.prototype.playHide = function() {
        this.gameScript.removeElement();
        var moveX = (this.toPos.x - this.myPos.x) * this.gameScript.width;
        var moveY = (this.toPos.y - this.myPos.y) * this.gameScript.height;
        this.node.runAction(cc.sequence(cc.moveBy(this.animTime, cc.v2(moveX, moveY)), cc.callFunc(function() {
          EventManager_1.default.instance.postMsg(GameConst_1.GameConst.EndMerge, [ this.toPos ]);
          this.node.destroy();
        }.bind(this))));
      };
      GameElement.prototype.tryMerge = function() {
        this.gameScript.setGameStatus(GameConst_1.Status.merge);
        var dirPos = this.myValue == GameConst_1.CardType.destoryAll ? this.dir8 : this.dir4;
        var _loop_1 = function(idx) {
          var dir = dirPos[idx];
          var newPos = cc.v2(this_1.idx_x + dir.x, this_1.idx_y + dir.y);
          if (newPos.x >= 0 && newPos.x < this_1.gameScript.row && newPos.y >= 0 && newPos.y < this_1.gameScript.col && this_1.compare(newPos.x, newPos.y)) {
            var animTime = this_1.isSpecialCard ? this_1.animTime : this_1.animTime * this_1.mergeCount;
            this_1.node.runAction(cc.sequence(cc.delayTime(animTime), cc.callFunc(function() {
              EventManager_1.default.instance.postMsg(GameConst_1.GameConst.StartMerge, [ newPos, this.myPos ]);
            }.bind(this_1))));
            this_1.mergeCount++;
          }
        };
        var this_1 = this;
        for (var idx = 0; idx < dirPos.length; idx++) _loop_1(idx);
        this.tmpMyValue = this.myValue;
        this.tmpMergeCount = this.mergeCount;
        cc.log("a = ", this.mergeCount);
        if (0 == this.mergeCount) {
          if (this.isSpecialCard) {
            GameData_1.GameData.setValue(this.idx_x, this.idx_y, 0);
            this.gameScript.removeElement();
            this.node.destroy();
          }
          this.gameScript.setGameStatus(GameConst_1.Status.play);
          this.gameScript.checkGameover();
        } else this.isSpecialCard || GameData_1.GameData.AddMergeCount(this.mergeCount);
      };
      GameElement.prototype.compare = function(x, y) {
        var _value = GameData_1.GameData.getValue(x, y);
        if (_value == this.myValue) return true;
        if (this.isSpecialCard && _value != GameConst_1.CardType.back) return true;
        return false;
      };
      GameElement.prototype.startMerge = function(e) {
        cc.log("s", e.target.myName);
        var pos = cc.v2(e.detail[0]);
        if (pos.x == this.idx_x && pos.y == this.idx_y) {
          GameData_1.GameData.setValue(this.idx_x, this.idx_y, 0);
          this.toPos = cc.v2(e.detail[1]);
          this.playHide();
        }
      };
      GameElement.prototype.endMerge = function(e) {
        cc.log("e", e.target.myName);
        var pos = cc.v2(e.detail[0]);
        if (pos.x == this.idx_x && pos.y == this.idx_y) if (this.isSpecialCard) {
          this.mergeCount--;
          0 == this.mergeCount && this.tryMerge();
        } else {
          this.myValue += 1;
          GameData_1.GameData.setValue(this.idx_x, this.idx_y, this.myValue);
          this.mySprite.spriteFrame = ResMgr_1.default.getCardSprite(this.myValue);
          this.mergeCount--;
          if (0 == this.mergeCount) {
            GameData_1.GameData.score += this.tmpMyValue * this.tmpMergeCount * this.myValue;
            this.gameScript.updateScore();
            cc.log("score = ", this.tmpMyValue * this.tmpMergeCount * this.myValue);
            GameData_1.GameData.AddMergeNumber(this.myValue);
            this.tryMerge();
          }
          this.myValue > GameData_1.GameData.currMaxValue && GameData_1.GameData.updateMaxValue(this.myValue);
        }
      };
      GameElement.prototype.showScore = function() {};
      __decorate([ property(cc.Sprite) ], GameElement.prototype, "mySprite", void 0);
      GameElement = __decorate([ ccclass ], GameElement);
      return GameElement;
    }(cc.Component);
    exports.default = GameElement;
    cc._RF.pop();
  }, {
    "../EventManager": "EventManager",
    "../GameConst": "GameConst",
    "../GameData": "GameData",
    "../ResMgr": "ResMgr"
  } ],
  GameLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dea7dOxbnxDRa2Pmk9ddq1K", "GameLogic");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./GameData");
    var GameConst_1 = require("./GameConst");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameLogic = function(_super) {
      __extends(GameLogic, _super);
      function GameLogic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextDestoryStep = 0;
        _this.showDestoryAllTimes = 0;
        _this.destoryTimes = 0;
        return _this;
      }
      GameLogic.prototype.start = function() {};
      GameLogic.prototype.init = function() {
        this.difficultValue = GameConst_1.GameConst.randRange;
        GameData_1.GameData.nextValue = [];
        for (var idx = 0; idx < GameConst_1.GameConst.nextLength; idx++) this.pushNext();
        this.destoryTimes = 0;
        this.nextDestoryStep = this.getRandomRange(55, 70);
        this.showDestoryAllTimes = this.getRandomRange(3, 5);
        console.log("NEXTALL=", this.nextDestoryStep, this.showDestoryAllTimes);
      };
      GameLogic.prototype.generateNext = function() {
        if (GameData_1.GameData.currStep > 0 && GameData_1.GameData.currStep >= this.nextDestoryStep) {
          if (this.destoryTimes >= this.showDestoryAllTimes) {
            this.nextDestoryStep = GameData_1.GameData.currStep + this.getRandomRange(45, 65);
            this.showDestoryAllTimes = this.destoryTimes + this.getRandomRange(3, 5);
            this.destoryTimes++;
            console.log("NEXT=", this.nextDestoryStep, this.showDestoryAllTimes, this.destoryTimes);
            return GameConst_1.CardType.destoryAll;
          }
          this.nextDestoryStep = GameData_1.GameData.currStep + this.getRandomRange(30, 50);
          this.destoryTimes++;
          console.log("NEXT=", this.nextDestoryStep, this.destoryTimes);
          return GameConst_1.CardType.destory;
        }
        var next = GameData_1.GameData.currMinValue - 1;
        var rand = 0;
        do {
          rand = this.getRandomRange(0, 100);
          cc.log("R=", rand);
          next++;
        } while (rand >= this.difficultValue && next < GameData_1.GameData.currMaxValue);
        return next;
      };
      GameLogic.prototype.popNext = function() {
        return GameData_1.GameData.nextValue.shift();
      };
      GameLogic.prototype.pushNext = function() {
        GameData_1.GameData.nextValue.push(this.generateNext());
      };
      GameLogic.prototype.getRandom = function(max, start) {
        void 0 === start && (start = 0);
        return Math.floor(Math.random() * max) + start;
      };
      GameLogic.prototype.getRandomRange = function(min, max) {
        var rand = min + Math.floor(Math.random() * (max - min + 1));
        cc.log("Rand = ", rand, min, max);
        return rand;
      };
      GameLogic = __decorate([ ccclass ], GameLogic);
      return GameLogic;
    }(cc.Component);
    exports.default = GameLogic;
    cc._RF.pop();
  }, {
    "./GameConst": "GameConst",
    "./GameData": "GameData"
  } ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1016UnLGBCGqrR3ZYQP0Hk", "GameScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResMgr_1 = require("./ResMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Status;
    (function(Status) {
      Status[Status["none"] = 0] = "none";
      Status[Status["init"] = 1] = "init";
      Status[Status["start"] = 2] = "start";
      Status[Status["play"] = 3] = "play";
      Status[Status["merge"] = 4] = "merge";
      Status[Status["end"] = 5] = "end";
    })(Status || (Status = {}));
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.row = 5;
        _this.col = 5;
        _this.width = 137;
        _this.height = 185;
        _this.spacing = 5;
        _this.limitSize = 475;
        _this.animTime = .2;
        _this.UINode = null;
        _this.GameNode = null;
        _this.data = {};
        _this.info = [];
        _this.max = 1;
        _this.useCount = 0;
        _this.mergeElement = [];
        _this.spriteType = 3;
        _this.gameStatus = Status.none;
        _this.btn_node = [];
        return _this;
      }
      GameScene.prototype.onLoad = function() {
        cc.loader.loadResDir("GameScene", function(completedCount, totalCount, item) {}, function(err, prefab) {
          if (err) {
            cc.log(err);
            return;
          }
          this.gameStatus = Status.init;
        }.bind(this));
      };
      GameScene.prototype.start = function() {
        for (var idx = 0; idx < this.btn_node.length; idx++) this.btn_node[idx].on(cc.Node.EventType.TOUCH_END, this.select, this);
      };
      GameScene.prototype.init = function() {
        this.gameStatus = Status.start;
        this.node.removeAllChildren();
        this.initUI();
        this.initData();
        this.updateUI();
        this.GameNode.scale = this.limitSize / (this.width * this.row);
      };
      GameScene.prototype.initUI = function() {
        this.UINode = new cc.Node();
        this.UINode.name = "UINode";
        this.node.addChild(this.UINode);
        for (var idx = 0; idx < 2; idx++) {
          var nextNode = new cc.Node();
          nextNode.name = "Next" + idx;
          this.UINode.addChild(nextNode);
          var sprite = nextNode.addComponent(cc.Sprite);
          sprite.spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_4_13" + idx);
          var scale = .5;
          nextNode.scale = scale;
          nextNode.setPosition(-cc.winSize.width / 2 + this.width * (idx + 1) * scale, cc.winSize.height / 2 - this.height * scale);
        }
        this.GameNode = new cc.Node();
        this.GameNode.name = "GameNode";
        this.node.addChild(this.GameNode);
        for (var i = 0; i < this.row; i++) for (var j = 0; j < this.col; j++) this.createBgItem(i, j);
      };
      GameScene.prototype.select = function(e) {
        if (this.gameStatus == Status.init || this.gameStatus == Status.end || this.gameStatus == Status.play) {
          var target = e.target;
          var name = target.name;
          var size = Number(name.split("_")[1]);
          this.row = size;
          this.col = size;
          this.init();
        }
      };
      GameScene.prototype.initData = function() {
        this.max = 1;
        this.useCount = 0;
        this.info = [];
        for (var idx = 0; idx < 2; idx++) this.info.push(this.generateNext());
        for (var i = 0; i < this.row; i++) for (var j = 0; j < this.col; j++) this.data[i + "_" + j] = 0;
      };
      GameScene.prototype.generateNext = function() {
        var next = 0;
        var rand = 0;
        do {
          rand = 100 * Math.random();
          next++;
        } while (rand >= 60 && next < this.max);
        return next;
      };
      GameScene.prototype.updateUI = function() {
        for (var idx = 0; idx < 2; idx++) this.UINode.getChildByName("Next" + idx).getComponent(cc.Sprite).spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_" + this.spriteType + "_" + this.info[idx]);
      };
      GameScene.prototype.createBgItem = function(x, y) {
        var item = new cc.Node();
        var posX = (x + .5 - this.row / 2) * (this.width + this.spacing);
        var posY = (y + .5 - this.col / 2) * (this.height + this.spacing);
        item.name = x + "_" + y;
        item.width = this.width;
        item.height = this.height;
        item.setPosition(posX, posY);
        var sprite = item.addComponent(cc.Sprite);
        sprite.spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_back");
        this.GameNode.addChild(item);
        item.opacity = 0;
        item.scale = 1.5;
        item.runAction(cc.sequence(cc.delayTime(.05 * (y * this.row + x)), cc.fadeIn(.2), cc.scaleTo(.2, 1), cc.callFunc(function() {
          x == this.row - 1 && y == this.col - 1 && (this.gameStatus = Status.play);
        }.bind(this))));
        item.on(cc.Node.EventType.TOUCH_END, this.mounseUp, this);
        item.on(cc.Node.EventType.TOUCH_START, this.mounseDown, this);
        item.on(cc.Node.EventType.TOUCH_CANCEL, this.cancel, this);
      };
      GameScene.prototype.createElementItem = function(parent, value) {
        var item = new cc.Node();
        item.width = this.width;
        item.height = this.height;
        var sprite = item.addComponent(cc.Sprite);
        sprite.spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_" + this.spriteType + "_" + value);
        parent.addChild(item);
        item.name = "element";
        return item;
      };
      GameScene.prototype.cancel = function() {
        for (var idx = 0; idx < this.mergeElement.length; idx++) {
          var _name = this.mergeElement[idx];
          var element = this.GameNode.getChildByName(_name).getChildByName("element");
          element.stopAllActions();
        }
      };
      GameScene.prototype.mounseDown = function(e) {
        if (this.gameStatus != Status.play) return;
        cc.log("down", e.target.name);
        var target = e.target;
        var name = target.name;
        this.preview(name, this.info[0]);
      };
      GameScene.prototype.mounseUp = function(e) {
        if (this.gameStatus != Status.play) return;
        cc.log("up", e.target.name);
        for (var idx = 0; idx < this.mergeElement.length; idx++) {
          var _name = this.mergeElement[idx];
          var label = this.GameNode.getChildByName(_name).getChildByName("element");
          label.stopAllActions();
        }
        this.updateGameUI(e.target);
      };
      GameScene.prototype.updateGameUI = function(target) {
        var name = target.name;
        if (0 == this.data[name]) {
          this.useCount++;
          var value = this.info.shift();
          this.data[name] = value;
          var element = target.getChildByName("element");
          element ? element.getComponent(cc.Sprite).spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_" + this.spriteType + "_" + value) : element = this.createElementItem(target, value);
          element.runAction(cc.fadeIn(this.animTime));
          element.scale = 1;
          this.merge(name, value);
          this.info.push(this.generateNext());
          this.updateUI();
        }
      };
      GameScene.prototype.preview = function(name, value) {
        this.mergeElement = this.getMergeElement(name, value);
        for (var idx = 0; idx < this.mergeElement.length; idx++) {
          var _name = this.mergeElement[idx];
          var element = this.GameNode.getChildByName(_name).getChildByName("element");
          element && element.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .9), cc.scaleTo(.1, 1.1))));
        }
      };
      GameScene.prototype.getMergeElement = function(name, value) {
        var pos = name.split("_");
        var mergeElement = [];
        if (pos.length > 1) {
          var x = Number(pos[0]);
          var y = Number(pos[1]);
          if (x > 0) {
            var ret = this.compare(x - 1, y, value);
            "" != ret && mergeElement.push(ret);
          }
          if (x < this.row - 1) {
            var ret = this.compare(x + 1, y, value);
            "" != ret && mergeElement.push(ret);
          }
          if (y > 0) {
            var ret = this.compare(x, y - 1, value);
            "" != ret && mergeElement.push(ret);
          }
          if (y < this.col - 1) {
            var ret = this.compare(x, y + 1, value);
            "" != ret && mergeElement.push(ret);
          }
        }
        return mergeElement;
      };
      GameScene.prototype.merge = function(name, value) {
        this.mergeElement = this.getMergeElement(name, value);
        this.mergeElement.length > 0 && (this.gameStatus = Status.merge);
        var _loop_1 = function(idx) {
          var _name = this_1.mergeElement[idx];
          this_1.data[_name] = 0;
          this_1.useCount--;
          var element = this_1.GameNode.getChildByName(_name).getChildByName("element");
          element.scale = 1;
          value += 1;
          var _value = value;
          element.stopAllActions();
          element.runAction(cc.sequence(cc.delayTime(this_1.animTime * (idx + 1)), cc.fadeOut(.1), cc.callFunc(function() {
            this.GameNode.getChildByName(name).getChildByName("element").getComponent(cc.Sprite).spriteFrame = ResMgr_1.default.getAtlasSpriteFrame("GameScene/card", "card_" + this.spriteType + "_" + _value);
            _value == value && (this.gameStatus = Status.play);
          }.bind(this_1))));
          this_1.data[name] = value;
          this_1.max = value > this_1.max ? value : this_1.max;
        };
        var this_1 = this;
        for (var idx = 0; idx < this.mergeElement.length; idx++) _loop_1(idx);
        if (this.mergeElement.length > 0) {
          this.mergeElement = this.getMergeElement(name, value);
          this.GameNode.getChildByName(name).runAction(cc.sequence(cc.delayTime(this.animTime * (this.mergeElement.length + 1)), cc.callFunc(function() {
            this.merge(name, value);
          }.bind(this))));
        }
        if (this.useCount == this.row * this.col) {
          this.gameStatus = Status.end;
          this.showScore();
        }
      };
      GameScene.prototype.compare = function(x, y, value) {
        var name = x + "_" + y;
        if (0 != value && this.data[name] == value) return name;
        return "";
      };
      GameScene.prototype.showScore = function() {
        var score = 0;
        for (var i = 0; i < this.row; i++) {
          var _loop_2 = function(j) {
            var name = i + "_" + j;
            var _score = Math.pow(2, this_2.data[name]);
            score += _score;
            var node = this_2.GameNode.getChildByName(name);
            node.runAction(cc.sequence(cc.delayTime(.2 * (i * this_2.row + j)), cc.callFunc(function() {
              var label = this.createScoreItem(_score);
              label.setPosition(node.getPosition());
              this.GameNode.addChild(label);
              label.runAction(cc.moveBy(.3, cc.v2(0, 85)));
            }.bind(this_2))));
          };
          var this_2 = this;
          for (var j = 0; j < this.col; j++) _loop_2(j);
        }
        var scoreNode = new cc.Node();
        scoreNode.setPosition(0, cc.winSize.height / 2 - 150);
        var label = scoreNode.addComponent(cc.Label);
        label.string = score.toString();
        this.UINode.addChild(scoreNode);
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {}.bind(this))));
      };
      GameScene.prototype.restart = function() {
        this.init();
      };
      GameScene.prototype.createScoreItem = function(value) {
        var node = new cc.Node();
        node.color = cc.color(255, 0, 0);
        var label = node.addComponent(cc.Label);
        label.string = "+" + value;
        return node;
      };
      __decorate([ property(cc.Node) ], GameScene.prototype, "btn_node", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "./ResMgr": void 0
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8076Qnys9AOpyVw4sjDATd", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./GameData");
    var BgElement_1 = require("./Element/BgElement");
    var GameConst_1 = require("./GameConst");
    var ResMgr_1 = require("./ResMgr");
    var GameLogic_1 = require("./GameLogic");
    var AdManager_1 = require("./Tool/AdManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.GameNode = null;
        _this.StepLabel = null;
        _this.ScoreLabel = null;
        _this.EndInfoLabel = null;
        _this.btn_node = [];
        _this.BgElementPrefab = null;
        _this.NextNode = [];
        _this.gameLogicScript = null;
        _this.restartBtn = null;
        _this.row = 3;
        _this.col = 3;
        _this.width = 137;
        _this.height = 185;
        _this.spacing = 5;
        _this.limitSize = 450;
        _this.gameStatus = GameConst_1.Status.start;
        return _this;
      }
      Game.prototype.onLoad = function() {
        this.setBtnEnable(false);
        cc.loader.loadResDir("GameScene", function(completedCount, totalCount, item) {}, function(err, prefab) {
          if (err) {
            cc.log(err);
            return;
          }
          this.setBtnEnable(true);
        }.bind(this));
        function GetRequest() {
          var url = location.search;
          var theRequest = new Object();
          if (-1 != url.indexOf("?")) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
          return theRequest;
        }
        var Request = new Object();
        Request = GetRequest();
        GameConst_1.GameConst.test = 1 == Request["test"];
        AdManager_1.default.getInstance().showBannerAd();
      };
      Game.prototype.start = function() {
        this.GameNode.scale = this.limitSize / (this.width * this.row);
        this.addEvent();
        this.setBtnEnable(false);
      };
      Game.prototype.startGame = function() {
        this.EndInfoLabel.node.active = false;
        for (var idx = 0, max = this.GameNode.childrenCount; idx < max; idx++) this.GameNode.children[idx].destroy();
        GameData_1.GameData.init();
        this.gameLogicScript.init();
        var _loop_1 = function(i) {
          var _loop_2 = function(j) {
            var name = i + "_" + j;
            GameData_1.GameData.arrayValue[name] = 0;
            this_1.node.runAction(cc.sequence(cc.delayTime(.1 * (3 * j + i)), cc.callFunc(function() {
              this.createBgItem(i, j);
              if (i == this.row - 1 && j == this.col - 1) {
                this.gameStatus = GameConst_1.Status.play;
                this.updateUI();
              }
            }.bind(this_1))));
          };
          for (var j = 0; j < this_1.col; j++) _loop_2(j);
        };
        var this_1 = this;
        for (var i = 0; i < this.row; i++) _loop_1(i);
        this.StepLabel.string = GameData_1.GameData.currStep + "";
      };
      Game.prototype.addEvent = function() {
        this.restartBtn.node.on(cc.Node.EventType.TOUCH_END, this.restart, this);
        for (var idx = 0; idx < this.btn_node.length; idx++) this.btn_node[idx].node.on(cc.Node.EventType.TOUCH_END, this.select, this);
      };
      Game.prototype.increaseElement = function() {
        GameData_1.GameData.useCount++;
      };
      Game.prototype.decreaseElement = function() {
        GameData_1.GameData.useCount--;
      };
      Game.prototype.addElement = function() {
        this.increaseElement();
        this.gameLogicScript.popNext();
        this.gameLogicScript.pushNext();
        this.updateUI();
      };
      Game.prototype.removeElement = function() {
        this.decreaseElement();
      };
      Game.prototype.checkGameover = function() {
        cc.log("c", GameData_1.GameData.useCount);
        if (this.row * this.col == GameData_1.GameData.useCount) {
          cc.log("game over");
          this.gameOver();
          this.gameStatus = GameConst_1.Status.end;
        }
      };
      Game.prototype.gameOver = function() {
        this.setBtnEnable(true);
        this.EndInfoLabel.node.active = true;
        var str = "MergeCount\n";
        GameData_1.GameData.mergeCountArray.forEach(function(item, index) {
          str = str + index + ":" + item + "\n";
        });
        str += "NumberCount\n";
        for (var idx = -2; idx < 13; idx++) (GameData_1.GameData.GetMergeNumber(idx) > 0 || GameData_1.GameData.GetNumberCount(idx) > 0) && (str = str + idx + ":" + GameData_1.GameData.GetMergeNumber(idx) + "/" + GameData_1.GameData.GetNumberCount(idx) + "\n");
        str += "Step\n";
        for (var idx = 0; idx < GameData_1.GameData.destoryStepArray.length; idx++) str = str + GameData_1.GameData.destoryStepArray[idx] + ",";
        this.EndInfoLabel.string = str;
        cc.log(str);
        if (cc.sys.platform == cc.sys.MOBILE_BROWSER || cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
          var save = function(e) {
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
          }.bind(this);
          document.addEventListener("copy", save);
          document.execCommand("copy");
          document.removeEventListener("copy", save);
        }
      };
      Game.prototype.restart = function() {
        this.setBtnEnable(false);
        this.startGame();
      };
      Game.prototype.setBtnEnable = function(enable) {
        for (var idx = 0; idx < this.btn_node.length; idx++) {
          this.btn_node[idx].node.active = enable;
          this.btn_node[idx].interactable = enable;
        }
      };
      Game.prototype.select = function(e) {
        if (this.gameStatus != GameConst_1.Status.play) {
          var target = e.target;
          var name = target.name;
          var size = Number(name.split("_")[1]);
          this.row = size;
          this.col = size;
          this.GameNode.scale = this.limitSize / (this.width * this.row);
          this.restart();
        }
      };
      Game.prototype.createBgItem = function(x, y) {
        var bgElement = cc.instantiate(this.BgElementPrefab);
        var posX = (x + .5 - this.row / 2) * (this.width + this.spacing);
        var posY = (y + .5 - this.col / 2) * (this.height + this.spacing);
        bgElement.setPosition(posX, posY);
        this.GameNode.addChild(bgElement);
        var script = bgElement.getComponent(BgElement_1.default);
        script.init(x, y, this);
        script.playShow();
      };
      Game.prototype.getNextValue = function() {
        return this.gameLogicScript.popNext();
      };
      Game.prototype.setGameStatus = function(status) {
        this.gameStatus = status;
      };
      Game.prototype.canPlay = function() {
        return this.gameStatus == GameConst_1.Status.play;
      };
      Game.prototype.updateUI = function() {
        this.updateStepUI();
        this.updateNextUI();
        this.updateScore();
      };
      Game.prototype.updateScore = function() {
        this.ScoreLabel.string = GameData_1.GameData.score + "";
      };
      Game.prototype.updateStepUI = function() {
        this.StepLabel.string = GameData_1.GameData.currStep + "";
      };
      Game.prototype.updateNextUI = function() {
        for (var idx = 0; idx < this.NextNode.length; idx++) this.NextNode[idx].getComponent(cc.Sprite).spriteFrame = ResMgr_1.default.getCardSprite(GameData_1.GameData.nextValue[idx]);
      };
      Game.prototype.randomInitElement = function() {
        var array = [];
        for (var idx = 0; idx < this.row; idx++) array.push(idx);
        var x = Math.floor(Math.random() * this.row);
        var y = Math.floor(Math.random() * this.col);
      };
      __decorate([ property(cc.Node) ], Game.prototype, "GameNode", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "StepLabel", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "ScoreLabel", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "EndInfoLabel", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "btn_node", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "BgElementPrefab", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "NextNode", void 0);
      __decorate([ property(GameLogic_1.default) ], Game.prototype, "gameLogicScript", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "restartBtn", void 0);
      __decorate([ property(cc.Integer) ], Game.prototype, "row", void 0);
      __decorate([ property(cc.Integer) ], Game.prototype, "col", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./Element/BgElement": "BgElement",
    "./GameConst": "GameConst",
    "./GameData": "GameData",
    "./GameLogic": "GameLogic",
    "./ResMgr": "ResMgr",
    "./Tool/AdManager": "AdManager"
  } ],
  ResMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0672ejj2H5NFrgkhM9AJ8of", "ResMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData_1 = require("./GameData");
    var GameConst_1 = require("./GameConst");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResMgr = function(_super) {
      __extends(ResMgr, _super);
      function ResMgr() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ResMgr_1 = ResMgr;
      ResMgr.getSingleSpriteFrame = function(SpriteFrame) {
        return cc.loader.getRes(SpriteFrame, cc.SpriteFrame);
      };
      ResMgr.getAtlasSpriteFrame = function(spriteAtlas, SpriteFrame) {
        var atlas = cc.loader.getRes(spriteAtlas, cc.SpriteAtlas);
        return atlas.getSpriteFrame(SpriteFrame);
      };
      ResMgr.getCardSprite = function(value) {
        var spriteFrame = "";
        spriteFrame = GameConst_1.GameConst.test ? "card_" + Math.floor(4 * Math.random()) + "_" + value : "card_" + GameData_1.GameData.spriteKind + "_" + value;
        value == GameConst_1.CardType.destory ? spriteFrame = "card_4_14" : value == GameConst_1.CardType.destoryAll ? spriteFrame = "card_4_15" : value == GameConst_1.CardType.back && (spriteFrame = "card_back");
        return ResMgr_1.getAtlasSpriteFrame(GameConst_1.GameConst.ElementPlist, spriteFrame);
      };
      var ResMgr_1;
      ResMgr = ResMgr_1 = __decorate([ ccclass ], ResMgr);
      return ResMgr;
    }(cc.Component);
    exports.default = ResMgr;
    cc._RF.pop();
  }, {
    "./GameConst": "GameConst",
    "./GameData": "GameData"
  } ],
  "use_v2.0.x_cc.Toggle_event": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cf59PO3mdHbaUFst8VCwiX", "use_v2.0.x_cc.Toggle_event");
    "use strict";
    cc.Toggle && (cc.Toggle._triggerEventInScript_check = true);
    cc._RF.pop();
  }, {} ]
}, {}, [ "AdView", "AnimManager", "BgElement", "GameElement", "EventManager", "Game", "GameConst", "GameData", "GameLogic", "GameScene", "ResMgr", "AdManager", "FirebaseMgr", "use_v2.0.x_cc.Toggle_event" ]);