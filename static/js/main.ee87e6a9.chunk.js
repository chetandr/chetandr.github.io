(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);n(42),n(43);var a=n(5),c=n(81),r=n(25),s=n.n(r),i=n(32),o=n(36),d=n(0),l=n.n(d),u=n(82),h=n(37),p=n.n(h),b=n(3),g=function(e){var t=[];if(e.debugData)for(var n in e.debugData)t.push(Object(b.jsxs)("div",{className:"debugRow",children:[Object(b.jsxs)("span",{className:"debugLabel",children:[n," : "]}),Object(b.jsx)("span",{className:"debugValue",children:e.debugData[n]})]}));return t},j=function(){var e=l.a.useRef(),t=l.a.useRef(),n=l.a.useRef(),a=l.a.useRef(),c=l.a.useRef(),r=l.a.useState({}),h=Object(o.a)(r,2),j=h[0],x=h[1],v=l.a.useState({}),f=Object(o.a)(v,2),O=f[0],m=f[1];function y(){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(s.a.mark((function e(){var t,n,a,c,r,i,o,d,l,u,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:return n=e.sent,a=n[0],c=n[0].getCapabilities(),r=a.getSettings(),console.log(c,r),e.prev=20,i={width:{ideal:4096},height:{ideal:2160}},e.next=24,a.applyConstraints(i);case 24:e.next=69;break;case 26:return e.prev=26,e.t1=e.catch(20),e.prev=28,o={width:{ideal:3840},height:{ideal:2160}},e.next=32,a.applyConstraints(o);case 32:e.next=69;break;case 34:return e.prev=34,e.t2=e.catch(28),e.prev=36,d={width:{ideal:2048},height:{ideal:1152}},e.next=40,a.applyConstraints(d);case 40:e.next=69;break;case 42:return e.prev=42,e.t3=e.catch(36),e.prev=44,l={width:{ideal:1920},height:{ideal:1080}},e.next=48,a.applyConstraints(l);case 48:e.next=69;break;case 50:return e.prev=50,e.t4=e.catch(44),e.prev=52,u={width:{ideal:1280},height:{ideal:720}},e.next=56,a.applyConstraints(u);case 56:e.next=69;break;case 58:return e.prev=58,e.t5=e.catch(52),e.prev=60,h={width:{ideal:640},height:{ideal:480}},e.next=64,a.applyConstraints(h);case 64:e.next=69;break;case 66:e.prev=66,e.t6=e.catch(60),alert(e.t6);case 69:return p=a.getSettings(),x(p),e.abrupt("return",{stream:t,settings:p});case 74:e.prev=74,e.t7=e.catch(1),console.error(e.t7);case 77:case"end":return e.stop()}}),e,null,[[1,74],[2,8],[20,26],[28,34],[36,42],[44,50],[52,58],[60,66]])})))).apply(this,arguments)}Object(d.useEffect)(Object(i.a)(s.a.mark((function n(){var c,r,i,o,d,l,u,h;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y();case 2:c=n.sent,e.current&&("srcObject"in e.current?e.current.srcObject=c.stream:e.src=window.URL.createObjectURL(c.stream),r=c.settings.width,i=c.settings.height,o=document.documentElement.clientHeight,d=Math.floor(o*c.settings.aspectRatio),j.aspectRatio,l=o/i,u=d/r,console.log("videoWrapper",t.current),t.current.style.width="".concat(d,"px"),t.current.style.height="".concat(o,"px"),e.current.width=r,e.current.height=i,e.current.style.transform="scale(".concat(u,", ").concat(l,")"),e.current.style.transformOrigin="top left",a.current.width=r,a.current.height=i,a.current.style.width="".concat(d,"px"),a.current.style.height="".concat(o,"px"),h={video:"".concat(r," x ").concat(i),scale:"".concat(u," x ").concat(l),media:"".concat(c.settings.width," x ").concat(c.settings.height),target:"".concat(d," x ").concat(o)},m(h));case 4:case"end":return n.stop()}}),n)}))),[e,t,n,a]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"debug",children:Object(b.jsx)(g,{debugData:O})}),Object(b.jsx)("div",{ref:t,style:{marginBottom:"16px"},children:Object(b.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(e){}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("canvas",{ref:n,style:{border:"solid 2px red",display:"none"}}),Object(b.jsx)("canvas",{ref:a,style:{border:"solid 2px red",display:"none"}})]}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:c,style:{display:"none"},children:"image"}),Object(b.jsx)("div",{id:"changeVideo",children:Object(b.jsx)(u.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){a.current.getContext("2d").drawImage(e.current,0,0);var t=a.current.toDataURL("image/png");c.current.href=t,c.current.download="MyPhoto.png",c.current.click(),window.URL.revokeObjectURL(t)},children:Object(b.jsx)(p.a,{style:{fontSize:100}})})}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:c,style:{display:"none"},children:"image"})]})},x=n(31),v=n(39);var f=function(){return Object(b.jsx)(x.a,{children:Object(b.jsx)(a.c,{children:Object(b.jsx)(a.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(c.a,{backend:v.a,options:{enableMouseEvents:!0},children:Object(b.jsx)(j,{})})})})})})})},O=n(19),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n.n(O).a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[62,1,2]]]);
//# sourceMappingURL=main.ee87e6a9.chunk.js.map