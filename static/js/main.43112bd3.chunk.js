(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),s=(n(39),n(40),n(71)),o=n(21),d=n.n(o),u=n(25),l=n(32),h=n(72),p=n(29),g=n.n(p),j=n(4),b=function(){var e=a.a.useRef(),t=a.a.useRef(),n=a.a.useRef(),c=a.a.useState({}),i=Object(l.a)(c,2),s=i[0],o=i[1];function p(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(d.a.mark((function e(){var t,n,r,a,c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:return n=e.sent,r=n[0],a=n[0].getCapabilities(),c=r.getSettings(),console.log(a,c),i={width:{ideal:a.width.max},height:{ideal:a.height.max}},e.prev=21,e.next=24,r.applyConstraints(i);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(21),alert(e.t1);case 29:return s=r.getSettings(),o(s),e.abrupt("return",{stream:t,settings:s});case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2);case 37:case"end":return e.stop()}}),e,null,[[1,34],[2,8],[21,26]])})))).apply(this,arguments)}Object(r.useEffect)(Object(u.a)(d.a.mark((function n(){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:r=n.sent,e.current&&("srcObject"in e.current?e.current.srcObject=r.stream:e.src=window.URL.createObjectURL(r.stream),t.current.width=r.settings.width,t.current.height=r.settings.height);case 4:case"end":return n.stop()}}),n)}))),[e,t]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{marginBottom:"16px",display:"none"},children:Object(j.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(n){console.log("loaded",s);var r=t.current.getContext("2d");setInterval((function(){r.drawImage(e.current,0,0)}),30)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("canvas",{ref:t,style:{border:"solid 2px red"}})}),Object(j.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"}),Object(j.jsx)("div",{id:"changeVideo",children:Object(j.jsx)(h.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var e=t.current.toDataURL("image/png");n.current.href=e,n.current.download="MyPhoto.png",n.current.click(),window.URL.revokeObjectURL(e)},children:Object(j.jsx)(g.a,{style:{fontSize:100}})})}),Object(j.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"})]})},f=n(31);var v=function(){return Object(j.jsx)(s.a,{backend:f.a,options:{enableMouseEvents:!0},children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(b,{})})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[52,1,2]]]);
//# sourceMappingURL=main.43112bd3.chunk.js.map