(() => {
  var __webpack_modules__ = [
    (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var _subMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
      var _subMain__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        _subMain__WEBPACK_IMPORTED_MODULE_0__
      );
      module = __webpack_require__.hmd(module);

      module.exports = "index.js exports";
    },
    (module) => {
      console.log(window.Array);

      module.exports = "sub exports";
    },
  ];
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    module.loaded = true;
    return module.exports;
  }
  (() => {
    __webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.hmd = (module) => {
      module = Object.create(module);
      if (!module.children) module.children = [];
      Object.defineProperty(module, "exports", {
        enumerable: true,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              module.id
          );
        },
      });
      return module;
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();
  var __webpack_exports__ = __webpack_require__(0);
})();
