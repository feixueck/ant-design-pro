(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5103],{64335:function(D,W,l){"use strict";var H=l(67294),j=(0,H.createContext)({});W.Z=j},85224:function(D,W,l){"use strict";var H=l(84305),j=l(69224),p=l(67294),w=l(94184),Z=l.n(w),Y=l(97435),R=l(28267),$=l.n(R),U=l(64335),i=["children","className","extra","style","renderContent"];function T(){return T=Object.assign||function(o){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(o[g]=u[g])}return o},T.apply(this,arguments)}function I(o,s){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);s&&(g=g.filter(function(N){return Object.getOwnPropertyDescriptor(o,N).enumerable})),u.push.apply(u,g)}return u}function F(o){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?I(Object(u),!0).forEach(function(g){G(o,g,u[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):I(Object(u)).forEach(function(g){Object.defineProperty(o,g,Object.getOwnPropertyDescriptor(u,g))})}return o}function G(o,s,u){return s in o?Object.defineProperty(o,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[s]=u,o}function B(o,s){if(o==null)return{};var u=V(o,s),g,N;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);for(N=0;N<S.length;N++)g=S[N],!(s.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,g)||(u[g]=o[g]))}return u}function V(o,s){if(o==null)return{};var u={},g=Object.keys(o),N,S;for(S=0;S<g.length;S++)N=g[S],!(s.indexOf(N)>=0)&&(u[N]=o[N]);return u}var f=function(s){var u=s.children,g=s.className,N=s.extra,S=s.style,k=s.renderContent,z=B(s,i),ge=(0,p.useContext)(j.ZP.ConfigContext),ee=ge.getPrefixCls,ce=s.prefixCls||ee("pro"),J="".concat(ce,"-footer-bar"),O=(0,p.useContext)(U.Z),L=(0,p.useMemo)(function(){var X=O.hasSiderMenu,he=O.isMobile,se=O.siderWidth;if(!!X)return se?he?"100%":"calc(100% - ".concat(se,"px)"):"100%"},[O.collapsed,O.hasSiderMenu,O.isMobile,O.siderWidth]),Q=p.createElement(p.Fragment,null,p.createElement("div",{className:"".concat(J,"-left")},N),p.createElement("div",{className:"".concat(J,"-right")},u));return(0,p.useEffect)(function(){return!O||!(O==null?void 0:O.setHasFooterToolbar)?function(){}:(O==null||O.setHasFooterToolbar(!0),function(){var X;O==null||(X=O.setHasFooterToolbar)===null||X===void 0||X.call(O,!1)})},[]),p.createElement("div",T({className:Z()(g,"".concat(J)),style:F({width:L},S)},(0,Y.Z)(z,["prefixCls"])),k?k(F(F(F({},s),O),{},{leftWidth:L}),Q):Q)};W.Z=f},21349:function(D,W,l){"use strict";var H=l(84305),j=l(69224),p=l(17781),w=l.n(p),Z=l(67294),Y=l(94184),R=l.n(Y),$=l(64335),U=function(T){var I=(0,Z.useContext)($.Z),F=T.children,G=T.contentWidth,B=T.className,V=T.style,f=(0,Z.useContext)(j.ZP.ConfigContext),o=f.getPrefixCls,s=T.prefixCls||o("pro"),u=G||I.contentWidth,g="".concat(s,"-grid-content");return Z.createElement("div",{className:R()(g,B,{wide:u==="Fixed"}),style:V},Z.createElement("div",{className:"".concat(s,"-grid-content-children")},F))};W.Z=U},15103:function(D,W,l){"use strict";l.d(W,{H_:function(){return Ot},yy:function(){return qe},ZP:function(){return xt}});var H=l(43673),j=l(29938),p=l(22122),w=l(96156),Z=l(6610),Y=l(5991),R=l(10379),$=l(60446),U=l(90484),i=l(67294),T=l(94184),I=l.n(T),F=l(98423),G=l(4084),B=l(65632),V=l(85061),f=l(75164);function o(n){var e,r=function(c){return function(){e=null,n.apply(void 0,(0,V.Z)(c))}},t=function(){if(e==null){for(var c=arguments.length,v=new Array(c),d=0;d<c;d++)v[d]=arguments[d];e=(0,f.Z)(r(v))}};return t.cancel=function(){return f.Z.cancel(e)},t}function s(){return function(e,r,t){var a=t.value,c=!1;return{configurable:!0,get:function(){if(c||this===e.prototype||this.hasOwnProperty(r))return a;var d=o(a.bind(this));return c=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),c=!1,d}}}}var u=l(64019);function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function N(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function S(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],z=[];function ge(){return z}function ee(n,e){if(!!n){var r=z.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},z.push(r),k.forEach(function(t){r.eventHandlers[t]=(0,u.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function ce(n){var e=z.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(z=z.filter(function(r){return r!==e}),k.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var J=function(n,e,r,t){var a=arguments.length,c=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":(0,U.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(n,e,r,t);else for(var d=n.length-1;d>=0;d--)(v=n[d])&&(c=(a<3?v(c):a>3?v(e,r,c):v(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c};function O(){return typeof window!="undefined"?window:null}var L;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(L||(L={}));var Q=function(n){(0,R.Z)(r,n);var e=(0,$.Z)(r);function r(){var t;return(0,Z.Z)(this,r),t=e.apply(this,arguments),t.state={status:L.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,c=t.props.offsetTop;return a===void 0&&c===void 0&&(c=0),c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,c=a.status,v=a.lastAffix,d=t.props.onChange,m=t.getTargetFunc();if(!(c!==L.Prepare||!t.fixedNode||!t.placeholderNode||!m)){var y=t.getOffsetTop(),P=t.getOffsetBottom(),E=m();if(!!E){var h={status:L.None},b=g(E),C=g(t.placeholderNode),M=N(C,b,y),x=S(C,b,P);M!==void 0?(h.affixStyle={position:"fixed",top:M,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}):x!==void 0&&(h.affixStyle={position:"fixed",bottom:x,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}),h.lastAffix=!!h.affixStyle,d&&v!==h.lastAffix&&d(h.lastAffix),t.setState(h)}}},t.prepareMeasure=function(){if(t.setState({status:L.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,c=t.state,v=c.affixStyle,d=c.placeholderStyle,m=t.props,y=m.prefixCls,P=m.children,E=I()((0,w.Z)({},a("affix",y),!!v)),h=(0,F.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return i.createElement(G.Z,{onResize:function(){t.updatePosition()}},i.createElement("div",(0,p.Z)({},h,{ref:t.savePlaceholderNode}),v&&i.createElement("div",{style:d,"aria-hidden":"true"}),i.createElement("div",{className:E,ref:t.saveFixedNode,style:v},i.createElement(G.Z,{onResize:function(){t.updatePosition()}},P))))},t}return(0,Y.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,c=this.props.target;return c!==void 0?c:a||O}},{key:"componentDidMount",value:function(){var a=this,c=this.getTargetFunc();c&&(this.timeout=setTimeout(function(){ee(c(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var c=this.state.prevTarget,v=this.getTargetFunc(),d=null;v&&(d=v()||null),c!==d&&(ce(this),d&&(ee(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ce(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),c=this.state.affixStyle;if(a&&c){var v=this.getOffsetTop(),d=this.getOffsetBottom(),m=a();if(m&&this.placeholderNode){var y=g(m),P=g(this.placeholderNode),E=N(P,y,v),h=S(P,y,d);if(E!==void 0&&c.top===E||h!==void 0&&c.bottom===h)return}}this.prepareMeasure()}}]),r}(i.Component);Q.contextType=B.E_,J([s()],Q.prototype,"updatePosition",null),J([s()],Q.prototype,"lazyUpdatePosition",null);var X=Q,he=l(84305),se=l(69224),Pe=l(51399),Ee=l(66157),Ie=l(30887),Le=l(59250),We=l(94233),Oe=l(28481),fe=l(28991),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},xe=Ce,pe=l(27029),be=function(e,r){return i.createElement(pe.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:xe}))};be.displayName="ArrowLeftOutlined";var Re=i.forwardRef(be),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,De=function(e,r){return i.createElement(pe.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:Ne}))};De.displayName="ArrowRightOutlined";var Ue=i.forwardRef(De),Ke=l(50344),Be=l(57254),_e=l(81555),He=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Se=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.children,v=e.overlay,d=e.dropdownProps,m=He(e,["prefixCls","separator","children","overlay","dropdownProps"]),y=i.useContext(B.E_),P=y.getPrefixCls,E=P("breadcrumb",r),h=function(M){return v?i.createElement(_e.Z,(0,p.Z)({overlay:v,placement:"bottomCenter"},d),i.createElement("span",{className:"".concat(E,"-overlay-link")},M,i.createElement(Be.Z,null))):M},b;return"href"in m?b=i.createElement("a",(0,p.Z)({className:"".concat(E,"-link")},m),c):b=i.createElement("span",(0,p.Z)({className:"".concat(E,"-link")},m),c),b=h(b),c?i.createElement("span",null,b,a&&i.createElement("span",{className:"".concat(E,"-separator")},a)):null};Se.__ANT_BREADCRUMB_ITEM=!0;var ye=Se,Me=function(e){var r=e.children,t=i.useContext(B.E_),a=t.getPrefixCls,c=a("breadcrumb");return i.createElement("span",{className:"".concat(c,"-separator")},r||"/")};Me.__ANT_BREADCRUMB_SEPARATOR=!0;var Ae=Me,ie=l(99210),q=l(21687),te=l(96159),Fe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function ze(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,c){return e[c]||a});return t}function $e(n,e,r,t){var a=r.indexOf(n)===r.length-1,c=ze(n,e);return a?i.createElement("span",null,c):i.createElement("a",{href:"#/".concat(t.join("/"))},c)}var we=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,V.Z)(e),c=we(r,t);return c&&a.push(c),a},ve=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,c=e.style,v=e.className,d=e.routes,m=e.children,y=e.itemRender,P=y===void 0?$e:y,E=e.params,h=E===void 0?{}:E,b=Fe(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=i.useContext(B.E_),M=C.getPrefixCls,x=C.direction,K,me=M("breadcrumb",r);if(d&&d.length>0){var ne=[];K=d.map(function(A){var ae=we(A.path,h);ae&&ne.push(ae);var ue;return A.children&&A.children.length&&(ue=i.createElement(ie.Z,null,A.children.map(function(oe){return i.createElement(ie.Z.Item,{key:oe.path||oe.breadcrumbName},P(oe,h,d,Ge(ne,oe.path,h)))}))),i.createElement(ye,{overlay:ue,separator:a,key:ae||A.breadcrumbName},P(A,h,d,ne))})}else m&&(K=(0,Ke.Z)(m).map(function(A,ae){return A&&((0,q.Z)(A.type&&(A.type.__ANT_BREADCRUMB_ITEM===!0||A.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,te.Tm)(A,{separator:a,key:ae}))}));var _=I()(me,(0,w.Z)({},"".concat(me,"-rtl"),x==="rtl"),v);return i.createElement("div",(0,p.Z)({className:_,style:c},b),K)};ve.Item=ye,ve.Separator=Ae;var de=ve,Ze=de,tt=l(51890),rt=l(34952),nt=l(42051),at=function(e,r,t){return!r||!t?null:i.createElement(nt.Z,{componentName:"PageHeader"},function(a){var c=a.back;return i.createElement("div",{className:"".concat(e,"-back")},i.createElement(rt.Z,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":c},r))})},ot=function(e){return i.createElement(Ze,e)},it=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.createElement(Ue,null):i.createElement(Re,null)},lt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,c=r.avatar,v=r.subTitle,d=r.tags,m=r.extra,y=r.onBack,P="".concat(e,"-heading"),E=a||v||d||m;if(!E)return null;var h=it(r,t),b=at(e,h,y),C=b||c||E;return i.createElement("div",{className:P},C&&i.createElement("div",{className:"".concat(P,"-left")},b,c&&i.createElement(tt.C,c),a&&i.createElement("span",{className:"".concat(P,"-title"),title:typeof a=="string"?a:void 0},a),v&&i.createElement("span",{className:"".concat(P,"-sub-title"),title:typeof v=="string"?v:void 0},v),d&&i.createElement("span",{className:"".concat(P,"-tags")},d)),m&&i.createElement("span",{className:"".concat(P,"-extra")},m))},ct=function(e,r){return r?i.createElement("div",{className:"".concat(e,"-footer")},r):null},st=function(e,r){return i.createElement("div",{className:"".concat(e,"-content")},r)},ft=function(e){var r=i.useState(!1),t=(0,Oe.Z)(r,2),a=t[0],c=t[1],v=function(m){var y=m.width;c(y<768)};return i.createElement(B.C,null,function(d){var m,y=d.getPrefixCls,P=d.pageHeader,E=d.direction,h=e.prefixCls,b=e.style,C=e.footer,M=e.children,x=e.breadcrumb,K=e.breadcrumbRender,me=e.className,ne=!0;"ghost"in e?ne=e.ghost:P&&"ghost"in P&&(ne=P.ghost);var _=y("page-header",h),A=function(){var Ye;return((Ye=x)===null||Ye===void 0?void 0:Ye.routes)?ot(x):null},ae=A(),ue=x&&"props"in x,oe=(K==null?void 0:K(e,ae))||ae,et=ue?x:oe,Rt=I()(_,me,(m={"has-breadcrumb":!!et,"has-footer":!!C},(0,w.Z)(m,"".concat(_,"-ghost"),ne),(0,w.Z)(m,"".concat(_,"-rtl"),E==="rtl"),(0,w.Z)(m,"".concat(_,"-compact"),a),m));return i.createElement(G.Z,{onResize:v},i.createElement("div",{className:Rt,style:b},et,lt(_,e,E),M&&st(_,M),ct(_,C)))})},dt=ft,Tt=l(18106),Ve=l(51752),ke=l(64335),ut=l(21349),vt=l(85224),Nt=l(32331),mt=l(83832),gt=l(9960),ht=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],pt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Je(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function re(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Je(Object(r),!0).forEach(function(t){Xe(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Xe(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Qe(n,e){if(n==null)return{};var r=bt(n,e),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function bt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function le(){return le=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},le.apply(this,arguments)}function je(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(r){return typeof r}:je=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},je(n)}function yt(n){return je(n)==="object"?n:{spinning:n}}var Pt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,c=e.tabBarExtraContent,v=e.tabProps,d=e.prefixedClassName;return r&&r.length?i.createElement(Ve.Z,le({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(y){a&&a(y)},tabBarExtraContent:c},v),r.map(function(m,y){return i.createElement(Ve.Z.TabPane,le({},m,{tab:m.tab,key:m.key||y}))})):null},Et=function(e,r,t){return!e&&!r?null:i.createElement("div",{className:"".concat(t,"-detail")},i.createElement("div",{className:"".concat(t,"-main")},i.createElement("div",{className:"".concat(t,"-row")},e&&i.createElement("div",{className:"".concat(t,"-content")},e),r&&i.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Ot=function(e){var r=(0,i.useContext)(ke.Z);return i.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},i.createElement(Ze,le({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},qe=function(e){var r,t=(0,i.useContext)(ke.Z),a=e.title,c=e.content,v=e.pageHeaderRender,d=e.header,m=e.prefixedClassName,y=e.extraContent,P=e.style,E=e.prefixCls,h=e.breadcrumbRender,b=Qe(e,ht);if(v===!1)return null;if(v)return i.createElement(i.Fragment,null," ",v(re(re({},e),t)));var C=a;!a&&a!==!1&&(C=t.title);var M=re(re(re({},t),{},{title:C},b),{},{footer:Pt(re(re({},b),{},{breadcrumbRender:h,prefixedClassName:m}))},d),x=M.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(K){return!M[K]})&&(!x||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length))&&!c&&!y?null:i.createElement("div",{className:"".concat(m,"-warp")},i.createElement(dt,le({},M,{breadcrumb:h===!1?void 0:re(re({},M.breadcrumb),t.breadcrumbProps),prefixCls:E}),(d==null?void 0:d.children)||Et(c,y,m)))},Ct=function(e){var r,t=e.children,a=e.loading,c=a===void 0?!1:a,v=e.className,d=e.style,m=e.footer,y=e.affixProps,P=e.ghost,E=e.fixedHeader,h=Qe(e,pt),b=(0,i.useContext)(ke.Z),C=(0,i.useContext)(se.ZP.ConfigContext),M=C.getPrefixCls,x=e.prefixCls||M("pro"),K="".concat(x,"-page-container"),me=I()(K,v,(r={},Xe(r,"".concat(x,"-page-container-ghost"),P),Xe(r,"".concat(x,"-page-container-with-footer"),m),r)),ne=t?i.createElement("div",null,i.createElement("div",{className:"".concat(K,"-children-content")},t),b.hasFooterToolbar&&i.createElement("div",{style:{height:48,marginTop:24}})):null,_=i.createElement(qe,le({},h,{ghost:P,prefixCls:void 0,prefixedClassName:K})),A=function(){var ue=yt(c),oe=ue.spinning?i.createElement(mt.Z,ue):ne;return e.waterMarkProps||b.waterMarkProps?i.createElement(gt.Z,e.waterMarkProps||b.waterMarkProps,oe):oe};return i.createElement("div",{style:d,className:me},E&&_?i.createElement(X,le({offsetTop:b.hasHeader&&b.fixedHeader?b.headerHeight:0},y),_):_,i.createElement(ut.Z,null,A()),m&&i.createElement(vt.Z,{prefixCls:x},m))},xt=Ct},9960:function(D,W,l){"use strict";var H=l(84305),j=l(69224),p=l(67294),w=l(94184),Z=l.n(w);function Y(f,o){var s=Object.keys(f);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(f);o&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(f,g).enumerable})),s.push.apply(s,u)}return s}function R(f){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?Y(Object(s),!0).forEach(function(u){$(f,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach(function(u){Object.defineProperty(f,u,Object.getOwnPropertyDescriptor(s,u))})}return f}function $(f,o,s){return o in f?Object.defineProperty(f,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):f[o]=s,f}function U(f,o){return G(f)||F(f,o)||T(f,o)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(f,o){if(!!f){if(typeof f=="string")return I(f,o);var s=Object.prototype.toString.call(f).slice(8,-1);if(s==="Object"&&f.constructor&&(s=f.constructor.name),s==="Map"||s==="Set")return Array.from(f);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I(f,o)}}function I(f,o){(o==null||o>f.length)&&(o=f.length);for(var s=0,u=new Array(o);s<o;s++)u[s]=f[s];return u}function F(f,o){var s=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(s!=null){var u=[],g=!0,N=!1,S,k;try{for(s=s.call(f);!(g=(S=s.next()).done)&&(u.push(S.value),!(o&&u.length===o));g=!0);}catch(z){N=!0,k=z}finally{try{!g&&s.return!=null&&s.return()}finally{if(N)throw k}}return u}}function G(f){if(Array.isArray(f))return f}var B=function(o){if(!o)return 1;var s=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/s},V=function(o){var s=o.children,u=o.style,g=o.className,N=o.markStyle,S=o.markClassName,k=o.zIndex,z=k===void 0?9:k,ge=o.gapX,ee=ge===void 0?212:ge,ce=o.gapY,J=ce===void 0?222:ce,O=o.width,L=O===void 0?120:O,Q=o.height,X=Q===void 0?64:Q,he=o.rotate,se=he===void 0?-22:he,Pe=o.image,Ee=o.content,Ie=o.offsetLeft,Le=o.offsetTop,We=o.fontStyle,Oe=We===void 0?"normal":We,fe=o.fontWeight,Ce=fe===void 0?"normal":fe,xe=o.fontColor,pe=xe===void 0?"rgba(0,0,0,.15)":xe,be=o.fontSize,Re=be===void 0?16:be,Te=o.fontFamily,Ne=Te===void 0?"sans-serif":Te,De=o.prefixCls,Ue=(0,p.useContext)(j.ZP.ConfigContext),Ke=Ue.getPrefixCls,Be=Ke("pro-layout-watermark",De),_e=Z()("".concat(Be,"-wrapper"),g),He=Z()(Be,S),Se=(0,p.useState)(""),ye=U(Se,2),Me=ye[0],Ae=ye[1];return(0,p.useEffect)(function(){var ie=document.createElement("canvas"),q=ie.getContext("2d"),te=B(q),Fe="".concat((ee+L)*te,"px"),ze="".concat((J+X)*te,"px"),$e=Ie||ee/2,we=Le||J/2;if(ie.setAttribute("width",Fe),ie.setAttribute("height",ze),q){q.translate($e*te,we*te),q.rotate(Math.PI/180*Number(se));var Ge=L*te,ve=X*te;if(Pe){var de=new Image;de.crossOrigin="anonymous",de.referrerPolicy="no-referrer",de.src=Pe,de.onload=function(){q.drawImage(de,0,0,Ge,ve),Ae(ie.toDataURL())}}else if(Ee){var Ze=Number(Re)*te;q.font="".concat(Oe," normal ").concat(Ce," ").concat(Ze,"px/").concat(ve,"px ").concat(Ne),q.fillStyle=pe,q.fillText(Ee,0,0),Ae(ie.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ee,J,Ie,Le,se,Oe,Ce,L,X,Ne,pe,Pe,Ee,Re]),p.createElement("div",{style:R({position:"relative"},u),className:_e},s,p.createElement("div",{className:He,style:R({zIndex:z,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ee+L,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Me,"')")},N)}))};W.Z=V},28267:function(D){D.exports={"ant-pro-footer-bar":"ant-pro-footer-bar","ant-pro-footer-bar-left":"ant-pro-footer-bar-left","ant-pro-footer-bar-right":"ant-pro-footer-bar-right"}},17781:function(D){D.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},32331:function(D){D.exports={"ant-pro-page-container-children-content":"ant-pro-page-container-children-content","ant-pro-page-container-warp":"ant-pro-page-container-warp","ant-tabs-nav":"ant-tabs-nav","ant-pro-page-container-ghost":"ant-pro-page-container-ghost","ant-pro-page-container-main":"ant-pro-page-container-main","ant-pro-page-container-detail":"ant-pro-page-container-detail","ant-pro-page-container-row":"ant-pro-page-container-row","ant-pro-page-container-title-content":"ant-pro-page-container-title-content","ant-pro-page-container-title":"ant-pro-page-container-title","ant-pro-page-container-content":"ant-pro-page-container-content","ant-pro-page-container-extraContent":"ant-pro-page-container-extraContent","ant-pro-page-container-logo":"ant-pro-page-container-logo","ant-pro-page-container-action":"ant-pro-page-container-action"}},29938:function(D){D.exports={"ant-affix":"ant-affix"}},66157:function(D){D.exports={"ant-breadcrumb":"ant-breadcrumb",anticon:"anticon","ant-breadcrumb-separator":"ant-breadcrumb-separator","ant-breadcrumb-link":"ant-breadcrumb-link","ant-breadcrumb-overlay-link":"ant-breadcrumb-overlay-link","ant-breadcrumb-rtl":"ant-breadcrumb-rtl"}},51399:function(D){D.exports={"ant-page-header":"ant-page-header","ant-page-header-ghost":"ant-page-header-ghost","has-breadcrumb":"has-breadcrumb","has-footer":"has-footer","ant-page-header-back":"ant-page-header-back","ant-page-header-back-button":"ant-page-header-back-button","ant-divider-vertical":"ant-divider-vertical","ant-breadcrumb":"ant-breadcrumb","ant-page-header-heading":"ant-page-header-heading","ant-page-header-heading-left":"ant-page-header-heading-left","ant-page-header-heading-title":"ant-page-header-heading-title","ant-avatar":"ant-avatar","ant-page-header-heading-sub-title":"ant-page-header-heading-sub-title","ant-page-header-heading-extra":"ant-page-header-heading-extra","ant-page-header-content":"ant-page-header-content","ant-page-header-footer":"ant-page-header-footer","ant-tabs":"ant-tabs","ant-tabs-nav":"ant-tabs-nav","ant-tabs-tab":"ant-tabs-tab","ant-page-header-compact":"ant-page-header-compact","ant-page-header-rtl":"ant-page-header-rtl","ant-page-header-heading-tags":"ant-page-header-heading-tags","ant-tabs-bar":"ant-tabs-bar"}},34952:function(D,W,l){"use strict";var H=l(22122),j=l(67294),p=l(15105),w=function(R,$){var U={};for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&$.indexOf(i)<0&&(U[i]=R[i]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,i=Object.getOwnPropertySymbols(R);T<i.length;T++)$.indexOf(i[T])<0&&Object.prototype.propertyIsEnumerable.call(R,i[T])&&(U[i[T]]=R[i[T]]);return U},Z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Y=j.forwardRef(function(R,$){var U=function(f){var o=f.keyCode;o===p.Z.ENTER&&f.preventDefault()},i=function(f){var o=f.keyCode,s=R.onClick;o===p.Z.ENTER&&s&&s()},T=R.style,I=R.noStyle,F=R.disabled,G=w(R,["style","noStyle","disabled"]),B={};return I||(B=(0,H.Z)({},Z)),F&&(B.pointerEvents="none"),B=(0,H.Z)((0,H.Z)({},B),T),j.createElement("div",(0,H.Z)({role:"button",tabIndex:0,ref:$},G,{onKeyDown:U,onKeyUp:i,style:B}))});W.Z=Y},97435:function(D,W){"use strict";function l(H,j){for(var p=Object.assign({},H),w=0;w<j.length;w+=1){var Z=j[w];delete p[Z]}return p}W.Z=l}}]);
