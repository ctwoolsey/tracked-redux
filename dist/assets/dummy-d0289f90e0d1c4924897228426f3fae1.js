"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("dummy/actions/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.VisibilityFilters=e.toggleTodo=e.setVisibilityFilter=e.addTodo=void 0
var t=0
e.addTodo=function(e){return{type:"ADD_TODO",id:t++,text:e}}
e.setVisibilityFilter=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}
e.toggleTodo=function(e){return{type:"TOGGLE_TODO",id:e}}
e.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}})),define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,r,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(c,Ember.Application)
var r=u(c)
function c(){var e
o(this,c)
for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l]
return f(a(e=r.call.apply(r,[this].concat(u))),"modulePrefix",n.default.modulePrefix),f(a(e),"podModulePrefix",n.default.podModulePrefix),f(a(e),"Resolver",t.default),e}return c}()
e.default=p,(0,r.default)(p,n.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/todos",["exports","@glimmer/component","dummy/actions"],(function(e,t,r){var n,o,i,u,c,a,l,f,p
function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=h(e)
if(t){var o=h(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return v(this,r)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=Ember.HTMLBars.template({id:"/+z4/Y2V",block:'{"symbols":["todo"],"statements":[[10,"ul"],[12],[2,"\\n"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,["redux","state","todos"]]],null]],null]],null,[["default"],[{"statements":[[2,"    "],[10,"li"],[12],[2,"\\n      "],[11,"input"],[16,"checked",[32,1,["completed"]]],[24,4,"checkbox"],[4,[38,1],["click",[30,[36,0],[[32,0,["toggleTodo"]],[32,1]],null]],null],[12],[13],[2,"\\n      "],[1,[32,1,["completed"]]],[2,"\\n      "],[1,[32,1,["text"]]],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[1]}]]],[13],[2,"\\n\\n"],[11,"input"],[16,2,[32,0,["input"]]],[4,[38,1],["input",[32,0,["updateInput"]]],null],[12],[13],[2,"\\n"],[11,"button"],[24,4,"button"],[4,[38,1],["click",[32,0,["addTodo"]]],null],[12],[2,"Add Item"],[13],[2,"\\n"]],"hasEval":false,"upvars":["fn","on","-track-array","each"]}',meta:{moduleName:"dummy/components/todos.hbs"}}),w=(n=Ember.inject.service,o=Ember._tracked,i=Ember._action,u=Ember._action,c=Ember._action,p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(u,e)
var t,n,o,i=m(u)
function u(){var e
s(this,u)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return d(O(e=i.call.apply(i,[this].concat(r))),"redux",l,O(e)),d(O(e),"input",f,O(e)),e}return t=u,(n=[{key:"toggleTodo",value:function(e){this.redux.dispatch((0,r.toggleTodo)(e.id))}},{key:"addTodo",value:function(){this.redux.dispatch((0,r.addTodo)(this.input)),this.input=""}},{key:"updateInput",value:function(e){this.input=e.target.value}}])&&y(t.prototype,n),o&&y(t,o),u}(t.default),l=_((a=p).prototype,"redux",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=_(a.prototype,"input",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),_(a.prototype,"toggleTodo",[i],Object.getOwnPropertyDescriptor(a.prototype,"toggleTodo"),a.prototype),_(a.prototype,"addTodo",[u],Object.getOwnPropertyDescriptor(a.prototype,"addTodo"),a.prototype),_(a.prototype,"updateInput",[c],Object.getOwnPropertyDescriptor(a.prototype,"updateInput"),a.prototype),a)
e.default=w,Ember._setComponentTemplate(g,w)})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("dummy/reducers/index",["exports","tracked-redux","dummy/reducers/todos","dummy/reducers/visibilityFilter"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,t.combineReducers)({todos:r.default,visibilityFilter:n.default})
e.default=o})),define("dummy/reducers/todos",["exports"],(function(e){function t(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{}
r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=[{id:-2,text:"Consider using Redux",completed:!0},{id:-1,text:"Keep all state in a single tree",completed:!1}],c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0
switch(t.type){case"ADD_TODO":return[].concat(o(e),[{id:t.id,text:t.text,completed:!1}])
case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?r(r({},e),{},{completed:!e.completed}):e}))
default:return e}}
e.default=c})),define("dummy/reducers/visibilityFilter",["exports","dummy/actions"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.VisibilityFilters.SHOW_ALL,r=arguments.length>1?arguments[1]:void 0
switch(r.type){case"SET_VISIBILITY_FILTER":return r.filter
default:return e}}
e.default=r})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=c(e)
if(t){var o=c(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return i(this,r)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(c,Ember.Router)
var i=o(c)
function c(){var e
r(this,c)
for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l]
return a(u(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),a(u(e),"rootURL",t.default.rootURL),e}return c}()
e.default=l,l.map((function(){}))})),define("dummy/services/redux",["exports","tracked-redux","dummy/reducers"],(function(e,t,r){var n,o,i
function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){var r=t.get(e)
if(!r)throw new TypeError("attempted to get private field on non-instance")
return r.get?r.get.call(e):r.value}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,b,m,v,O,h,_=(n=Ember._action,i=new WeakMap,y=(o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(y,Ember.Service)
var n,o,f,d=l(y)
function y(){var e
u(this,y)
for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c]
return e=d.call.apply(d,[this].concat(o)),i.set(p(e),{writable:!0,value:(0,t.createStore)(r.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}),e}return n=y,(o=[{key:"state",get:function(){return s(this,i).getState()}},{key:"dispatch",value:function(){var e;(e=s(this,i)).dispatch.apply(e,arguments)}}])&&c(n.prototype,o),f&&c(n,f),y}()).prototype,b="dispatch",m=[n],v=Object.getOwnPropertyDescriptor(o.prototype,"dispatch"),O=o.prototype,h={},Object.keys(v).forEach((function(e){h[e]=v[e]})),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),h=m.slice().reverse().reduce((function(e,t){return t(y,b,e)||e}),h),O&&void 0!==h.initializer&&(h.value=h.initializer?h.initializer.call(O):void 0,h.initializer=void 0),void 0===h.initializer&&(Object.defineProperty(y,b,h),h=null),o)
e.default=_})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"PXivRzsf",block:'{"symbols":[],"statements":[[8,"todos",[],[[],[]],null],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
