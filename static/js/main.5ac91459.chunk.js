(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);n(42),n(43);var r=n(5),c=n(81),a=n(25),i=n.n(a),s=n(32),d=n(36),o=n(0),h=n.n(o),u=n(82),l=n(37),g=n.n(l),b=n(3),j=function(e){var t=[];if(e.debugData)for(var n in e.debugData)t.push(Object(b.jsxs)("div",{className:"debugRow",children:[Object(b.jsxs)("span",{className:"debugLabel",children:[n," : "]}),Object(b.jsx)("span",{className:"debugValue",children:e.debugData[n]})]}));return t},p=function(){var e=h.a.useRef(),t=h.a.useRef(),n=h.a.useRef(),r=h.a.useRef(),c=h.a.useState({}),a=Object(d.a)(c,2),l=a[0],p=a[1],w=h.a.useState({}),x=Object(d.a)(w,2),v=x[0],f=x[1];function O(){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(i.a.mark((function e(){var t,n,r,c,a,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:return n=e.sent,r=n[0],c=n[0].getCapabilities(),a=r.getSettings(),console.log(c,a),s={width:{ideal:c.width.max},height:{ideal:c.height.max}},e.prev=21,e.next=24,r.applyConstraints(s);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(21),alert(e.t1);case 29:return d=r.getSettings(),p(d),e.abrupt("return",{stream:t,settings:d});case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2);case 37:case"end":return e.stop()}}),e,null,[[1,34],[2,8],[21,26]])})))).apply(this,arguments)}Object(o.useEffect)(Object(s.a)(i.a.mark((function r(){var c,a,s,d,o,h,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O();case 2:c=r.sent,e.current&&("srcObject"in e.current?e.current.srcObject=c.stream:e.src=window.URL.createObjectURL(c.stream),a=c.settings.width,s=c.settings.height,d=window.innerWidth,o=window.innerHeight,l.aspectRatio,h=d/a,u=o/s,t.current.width=a,t.current.height=s,t.current.style.width="".concat(window.innerWidth,"px"),t.current.style.height="".concat(window.innerHeight,"px"),n.current.width=a,n.current.height=s,n.current.style.width="".concat(window.innerWidth,"px"),n.current.style.height="".concat(window.innerHeight,"px"),t.current.getContext("2d").scale(h,u),n.current.getContext("2d").scale(h,u));case 4:case"end":return r.stop()}}),r)}))),[e,t,n]);var y=function n(){requestAnimationFrame(n);var r=t.current.getContext("2d"),c=l.width,a=l.height,i=window.innerWidth,s=window.innerHeight,d=l.aspectRatio,o=i/c,h=s/a,u=0,g=0;c>a?(u=(a-i/d)/2,g=(c-i)/2):(g=(a-s*d)/2,u=(c-s)/2);var b={media:"".concat(l.width,"x").concat(l.height),video:"".concat(l.width,"x").concat(l.height),window:"".concat(window.innerWidth,"x").concat(window.innerHeight),target:"".concat(t.current.width,"x").concat(t.current.height),coords:"".concat(g,"x").concat(u),scale:"".concat(o,":").concat(h)};f(b),r.drawImage(e.current,g,u)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"debug",children:Object(b.jsx)(j,{debugData:v})}),Object(b.jsx)("div",{style:{marginBottom:"16px",display:"none"},children:Object(b.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(e){y()}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("canvas",{ref:t,style:{border:"solid 2px red"}}),Object(b.jsx)("canvas",{ref:n,style:{border:"solid 2px red",display:"none"}})]}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:r,style:{display:"none"},children:"image"}),Object(b.jsx)("div",{id:"changeVideo",children:Object(b.jsx)(u.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var c,a,i=n.current.getContext("2d"),s=l.width,d=l.height,o=(window.innerWidth,window.innerHeight,l.aspectRatio);s>d?(c=t.current.width,a=t.current.width/o,t.current.height):(c=t.current.height,a=t.current.height*o,t.current.width),i.drawImage(e.current,0,0);var h=n.current.toDataURL("image/png");r.current.href=h,r.current.download="MyPhoto.png",r.current.click(),window.URL.revokeObjectURL(h)},children:Object(b.jsx)(g.a,{style:{fontSize:100}})})}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:r,style:{display:"none"},children:"image"})]})},w=n(31),x=n(39);var v=function(){return Object(b.jsx)(w.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(c.a,{backend:x.a,options:{enableMouseEvents:!0},children:Object(b.jsx)(p,{})})})})})})})},f=n(19),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};n.n(f).a.render(Object(b.jsx)(h.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()}},[[62,1,2]]]);
//# sourceMappingURL=main.5ac91459.chunk.js.map