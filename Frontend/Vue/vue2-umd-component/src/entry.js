import Vue from 'vue';
import MyComponent from './components/MyComponent.vue';

// UMD 包装器
(function (global, factory) {
  debugger;
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    // CommonJS 环境
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD 环境
    define([], factory);
  } else {
    // 浏览器全局变量
    global.MyComponent123 = factory();
  }
}(typeof window !== 'undefined' ? window : this, function () {
  // 返回一个构造函数
  return function (options) {
    new Vue({
      el: options.el,
      render: h => h(MyComponent, {
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



