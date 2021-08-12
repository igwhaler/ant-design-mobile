webpackJsonp([32],{1063:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">wrap</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showNumber</span>\n              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Show number value\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),t=(a(11),o(a(181))),s=o(a(856)),e=function(){function n(n,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(t,a,s){return a&&n(t.prototype,a),s&&n(t,s),t}}();function o(n){return n&&n.__esModule?n:{default:n}}a(180),a(862);var p=function(a){function o(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,n));return t.onChange=function(n){t.setState({val:n})},t.onChange1=function(n){t.setState({val1:n})},t.state={val:3,val1:2},t}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(o,n.Component),e(o,[{key:"render",value:function(){return n.createElement(t.default,null,n.createElement(t.default.Item,{wrap:!0,extra:n.createElement(s.default,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange})},"Show number value"),n.createElement(t.default.Item,{extra:n.createElement(s.default,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"Disabled"))}}]),o}();return n.createElement(p,null)}}},570:function(n,t,a){n.exports={basic:a(1063)}},605:function(n,t,a){"use strict";t.__esModule=!0;var s=function(n){return n&&n.__esModule?n:{default:n}}(a(184));t.default=function(n,t,a){return t in n?(0,s.default)(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}},856:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},e=function(){function n(n,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(t,a,s){return a&&n(t.prototype,a),s&&n(t,s),t}}(),o=r(a(3)),p=function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t.default=n,t}(a(0)),u=r(a(857)),c=r(a(69));function r(n){return n&&n.__esModule?n:{default:n}}var i=function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]])}return a},l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.Component),e(t,[{key:"render",value:function(){var n=this,t=this.props,a=t.className,e=t.showNumber,r=i(t,["className","showNumber"]),l=(0,o.default)(a,function(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}({},"showNumber",!!e));return p.createElement(u.default,s({upHandler:p.createElement(c.default,{type:"plus",size:"xxs"}),downHandler:p.createElement(c.default,{type:"minus",size:"xxs"})},r,{ref:function(t){return n.stepperRef=t},className:l}))}}]),t}();t.default=l,l.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1},n.exports=t.default},857:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(605),e=a.n(s),o=a(34),p=a.n(o),u=a(65),c=a.n(u),r=a(68),i=a.n(r),l=a(66),f=a.n(l),k=a(67),d=a.n(k),m=a(0),h=a.n(m),v=a(3),b=a.n(v),g=a(858),y=a(859);function w(){}function x(n){n.preventDefault()}var O=function(n){function t(){c()(this,t);var n=f()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.setInput=function(t){n.input=t},n}return d()(t,n),i()(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentWillUpdate",value:function(){try{this.start=this.input.selectionStart,this.end=this.input.selectionEnd}catch(n){}}},{key:"componentDidUpdate",value:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.input.setSelectionRange(this.start,this.end):this.focus()}}},{key:"getRatio",value:function(n){var t=1;return n.metaKey||n.ctrlKey?t=.1:n.shiftKey&&(t=10),t}},{key:"getValueFromEvent",value:function(n){return n.target.value}},{key:"focus",value:function(){this.input.focus()}},{key:"formatWrapper",value:function(n){return this.props.formatter?this.props.formatter(n):n}},{key:"render",value:function(){var n,t=p()({},this.props),a=t.prefixCls,s=void 0===a?"":a,o=t.disabled,u=t.readOnly,c=t.max,r=t.min,i=b()((n={},e()(n,s,!0),e()(n,t.className,!!t.className),e()(n,s+"-disabled",o),e()(n,s+"-focused",this.state.focused),n)),l="",f="",k=this.state.value;if(k||0===k)if(isNaN(k))l=s+"-handler-up-disabled",f=s+"-handler-down-disabled";else{var d=Number(k);d>=c&&(l=s+"-handler-up-disabled"),d<=r&&(f=s+"-handler-down-disabled")}var m=!t.readOnly&&!t.disabled,v=void 0;void 0!==(v=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value))&&null!==v||(v="");var g,O;g={onTouchStart:m&&!l?this.up:w,onTouchEnd:this.stop},O={onTouchStart:m&&!f?this.down:w,onTouchEnd:this.stop};var N=this.formatWrapper(v),_=!!l||o||u,C=!!f||o||u;return h.a.createElement("div",{className:i,style:t.style},h.a.createElement("div",{className:s+"-handler-wrap"},h.a.createElement(y.a,p()({disabled:_,prefixCls:s,unselectable:"unselectable"},g,{role:"button","aria-label":"Increase Value","aria-disabled":!!_,className:s+"-handler "+s+"-handler-up "+l}),this.props.upHandler||h.a.createElement("span",{unselectable:"unselectable",className:s+"-handler-up-inner",onClick:x})),h.a.createElement(y.a,p()({disabled:C,prefixCls:s,unselectable:"unselectable"},O,{role:"button","aria-label":"Decrease Value","aria-disabled":!!C,className:s+"-handler "+s+"-handler-down "+f}),this.props.downHandler||h.a.createElement("span",{unselectable:"unselectable",className:s+"-handler-down-inner",onClick:x}))),h.a.createElement("div",{className:s+"-input-wrap",role:"spinbutton","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":k},h.a.createElement("input",{className:s+"-input",tabIndex:t.tabIndex,autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,autoFocus:t.autoFocus,readOnly:t.readOnly,disabled:t.disabled,max:t.max,min:t.min,step:t.step,onChange:this.onChange,ref:this.setInput,value:N})))}}]),t}(g.a);t.default=O,O.defaultProps=p()({},g.a.defaultProps,{focusOnUpDown:!1,useTouch:!1,prefixCls:"rmc-input-number"})},858:function(n,t,a){"use strict";var s=a(65),e=a.n(s),o=a(68),p=a.n(o),u=a(66),c=a.n(u),r=a(67),i=a.n(r),l=a(0),f=a.n(l);function k(){}var d=200,m=600,h=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,v=function(n){function t(n){e()(this,t);var a=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));a.onChange=function(n){var t=a.props,s=t.parser,e=t.onChange,o=s&&s(a.getValueFromEvent(n).trim());a.setState({inputValue:o}),e&&e(a.toNumberWhenUserInput(o))},a.onFocus=function(){a.setState({focused:!0});var n=a.props.onFocus;n&&n.apply(void 0,arguments)},a.onBlur=function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];a.setState({focused:!1});var o=a.getCurrentValidValue(a.state.inputValue);n.persist(),a.setValue(o,function(){var t=a.props.onBlur;t&&t.apply(void 0,[n].concat(s))})},a.getCurrentValidValue=function(n){var t=n;return t=""===t?"":a.isNotCompleteNumber(t)?a.state.value:a.getValidValue(t),a.toNumber(t)},a.getValidValue=function(n){var t=parseFloat(n);return isNaN(t)?n:(t<a.props.min&&(t=a.props.min),t>a.props.max&&(t=a.props.max),t)},a.setValue=function(n,t){var s=a.isNotCompleteNumber(parseFloat(n))?void 0:parseFloat(n),e=s!==a.state.value||""+s!=""+a.state.inputValue;if("value"in a.props?a.setState({inputValue:a.toPrecisionAsStep(a.state.value)},t):a.setState({value:s,inputValue:a.toPrecisionAsStep(n)},t),e){var o=a.props.onChange;o&&o(s)}},a.getPrecision=function(n){if("precision"in a.props)return a.props.precision;var t=n.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var s=0;return t.indexOf(".")>=0&&(s=t.length-t.indexOf(".")-1),s},a.getMaxPrecision=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in a.props)return a.props.precision;var s=a.props.step,e=a.getPrecision(t),o=a.getPrecision(s),p=a.getPrecision(n);return n?Math.max(p,e+o):e+o},a.getPrecisionFactor=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=a.getMaxPrecision(n,t);return Math.pow(10,s)},a.toPrecisionAsStep=function(n){if(a.isNotCompleteNumber(n)||""===n)return n;var t=Math.abs(a.getMaxPrecision(n));return isNaN(t)?n.toString():Number(n).toFixed(t)},a.isNotCompleteNumber=function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},a.toNumber=function(n){return a.isNotCompleteNumber(n)?n:"precision"in a.props?Number(Number(n).toFixed(a.props.precision)):Number(n)},a.toNumberWhenUserInput=function(n){return(/\.\d*0$/.test(n)||n.length>16)&&a.state.focused?n:a.toNumber(n)},a.stepCompute=function(n,t,s){var e=a.props,o=e.step,p=e.min,u=a.getPrecisionFactor(t,s),c=Math.abs(a.getMaxPrecision(t,s)),r=void 0,i="up"===n?1:-1;return r="number"==typeof t?((u*t+i*u*+o*s)/u).toFixed(c):p===-1/0?i*+o:p,a.toNumber(r)},a.step=function(n,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t&&t.preventDefault();var e=a.props;if(e.disabled)return!1;var o=a.getCurrentValidValue(a.state.inputValue)||0;if(a.isNotCompleteNumber(o))return!1;var p=a.stepCompute(n,o,s),u=p>e.max||p<e.min;return p>e.max?p=e.max:p<e.min&&(p=e.min),a.setValue(p),a.setState({focused:!0}),!u},a.stop=function(){a.autoStepTimer&&clearTimeout(a.autoStepTimer)},a.action=function(n,t,s,e){t.persist&&t.persist(),a.stop(),a.step(n,t,s)&&(a.autoStepTimer=setTimeout(function(){a.action(n,t,s,!0)},e?d:m))},a.down=function(n,t,s){a.action("down",n,t,s)},a.up=function(n,t,s){a.action("up",n,t,s)};var s=void 0;return s="value"in n?n.value:n.defaultValue,s=a.toNumber(s),a.state={inputValue:a.toPrecisionAsStep(s),value:s,focused:n.autoFocus},a}return i()(t,n),p()(t,[{key:"componentWillReceiveProps",value:function(n){if("value"in n){var t=this.state.focused?n.value:this.getValidValue(n.value);this.setState({value:t,inputValue:t})}}},{key:"componentWillUnmount",value:function(){this.stop()}}]),t}(f.a.Component);t.a=v,v.defaultProps={max:h,min:-h,step:1,style:{},onChange:k,onFocus:k,onBlur:k,parser:function(n){return n.replace(/[^\w\.-]+/g,"")}}},859:function(n,t,a){"use strict";var s=a(65),e=a.n(s),o=a(68),p=a.n(o),u=a(66),c=a.n(u),r=a(67),i=a.n(r),l=a(0),f=a.n(l),k=a(104),d=this&&this.__rest||function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]])}return a},m=function(n){function t(){return e()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i()(t,n),p()(t,[{key:"render",value:function(){var n=this.props,t=n.prefixCls,a=n.disabled,s=d(n,["prefixCls","disabled"]);return f.a.createElement(k.default,{disabled:a,activeClassName:t+"-handler-active"},f.a.createElement("span",s))}}]),t}(l.Component);t.a=m},862:function(n,t,a){"use strict";a(35),a(70),a(863)},863:function(n,t){}});