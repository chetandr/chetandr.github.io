(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(13),a=n.n(c),o=(n(39),n(40),n(71)),s=n(21),d=n.n(s),u=n(25),h=n(32),g=n(72),l=n(29),p=n.n(l),v=n(4),w=function(){var e=i.a.useRef(),t=i.a.useRef(),n=i.a.useRef(),c=i.a.useState({}),a=Object(h.a)(c,2),o=a[0],s=a[1];function l(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(d.a.mark((function e(){var t,n,r,i,c,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:return n=e.sent,r=n[0],i=n[0].getCapabilities(),c=r.getSettings(),console.log(i,c),a={width:{exact:i.width.max},height:{exact:i.height.max}},e.next=23,r.applyConstraints(a);case 23:return o=r.getSettings(),s(o),e.abrupt("return",{stream:t,settings:o});case 28:e.prev=28,e.t1=e.catch(1),console.error(e.t1);case 31:case"end":return e.stop()}}),e,null,[[1,28],[2,8]])})))).apply(this,arguments)}Object(r.useEffect)(Object(u.a)(d.a.mark((function n(){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:r=n.sent,console.log(r.settings),e.current&&("srcObject"in e.current?(e.current.width=r.settings.width,e.current.height=r.settings.height,e.current.srcObject=r.stream,t.current.width=window.innerWidth,t.current.height=window.innerHeight,console.log("WIDTHHEIGHT",window.visualViewport,document.width,document.height),window.innerHeight/r.settings.height,window.innerWidth/r.settings.width,t.current.getContext("2d")):e.src=window.URL.createObjectURL(r.stream));case 5:case"end":return n.stop()}}),n)}))),[e,t]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(n){console.log("loaded",o);var r=t.current.getContext("2d");setInterval((function(){if(window.matchMedia("(orientation: portrait)")){var n=t.current.height/e.current.videoHeight*e.current.videoWidth;r.drawImage(e.current,0,0,n,t.current.height)}else{var i=t.current.width/e.current.videoWidth*e.current.videoHeight;r.drawImage(e.current,0,0,t.current.width,i)}}),30)},style:{display:"none"}}),Object(v.jsx)("canvas",{ref:t}),Object(v.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"}),Object(v.jsx)("div",{id:"changeVideo",children:Object(v.jsx)(g.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var e=t.current.toDataURL("image/png");n.current.href=e,n.current.download="MyPhoto.png",n.current.click(),window.URL.revokeObjectURL(e)},children:Object(v.jsx)(p.a,{style:{fontSize:100}})})}),Object(v.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"})]})},j=n(31);var b=function(){return Object(v.jsx)(o.a,{backend:j.a,options:{enableMouseEvents:!0},children:Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(w,{})})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.83ee1a35.chunk.js.map