(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9789],{62031:(e,t,n)=>{"use strict";e.exports=n(59525)},59525:function(e,t,n){var r,o;e.exports=(r=n(67294),o=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=108)}({0:function(e,t,n){e.exports=n(16)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(22),o=n(23),a=n(19),i=n(24);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},108:function(e,t,n){"use strict";n.r(t),n.d(t,"Main",(function(){return b})),n.d(t,"SkipToContent",(function(){return T}));var r,o=n(5),a=n.n(o),i=n(6),u=n.n(i),c=n(3),l=n.n(c),s=n(1),d=n.n(s),f=n(0),p=n.n(f),g=n(2),v=n.n(g),m=["labelledBy"],h=v.a.main(r||(r=l()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),b=function(e){var t=e.labelledBy,n=u()(e,m),r=t||"main-content-title";return d.a.createElement(h,a()({"aria-labelledby":r,id:"main-content",tabIndex:-1},n))};b.defaultProps={labelledBy:void 0},b.propTypes={labelledBy:p.a.string};var y,x=n(4),O=v()(x.Box)(y||(y=l()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),T=function(e){var t=e.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},t)};T.propTypes={children:p.a.node.isRequired}},16:function(e,t,n){"use strict";var r=n(17);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},17:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t,n){var r=n(18);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=o},21:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return f}));var r,o=n(3),a=n.n(o),i=n(0),u=n.n(i),c=n(2),l=n.n(c),s=n(7),d={color:!0},f=l.a.div.withConfig({shouldForwardProp:function(e,t){return!d[e]&&t(e)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(s.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(s.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(s.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(s.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(s.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(s.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(s.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(s.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(s.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,o=e.borderWidth;if(n&&!r&&!o)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.sizes[t]||t}),(function(e){var t=e.maxWidth;return e.theme.sizes[t]||t}),(function(e){var t=e.minWidth;return e.theme.sizes[t]||t}),(function(e){var t=e.height;return e.theme.sizes[t]||t}),(function(e){var t=e.maxHeight;return e.theme.sizes[t]||t}),(function(e){var t=e.minHeight;return e.theme.sizes[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,n){var r=n(21);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),o=n.n(r);t.a=function(e,t,n){if(void 0!==t){if(Array.isArray(t)){var r=o()(t,3),a=r[0],i=r[1],u=r[2],c="".concat(e,": ").concat(n.spaces[a],";");return void 0!==i&&(c+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[i],";\n        }")),void 0!==u&&(c+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[u],";\n        }")),c}var l=n.spaces[t]||t;return"".concat(e,": ").concat(l,";")}}}}))},27590:function(e,t,n){var r;e.exports=(r=n(67294),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=99)}({0:function(e,t){e.exports=r},99:function(e,t,n){"use strict";n.r(t);var r=n(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}}))},70081:(e,t,n)=>{"use strict";var r=n(95318),o=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(87757)),i=r(n(67154)),u=r(n(48926)),c=r(n(63038)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(67294)),s=n(97132),d=n(68547),f=n(15482),p=n(19408),g=n(78862),v=n(62031),m=n(30741),h=n(49425),b=n(67826),y=n(41798),x=r(n(18568)),O=r(n(28649)),T=r(n(27590)),_=r(n(51253)),w=n(91e3),P=r(n(59954)),j=r(n(98730));function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}var M=function(){var e;(0,d.useFocusWhenNavigate)();var t=(0,s.useIntl)().formatMessage,n=(0,j.default)(),r=n.data,o=n.isLoading,E=n.deleteMutation,M=n.regenerateDocMutation,S=(0,l.useState)(!1),k=(0,c.default)(S,2),C=k[0],D=k[1],B=(0,l.useState)(!1),R=(0,c.default)(B,2),L=R[0],z=R[1],I=(0,l.useState)(),W=(0,c.default)(I,2),A=W[0],V=W[1],H=((null===r||void 0===r||null===(e=r.docVersions)||void 0===e?void 0:e.length)||0)+1,Q=function(){var e=null!==r&&void 0!==r&&r.prefix.startsWith("/")?"":"/";(0,P.default)("".concat(e).concat(null===r||void 0===r?void 0:r.prefix,"/v").concat(null===r||void 0===r?void 0:r.currentVersion))},q=function(){var e=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,E.mutateAsync({prefix:null===r||void 0===r?void 0:r.prefix,version:A});case 3:D(!C),z(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=t({id:(0,w.getTrad)("plugin.name"),defaultMessage:"Documentation"});return l.default.createElement(g.Layout,null,l.default.createElement(f.Helmet,{title:F}),l.default.createElement(v.Main,{"aria-busy":o},l.default.createElement(g.HeaderLayout,{title:F,subtitle:t({id:(0,w.getTrad)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:l.default.createElement(d.CheckPermissions,{permissions:_.default.open},l.default.createElement(p.Button,{onClick:Q,startIcon:l.default.createElement(O.default,null)},t({id:(0,w.getTrad)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),l.default.createElement(g.ContentLayout,null,o&&l.default.createElement(d.LoadingIndicatorPage,null,"Plugin is loading"),null!==r&&void 0!==r&&r.docVersions.length?l.default.createElement(y.Table,{colCount:4,rowCount:H},l.default.createElement(y.Thead,null,l.default.createElement(y.Tr,null,l.default.createElement(y.Th,null,l.default.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},t({id:(0,w.getTrad)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),l.default.createElement(y.Th,null,l.default.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},t({id:(0,w.getTrad)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),l.default.createElement(y.Tbody,null,r.docVersions.sort((function(e,t){return e.generatedDate<t.generatedDate?1:-1})).map((function(e){return l.default.createElement(y.Tr,{key:e.version},l.default.createElement(y.Td,{width:"50%"},l.default.createElement(h.Typography,null,e.version)),l.default.createElement(y.Td,{width:"50%"},l.default.createElement(h.Typography,null,e.generatedDate)),l.default.createElement(y.Td,null,l.default.createElement(b.Flex,(0,i.default)({justifyContent:"end"},d.stopPropagation),l.default.createElement(m.IconButton,{onClick:Q,noBorder:!0,icon:l.default.createElement(O.default,null),label:t({id:(0,w.getTrad)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:"".concat(e.version)})}),l.default.createElement(d.CheckPermissions,{permissions:_.default.regenerate},l.default.createElement(m.IconButton,{onClick:function(){return t=e.version,void M.mutate({version:t,prefix:null===r||void 0===r?void 0:r.prefix});var t},noBorder:!0,icon:l.default.createElement(T.default,null),label:t({id:(0,w.getTrad)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:"".concat(e.version)})})),l.default.createElement(d.CheckPermissions,{permissions:_.default.update},e.version!==r.currentVersion&&l.default.createElement(m.IconButton,{onClick:function(){return t=e.version,V(t),void D(!C);var t},noBorder:!0,icon:l.default.createElement(x.default,null),label:t({id:(0,w.getTrad)("pages.PluginPage.table.icon.delete"),defaultMessage:"Delete {target}"},{target:"".concat(e.version)})})))))})))):l.default.createElement(d.EmptyStateLayout,null)),l.default.createElement(d.ConfirmDialog,{isConfirmButtonLoading:L,onConfirm:q,onToggleDialog:function(){D(!C)},isOpen:C})))};t.default=M},44301:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.updateSettings=t.regenerateDoc=t.fetchDocumentationVersions=t.deleteDoc=void 0;var o=r(n(87757)),a=r(n(48926)),i=n(68547),u=r(n(15036));t.deleteDoc=function(e){var t=e.prefix,n=e.version;return(0,i.request)("".concat(t,"/deleteDoc/").concat(n),{method:"DELETE"})};var c=function(){var e=(0,a.default)(o.default.mark((function e(t){var n;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.request)("/".concat(u.default,"/getInfos"),{method:"GET"});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),t({type:"warning",message:{id:"notification.error"}}),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t.fetchDocumentationVersions=c;t.regenerateDoc=function(e){var t=e.prefix,n=e.version;return(0,i.request)("".concat(t,"/regenerateDoc"),{method:"POST",body:{version:n}})};t.updateSettings=function(e){var t=e.prefix,n=e.body;return(0,i.request)("".concat(t,"/updateSettings"),{method:"PUT",body:n})}},98730:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(23724),a=n(68547),i=n(44301),u=r(n(10486)),c=function(){var e=(0,o.useQueryClient)(),t=(0,a.useNotification)(),n=(0,o.useQuery)("get-documentation",(function(){return(0,i.fetchDocumentationVersions)(t)})),r=n.isLoading,c=n.data,l=function(e){t({type:"warning",message:e.response.payload.message})},s=function(n,r){e.invalidateQueries("get-documentation"),t({type:n,message:{id:(0,u.default)(r)}})};return{data:c,isLoading:r,deleteMutation:(0,o.useMutation)(i.deleteDoc,{onSuccess:function(){return s("info","notification.delete.success")},onError:function(e){return l(e)}}),submitMutation:(0,o.useMutation)(i.updateSettings,{onSuccess:function(){return s("success","notification.update.success")},onError:l}),regenerateDocMutation:(0,o.useMutation)(i.regenerateDoc,{onSuccess:function(){return s("info","notification.generate.success")},onError:function(e){return l(e)}})}};t.default=c},10486:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(15036)),a=function(e){return"".concat(o.default,".").concat(e)};t.default=a},91e3:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getTrad",{enumerable:!0,get:function(){return o.default}});var o=r(n(10486))},59954:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(96486),o=function(e){var t=(0,r.startsWith)(e,"/")?"".concat(strapi.backendURL).concat(e):(0,r.startsWith)(e,"https")||(0,r.startsWith)(e,"http")?e:"".concat(strapi.backendURL,"/").concat(e);return window.open(t,"_blank"),window.focus()};t.default=o}}]);