(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);a(42),a(43);var r=a(5),n=a(82),c=a(17),s=a.n(c),i=a(24),o=a(27),d=a(0),l=a.n(d),u=function(e,t){switch("".concat(e,"x").concat(t)){case"4032x3024":return"DCI 4K (iCAM 12MP)";case"3840x2160":return"4K (iCAM 12MP)";case"4096x2160":return"DCI 4K";case"3840x2160":return"4K";case"2048x1152":return"2K";case"1920x1080":return"Full HD";case"1280x720":return"HD";case"640x480":return"SD";default:switch(e){case 4032:return"DCI 4K";case 3840:return"4K";case 2048:return"2K";case 1920:return"Full HD";case 1280:case 640:return"HD";default:return"Non SD"}}};function h(){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(){var t,a,r,n,c,i,o,d,l,u,h,p,x,b,g,f,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:if(a=e.sent,r=a[0],a[0].getCapabilities(),r.getSettings(),n="",!(navigator.platform.indexOf("Mac")>-1)){e.next=78;break}return e.prev=21,n="DCI 4K",c={width:{ideal:4032},height:{ideal:3024}},e.next=26,r.applyConstraints(c);case 26:e.next=76;break;case 28:return e.prev=28,e.t1=e.catch(21),e.prev=30,n="DCI 4K",i={width:{ideal:3840},height:{ideal:2160}},e.next=35,r.applyConstraints(i);case 35:e.next=76;break;case 37:return e.prev=37,e.t2=e.catch(30),e.prev=39,n="DCI 4K",o={width:{ideal:3840},height:{ideal:2160}},e.next=44,r.applyConstraints(o);case 44:e.next=76;break;case 46:return e.prev=46,e.t3=e.catch(39),e.prev=48,n="Full HD",d={width:{ideal:1920},height:{ideal:1080}},e.next=53,r.applyConstraints(d);case 53:e.next=76;break;case 55:return e.prev=55,e.t4=e.catch(48),e.prev=57,n="HD",l={width:{ideal:1280},height:{ideal:720}},e.next=62,r.applyConstraints(l);case 62:e.next=76;break;case 64:return e.prev=64,e.t5=e.catch(57),e.prev=66,n="SD",u={width:{ideal:640},height:{ideal:480}},e.next=71,r.applyConstraints(u);case 71:e.next=76;break;case 73:e.prev=73,e.t6=e.catch(66),alert(e.t6);case 76:e.next=133;break;case 78:return e.prev=78,n="DCI 4K",h={width:{ideal:4096},height:{ideal:2160}},e.next=83,r.applyConstraints(h);case 83:e.next=133;break;case 85:return e.prev=85,e.t7=e.catch(78),e.prev=87,n="UHD",p={width:{ideal:3840},height:{ideal:2160}},e.next=92,r.applyConstraints(p);case 92:e.next=133;break;case 94:return e.prev=94,e.t8=e.catch(87),e.prev=96,n="2K",x={width:{ideal:2048},height:{ideal:1152}},e.next=101,r.applyConstraints(x);case 101:e.next=133;break;case 103:return e.prev=103,e.t9=e.catch(96),e.prev=105,n="Full HD",b={width:{ideal:1920},height:{ideal:1080}},e.next=110,r.applyConstraints(b);case 110:e.next=133;break;case 112:return e.prev=112,e.t10=e.catch(105),e.prev=114,n="HD",g={width:{ideal:1280},height:{ideal:720}},e.next=119,r.applyConstraints(g);case 119:e.next=133;break;case 121:return e.prev=121,e.t11=e.catch(114),e.prev=123,n="SD",f={width:{ideal:640},height:{ideal:480}},e.next=128,r.applyConstraints(f);case 128:e.next=133;break;case 130:e.prev=130,e.t12=e.catch(123),alert(e.t12);case 133:return(v=r.getSettings()).reso=n,e.abrupt("return",{stream:t,settings:v,reso:n});case 138:e.prev=138,e.t13=e.catch(1),console.error(e.t13);case 141:case"end":return e.stop()}}),e,null,[[1,138],[2,8],[21,28],[30,37],[39,46],[48,55],[57,64],[66,73],[78,85],[87,94],[96,103],[105,112],[114,121],[123,130]])})))).apply(this,arguments)}var x=a(3),b=function(e){var t=[];if(e.debugData)for(var a in e.debugData)t.push(Object(x.jsxs)("div",{className:"debugRow",children:[Object(x.jsxs)("span",{className:"debugLabel",children:[a," : "]}),Object(x.jsx)("span",{className:"debugValue",children:e.debugData[a]})]}));return t},g=a(83),f=a(37),v=a.n(f),j=function(){var e=l.a.useRef(),t=l.a.useRef(),a=l.a.useRef(),r=l.a.useRef(),n=l.a.useRef(),c=l.a.useRef(),p=l.a.useState({}),f=Object(o.a)(p,2),j=f[0],y=f[1],m=l.a.useState({}),O=Object(o.a)(m,2),w=O[0],C=O[1],D=l.a.useState(!1),k=Object(o.a)(D,2),M=(k[0],k[1]),I=l.a.useState("INIT"),K=Object(o.a)(I,2),S=K[0],R=K[1],T=l.a.useCallback(Object(i.a)(s.a.mark((function r(){var c,i,o,d,l,p,x,b,g,f;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h();case 2:c=r.sent,e.current&&("srcObject"in e.current?e.current.srcObject=c.stream:e.src=window.URL.createObjectURL(c.stream),y(c.settings),i=c.settings.width,o=c.settings.height,d=document.documentElement.clientWidth,l=Math.floor(d*o/i),c.settings.aspectRatio,p=l/o,x=d/i,b=0,g=0,i>d?(b=-Math.ceil(100*x),g=-Math.ceil(100*p)):(b=-Math.ceil(i/d*100),g=-Math.ceil(o/l*100)),t.current.style.width="".concat(d,"px"),t.current.style.height="".concat(l,"px"),e.current.width=i,e.current.height=o,a.current.width=i,a.current.height=o,e.current.style.transform="translate(".concat(-e.current.offsetLeft,"px, ").concat(-e.current.offsetTop,"px) scale(").concat(x,", ").concat(p,")"),e.current.style.transformOrigin="top left",n.current.width=i,n.current.height=o,n.current.style.width="".concat(d,"px"),n.current.style.height="".concat(l,"px"),f={video:"".concat(i," x ").concat(o," (").concat(u(i,o),")"),scale:"".concat(x," x ").concat(p),media:"".concat(c.settings.width," x ").concat(c.settings.height),target:"".concat(d," x ").concat(l),targetXY:"".concat(b," x ").concat(g)},C(f));case 4:case"end":return r.stop()}}),r)}))),[e,t,r,n]);window.addEventListener("orientationchange",(function(e){T()})),Object(d.useEffect)(Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T();case 1:case"end":return e.stop()}}),e)}))),[e,t,r,n]);return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{id:"debug",children:Object(x.jsx)(b,{debugData:w})}),Object(x.jsxs)("div",{ref:t,style:{marginBottom:"16px",position:"absolute",top:"0px",left:"0px",overflow:"hidden"},children:[Object(x.jsx)("video",{ref:e,id:"camvideo",autoPlay:!0,playsInline:!0}),Object(x.jsx)("img",{ref:a,style:{border:"solid 2px red",display:"none"}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("canvas",{ref:r,style:{border:"solid 2px red",display:"none"}}),Object(x.jsx)("canvas",{ref:n,style:{border:"solid 2px red",display:"none"}})]}),Object(x.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:c,style:{display:"none"},children:"image"}),Object(x.jsx)("div",{id:"changeVideo",children:"INIT"===S&&Object(x.jsx)(g.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var t=j.width,r=j.height,c=document.documentElement.clientWidth,s=Math.floor(c*r/t),i=s/r,o=c/t;t>c?(-Math.ceil(100*o),Math.ceil(100*i)):(-Math.ceil(t/c*100),Math.ceil(r/s*100));var d=n.current.getContext("2d");M(!0),e.current.pause(),e.current.currentTime=0,d.drawImage(e.current,0,0);var l=n.current.toDataURL("image/png");a.current.src=l,e.current.style.display="none",a.current.style.display="block",a.current.style.transform="translate(".concat(-e.current.offsetLeft,"px, ").concat(-e.current.offsetTop,"px) scale(").concat(o,", ").concat(i,")"),a.current.style.transformOrigin="top left",e.current.style.display="none",a.current.style.display="block",setTimeout((function(){return M(!1)}),3e3),R("CAPTURED")},children:Object(x.jsx)(v.a,{style:{fontSize:100}})})}),Object(x.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:c,style:{display:"none"},children:"image"})]})},y=a(33),m=a(39);var O=function(){return Object(x.jsx)(y.a,{children:Object(x.jsx)(r.c,{children:Object(x.jsx)(r.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{children:Object(x.jsx)("header",{children:Object(x.jsx)(n.a,{backend:m.a,options:{enableMouseEvents:!0},children:Object(x.jsx)(j,{})})})})})})})},w=a(20),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};a.n(w).a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),C()}},[[62,1,2]]]);
//# sourceMappingURL=main.fd8bfc1a.chunk.js.map