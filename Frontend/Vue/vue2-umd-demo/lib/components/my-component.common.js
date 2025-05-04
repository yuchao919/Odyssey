(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("MyComponent", [], factory);
	else if(typeof exports === 'object')
		exports["MyComponent"] = factory(require("vue"));
	else
		root["MyComponent"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9ee9");
/******/ })
/************************************************************************/
/******/ ({

/***/ "10d9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1104":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_style_index_0_id_364905d5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10d9");
/* harmony import */ var _node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_style_index_0_id_364905d5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_mini_css_extract_plugin_0_9_0_webpack_4_47_0_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_4_47_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_15_11_1_cache_lo_875f195a559ab6cb5ed9ea4190ad0331_node_modules_vue_loader_lib_index_js_vue_loader_options_MyComponent_vue_vue_type_style_index_0_id_364905d5_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "45e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76d06640-vue-loader-template"}!./node_modules/.pnpm/vue-loader@15.11.1_cache-lo_875f195a559ab6cb5ed9ea4190ad0331/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-lo_875f195a559ab6cb5ed9ea4190ad0331/node_modules/vue-loader/lib??vue-loader-options!./src/components/MyComponent.vue?vue&type=template&id=364905d5&scoped=true
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"my-component"},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_c('button',{on:{"click":function($event){_vm.count++}}},[_vm._v("点击次数: "+_vm._s(_vm.count))])])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MyComponent.vue?vue&type=template&id=364905d5&scoped=true

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.11.1_cache-lo_875f195a559ab6cb5ed9ea4190ad0331/node_modules/vue-loader/lib??vue-loader-options!./src/components/MyComponent.vue?vue&type=script&lang=js

/* harmony default export */ var MyComponentvue_type_script_lang_js = ({
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  },
  data() {
    return {
      count: 0
    }
  }
});

// CONCATENATED MODULE: ./src/components/MyComponent.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MyComponentvue_type_script_lang_js = (MyComponentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/MyComponent.vue?vue&type=style&index=0&id=364905d5&prod&scoped=true&lang=css
var MyComponentvue_type_style_index_0_id_364905d5_prod_scoped_true_lang_css = __webpack_require__("1104");

// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_cache-lo_875f195a559ab6cb5ed9ea4190ad0331/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/components/MyComponent.vue






/* normalize component */

var component = normalizeComponent(
  components_MyComponentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "364905d5",
  null
  
)

/* harmony default export */ var MyComponent = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "5011":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "6f5a":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("45e7");



// UMD 包装器
(function (global, factory) {
  debugger;
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    // CommonJS 环境
    module.exports = factory();
  } else if (typeof define === 'function' && __webpack_require__("5011")) {
    // AMD 环境
    define([], factory);
  } else {
    // 浏览器全局变量
    global.MyComponent123 = factory();
  }
}(typeof window !== 'undefined' ? window : undefined, function () {
  // 返回一个构造函数
  return function (options) {
    new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
      el: options.el,
      render: h => h(_components_MyComponent_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: options.props || {}
      })
    });
  };
}));

// import Vue from 'vue'; // 引入 Vue
// import MyComponent from './components/MyComponent.vue';

// // 定义构造函数
// function MyComponentWrapper(options) {
//   // 创建 Vue 实例
//   new Vue({
//     el: options.el,
//     render: h => h(MyComponent, {
//       props: options.props || {}
//     })
//   });
// }


// // UMD 包装器
// (function (global, factory) {
//   if (typeof exports === 'object' && typeof module !== 'undefined') {
//     // CommonJS 环境
//     module.exports = factory();
//   } else if (typeof define === 'function' && define.amd) {
//     // AMD 环境
//     define([], factory);
//   } else {
//     // 浏览器全局变量
//     global.MyComponent = factory();
//   }
// })(typeof window !== 'undefined' ? window : this, function () {
//   // 返回构造函数
//   return MyComponentWrapper;
// });

// import Vue from 'vue';
// import MyComponent from './components/MyComponent.vue';

// let instanceConstructor = Vue.extend(MyComponent)
// let instance = null

// export default function library(options) {
//   options = options || {}
//   if (!options.el) {
//     throw new Error('请配置根节点元素')
//   }
//   if (instance && instance.destroy) {
//     instance.destroy()
//   }
//   Vue.prototype.$api = options.api || {}

//   instance = new instanceConstructor({
//     el: document.createElement('div'),
//     parent: options.parent,
//     data: {
//       event: options.event,
//       ...options.data
//     }
//   })
//   options.el.appendChild(instance.$el)

//   return instance
// }




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("6f5a")(module)))

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9ee9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.19_lod_0165c2d640a16e7dfa654ce80a6a5db0/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/entry.js
var entry = __webpack_require__("7cd6");

// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.19_lod_0165c2d640a16e7dfa654ce80a6a5db0/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (entry["default"]);



/***/ })

/******/ });
});
//# sourceMappingURL=my-component.common.js.map