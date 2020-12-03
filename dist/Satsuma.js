(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Satsuma"] = factory();
	else
		root["Satsuma"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Satsuma": () => /* binding */ Satsuma
});

;// CONCATENATED MODULE: ./src/Translator.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var max = function max(a, b) {
  return a > b ? b : a;
};

var Translator = /*#__PURE__*/function () {
  function Translator() {
    _classCallCheck(this, Translator);

    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "scale", 1);

    _defineProperty(this, "tempX", 0);

    _defineProperty(this, "tempY", 0);

    _defineProperty(this, "tempScale", 1);

    _defineProperty(this, "MAX_SCALE", 4);

    _defineProperty(this, "startScreenX", 0);

    _defineProperty(this, "startScreenY", 0);
  }

  _createClass(Translator, [{
    key: "start",
    value: function start(_start) {
      this.startScreenX = _start.screenX;
      this.startScreenY = _start.screenY;
    }
  }, {
    key: "update",
    value: function update(_update) {
      if (_update.screenX !== 0 && _update.screenY !== 0) {
        this.deltaX = _update.screenX - this.startScreenX;
        this.deltaY = _update.screenY - this.startScreenY;
        this.tempX = this.x + this.deltaX;
        this.tempY = this.y + this.deltaY;
      }

      if (_update.scale !== 1) {
        var scale = max(this.scale * _update.scale, this.MAX_SCALE);
        this.tempScale = scale;
      }
    }
  }, {
    key: "done",
    value: function done() {
      this.x = this.tempX;
      this.y = this.tempY;
      this.scale = this.tempScale;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.tempX = this.x;
      this.tempY = this.y;
      this.tempScale = this.scale;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return {
        x: this.x,
        y: this.y,
        scale: this.scale
      };
    }
  }, {
    key: "getTransform",
    value: function getTransform() {
      return "translate(".concat(this.tempX, "px, ").concat(this.tempY, "px) scale(").concat(this.tempScale, ")");
    }
  }]);

  return Translator;
}();


;// CONCATENATED MODULE: ./src/TranslatorUpdate.js
function TranslatorUpdate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TranslatorUpdate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TranslatorUpdate = function TranslatorUpdate(params) {
  TranslatorUpdate_classCallCheck(this, TranslatorUpdate);

  TranslatorUpdate_defineProperty(this, "scale", 1);

  TranslatorUpdate_defineProperty(this, "screenX", 0);

  TranslatorUpdate_defineProperty(this, "screenY", 0);

  var defaults = {
    scale: 1,
    screenX: 0,
    screenY: 0
  };
  params = Object.assign({}, defaults, params);
  this.scale = params.scale;
  this.screenX = params.screenX;
  this.screenY = params.screenY;
  Object.keys(params).forEach(function (key) {
    if (!(key in defaults)) {
      console.warn('Unknown key ' + key);
    }
  });
};


;// CONCATENATED MODULE: ./src/Satsuma.js
function Satsuma_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Satsuma_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Satsuma_createClass(Constructor, protoProps, staticProps) { if (protoProps) Satsuma_defineProperties(Constructor.prototype, protoProps); if (staticProps) Satsuma_defineProperties(Constructor, staticProps); return Constructor; }

function Satsuma_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Satsuma = /*#__PURE__*/function () {
  function Satsuma(container, content) {
    Satsuma_classCallCheck(this, Satsuma);

    Satsuma_defineProperty(this, "container", void 0);

    Satsuma_defineProperty(this, "content", void 0);

    Satsuma_defineProperty(this, "active", false);

    Satsuma_defineProperty(this, "x", 0);

    Satsuma_defineProperty(this, "y", 0);

    Satsuma_defineProperty(this, "relX", 0);

    Satsuma_defineProperty(this, "relY", 0);

    Satsuma_defineProperty(this, "deltaX", 0);

    Satsuma_defineProperty(this, "deltaY", 0);

    Satsuma_defineProperty(this, "scale", 1);

    Satsuma_defineProperty(this, "el", undefined);

    Satsuma_defineProperty(this, "touchX", 0);

    Satsuma_defineProperty(this, "touchY", 0);

    Satsuma_defineProperty(this, "distance", 0);

    this.container = container;
    this.content = content;
    container.style.touchAction = 'none';
    container.style.overflow = 'hidden';
    this.addListeners();
    this.translator = new Translator(container, content);
  }

  Satsuma_createClass(Satsuma, [{
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.container.addEventListener('mousedown', function (ev) {
        _this.active = true;

        _this.drag(ev);

        ev.preventDefault();

        _this.translator.start({
          screenX: ev.screenX,
          screenY: ev.screenY
        });
      });
      this.container.addEventListener('touchstart', function (ev) {
        _this.active = true;

        _this.drag(ev); // keep initial pos of first touch for possible pinch calculation


        _this.touchX = ev.touches[0].screenX;
        _this.touchY = ev.touches[0].screenX; // if this is the start of the second touch, add second pos

        if (ev.touches.length > 1) {
          _this.translator.reset(); // calculate initial touch distance


          _this.distance = Math.sqrt(Math.pow(_this.touchX - ev.touches[1].screenX, 2) + Math.pow(_this.touchY - ev.touches[1].screenY, 2));
        }

        _this.translator.start({
          screenX: ev.touches[0].screenX,
          screenY: ev.touches[0].screenY
        });
      });
      document.addEventListener('touchmove', function (ev) {
        if (!_this.active) return;
        ev.preventDefault(); // if there is a second touch, this is a pinch

        if (ev.touches.length > 1) {
          // console.log('Second touch');
          // calculate scale
          var dist = _this.calcTouchDistance(ev.touches[0], ev.touches[1]);

          _this.translator.update(new TranslatorUpdate({
            scale: dist / _this.distance
          }));

          _this.drag(ev);

          return;
        } // this is a single touch pan


        _this.translator.update(new TranslatorUpdate({
          screenX: ev.touches[0].screenX,
          screenY: ev.touches[0].screenY
        }));

        _this.drag(ev);
      });
      document.addEventListener('mousemove', function (ev) {
        if (!_this.active) return;

        _this.translator.update(new TranslatorUpdate({
          screenX: ev.screenX,
          screenY: ev.screenY
        }));

        _this.drag(ev);
      });
      document.addEventListener('mouseup', function (ev) {
        _this.active = false;

        _this.translator.done();
      });
      document.addEventListener('touchend', function (ev) {
        _this.active = false;

        _this.translator.done();

        _this.touchX = 0;
        _this.touchY = 0;
        _this.distance = 0;
      });
      this.container.addEventListener('wheel', function (ev) {
        _this.translator.start(new TranslatorUpdate({}));

        _this.translator.update(new TranslatorUpdate({
          // Normalize different Browser deltas
          scale: 1 - 1 / 10 * (ev.deltaY / Math.abs(ev.deltaY))
        }));

        _this.translator.done();

        _this.drag(ev);
      });
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      this.content.style.transform = this.translator.getTransform();
    }
  }, {
    key: "calcTouchDistance",
    value: function calcTouchDistance(touch, touch2) {
      return Math.sqrt(Math.pow(touch.screenX - touch2.screenY, 2) + Math.pow(touch.screenY - touch2.screenY, 2));
    }
  }]);

  return Satsuma;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(268);
/******/ })()
;
});