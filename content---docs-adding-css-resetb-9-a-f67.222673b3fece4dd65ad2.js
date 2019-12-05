/*! For license information please see content---docs-adding-css-resetb-9-a-f67.222673b3fece4dd65ad2.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));r(58),r(31),r(22),r(23),r(59),r(231);var n=r(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a={id:"adding-css-reset",title:"Adding a CSS Reset",sidebar_label:"Adding CSS Reset"},u=[{value:"index.css",id:"indexcss",children:[]},{value:"Browser support",id:"browser-support",children:[]}],i={rightToc:u},c="wrapper";function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(n.b)(c,o({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This project setup uses ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/postcss-normalize"}),"PostCSS Normalize")," for adding a ",Object(n.b)("a",o({parentName:"p"},{href:"https://cssreset.com/what-is-a-css-reset/"}),"CSS Reset"),"."),Object(n.b)("p",null,"To start using it, add ",Object(n.b)("inlineCode",{parentName:"p"},"@import-normalize;")," anywhere in your CSS file(s). You only need to include it once and duplicate imports are automatically removed. Since you only need to include it once, a good place to add it is ",Object(n.b)("inlineCode",{parentName:"p"},"index.css")," or ",Object(n.b)("inlineCode",{parentName:"p"},"App.css"),"."),Object(n.b)("h2",{id:"indexcss"},Object(n.b)("inlineCode",{parentName:"h2"},"index.css")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-css"}),"@import-normalize; /* bring in normalize.css styles */\n\n/* rest of app styles */\n")),Object(n.b)("p",null,"You can control which parts of ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/normalize.css"}),"normalize.css")," to use via your project's ",Object(n.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist"),"."),Object(n.b)("p",null,"Results when ",Object(n.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(n.b)("inlineCode",{parentName:"p"},"last 3 versions"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-css"}),"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(n.b)("p",null,"Results when ",Object(n.b)("a",o({parentName:"p"},{href:"http://browserl.ist/"}),"browserslist")," is ",Object(n.b)("inlineCode",{parentName:"p"},"last 2 versions"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-css"}),"/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n")),Object(n.b)("h2",{id:"browser-support"},"Browser support"),Object(n.b)("p",null,"Browser support is dictated by what normalize.css ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/csstools/normalize.css#browser-support"}),"supports"),". As of this writing, it includes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Chrome (last 3)"),Object(n.b)("li",{parentName:"ul"},"Edge (last 3)"),Object(n.b)("li",{parentName:"ul"},"Firefox (last 3)"),Object(n.b)("li",{parentName:"ul"},"Firefox ESR"),Object(n.b)("li",{parentName:"ul"},"Opera (last 3)"),Object(n.b)("li",{parentName:"ul"},"Safari (last 3)"),Object(n.b)("li",{parentName:"ul"},"iOS Safari (last 2)"),Object(n.b)("li",{parentName:"ul"},"Internet Explorer 9+")))}l.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),s=u(r),p=n,f=s[i+"."+p]||s[p]||l[p]||a;return r?o.a.createElement(f,Object.assign({},{ref:t},c,{components:r})):o.a.createElement(f,Object.assign({},{ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,u[1]=i;for(var p=2;p<a;p++)u[p]=r[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},231:function(e,t,r){"use strict";e.exports=r(232)},232:function(e,t,r){"use strict";var n=r(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var S=w.prototype=new g;S.constructor=w,n(S,j.prototype),S.isPureReactComponent=!0;var C={current:null},x={current:null},N=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)N.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,P=[];function $(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case u:c=!0}}if(c)return n(o,t,""===r?"."+I(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+I(i=t[l],l);c+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)c+=e(i=i.value,s=r+I(i,l++),n,o);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function z(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),A(e,M,t=$(t,a,n,o)),T(t)}function q(){var e=C.current;if(null===e)throw Error(h(321));return e}var D={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,z,t=$(null,null,t,r)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:i,Profiler:l,StrictMode:c,Suspense:b,createElement:k,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=x.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)N.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:i,props:o,_owner:c}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n}},U={default:D},B=U&&D||U;e.exports=B.default||B},233:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,c=u(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(c[s]=r[s]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(c[i[p]]=r[i[p]])}}return c}}}]);