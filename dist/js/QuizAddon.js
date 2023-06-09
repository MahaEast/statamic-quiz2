/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [Fieldtype],
  data: function data() {
    return {
      title: "",
      summaryCheckbox: false,
      usermailCheckbox: false,
      showmessageCheckbox: false,
      message: "",
      inputFields: [{
        value: '',
        subInputFields: [{
          text: ''
        }],
        selectedOption: null
      }],
      answers: [],
      collectedFieldsToData: [],
      optionsArray: [],
      downloadString: ""
    };
  },
  mounted: function mounted() {
    //const entryId = window.location.pathname.split('/')[2];
    var knownData = JSON.parse(this._props.value);
    if (knownData) {
      this.inputFields = [];
      for (var i = 0; i < knownData[0].length; i++) {
        this.appendKnownData(knownData[0][i], i);
      }
      for (var _i = 0; _i < knownData[1].length; _i++) {
        this.appendKnownDataSettings(knownData[1][_i], _i);
      }
      for (var _i2 = 0; _i2 < knownData[2].length; _i2++) {
        this.answers.push(knownData[2][_i2]);
        this.downloadString = this.downloadString + knownData[2][_i2].usermail + "\n" + knownData[2][_i2].Date + "\n" + knownData[2][_i2].Device + "\n" + knownData[2][_i2].IP + "\n" + knownData[2][_i2].id + "\n" + knownData[2][_i2].answers + "\n\n";
      }
    } else {
      this.inputFields = [];
    }
  },
  methods: {
    addInputField: function addInputField() {
      this.inputFields.push({
        value: "",
        subInputFields: [{
          text: ''
        }],
        selectedOption: null
      });
    },
    addSubInputField: function addSubInputField(index) {
      var selectedOptionIndex = this.inputFields[index].selectedOption;
      var selectedOption = this.inputFields[index].subInputFields[selectedOptionIndex];
      this.inputFields[index].subInputFields.push({
        text: ''
      });
    },
    saveColletedData: function saveColletedData() {
      if (this.title && this.message) {
        this.optionsArray.push(this.title, this.message, this.summaryCheckbox, this.usermailCheckbox, this.showmessageCheckbox);
        this.collectedFieldsToData.push(this.inputFields);
        this.collectedFieldsToData.push(this.optionsArray);
        this.collectedFieldsToData.push(this.answers);

        /*axios.get("/save-a-quiz")
            .then(response => this.totalVuePackages = response.data.total);*/

        var json = JSON.stringify(this.collectedFieldsToData);
        var jsonInput = document.getElementById('json');
        jsonInput.click();
        jsonInput.focus();
        jsonInput.value = json;
        jsonInput.dispatchEvent(new Event('input'));
        this.$toast.success('Updated quiz');
      } else {
        this.$toast.error('Required fields are missing content');
      }
    },
    appendKnownDataSettings: function appendKnownDataSettings(obj, i) {
      switch (i) {
        case 0:
          // title
          this.title = obj;
          var a = document.getElementById('quiz-title');
          a.click();
          a.focus();
          a.value = obj;
          a.dispatchEvent(new Event('change'));
          break;
        case 1:
          // message
          this.message = obj;
          var b = document.getElementById('quiz-message');
          b.click();
          b.focus();
          b.value = obj;
          b.dispatchEvent(new Event('change'));
          break;
        case 2:
          this.summaryCheckbox = obj;
          var c = document.getElementById('quiz-checkbox-summary');
          c.checked = obj;
          c.dispatchEvent(new Event('change'));
          break;
        case 3:
          // usermail
          this.usermailCheckbox = obj;
          var d = document.getElementById('quiz-checkbox-usermail');
          d.checked = obj;
          d.dispatchEvent(new Event('change'));
          break;
        case 4:
          //quiz-summary
          this.showmessageCheckbox = obj;
          var e = document.getElementById('quiz-checkbox-message');
          e.checked = obj;
          e.dispatchEvent(new Event('change'));
          break;
        default:
        // code block
      }
    },
    appendKnownData: function appendKnownData(obj, i) {
      this.inputFields.push({
        value: obj.value,
        subInputFields: obj.subInputFields,
        selectedOption: obj.selectedOption
      });
    },
    createTextFile: function createTextFile() {
      var text = this.downloadString;
      var filename = 'participants.txt';
      var blob = new Blob([text], {
        type: 'text/plain'
      });
      var url = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
      this.$toast.success('Created file with quiz data');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "main-options"
  }, [_c("div", {
    staticClass: "hidden"
  }, [_c("label", [_vm._v("Json string")]), _vm._v(" "), _c("text-input", {
    staticStyle: {
      opacity: "0.5"
    },
    attrs: {
      readonly: "",
      id: "json",
      value: _vm.value,
      placeholder: "json string"
    },
    on: {
      input: _vm.update
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2 mb-2"
  }, [_c("label", [_vm._v("Quiz title")]), _vm._v(" "), _c("input", {
    staticClass: "input-text",
    attrs: {
      id: "quiz-title",
      type: "text",
      placeholder: "Quiz title"
    },
    on: {
      keyup: function keyup($event) {
        _vm.title = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "main-settings"
  }, [_c("div", {
    staticClass: "mt-2 mb-2 flex"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.summaryCheckbox,
      expression: "summaryCheckbox"
    }],
    staticClass: "pr-2",
    attrs: {
      type: "checkbox",
      id: "quiz-checkbox-summary"
    },
    domProps: {
      checked: Array.isArray(_vm.summaryCheckbox) ? _vm._i(_vm.summaryCheckbox, null) > -1 : _vm.summaryCheckbox
    },
    on: {
      change: function change($event) {
        var $$a = _vm.summaryCheckbox,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.summaryCheckbox = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.summaryCheckbox = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.summaryCheckbox = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "quiz-checkbox-summary"
    }
  }, [_vm._v("Show user summary? ("), _c("i", [_vm._v(_vm._s(_vm.summaryCheckbox))]), _vm._v(")")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 mb-2 flex"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usermailCheckbox,
      expression: "usermailCheckbox"
    }],
    staticClass: "pr-2",
    attrs: {
      type: "checkbox",
      id: "quiz-checkbox-usermail"
    },
    domProps: {
      checked: Array.isArray(_vm.usermailCheckbox) ? _vm._i(_vm.usermailCheckbox, null) > -1 : _vm.usermailCheckbox
    },
    on: {
      change: function change($event) {
        var $$a = _vm.usermailCheckbox,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.usermailCheckbox = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.usermailCheckbox = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.usermailCheckbox = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "checkbox"
    }
  }, [_vm._v("Require user email? ("), _c("i", [_vm._v(_vm._s(_vm.usermailCheckbox))]), _vm._v(")")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 mb-2"
  }, [_c("div", {
    staticClass: "flex"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.showmessageCheckbox,
      expression: "showmessageCheckbox"
    }],
    staticClass: "pr-2",
    attrs: {
      type: "checkbox",
      id: "quiz-checkbox-message"
    },
    domProps: {
      checked: Array.isArray(_vm.showmessageCheckbox) ? _vm._i(_vm.showmessageCheckbox, null) > -1 : _vm.showmessageCheckbox
    },
    on: {
      change: function change($event) {
        var $$a = _vm.showmessageCheckbox,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.showmessageCheckbox = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.showmessageCheckbox = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.showmessageCheckbox = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "checkbox"
    }
  }, [_vm._v("Show specific message when quiz is done? ("), _c("i", [_vm._v(_vm._s(_vm.showmessageCheckbox))]), _vm._v(")")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("label", [_vm._v("Message")]), _vm._v(" "), _c("textarea", {
    staticClass: "input-text",
    attrs: {
      id: "quiz-message"
    },
    on: {
      keyup: function keyup($event) {
        _vm.message = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _vm._l(_vm.inputFields, function (inputField, index) {
    return _c("div", {
      key: index,
      staticClass: "quiz-elements-wrap border-2 rounded p-2 mt-2"
    }, [_c("div", [_c("div", {
      staticClass: "mt-2 mb-2"
    }, [_c("label", [_c("b", [_vm._v("(" + _vm._s(index + 1) + ")")]), _vm._v(" Quiz question")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: inputField.value,
        expression: "inputField.value"
      }],
      staticClass: "input-text",
      attrs: {
        type: "text",
        placeholder: "Question"
      },
      domProps: {
        value: inputField.value
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(inputField, "value", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _vm._l(inputField.subInputFields, function (subInputField, subIndex) {
      return _c("div", {
        key: subIndex
      }, [_c("div", {
        staticClass: "mt-2 mb-2 border-2 rounded p-2"
      }, [_c("label", [_c("b", [_vm._v("(" + _vm._s(subIndex + 1) + ")")]), _vm._v(" Option")]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: subInputField.text,
          expression: "subInputField.text"
        }],
        staticClass: "quiz-element-option input-text",
        attrs: {
          type: "text",
          placeholder: "Option"
        },
        domProps: {
          value: subInputField.text
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(subInputField, "text", $event.target.value);
          }
        }
      })])]);
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-primary",
      on: {
        click: function click($event) {
          return _vm.addSubInputField(index);
        }
      }
    }, [_vm._v("Add option")]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "mt-2 mb-2"
    }, [_c("label", [_vm._v("Select correct answer")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: inputField.selectedOption,
        expression: "inputField.selectedOption"
      }],
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(inputField, "selectedOption", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(inputField.subInputFields, function (subInputField, subIndex) {
      return _c("option", {
        key: subIndex,
        domProps: {
          value: subIndex
        }
      }, [_vm._v("\n                        " + _vm._s(subInputField.text) + "\n                    ")]);
    }), 0)])])], 2);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary mt-2",
    on: {
      click: _vm.addInputField
    }
  }, [_vm._v("Add section")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success mt-2",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.saveColletedData
    }
  }, [_vm._v("Update")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("div", [_c("h2", {
    staticClass: "mt-2 mb-2 font-bold"
  }, [_vm._v("Participants "), _c("i", [_vm._v("(" + _vm._s(_vm.answers.length) + ")")])]), _vm._v(" "), _c("div", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.createTextFile
    }
  }, [_c("u", [_vm._v("Download list with participant details")])])])])], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/fieldtypes/QuizAddonField.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/fieldtypes/QuizAddonField.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizAddonField.vue?vue&type=template&id=13350c04& */ "./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04&");
/* harmony import */ var _QuizAddonField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizAddonField.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuizAddonField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/QuizAddonField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAddonField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizAddonField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAddonField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizAddonField.vue?vue&type=template&id=13350c04& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/QuizAddonField.vue?vue&type=template&id=13350c04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizAddonField_vue_vue_type_template_id_13350c04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_QuizAddonField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/QuizAddonField */ "./resources/js/components/fieldtypes/QuizAddonField.vue");

Statamic.booting(function () {
  Statamic.$components.register('quiz_addon_field-fieldtype', _components_fieldtypes_QuizAddonField__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./resources/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maha/addons/quizaddon/addons/tv2east/quizaddon/resources/js/index.js */"./resources/js/index.js");


/***/ })

/******/ });