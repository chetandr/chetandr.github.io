(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('[{"name":"Root","children":[{"name":"Child 1","children":[{"name":"Grand Child"}]},{"name":"Child 2","children":[{"name":"Grand Child","children":[{"name":"Great Grand Child 1"},{"name":"Grand Grand Child 2"}]}]},{"name":"Child 2"}]}]')},49:function(e,t,n){},50:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);n(49),n(50);var c=n(5),r=n(91),a=n(25),i=n(0),s=n.n(i),d=n(89),o=n(37),l=n(2),h=function e(t){return Object(l.jsx)("ul",{children:t.data.map((function(t){var n;return Object(l.jsx)(i.Fragment,{children:Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-body",children:t.name}),Object(l.jsx)("div",{})]}),(null===(n=t.children)||void 0===n?void 0:n.length)&&Object(l.jsx)(e,{data:t.children})]})},t.name)}))})},u=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=(t[0],t[1]),c=Object(i.useRef)();return console.log(),Object(l.jsxs)("div",{className:"org-tree",children:[Object(l.jsx)("textarea",{ref:c}),Object(l.jsx)(d.a,{onClick:function(){n(c.current.value),console.log(c.current.value.split("\n"));var e=c.current.value.split("\n"),t={},r=1,a=3;e.map((function(e){var n=e.split(","),c=n[a]?n[a]:"root";t.hasOwnProperty(c)?t[c].children.push(n[r]):t[c]={children:[n[r]]}})),console.log(t)},children:"Update"}),Object(l.jsx)(h,{data:o})]})},j=n(26),b=n.n(j),x=n(33),g=n(90),p=n(42),v=n.n(p),O=function(e){var t=[];if(e.debugData)for(var n in e.debugData)t.push(Object(l.jsxs)("div",{className:"debugRow",children:[Object(l.jsxs)("span",{className:"debugLabel",children:[n," : "]}),Object(l.jsx)("span",{className:"debugValue",children:e.debugData[n]})]}));return t},f=function(){var e=s.a.useRef(),t=s.a.useRef(),n=s.a.useRef(),c=s.a.useState({}),r=Object(a.a)(c,2),d=r[0],o=r[1],h=s.a.useState({}),u=Object(a.a)(h,2),j=u[0];u[1];function p(){return f.apply(this,arguments)}function f(){return(f=Object(x.a)(b.a.mark((function e(){var t,n,c,r,a,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:return n=e.sent,c=n[0],r=n[0].getCapabilities(),a=c.getSettings(),console.log(r,a),i={width:{ideal:r.width.max},height:{ideal:r.height.max}},e.prev=21,e.next=24,c.applyConstraints(i);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(21),alert(e.t1);case 29:return s=c.getSettings(),o(s),e.abrupt("return",{stream:t,settings:s});case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2);case 37:case"end":return e.stop()}}),e,null,[[1,34],[2,8],[21,26]])})))).apply(this,arguments)}Object(i.useEffect)(Object(x.a)(b.a.mark((function n(){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:c=n.sent,e.current&&("srcObject"in e.current?e.current.srcObject=c.stream:e.src=window.URL.createObjectURL(c.stream),t.current.width=window.innerWidth,t.current.height=window.innerHeight);case 4:case"end":return n.stop()}}),n)}))),[e,t]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"debug",children:Object(l.jsx)(O,{debugData:j})}),Object(l.jsx)("div",{style:{marginBottom:"16px",display:"none"},children:Object(l.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(n){console.log("loaded",d);var c,r,a=t.current.getContext("2d"),i=("".concat(d.width,"x").concat(d.height),"".concat(e.current.videoWidth,"x").concat(e.current.videoWidth),"".concat(window.availWidth,"x").concat(window.availHeight),"".concat(window.innerWidth,"x").concat(window.innerHeight),d.width),s=d.height,o=i/s,l=0,h=0;i>s?(c=t.current.width,r=t.current.width/o,l=(t.current.height-r)/2):(c=t.current.height,r=t.current.height*o,h=(t.current.width-c)/2),console.log(i,s,h,l,c,r),setInterval((function(){a.drawImage(e.current,h,l,c,r)}),30)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("canvas",{ref:t,style:{border:"solid 2px red"}})}),Object(l.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"}),Object(l.jsx)("div",{id:"changeVideo",children:Object(l.jsx)(g.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var e=t.current.toDataURL("image/png");n.current.href=e,n.current.download="MyPhoto.png",n.current.click(),window.URL.revokeObjectURL(e)},children:Object(l.jsx)(v.a,{style:{fontSize:100}})})}),Object(l.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"})]})},m=n(32),w=n(44);var y=function(){return Object(l.jsxs)(m.a,{children:[Object(l.jsx)(c.c,{children:Object(l.jsx)(c.a,{exact:!0,path:"/",children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(r.a,{backend:w.a,options:{enableMouseEvents:!0},children:Object(l.jsx)(f,{})})})})})}),Object(l.jsx)(c.c,{children:Object(l.jsx)(c.a,{path:"/hierarchy",exact:!0,children:Object(l.jsx)(u,{})})})]})},C=n(19),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n.n(C).a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),k()}},[[69,1,2]]]);
//# sourceMappingURL=main.ee87af4f.chunk.js.map