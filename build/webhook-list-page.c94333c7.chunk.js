(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[4121],{

/***/ 81610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(96233);
  } else {}
  

/***/ }),

/***/ 96233:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=120)}({0:function(n,e,r){n.exports=r(16)()},1:function(e,r){e.exports=n},10:function(n,e,r){var t=r(22),o=r(23),i=r(19),a=r(24);n.exports=function(n,e){return t(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},120:function(n,e,r){"use strict";r.r(e),r.d(e,"Switch",(function(){return w}));var t,o,i=r(5),a=r.n(i),u=r(6),s=r.n(u),c=r(3),f=r.n(c),d=r(1),l=r.n(d),p=r(0),b=r.n(p),h=r(2),m=r.n(h),g=r(9),v=r(4),y=["label","onChange","onLabel","offLabel","selected","visibleLabels"],x=m.a.div(t||(t=f()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(n){return n.theme.colors.danger500}),1.5,2.5,(function(n){return n.visibleLabels?"1rem":0}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.spaces[1]})),O=m.a.button(o||(o=f()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),x,(function(n){return n.theme.colors.success500}),x),w=l.a.forwardRef((function(n,e){var r=n.label,t=n.onChange,o=n.onLabel,i=n.offLabel,u=n.selected,c=n.visibleLabels,f=s()(n,y);return l.a.createElement(O,a()({ref:e,role:"switch","aria-checked":u,"aria-label":r,onClick:t,visibleLabels:c,type:"button"},f),l.a.createElement(g.Flex,null,l.a.createElement(x,null,l.a.createElement("span",null,o),l.a.createElement("span",null,i)),c&&l.a.createElement(v.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:u?"success600":"danger600"},u?o:i)))}));w.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},w.propTypes={label:b.a.string.isRequired,offLabel:b.a.string,onChange:b.a.func.isRequired,onLabel:b.a.string,selected:b.a.bool.isRequired,visibleLabels:b.a.bool},w.displayName="Switch"},16:function(n,e,r){"use strict";var t=r(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,r,o,i,a){if(a!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var r={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},17:function(n,e,r){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,r){var t=r(18);n.exports=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,r){n.exports=e},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],a=!0,u=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,r){"use strict";r.r(e),r.d(e,"Box",(function(){return l}));var t,o=r(3),i=r.n(o),a=r(0),u=r.n(a),s=r(2),c=r.n(s),f=r(7),d={color:!0},l=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(t||(t=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,r=n.background;return e.colors[r]}),(function(n){var e=n.theme,r=n.color;return e.colors[r]}),(function(n){var e=n.theme,r=n.padding;return Object(f.a)("padding",r,e)}),(function(n){var e=n.theme,r=n.paddingTop;return Object(f.a)("padding-top",r,e)}),(function(n){var e=n.theme,r=n.paddingRight;return Object(f.a)("padding-right",r,e)}),(function(n){var e=n.theme,r=n.paddingBottom;return Object(f.a)("padding-bottom",r,e)}),(function(n){var e=n.theme,r=n.paddingLeft;return Object(f.a)("padding-left",r,e)}),(function(n){var e=n.theme,r=n.marginLeft;return Object(f.a)("margin-left",r,e)}),(function(n){var e=n.theme,r=n.marginRight;return Object(f.a)("margin-right",r,e)}),(function(n){var e=n.theme,r=n.marginTop;return Object(f.a)("margin-top",r,e)}),(function(n){var e=n.theme,r=n.marginBottom;return Object(f.a)("margin-bottom",r,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,r=n.hasRadius,t=n.borderRadius;return r?e.borderRadius:t}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,r=n.borderColor,t=n.borderStyle,o=n.borderWidth;if(r&&!t&&!o)return"1px solid ".concat(e.colors[r])}),(function(n){var e=n.theme,r=n.shadow;return e.shadows[r]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,r=n.theme;return e?e(r):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));l.displayName="Box",l.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},l.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(n,e){function r(){return n.exports=r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,r.apply(this,arguments)}n.exports=r,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,r){var t=r(21);n.exports=function(n,e){if(null==n)return{};var r,o,i=t(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,r){"use strict";var t=r(10),o=r.n(t);e.a=function(n,e,r){if(void 0!==e){if(Array.isArray(e)){var t=o()(e,3),i=t[0],a=t[1],u=t[2],s="".concat(n,": ").concat(r.spaces[i],";");return void 0!==a&&(s+="".concat(r.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(r.spaces[a],";\n        }")),void 0!==u&&(s+="".concat(r.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(r.spaces[u],";\n        }")),s}var c=r.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}},9:function(n,e,r){"use strict";r.r(e),r.d(e,"Flex",(function(){return l}));var t,o=r(3),i=r.n(o),a=r(0),u=r.n(a),s=r(2),c=r.n(s),f=r(4),d={direction:!0},l=c()(f.Box).withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(t||(t=i()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.justifyContent}),(function(n){return n.alignItems}),(function(n){return n.wrap}));l.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},l.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}}})}));

/***/ }),

/***/ 72251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _extends2=_interopRequireDefault(__webpack_require__(67154));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(39711);var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _EmptyStateLayout=__webpack_require__(62791);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _IconButton=__webpack_require__(30741);var _BaseCheckbox=__webpack_require__(59522);var _Table=__webpack_require__(41798);var _Typography=__webpack_require__(49425);var _Button=__webpack_require__(19408);var _VisuallyHidden=__webpack_require__(26851);var _Switch=__webpack_require__(81610);var _Main=__webpack_require__(62031);var _LinkButton=__webpack_require__(60985);var _LiveRegions=__webpack_require__(84686);var _Box=__webpack_require__(5493);var _Plus=_interopRequireDefault(__webpack_require__(80768));var _Pencil=_interopRequireDefault(__webpack_require__(19352));var _Trash=_interopRequireDefault(__webpack_require__(18568));var _EmptyDocuments=_interopRequireDefault(__webpack_require__(85407));var _reducer=_interopRequireWildcard(__webpack_require__(71681));var _permissions=_interopRequireDefault(__webpack_require__(13240));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ListView=function ListView(){var _useRBAC=(0,_helperPlugin.useRBAC)(_permissions["default"].settings.webhooks),isLoading=_useRBAC.isLoading,_useRBAC$allowedActio=_useRBAC.allowedActions,canCreate=_useRBAC$allowedActio.canCreate,canRead=_useRBAC$allowedActio.canRead,canUpdate=_useRBAC$allowedActio.canUpdate,canDelete=_useRBAC$allowedActio.canDelete;var toggleNotification=(0,_helperPlugin.useNotification)();var isMounted=(0,_react.useRef)(true);var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),showModal=_useState2[0],setShowModal=_useState2[1];var _useReducer=(0,_react.useReducer)(_reducer["default"],_reducer.initialState),_useReducer2=(0,_slicedToArray2["default"])(_useReducer,2),_useReducer2$=_useReducer2[0],webhooks=_useReducer2$.webhooks,webhooksToDelete=_useReducer2$.webhooksToDelete,webhookToDelete=_useReducer2$.webhookToDelete,loadingWebhooks=_useReducer2$.loadingWebhooks,dispatch=_useReducer2[1];var _useNotifyAT=(0,_LiveRegions.useNotifyAT)(),notifyStatus=_useNotifyAT.notifyStatus;(0,_helperPlugin.useFocusWhenNavigate)();var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var _useLocation=(0,_reactRouterDom.useLocation)(),pathname=_useLocation.pathname;var rowsCount=webhooks.length;var webhooksToDeleteLength=webhooksToDelete.length;var getWebhookIndex=function getWebhookIndex(id){return webhooks.findIndex(function(webhook){return webhook.id===id;});};(0,_react.useEffect)(function(){isMounted.current=true;return function(){isMounted.current=false;};},[]);(0,_react.useEffect)(function(){if(canRead){fetchWebHooks();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[canRead]);var fetchWebHooks=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$request,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(0,_helperPlugin.request)('/admin/webhooks',{method:'GET'});case 3:_yield$request=_context.sent;data=_yield$request.data;if(isMounted.current){dispatch({type:'GET_DATA_SUCCEEDED',data:data});notifyStatus('webhooks have been loaded');}_context.next=12;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);console.log(_context.t0);if(isMounted.current){if(_context.t0.code!==20){toggleNotification({type:'warning',message:{id:'notification.error'}});}dispatch({type:'TOGGLE_LOADING'});}case 12:case"end":return _context.stop();}}},_callee,null,[[0,8]]);}));return function fetchWebHooks(){return _ref.apply(this,arguments);};}();var handleToggleModal=function handleToggleModal(){setShowModal(function(prev){return!prev;});};var handleConfirmDelete=function handleConfirmDelete(){if(webhookToDelete){handleConfirmDeleteOne();}else{handleConfirmDeleteAll();}};var handleConfirmDeleteOne=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return(0,_helperPlugin.request)("/admin/webhooks/".concat(webhookToDelete),{method:'DELETE'});case 3:dispatch({type:'WEBHOOK_DELETED',index:getWebhookIndex(webhookToDelete)});_context2.next=9;break;case 6:_context2.prev=6;_context2.t0=_context2["catch"](0);if(_context2.t0.code!==20){toggleNotification({type:'warning',message:{id:'notification.error'}});}case 9:setShowModal(false);case 10:case"end":return _context2.stop();}}},_callee2,null,[[0,6]]);}));return function handleConfirmDeleteOne(){return _ref2.apply(this,arguments);};}();var handleConfirmDeleteAll=/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(){var body;return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:body={ids:webhooksToDelete};_context3.prev=1;_context3.next=4;return(0,_helperPlugin.request)('/admin/webhooks/batch-delete',{method:'POST',body:body});case 4:if(isMounted.current){dispatch({type:'WEBHOOKS_DELETED'});}_context3.next=10;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](1);if(isMounted.current){if(_context3.t0.code!==20){toggleNotification({type:'warning',message:{id:'notification.error'}});}}case 10:setShowModal(false);case 11:case"end":return _context3.stop();}}},_callee3,null,[[1,7]]);}));return function handleConfirmDeleteAll(){return _ref3.apply(this,arguments);};}();var handleDeleteClick=function handleDeleteClick(id){setShowModal(true);if(id!=='all'){dispatch({type:'SET_WEBHOOK_TO_DELETE',id:id});}};var handleEnabledChange=/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(value,id){var webhookIndex,initialWebhookProps,keys,body;return _regenerator["default"].wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:webhookIndex=getWebhookIndex(id);initialWebhookProps=webhooks[webhookIndex];keys=[webhookIndex,'isEnabled'];body=_objectSpread(_objectSpread({},initialWebhookProps),{},{isEnabled:value});delete body.id;_context4.prev=5;dispatch({type:'SET_WEBHOOK_ENABLED',keys:keys,value:value});_context4.next=9;return(0,_helperPlugin.request)("/admin/webhooks/".concat(id),{method:'PUT',body:body});case 9:_context4.next=14;break;case 11:_context4.prev=11;_context4.t0=_context4["catch"](5);if(isMounted.current){dispatch({type:'SET_WEBHOOK_ENABLED',keys:keys,value:!value});if(_context4.t0.code!==20){toggleNotification({type:'warning',message:{id:'notification.error'}});}}case 14:case"end":return _context4.stop();}}},_callee4,null,[[5,11]]);}));return function handleEnabledChange(_x,_x2){return _ref4.apply(this,arguments);};}();var handleSelectAllCheckbox=function handleSelectAllCheckbox(){dispatch({type:'SET_ALL_WEBHOOKS_TO_DELETE'});};var handleSelectOneCheckbox=function handleSelectOneCheckbox(value,id){dispatch({type:'SET_WEBHOOKS_TO_DELETE',value:value,id:id});};var handleGoTo=function handleGoTo(to){push("".concat(pathname,"/").concat(to));};return/*#__PURE__*/_react["default"].createElement(_Layout.Layout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"Webhooks"}),/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":isLoading||loadingWebhooks},/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:'Settings.webhooks.title',defaultMessage:'Webhooks'}),subtitle:formatMessage({id:'Settings.webhooks.list.description',defaultMessage:'Get POST changes notifications.'}),primaryAction:canCreate&&!loadingWebhooks&&/*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton,{startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null),variant:"default",to:"".concat(pathname,"/create"),size:"L"},formatMessage({id:'Settings.webhooks.list.button.add',defaultMessage:'Add new webhook'}))}),webhooksToDeleteLength>0&&canDelete&&/*#__PURE__*/_react["default"].createElement(_Layout.ActionLayout,{startActions:/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"epsilon",textColor:"neutral600"},formatMessage({id:'Settings.webhooks.to.delete',defaultMessage:'{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected'},{webhooksToDeleteLength:webhooksToDeleteLength})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return handleDeleteClick('all');},startIcon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null),size:"L",variant:"danger-light"},"Delete"))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,isLoading||loadingWebhooks?/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,rowsCount>0?/*#__PURE__*/_react["default"].createElement(_Table.Table,{colCount:5,rowCount:rowsCount+1,footer:/*#__PURE__*/_react["default"].createElement(_Table.TFooter,{onClick:function onClick(){return canCreate?handleGoTo('create'):{};},icon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:'Settings.webhooks.list.button.add',defaultMessage:'Add new webhook'}))},/*#__PURE__*/_react["default"].createElement(_Table.Thead,null,/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_BaseCheckbox.BaseCheckbox,{"aria-label":formatMessage({id:'Settings.webhooks.list.all-entries.select',defaultMessage:'Select all entries'}),indeterminate:webhooksToDeleteLength>0&&webhooksToDeleteLength<rowsCount,value:webhooksToDeleteLength===rowsCount,onValueChange:handleSelectAllCheckbox})),/*#__PURE__*/_react["default"].createElement(_Table.Th,{width:"20%"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma",textColor:"neutral600"},formatMessage({id:'Settings.webhooks.form.name',defaultMessage:'Name'}))),/*#__PURE__*/_react["default"].createElement(_Table.Th,{width:"60%"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma",textColor:"neutral600"},formatMessage({id:'Settings.webhooks.form.url',defaultMessage:'URL'}))),/*#__PURE__*/_react["default"].createElement(_Table.Th,{width:"20%"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma",textColor:"neutral600"},formatMessage({id:'Settings.webhooks.list.th.status',defaultMessage:'Status'}))),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden,null,formatMessage({id:'Settings.webhooks.list.th.actions',defaultMessage:'Actions'}))))),/*#__PURE__*/_react["default"].createElement(_Table.Tbody,null,webhooks.map(function(webhook){return/*#__PURE__*/_react["default"].createElement(_Table.Tr,(0,_extends2["default"])({key:webhook.id},(0,_helperPlugin.onRowClick)({fn:function fn(){return handleGoTo(webhook.id);},condition:canUpdate})),/*#__PURE__*/_react["default"].createElement(_Table.Td,_helperPlugin.stopPropagation,/*#__PURE__*/_react["default"].createElement(_BaseCheckbox.BaseCheckbox,{"aria-label":"".concat(formatMessage({id:'Settings.webhooks.list.select',defaultMessage:'Select'})," ").concat(webhook.name),value:webhooksToDelete===null||webhooksToDelete===void 0?void 0:webhooksToDelete.includes(webhook.id),onValueChange:function onValueChange(value){return handleSelectOneCheckbox(value,webhook.id);},id:"select",name:"select"})),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{fontWeight:"semiBold",textColor:"neutral800"},webhook.name)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800"},webhook.url)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,_helperPlugin.stopPropagation,/*#__PURE__*/_react["default"].createElement(_Switch.Switch,{onLabel:formatMessage({id:'Settings.webhooks.enabled',defaultMessage:'Enabled'}),offLabel:formatMessage({id:'Settings.webhooks.disabled',defaultMessage:'Disabled'}),label:"".concat(webhook.name," ").concat(formatMessage({id:'Settings.webhooks.list.th.status',defaultMessage:'Status'})),selected:webhook.isEnabled,onChange:function onChange(){return handleEnabledChange(!webhook.isEnabled,webhook.id);},visibleLabels:true}))),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,(0,_extends2["default"])({horizontal:true,size:1},_helperPlugin.stopPropagation),canUpdate&&/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:function onClick(){handleGoTo(webhook.id);},label:formatMessage({id:'Settings.webhooks.events.update',defaultMessage:'Update'}),icon:/*#__PURE__*/_react["default"].createElement(_Pencil["default"],null),noBorder:true}),canDelete&&/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:function onClick(){return handleDeleteClick(webhook.id);},label:formatMessage({id:'Settings.webhooks.events.delete',defaultMessage:'Delete'}),icon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null),noBorder:true,id:"delete-".concat(webhook.id)}))));}))):/*#__PURE__*/_react["default"].createElement(_EmptyStateLayout.EmptyStateLayout,{icon:/*#__PURE__*/_react["default"].createElement(_EmptyDocuments["default"],{width:"160px"}),content:formatMessage({id:'Settings.webhooks.list.empty.description',defaultMessage:'Add your first webhook'}),action:/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null),onClick:function onClick(){return canCreate?handleGoTo('create'):{};}},formatMessage({id:'Settings.webhooks.list.button.add',defaultMessage:'Add new webhook'}))})))),/*#__PURE__*/_react["default"].createElement(_helperPlugin.ConfirmDialog,{isOpen:showModal,onToggleDialog:handleToggleModal,onConfirm:handleConfirmDelete}));};var _default=ListView;exports.default=_default;

/***/ }),

/***/ 71681:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.initialState=exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _immer=_interopRequireDefault(__webpack_require__(66312));var _set=_interopRequireDefault(__webpack_require__(36968));var initialState={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:true};exports.initialState=initialState;var reducer=function reducer(state,action){return(// eslint-disable-next-line consistent-return
(0,_immer["default"])(state,function(draftState){switch(action.type){case'GET_DATA_SUCCEEDED':{draftState.webhooks=action.data;draftState.loadingWebhooks=false;break;}case'TOGGLE_LOADING':{draftState.loadingWebhooks=!state.loadingWebhooks;break;}case'SET_WEBHOOK_ENABLED':{(0,_set["default"])(draftState,['webhooks'].concat((0,_toConsumableArray2["default"])(action.keys)),action.value);break;}case'SET_WEBHOOK_TO_DELETE':{draftState.webhookToDelete=action.id;break;}case'SET_WEBHOOKS_TO_DELETE':{if(action.value){draftState.webhooksToDelete.push(action.id);}else{draftState.webhooksToDelete=state.webhooksToDelete.filter(function(id){return id!==action.id;});}break;}case'SET_ALL_WEBHOOKS_TO_DELETE':{if(state.webhooksToDelete.length===0){draftState.webhooksToDelete=state.webhooks.map(function(webhook){return webhook.id;});}else{draftState.webhooksToDelete=[];}break;}case'WEBHOOKS_DELETED':{draftState.webhooks=state.webhooks.filter(function(webhook){return!state.webhooksToDelete.includes(webhook.id);});draftState.webhooksToDelete=[];break;}case'WEBHOOK_DELETED':{draftState.webhooks=state.webhooks.filter(function(_,index){return index!==action.index;});draftState.webhookToDelete=null;break;}default:return draftState;}}));};var _default=reducer;exports.default=_default;

/***/ }),

/***/ 94859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _ListView=_interopRequireDefault(__webpack_require__(72251));var ProtectedListView=function ProtectedListView(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings.webhooks.main},/*#__PURE__*/_react["default"].createElement(_ListView["default"],null));};var _default=ProtectedListView;exports.default=_default;

/***/ })

}]);