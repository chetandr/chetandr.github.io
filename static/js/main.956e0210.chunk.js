(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[0],{10:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function c(e){try{s(n.next(e))}catch(t){i(t)}}function o(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,o)}s((n=n.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,n,a,i,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){c.label=i[1];break}if(6===i[0]&&c.label<a[1]){c.label=a[1],a=i;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(i);break}a[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(o){i=[6,o],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var i=arguments[t],c=0,o=i.length;c<o;c++,a++)n[a]=i[c];return n};t.__esModule=!0,t.CameraAccess=void 0;var c=r(43),o=r(62),s=r(65),u=r(66);!function(e){var t,r=["rear","back","r\xfcck","arri\xe8re","trasera","tr\xe1s","traseira","posteriore","\u540e\u9762","\u5f8c\u9762","\u80cc\u9762","\u540e\u7f6e","\u5f8c\u7f6e","\u80cc\u7f6e","\u0437\u0430\u0434\u043d\u0435\u0439","\u0627\u0644\u062e\u0644\u0641\u064a\u0629","\ud6c4","arka","achterzijde","\u0e2b\u0e25\u0e31\u0e07","baksidan","bagside","sau","bak","tylny","takakamera","belakang","\u05d0\u05d7\u05d5\u05e8\u05d9\u05ea","\u03c0\u03af\u03c3\u03c9","spate","h\xe1ts\xf3","zadn\xed","darrere","zadn\xe1","\u0437\u0430\u0434\u043d\u044f","stra\u017enja","belakang","\u092c\u0948\u0915"],l=new Map;function d(e){var t=e.toLowerCase();return r.some((function(e){return t.includes(e)}))}function f(e){return console.log("Camera access:",e.video),new Promise((function(t,r){window.setTimeout((function(){navigator.mediaDevices.getUserMedia(e).then(t).catch(r)}),0)}))}function m(e,t){switch(e){case 0:case 1:case 2:case 3:return t?{width:{min:1400,ideal:1920,max:1920},height:{min:900,ideal:1080,max:1440}}:{width:{min:1400,ideal:1920,max:1920},height:{min:900,ideal:1440,max:1440}};case 4:return t?{width:{min:1200,ideal:1600,max:1920},height:{min:900,ideal:1080,max:1200}}:{width:{min:1200,ideal:1920,max:1920},height:{min:900,ideal:1200,max:1200}};case 5:return t?{width:{min:1080,ideal:1600,max:1920},height:{min:900,ideal:900,max:1080}}:{width:{min:1080,ideal:1920,max:1920},height:{min:900,ideal:1080,max:1080}};case 6:return t?{width:{min:960,ideal:1280,max:1440},height:{min:480,ideal:720,max:960}}:{width:{min:960,ideal:1280,max:1440},height:{min:480,ideal:960,max:960}};case 7:return t?{width:{min:720,ideal:1024,max:1440},height:{min:480,ideal:768,max:768}}:{width:{min:720,ideal:1280,max:1440},height:{min:480,ideal:720,max:768}};case 8:return t?{width:{min:640,ideal:800,max:1440},height:{min:480,ideal:600,max:720}}:{width:{min:640,ideal:960,max:1440},height:{min:480,ideal:720,max:720}};default:return{}}}function p(){return"function"===typeof navigator.enumerateDevices?navigator.enumerateDevices():"object"===typeof navigator.mediaDevices&&"function"===typeof navigator.mediaDevices.enumerateDevices?navigator.mediaDevices.enumerateDevices():new Promise((function(e,t){try{if(null==window.MediaStreamTrack||null==window.MediaStreamTrack.getSources)throw new Error;window.MediaStreamTrack.getSources((function(t){e(t.filter((function(e){return"video"===e.kind.toLowerCase()||"videoinput"===e.kind.toLowerCase()})).map((function(e){return{deviceId:null!=e.deviceId?e.deviceId:"",groupId:e.groupId,kind:"videoinput",label:e.label,toJSON:function(){return this}}})))}))}catch(n){var r={fullSupport:!1,scannerSupport:!0,missingFeatures:[c.BrowserCompatibility.Feature.MEDIA_DEVICES]};return t(new u.UnsupportedBrowserError(r))}}))}e.adjustCamerasFromMainCameraStream=function(e,t){var r;"function"===typeof e.getSettings&&(r=e.getSettings());var n=t.find((function(t){return null!=r&&t.deviceId===r.deviceId||t.label===e.label}));if(void 0!==n){var a=null!=r&&"environment"===r.facingMode||d(e.label),i=a;if(a&&t.length>1){t.forEach((function(e){e.deviceId===n.deviceId?e.cameraType=s.Camera.Type.BACK:d(e.label)||(e.cameraType=s.Camera.Type.FRONT)}));var c=t.filter((function(e){return e.cameraType===s.Camera.Type.BACK})).sort((function(e,t){return e.label.localeCompare(t.label)}))[0];i=n.deviceId===c.deviceId}if(1===t.length||i)return n}},e.getCameras=function(){var e=this;if(null!=t)return t;var r=o.BrowserHelper.checkBrowserCompatibility();if(!r.fullSupport)return Promise.reject(new u.UnsupportedBrowserError(r));var c=new Promise((function(e,t){return p().then((function(t){t.filter((function(e){return"videoinput"===e.kind})).every((function(e){return""===e.label}))?e(navigator.mediaDevices.getUserMedia({video:!0,audio:!1})):e()})).catch(t)}));return t=new Promise((function(r,o){return n(e,void 0,void 0,(function(){var e,n,u,f;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,4,5]),[4,c];case 1:return e=a.sent(),[4,p()];case 2:return n=a.sent(),u=function(e){var t=e.filter((function(e){return"videoinput"===e.kind})).map((function(e){if(l.has(e.deviceId))return l.get(e.deviceId);var t=null!=e.label?e.label:"",r={deviceId:e.deviceId,label:t,cameraType:d(t)?s.Camera.Type.BACK:s.Camera.Type.FRONT};return""!==t&&l.set(e.deviceId,r),r}));if(t.length>1&&!t.some((function(e){return e.cameraType===s.Camera.Type.BACK}))){var r=t.length-1,n=t.map((function(e){var t=e.label.match(/\b([0-9]+)MP?\b/i);return null!=t?parseInt(t[1],10):NaN}));n.some((function(e){return isNaN(e)}))||(r=n.lastIndexOf(Math.max.apply(Math,n))),t[r].cameraType=s.Camera.Type.BACK}return t}(n),console.debug.apply(console,i(["Camera list: "],u)),[2,r(u)];case 3:return"SourceUnavailableError"===(f=a.sent()).name&&(f.name="NotReadableError"),[2,o(f)];case 4:return null!=e&&e.getVideoTracks().forEach((function(e){e.stop()})),t=void 0,[7];case 5:return[2]}}))}))}))},e.getUserMediaVideoParams=m,e.accessCameraStream=function(e,t){var r,n=o.BrowserHelper.userAgentInfo.getBrowser().name;return r=navigator.appVersion.includes("Mac")?{audio:!1,video:{facingMode:"environment"}}:{audio:!1,video:m(e,null!=n&&n.includes("Safari"))},""===t.deviceId?r.video.facingMode={ideal:t.cameraType===s.Camera.Type.BACK?"environment":"user"}:r.video.deviceId={exact:t.deviceId},console.log(r),{mediaParams:r,mediaStreamPromise:f(r)}}}(t.CameraAccess||(t.CameraAccess={}))},43:function(e,t,r){"use strict";t.__esModule=!0,t.BrowserCompatibility=void 0,function(e){!function(e){e.BLOB="blob",e.MEDIA_DEVICES="mediaDevices",e.OFFSCREEN_CANVAS="offscreenCanvas",e.URL_OBJECT="urlObject",e.WEB_WORKERS="webWorkers",e.WEB_ASSEMBLY="webAssembly",e.WEB_ASSEMBLY_ERROR_FREE="webAssemblyErrorFree",e.WEBGL="webgl"}(e.Feature||(e.Feature={}))}(t.BrowserCompatibility||(t.BrowserCompatibility={}))},59:function(e,t,r){},60:function(e,t,r){},62:function(e,t,r){"use strict";t.__esModule=!0,t.BrowserHelper=t.UAParser=void 0;var n=r(63),a=r(64);t.UAParser=a.UAParser;var i=r(43);!function(e){e.userAgentInfo=new a.UAParser(navigator.userAgent),e.canvas=document.createElement("canvas"),e.checkBrowserCompatibility=function(){function t(e,r,n){var a=e[r[0]];return null!=a&&(1===r.length?typeof a===n:("function"===typeof a||"object"===typeof a)&&t(a,r.slice(1),n))}var r=!0,n=!0,a=[];t(navigator,["mediaDevices","getUserMedia"],"function")||t(navigator,["enumerateDevices"],"function")||t(window,["MediaStreamTrack","getSources"],"function")||(a.push(i.BrowserCompatibility.Feature.MEDIA_DEVICES),r=!1),t(window,["Worker"],"function")||(a.push(i.BrowserCompatibility.Feature.WEB_WORKERS),r=n=!1),t(window,["WebAssembly"],"object")||(a.push(i.BrowserCompatibility.Feature.WEB_ASSEMBLY),r=n=!1),t(window,["Blob"],"function")||(a.push(i.BrowserCompatibility.Feature.BLOB),r=n=!1),t(window,["URL","createObjectURL"],"function")||(a.push(i.BrowserCompatibility.Feature.URL_OBJECT),r=n=!1),t(window,["OffscreenCanvas"],"function")||a.push(i.BrowserCompatibility.Feature.OFFSCREEN_CANVAS);try{if(!t(window,["WebGLRenderingContext"],"function")||null==e.canvas.getContext("webgl")&&null==e.canvas.getContext("experimental-webgl"))throw new Error}catch(s){a.push(i.BrowserCompatibility.Feature.WEBGL)}var c,o=e.userAgentInfo.getOS();return"iOS"===(c=o).name&&null!=c.version&&["11.2.2","11.2.5","11.2.6"].includes(c.version)&&(a.push(i.BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE),r=n=!1),{fullSupport:r,scannerSupport:n,missingFeatures:a}},e.getDeviceId=function(){var e=n.default.get("scandit-device-id");if(null!=e&&""!==e)return e;for(var t="",r=0;r<40;++r)t+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return n.default.set("scandit-device-id",t,{expires:3650}),t},e.isValidHTMLElement=function(e){return e instanceof HTMLElement||null!=e&&"object"===typeof e&&"string"===typeof e.tagName}}(t.BrowserHelper||(t.BrowserHelper={}))},65:function(e,t,r){"use strict";t.__esModule=!0,t.Camera=void 0,function(e){!function(e){e.FRONT="front",e.BACK="back"}(e.Type||(e.Type={}))}(t.Camera||(t.Camera={}))},66:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();t.__esModule=!0,t.UnsupportedBrowserError=void 0;var a=function(e){function t(t){var r=e.call(this,{name:"UnsupportedBrowserError",message:"This OS / Browser has one or more missing features preventing it from working correctly"})||this;return r.data=t,r}return n(t,e),t}(r(67).CustomError);t.UnsupportedBrowserError=a},67:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();t.__esModule=!0,t.CustomError=void 0;var a=function(e){function t(r){var n=void 0===r?{}:r,a=n.name,i=void 0===a?"":a,c=n.message,o=void 0===c?"":c,s=e.call(this,o)||this;return Object.setPrototypeOf(s,t.prototype),s.name=i,s}return n(t,e),t}(Error);t.CustomError=a},75:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(17),c=r.n(i),o=(r(59),r(60),r(96)),s=r(29),u=r.n(s),l=r(38),d=r(23),f=r(30),m=r(5),p=r(10),b=r(7),g=r(97),v=r(98),h=r(99),j=r(50),x=r.n(j),O=r(51),y=r.n(O),w=r(41),C=r(3),S="boundry",B=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useRef)(),j=Object(n.useRef)(),O=Object(n.useRef)(),B=Object(n.useRef)(),k=Object(n.useRef)(),E=Object(n.useState)(),_=Object(m.a)(E,2),A=_[0],D=_[1],M=Object(n.useState)({disp0:!1,disp1:!1,disp2:!1,disp3:!1,disp4:!1,disp5:!1}),T=Object(m.a)(M,2),R=T[0],N=T[1],I=Object(n.useState)({x:0,y:0}),P=Object(m.a)(I,2),F=P[0],L=P[1],W=Object(n.useState)({x:0,y:0}),U=Object(m.a)(W,2),V=U[0],H=U[1],J=Object(n.useState)([]),K=Object(m.a)(J,2),z=K[0],Y=K[1],G=Object(b.a)().getMonitor(),X=Object(n.useState)(0),q=Object(m.a)(X,2),Q=q[0],Z=q[1],$=Object(n.useState)(),ee=Object(m.a)($,2),te=ee[0],re=ee[1],ne=Object(n.useState)(0),ae=Object(m.a)(ne,2),ie=(ae[0],ae[1]),ce=Object(n.useState)(0),oe=Object(m.a)(ce,2),se=(oe[0],oe[1]),ue=Object(n.useState)(0),le=Object(m.a)(ue,2),de=le[0],fe=le[1],me=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging0:!!e.isDragging()}}}})),pe=Object(m.a)(me,2),be=pe[0].isDragging0,ge=pe[1],ve=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging1:!!e.isDragging()}}}})),he=Object(m.a)(ve,2),je=he[0].isDragging1,xe=he[1],Oe=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging2:!!e.isDragging()}}}})),ye=Object(m.a)(Oe,2),we=ye[0].isDragging2,Ce=ye[1],Se=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging3:!!e.isDragging()}}}})),Be=Object(m.a)(Se,2),ke=Be[0].isDragging3,Ee=Be[1],_e=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging4:!!e.isDragging()}}}})),Ae=Object(m.a)(_e,2),De=Ae[0].isDragging4,Me=Ae[1],Te=Object(g.a)((function(){return{type:S,collect:function(e){return{isDragging5:!!e.isDragging()}}}})),Re=Object(m.a)(Te,2),Ne=Re[0].isDragging5,Ie=Re[1],Pe=Object(w.a)(),Fe=(Pe.display,Pe.itemType,Pe.item,Pe.style,function(){var e=Object(w.a)(),t=e.display,r=(e.itemType,e.item,e.style);return t?Object(C.jsx)("div",{className:"boundingBoxWrapper1",style:r,children:Object(C.jsx)("div",{className:"boundingBox"})}):null});a.a.useEffect((function(){G.subscribeToOffsetChange((function(){var e=G.getClientOffset(),t=G.getInitialClientOffset(),r=G.getInitialSourceClientOffset();t&&r&&(H({x:t.x-r.x,y:t.y-r.y}),L(e))}))}),[G]);var Le=Object(v.a)((function(){return{accept:S,drop:function(){return Ve(te,F,V)},collect:function(e){return{isOver:!!e.isOver()}}}}),[F,V,te]),We=Object(m.a)(Le,2),Ue=(We[0].isOver,We[1]),Ve=function(e,t,r){var n=t.x-r.x,a=t.y-r.y,i=e.current.getClientRects(),c=n+i[0].width,o=a+i[0].height;e.current.style.left="".concat(n,"px"),e.current.style.top="".concat(a,"px");var s=Object(f.a)(Object(f.a)({},A),{},Object(d.a)({},e.current.id,[{x:n,y:a},{x:c,y:o}]));D(s)},He=Object(n.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(r,n){var a,i,c,o,s,l,d,f;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=0,t.prev=1,i=0,t.next=5,p.CameraAccess.accessCameraStream(0,r);case 5:return a=t.sent,t.next=8,a.mediaStreamPromise;case 8:c=t.sent,t.next=110;break;case 11:return t.prev=11,t.t0=t.catch(1),t.prev=13,i=1,t.next=17,p.CameraAccess.accessCameraStream(1,r);case 17:return a=t.sent,t.next=20,a.mediaStreamPromise;case 20:c=t.sent,t.next=110;break;case 23:return t.prev=23,t.t1=t.catch(13),t.prev=25,i=2,t.next=29,p.CameraAccess.accessCameraStream(2,r);case 29:return a=t.sent,t.next=32,a.mediaStreamPromise;case 32:c=t.sent,t.next=110;break;case 35:return t.prev=35,t.t2=t.catch(25),t.prev=37,i=3,t.next=41,p.CameraAccess.accessCameraStream(3,r);case 41:return a=t.sent,t.next=44,a.mediaStreamPromise;case 44:c=t.sent,t.next=110;break;case 47:return t.prev=47,t.t3=t.catch(37),t.prev=49,i=4,t.next=53,p.CameraAccess.accessCameraStream(4,r);case 53:return a=t.sent,t.next=56,a.mediaStreamPromise;case 56:c=t.sent,t.next=110;break;case 59:return t.prev=59,t.t4=t.catch(49),t.prev=61,i=5,t.next=65,p.CameraAccess.accessCameraStream(5,r);case 65:return a=t.sent,t.next=68,a.mediaStreamPromise;case 68:c=t.sent,t.next=110;break;case 71:return t.prev=71,t.t5=t.catch(61),t.prev=73,i=6,t.next=77,p.CameraAccess.accessCameraStream(6,r);case 77:return a=t.sent,t.next=80,a.mediaStreamPromise;case 80:c=t.sent,t.next=110;break;case 83:return t.prev=83,t.t6=t.catch(73),t.prev=85,i=7,t.next=89,p.CameraAccess.accessCameraStream(7,r);case 89:return a=t.sent,t.next=92,a.mediaStreamPromise;case 92:c=t.sent,t.next=110;break;case 95:return t.prev=95,t.t7=t.catch(85),t.prev=97,i=8,t.next=101,p.CameraAccess.accessCameraStream(8,r);case 101:return a=t.sent,t.next=104,a.mediaStreamPromise;case 104:c=t.sent,t.next=110;break;case 107:t.prev=107,t.t8=t.catch(97),console.log(t.t8);case 110:o=-1!=navigator.userAgent.indexOf("Safari"),p.CameraAccess.getUserMediaVideoParams(i,o),console.log(c),s={mediaParams:JSON.stringify(a.mediaParams)},Y(s),l=c.getVideoTracks()[0].getSettings(),d=l.width,f=l.height,fe(l),ie(f),se(d),e.current.srcObject=c;case 122:case"end":return t.stop()}}),t,null,[[1,11],[13,23],[25,35],[37,47],[49,59],[61,71],[73,83],[85,95],[97,107]])})));return function(e,r){return t.apply(this,arguments)}}(),[e,t,r,i,ie,se]),Je=Object(n.useCallback)(Object(l.a)(u.a.mark((function e(){var t,r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getSupportedConstraints();case 2:return t=e.sent,console.log(t),e.next=6,p.CameraAccess.getCameras();case 6:r=e.sent,n={},r.map((function(e,t){return n["Devices Info ".concat(t)]=JSON.stringify(e)})),a=r.filter((function(e){return"back"===e.cameraType})),n["Has Back Camera"]=a.length?"true":"false",n["Back Camera"]=JSON.stringify(a[0]),n["Back Camera length"]=JSON.stringify(a.length),Y(n),a.length?He(a[0],r):He(r[0],r),console.log(navigator.appVersion);case 16:case"end":return e.stop()}}),e)}))),[He]);Object(n.useEffect)((function(){Je()}),[true,e,t,r,i,Je,He]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"debug",children:["Debug ",function(){var e=[];for(var t in z)e.push(Object(C.jsxs)("div",{className:"debugRow",children:[Object(C.jsxs)("span",{className:"debugLabel",children:[t," : "]}),Object(C.jsx)("span",{className:"debugValue",children:z[t]})]}));return e}()]}),Object(C.jsxs)("div",{className:"container",ref:Ue,onMouseMove:function(e){L({x:e.screenX,y:e.screenY})},children:[Object(C.jsx)("video",{ref:e,id:"video",autoPlay:!0,muted:!0}),Object(C.jsx)("div",{id:"changeVideo",children:Object(C.jsx)(h.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",ref:c,onClick:function(){console.log(de);var n=t.current.getContext("2d"),a=window.innerWidth,c=window.innerHeight;t.current.width=a,t.current.height=c,n.drawImage(e.current,0,0,window.innerWidth,window.innerHeight),n.transform(window.innerWidth/de.width,0,0,window.innerHeight/de.height,0,0),n.font="20px Roboto";var o=0;for(var s in A){var u="".concat(s," : ").concat(JSON.stringify(A[s]));n.strokeText(u,10,20+20*o,1e3),o++}var l=t.current.toDataURL("image/png");i.current.setAttribute("src",l),r.current.href=l,r.current.download="MyPhoto.png",r.current.click(),window.URL.revokeObjectURL(l)},children:Object(C.jsx)(x.a,{style:{fontSize:100}})})}),Object(C.jsx)("div",{id:"additionalButtons",children:Object(C.jsx)(h.a,{color:"secondary","aria-label":"upload picture",component:"span",variant:"contained",ref:c,onClick:function(){var e=Object(f.a)(Object(f.a)({},R),{},Object(d.a)({},"disp".concat(Q),!0));Z(Q+1),N(e)},disabled:Q>=2,children:Object(C.jsx)(y.a,{style:{fontSize:100}})})}),Object(C.jsxs)("div",{id:"handlers",children:[Object(C.jsx)("canvas",{id:"canvas",ref:t,children:" "}),Object(C.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:r,children:"image"}),Object(C.jsx)("img",{id:"photo",ref:i,src:"/logo.svg",alt:"Donwload placeholder"})]}),Object(C.jsx)("div",{className:"boundingBoxWrapper0",id:"bbox0",ref:o,onTouchStart:function(){return re(o)},onMouseDown:function(){return re(o)},children:Object(C.jsx)("div",{className:"boundingBox",ref:ge,style:{opacity:be?0:1,cursor:"move",display:R.disp0?"inline-block":"none"}})}),Object(C.jsx)("div",{className:"boundingBoxWrapper1",id:"bbox1",ref:s,onTouchStart:function(){return re(s)},onMouseDown:function(){return re(s)},children:Object(C.jsx)("div",{className:"boundingBox",ref:xe,style:{opacity:je?0:1,cursor:"move",display:R.disp1?"inline-block":"none"}})}),Object(C.jsx)("div",{className:"boundingBoxWrapper2",id:"bbox2",ref:j,onTouchStart:function(){return re(j)},onMouseDown:function(){return re(j)},children:Object(C.jsx)("div",{className:"boundingBox",ref:Ce,style:{opacity:we?0:1,cursor:"move",display:R.disp2?"inline-block":"none"}})}),Object(C.jsx)("div",{className:"boundingBoxWrapper3",id:"bbox3",ref:O,onTouchStart:function(){return re(O)},onMouseDown:function(){return re(O)},children:Object(C.jsx)("div",{className:"boundingBox",ref:Ee,style:{opacity:ke?0:1,cursor:"move",display:R.disp3?"inline-block":"none"}})}),Object(C.jsx)("div",{className:"boundingBoxWrapper4",id:"bbox4",ref:B,onTouchStart:function(){return re(B)},onMouseDown:function(){return re(B)},children:Object(C.jsx)("div",{className:"boundingBox",ref:Me,style:{opacity:De?0:1,cursor:"move",display:R.disp4?"inline-block":"none"}})}),Object(C.jsx)("div",{className:"boundingBoxWrapper5",id:"bbox5",ref:k,onTouchStart:function(){return re(k)},onMouseDown:function(){return re(k)},children:Object(C.jsx)("div",{className:"boundingBox",ref:Ie,style:{opacity:Ne?0:1,cursor:"move",display:R.disp5?"inline-block":"none"}})})]}),Object(C.jsx)(Fe,{})]})},k=r(52);var E=function(){return Object(C.jsx)(o.a,{backend:k.a,options:{enableMouseEvents:!0},children:Object(C.jsx)("div",{className:"App",children:Object(C.jsx)("header",{className:"App-header",children:Object(C.jsx)(B,{})})})})},_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,100)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),_()}},[[75,1,2]]]);
//# sourceMappingURL=main.956e0210.chunk.js.map