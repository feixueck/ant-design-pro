(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6989],{8212:function(W,R,o){"use strict";o.d(R,{Z:function(){return m}});var y=o(28991),E=o(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},X=l,z=o(27029),A=function(Q,J){return E.createElement(z.Z,(0,y.Z)((0,y.Z)({},Q),{},{ref:J,icon:X}))};A.displayName="EditOutlined";var m=E.forwardRef(A)},34719:function(W){W.exports={"ant-typography":"ant-typography","ant-typography-secondary":"ant-typography-secondary","ant-typography-success":"ant-typography-success","ant-typography-warning":"ant-typography-warning","ant-typography-danger":"ant-typography-danger","ant-typography-disabled":"ant-typography-disabled","ant-typography-ellipsis":"ant-typography-ellipsis","ant-typography-expand":"ant-typography-expand","ant-typography-edit":"ant-typography-edit","ant-typography-copy":"ant-typography-copy","ant-typography-copy-success":"ant-typography-copy-success","ant-typography-edit-content":"ant-typography-edit-content","ant-typography-edit-content-confirm":"ant-typography-edit-content-confirm","ant-typography-single-line":"ant-typography-single-line","ant-typography-ellipsis-single-line":"ant-typography-ellipsis-single-line","ant-typography-ellipsis-multiple-line":"ant-typography-ellipsis-multiple-line","ant-typography-rtl":"ant-typography-rtl"}},59289:function(W,R,o){"use strict";o.d(R,{Z:function(){return ct}});var y=o(22122),E=o(96156),l=o(67294),X=o(94184),z=o.n(X),A=o(42550),m=o(65632),P=o(21687),Q=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},J=function(r,a){var e=r.prefixCls,t=r.component,i=t===void 0?"article":t,s=r.className,p=r["aria-label"],c=r.setContentRef,d=r.children,f=Q(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=a;return c&&((0,P.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,A.sQ)(a,c)),l.createElement(m.C,null,function(h){var b=h.getPrefixCls,I=h.direction,L=i,O=b("typography",e),U=z()(O,(0,E.Z)({},"".concat(O,"-rtl"),I==="rtl"),s);return l.createElement(L,(0,y.Z)({className:U,"aria-label":p,ref:u},f),d)})},G=l.forwardRef(J);G.displayName="Typography";var F=G,C=F,K=o(90484),_=o(98423),M=o(85061),Y=o(6610),Ce=o(5991),xe=o(10379),be=o(60446),ne=o(50344),Oe=o(20640),Se=o.n(Oe),Ze=o(8212),Te=o(79508),Ne=o(99165),Pe=o(4084),Re=o(69224),Le=o(42051),fe=o(34952),re=o(32637),ye=o(31808),ae=o(69713),we=o(28481),ve=o(15105),he=o(28991),De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ae=De,Ie=o(27029),ge=function(r,a){return l.createElement(Ie.Z,(0,he.Z)((0,he.Z)({},r),{},{ref:a,icon:Ae}))};ge.displayName="EnterOutlined";var je=l.forwardRef(ge),Me=o(45839),ke=function(r){var a=r.prefixCls,e=r["aria-label"],t=r.className,i=r.style,s=r.direction,p=r.maxLength,c=r.autoSize,d=c===void 0?!0:c,f=r.value,u=r.onSave,h=r.onCancel,b=r.onEnd,I=l.useRef(),L=l.useRef(!1),O=l.useRef(),U=l.useState(f),$=(0,we.Z)(U,2),w=$[0],V=$[1];l.useEffect(function(){V(f)},[f]),l.useEffect(function(){if(I.current&&I.current.resizableTextArea){var x=I.current.resizableTextArea.textArea;x.focus();var Z=x.value.length;x.setSelectionRange(Z,Z)}},[]);var v=function(Z){var N=Z.target;V(N.value.replace(/[\n\r]/g,""))},g=function(){L.current=!0},D=function(){L.current=!1},T=function(Z){var N=Z.keyCode;L.current||(O.current=N)},j=function(){u(w.trim())},B=function(Z){var N=Z.keyCode,ce=Z.ctrlKey,pe=Z.altKey,de=Z.metaKey,ue=Z.shiftKey;O.current===N&&!L.current&&!ce&&!pe&&!de&&!ue&&(N===ve.Z.ENTER?(j(),b==null||b()):N===ve.Z.ESC&&h())},k=function(){j()},H=z()(a,"".concat(a,"-edit-content"),(0,E.Z)({},"".concat(a,"-rtl"),s==="rtl"),t);return l.createElement("div",{className:H,style:i},l.createElement(Me.Z,{ref:I,maxLength:p,value:w,onChange:v,onKeyDown:T,onKeyUp:B,onCompositionStart:g,onCompositionEnd:D,onBlur:k,"aria-label":e,autoSize:d}),l.createElement(je,{className:"".concat(a,"-edit-content-confirm")}))},Ke=ke,ie=o(73935),Ue=1,ze=3,$e=8,S,oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function le(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function Be(n){var r=Array.prototype.slice.apply(n);return r.map(function(a){return"".concat(a,": ").concat(n.getPropertyValue(a),";")}).join("")}function He(n){var r=[];return n.forEach(function(a){var e=r[r.length-1];typeof a=="string"&&typeof e=="string"?r[r.length-1]+=a:r.push(a)}),r}function me(n,r){n.setAttribute("aria-hidden","true");var a=window.getComputedStyle(r),e=Be(a);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function We(n){var r=document.createElement("div");me(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var a=r.offsetHeight,e=le(window.getComputedStyle(n).lineHeight);return document.body.removeChild(r),a>e?a:e}var Fe=function(n,r,a,e,t){S||(S=document.createElement("div"),S.setAttribute("aria-hidden","true")),S.parentNode||document.body.appendChild(S);var i=r.rows,s=r.suffix,p=s===void 0?"":s,c=window.getComputedStyle(n),d=We(n),f=Math.floor(d)*(i+1)+le(c.paddingTop)+le(c.paddingBottom);me(S,n);var u=He((0,ne.Z)(a));(0,ie.render)(l.createElement("div",{style:oe},l.createElement("span",{style:oe},u,p),l.createElement("span",{style:oe},e)),S);function h(){return Math.ceil(S.getBoundingClientRect().height)<f}if(h())return(0,ie.unmountComponentAtNode)(S),{content:a,text:S.innerHTML,ellipsis:!1};var b=Array.prototype.slice.apply(S.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(v){var g=v.nodeType;return g!==$e}),I=Array.prototype.slice.apply(S.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,ie.unmountComponentAtNode)(S);var L=[];S.innerHTML="";var O=document.createElement("span");S.appendChild(O);var U=document.createTextNode(t+p);O.appendChild(U),I.forEach(function(v){S.appendChild(v)});function $(v){O.insertBefore(v,U)}function w(v,g){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g.length,j=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,B=Math.floor((D+T)/2),k=g.slice(0,B);if(v.textContent=k,D>=T-1)for(var H=T;H>=D;H-=1){var x=g.slice(0,H);if(v.textContent=x,h()||!x)return H===g.length?{finished:!1,reactNode:g}:{finished:!0,reactNode:x}}return h()?w(v,g,B,T,B):w(v,g,D,B,j)}function V(v,g){var D=v.nodeType;if(D===Ue)return $(v),h()?{finished:!1,reactNode:u[g]}:(O.removeChild(v),{finished:!0,reactNode:null});if(D===ze){var T=v.textContent||"",j=document.createTextNode(T);return $(j),w(j,T)}return{finished:!1,reactNode:null}}return b.some(function(v,g){var D=V(v,g),T=D.finished,j=D.reactNode;return j&&L.push(j),T}),{content:L,text:S.innerHTML,ellipsis:!0}},Ge=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},Ve=(0,ye.GL)("webkitLineClamp"),Xe=(0,ye.GL)("textOverflow");function Qe(n,r){var a=n.mark,e=n.code,t=n.underline,i=n.delete,s=n.strong,p=n.keyboard,c=n.italic,d=r;function f(u,h){!u||(d=l.createElement(h,{},d))}return f(s,"strong"),f(t,"u"),f(i,"del"),f(e,"code"),f(a,"mark"),f(p,"kbd"),f(c,"i"),d}function ee(n,r,a){return n===!0||n===void 0?r:n||a&&r}var Ee="...",se=function(n){(0,xe.Z)(a,n);var r=(0,be.Z)(a);function a(){var e;return(0,Y.Z)(this,a),e=r.apply(this,arguments),e.contentRef=l.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,i=e.context.getPrefixCls;return i("typography",t)},e.onExpandClick=function(t){var i,s=e.getEllipsis(),p=s.onExpand;e.setState({expanded:!0}),(i=p)===null||i===void 0||i(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var i=e.getEditable(),s=i.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,i;(i=(t=e.getEditable()).onCancel)===null||i===void 0||i.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var i=e.props,s=i.children,p=i.copyable,c=(0,y.Z)({},(0,K.Z)(p)==="object"?p:null);c.text===void 0&&(c.text=String(s)),Se()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var i=e.getEditable(),s=i.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){re.Z.cancel(e.rafId),e.rafId=(0,re.Z)(function(){e.syncEllipsis()})},e}return(0,Ce.Z)(a,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var i=this.props.children,s=this.getEllipsis(),p=this.getEllipsis(t);(i!==t.children||s.rows!==p.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),re.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var i=this.state.edit,s=t||this.props,p=s.editable;return p?(0,y.Z)({editing:i},(0,K.Z)(p)==="object"?p:null):{editing:i}}},{key:"getEllipsis",value:function(t){var i=t||this.props,s=i.ellipsis;return s?(0,y.Z)({rows:1,expandable:!1},(0,K.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,i=this.props,s=i.editable,p=i.copyable,c=this.getEllipsis(),d=c.rows,f=c.expandable,u=c.suffix,h=c.onEllipsis,b=c.tooltip;return u||b||s||p||f||!t||h?!1:d===1?Xe:Ve}},{key:"syncEllipsis",value:function(){var t=this.state,i=t.ellipsisText,s=t.isEllipsis,p=t.expanded,c=this.getEllipsis(),d=c.rows,f=c.suffix,u=c.onEllipsis,h=this.props.children;if(!(!d||d<0||!this.contentRef.current||p)&&!this.canUseCSSEllipsis()){(0,P.Z)((0,ne.Z)(h).every(function(U){return typeof U=="string"}),"Typography","`ellipsis` should use string as children only.");var b=Fe(this.contentRef.current,{rows:d,suffix:f},h,this.renderOperations(!0),Ee),I=b.content,L=b.text,O=b.ellipsis;(i!==L||s!==O)&&(this.setState({ellipsisText:L,ellipsisContent:I,isEllipsis:O}),s!==O&&u&&u(O))}}},{key:"renderExpand",value:function(t){var i=this.getEllipsis(),s=i.expandable,p=i.symbol,c=this.state,d=c.expanded,f=c.isEllipsis;if(!s||!t&&(d||!f))return null;var u;return p?u=p:u=this.expandStr,l.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var i=t.icon,s=t.tooltip,p=(0,ne.Z)(s)[0]||this.editStr,c=typeof p=="string"?p:"";return l.createElement(ae.Z,{key:"edit",title:s===!1?"":p},l.createElement(fe.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},i||l.createElement(Ze.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,i=this.props.copyable;if(!!i){var s=this.getPrefixCls(),p=i.tooltips,c=i.icon,d=Array.isArray(p)?p:[p],f=Array.isArray(c)?c:[c],u=t?ee(d[1],this.copiedStr):ee(d[0],this.copyStr),h=t?this.copiedStr:this.copyStr,b=typeof u=="string"?u:h;return l.createElement(ae.Z,{key:"copy",title:u},l.createElement(fe.Z,{className:z()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":b},t?ee(f[1],l.createElement(Te.Z,null),!0):ee(f[0],l.createElement(Ne.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,i=t.children,s=t.className,p=t.style,c=this.context.direction,d=this.getEditable(),f=d.maxLength,u=d.autoSize,h=d.onEnd;return l.createElement(Ke,{value:typeof i=="string"?i:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:h,prefixCls:this.getPrefixCls(),className:s,style:p,direction:c,maxLength:f,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(i){return i})}},{key:"renderContent",value:function(){var t=this,i=this.state,s=i.ellipsisContent,p=i.isEllipsis,c=i.expanded,d=this.props,f=d.component,u=d.children,h=d.className,b=d.type,I=d.disabled,L=d.style,O=Ge(d,["component","children","className","type","disabled","style"]),U=this.context.direction,$=this.getEllipsis(),w=$.rows,V=$.suffix,v=$.tooltip,g=this.getPrefixCls(),D=(0,_.Z)(O,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,M.Z)(Re.nf))),T=this.canUseCSSEllipsis(),j=w===1&&T,B=w&&w>1&&T,k=u;if(w&&p&&!c&&!T){var H=O.title,x=H||"";!H&&(typeof u=="string"||typeof u=="number")&&(x=String(u)),x=x.slice(String(s||"").length),k=l.createElement(l.Fragment,null,s,l.createElement("span",{title:x,"aria-hidden":"true"},Ee),V),v&&(k=l.createElement(ae.Z,{title:v===!0?u:v},l.createElement("span",null,k)))}else k=l.createElement(l.Fragment,null,u,V);return k=Qe(this.props,k),l.createElement(Le.Z,{componentName:"Text"},function(Z){var N,ce=Z.edit,pe=Z.copy,de=Z.copied,ue=Z.expand;return t.editStr=ce,t.copyStr=pe,t.copiedStr=de,t.expandStr=ue,l.createElement(Pe.Z,{onResize:t.resizeOnNextFrame,disabled:T},l.createElement(C,(0,y.Z)({className:z()((N={},(0,E.Z)(N,"".concat(g,"-").concat(b),b),(0,E.Z)(N,"".concat(g,"-disabled"),I),(0,E.Z)(N,"".concat(g,"-ellipsis"),w),(0,E.Z)(N,"".concat(g,"-single-line"),w===1),(0,E.Z)(N,"".concat(g,"-ellipsis-single-line"),j),(0,E.Z)(N,"".concat(g,"-ellipsis-multiple-line"),B),N),h),style:(0,y.Z)((0,y.Z)({},L),{WebkitLineClamp:B?w:void 0}),component:f,ref:t.contentRef,direction:U},D),k,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),i=t.editing;return i?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var i=t.children,s=t.editable;return(0,P.Z)(!s||typeof i=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),a}(l.Component);se.contextType=m.E_,se.defaultProps={children:""};var te=se,Je=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},Ye=function(r){var a=r.ellipsis,e=Je(r,["ellipsis"]),t=l.useMemo(function(){return a&&(0,K.Z)(a)==="object"?(0,_.Z)(a,["expandable","rows"]):a},[a]);return(0,P.Z)((0,K.Z)(a)!=="object"||!a||!("expandable"in a)&&!("rows"in a),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),l.createElement(te,(0,y.Z)({},e,{ellipsis:t,component:"span"}))},qe=Ye,_e=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},et=function(r,a){var e=r.ellipsis,t=r.rel,i=_e(r,["ellipsis","rel"]);(0,P.Z)((0,K.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=l.useRef(null);l.useImperativeHandle(a,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var p=(0,y.Z)((0,y.Z)({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,l.createElement(te,(0,y.Z)({},p,{ref:s,ellipsis:!!e,component:"a"}))},tt=l.forwardRef(et),nt=o(93355),rt=function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},at=(0,nt.a)(1,2,3,4,5),it=function(r){var a=r.level,e=a===void 0?1:a,t=rt(r,["level"]),i;return at.indexOf(e)!==-1?i="h".concat(e):((0,P.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),i="h1"),l.createElement(te,(0,y.Z)({},t,{component:i}))},ot=it,lt=function(r){return l.createElement(te,(0,y.Z)({},r,{component:"div"}))},st=lt,q=C;q.Text=qe,q.Link=tt,q.Title=ot,q.Paragraph=st;var ct=q},402:function(W,R,o){"use strict";var y=o(43673),E=o.n(y),l=o(34719),X=o.n(l),z=o(22385),A=o(47673)},20640:function(W,R,o){"use strict";var y=o(11742),E={"text/plain":"Text","text/html":"Url",default:"Text"},l="Copy to clipboard: #{key}, Enter";function X(A){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,m)}function z(A,m){var P,Q,J,G,F,C,K=!1;m||(m={}),P=m.debug||!1;try{J=y(),G=document.createRange(),F=document.getSelection(),C=document.createElement("span"),C.textContent=A,C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(M){if(M.stopPropagation(),m.format)if(M.preventDefault(),typeof M.clipboardData=="undefined"){P&&console.warn("unable to use e.clipboardData"),P&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Y=E[m.format]||E.default;window.clipboardData.setData(Y,A)}else M.clipboardData.clearData(),M.clipboardData.setData(m.format,A);m.onCopy&&(M.preventDefault(),m.onCopy(M.clipboardData))}),document.body.appendChild(C),G.selectNodeContents(C),F.addRange(G);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");K=!0}catch(M){P&&console.error("unable to copy using execCommand: ",M),P&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",A),m.onCopy&&m.onCopy(window.clipboardData),K=!0}catch(Y){P&&console.error("unable to copy using clipboardData: ",Y),P&&console.error("falling back to prompt"),Q=X("message"in m?m.message:l),window.prompt(Q,A)}}finally{F&&(typeof F.removeRange=="function"?F.removeRange(G):F.removeAllRanges()),C&&document.body.removeChild(C),J()}return K}W.exports=z},11742:function(W){W.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var o=document.activeElement,y=[],E=0;E<R.rangeCount;E++)y.push(R.getRangeAt(E));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||y.forEach(function(l){R.addRange(l)}),o&&o.focus()}}}}]);
