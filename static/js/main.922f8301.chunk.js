(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);a(42),a(43);var r=a(5),n=a(83),c=a(25),s=a.n(c),i=a(33),o=a(29),d=a(0),l=a.n(d),u=a(82),h=a(84),p=a(37),x=a.n(p),b=a(3),g=function(e){var t=[];if(e.debugData)for(var a in e.debugData)t.push(Object(b.jsxs)("div",{className:"debugRow",children:[Object(b.jsxs)("span",{className:"debugLabel",children:[a," : "]}),Object(b.jsx)("span",{className:"debugValue",children:e.debugData[a]})]}));return t},v=function(){var e=l.a.useRef(),t=l.a.useRef(),a=l.a.useRef(),r=l.a.useRef(),n=l.a.useRef(),c=l.a.useState({}),p=Object(o.a)(c,2),v=(p[0],p[1]),j=l.a.useState({}),f=Object(o.a)(j,2),O=f[0],w=f[1],y=l.a.useState(!1),m=Object(o.a)(y,2),D=m[0],C=m[1];function k(){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(s.a.mark((function e(){var t,a,r,n,c,i,o,d,l,u,h,p,x,b,g,j,f,O,w;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 12:t=e.sent;case 13:return e.next=15,t.getVideoTracks();case 15:if(a=e.sent,r=a[0],n=a[0].getCapabilities(),c=r.getSettings(),i="",console.log(n,c),!(navigator.platform.indexOf("Mac")>-1)){e.next=79;break}return e.prev=22,i="DCI 4K",o={width:{ideal:4032},height:{ideal:3024}},e.next=27,r.applyConstraints(o);case 27:e.next=77;break;case 29:return e.prev=29,e.t1=e.catch(22),e.prev=31,i="DCI 4K",d={width:{ideal:3840},height:{ideal:2160}},e.next=36,r.applyConstraints(d);case 36:e.next=77;break;case 38:return e.prev=38,e.t2=e.catch(31),e.prev=40,i="DCI 4K",l={width:{ideal:3840},height:{ideal:2160}},e.next=45,r.applyConstraints(l);case 45:e.next=77;break;case 47:return e.prev=47,e.t3=e.catch(40),e.prev=49,i="Full HD",u={width:{ideal:1920},height:{ideal:1080}},e.next=54,r.applyConstraints(u);case 54:e.next=77;break;case 56:return e.prev=56,e.t4=e.catch(49),e.prev=58,i="HD",h={width:{ideal:1280},height:{ideal:720}},e.next=63,r.applyConstraints(h);case 63:e.next=77;break;case 65:return e.prev=65,e.t5=e.catch(58),e.prev=67,i="SD",p={width:{ideal:640},height:{ideal:480}},e.next=72,r.applyConstraints(p);case 72:e.next=77;break;case 74:e.prev=74,e.t6=e.catch(67),alert(e.t6);case 77:e.next=134;break;case 79:return e.prev=79,i="DCI 4K",x={width:{ideal:4096},height:{ideal:2160}},e.next=84,r.applyConstraints(x);case 84:e.next=134;break;case 86:return e.prev=86,e.t7=e.catch(79),e.prev=88,i="UHD",b={width:{ideal:3840},height:{ideal:2160}},e.next=93,r.applyConstraints(b);case 93:e.next=134;break;case 95:return e.prev=95,e.t8=e.catch(88),e.prev=97,i="2K",g={width:{ideal:2048},height:{ideal:1152}},e.next=102,r.applyConstraints(g);case 102:e.next=134;break;case 104:return e.prev=104,e.t9=e.catch(97),e.prev=106,i="Full HD",j={width:{ideal:1920},height:{ideal:1080}},e.next=111,r.applyConstraints(j);case 111:e.next=134;break;case 113:return e.prev=113,e.t10=e.catch(106),e.prev=115,i="HD",f={width:{ideal:1280},height:{ideal:720}},e.next=120,r.applyConstraints(f);case 120:e.next=134;break;case 122:return e.prev=122,e.t11=e.catch(115),e.prev=124,i="SD",O={width:{ideal:640},height:{ideal:480}},e.next=129,r.applyConstraints(O);case 129:e.next=134;break;case 131:e.prev=131,e.t12=e.catch(124),alert(e.t12);case 134:return(w=r.getSettings()).reso=i,v(w),e.abrupt("return",{stream:t,settings:w,reso:i});case 140:e.prev=140,e.t13=e.catch(1),console.error(e.t13);case 143:case"end":return e.stop()}}),e,null,[[1,140],[2,8],[22,29],[31,38],[40,47],[49,56],[58,65],[67,74],[79,86],[88,95],[97,104],[106,113],[115,122],[124,131]])})))).apply(this,arguments)}var K=function(e,t){switch("".concat(e,"x").concat(t)){case"4032x3024":return"DCI 4K (iCAM 12MP)";case"3840x2160":return"4K (iCAM 12MP)";case"4096x2160":return"DCI 4K";case"3840x2160":return"4K";case"2048x1152":return"2K";case"1920x1080":return"Full HD";case"1280x720":return"HD";case"640x480":return"SD";default:switch(e){case 4032:return"DCI 4K";case 3840:return"4K";case 2048:return"2K";case 1920:return"Full HD";case 1280:case 640:return"HD";default:return"Non SD"}}};Object(d.useEffect)(Object(i.a)(s.a.mark((function a(){var n,c,i,o,d,l,u,h,p,x,b;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k();case 2:n=a.sent,e.current&&("srcObject"in e.current?e.current.srcObject=n.stream:e.src=window.URL.createObjectURL(n.stream),c=4032,i=2160,o=window.innerWidth,d=Math.floor(o*i/c),l=n.settings.aspectRatio,u=d/i,h=o/c,p=0,x=0,o>c&&(x=(p=-(o-c)/2)/(u*l)),console.log("videoWrapper",t.current),t.current.style.width="".concat(o,"px"),t.current.style.height="".concat(d,"px"),e.current.width=c,e.current.height=i,e.current.style.transform="translate(".concat(p,"px, ").concat(x,"px) scale(").concat(h,", ").concat(u,")"),e.current.style.transformOrigin="top left",r.current.width=c,r.current.height=i,r.current.style.width="".concat(o,"px"),r.current.style.height="".concat(d,"px"),b={video:"".concat(c," x ").concat(i," (").concat(K(c,i),")"),scale:"".concat(h," x ").concat(u),media:"".concat(n.settings.width," x ").concat(n.settings.height),target:"".concat(o," x ").concat(d)},w(b));case 4:case"end":return a.stop()}}),a)}))),[e,t,a,r]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"debug",children:Object(b.jsx)(g,{debugData:O})}),Object(b.jsx)("div",{ref:t,style:{marginBottom:"16px"},children:Object(b.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,onLoadedMetadata:function(e){}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("canvas",{ref:a,style:{border:"solid 2px red",display:"none"}}),Object(b.jsx)("canvas",{ref:r,style:{border:"solid 2px red",display:"none"}})]}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"}),Object(b.jsx)("div",{id:"changeVideo",children:Object(b.jsx)(h.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){var t=r.current.getContext("2d");C(!0),t.drawImage(e.current,0,0);var a=r.current.toDataURL("image/png");n.current.href=a,n.current.download="MyPhoto.png",n.current.click(),window.URL.revokeObjectURL(a),setTimeout((function(){return C(!1)}),3e3)},children:D?Object(b.jsx)(u.a,{color:"secondary",thinkness:7,size:100}):Object(b.jsx)(x.a,{style:{fontSize:100}})})}),Object(b.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:n,style:{display:"none"},children:"image"})]})},j=a(32),f=a(39);var O=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(n.a,{backend:f.a,options:{enableMouseEvents:!0},children:Object(b.jsx)(v,{})})})})})})})},w=a(19),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};a.n(w).a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.922f8301.chunk.js.map