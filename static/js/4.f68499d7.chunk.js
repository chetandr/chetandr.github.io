(this["webpackJsonpchetandr.github.io.src"]=this["webpackJsonpchetandr.github.io.src"]||[]).push([[4],{481:function(e,t){},483:function(e,t){},494:function(e,t){},496:function(e,t){},523:function(e,t){},525:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},552:function(e,t){},564:function(e,t){},567:function(e,t){},748:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"default",(function(){return V}));var r={};n.r(r),n.d(r,"default",(function(){return fe}));var c={};n.r(c),n.d(c,"Login",(function(){return a})),n.d(c,"License",(function(){return r}));var i={};n.r(i),n.d(i,"default",(function(){return ze}));var o={};n.r(o),n.d(o,"default",(function(){return Me}));var s={};n.r(s),n.d(s,"default",(function(){return Ue}));var l={};n.r(l),n.d(l,"default",(function(){return Be}));var d={};n.r(d),n.d(d,"Front",(function(){return i})),n.d(d,"Driverside",(function(){return o})),n.d(d,"Passengerside",(function(){return s})),n.d(d,"Rear",(function(){return l}));var j={};n.r(j),n.d(j,"default",(function(){return Ze}));var u={};n.r(u),n.d(u,"Report",(function(){return j}));var b={};n.r(b),n.d(b,"Onboard",(function(){return c})),n.d(b,"Inspection",(function(){return d})),n.d(b,"Summary",(function(){return u}));var h=n(235),x=n(312),p=n(191),g=n(1),O=n.n(g),f=n(106),m=n(734),v=n(728),y=n(731),w=n(732),C=n(733),S=n(751),A=n(3),k=function(e){return Object(A.jsx)(f.a,{p:4,children:Object(A.jsx)("img",{src:e.imageURL,alt:e.alt,style:{marginLeft:"auto",marginRight:"auto",display:"block",width:"80vw"}})})};k.defaultProps={imageURL:"/logos/carScan_logo.png",alt:"Carscan"};var D=k,I=n(721),R=n(724),E=n(726),N=function(){return Object(A.jsx)("img",{src:"/images/car.png",style:{width:"95vw"}})},_=n(757),L=n(427),F=n(428),W=n.n(F);W.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var P=W.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CARDATA_API||"https://cardata.devinternal.carscan.ai\u200b\u200b",timeout:3e4}),T=n(749),z=function(e){return Object(T.a)(P.get("/cardata/companies/".concat(e,"/settings")))},M=function(e,t){return Object(T.a)(P.post("/cardata/companies/".concat(e,"/assessments"),{captcha_id:"60cb91e6a1673b6e53f595fa",captcha_token:"cu2wy",device_id:"b04d837c-3539-430e-b9ae-159dcbe1e96b",field_one:t||"9876567654",notification_reg_id:"123456789"}))},U=function(e,t,n){return Object(T.a)(P.patch("/cardata/external/companies/".concat(e,"/assessments/").concat(t),{assessment_type:"PRE_INSPECTION"},{headers:{"device-id":n},"Content-Type":"application/json"}))},B=n(755),H=n(758),K=n(720),J=Object(K.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:e.palette.primary.main}}})),G=function(e){var t=Object(H.a)().t,n=(J(),O.a.useState(!1)),a=Object(p.a)(n,2),r=a[0],c=a[1],i=O.a.useState(null),o=Object(p.a)(i,2),s=o[0],l=o[1],d=O.a.useState(null),j=Object(p.a)(d,2),u=j[0],b=j[1],h=O.a.useState([]),x=Object(p.a)(h,2),k=x[0],F=x[1],W=O.a.useRef(),P=O.a.useState(!1),T=Object(p.a)(P,2),K=(T[0],T[1],O.a.useState(!1)),G=Object(p.a)(K,2),V=G[0],Y=G[1];Object(g.useEffect)((function(){try{z(9994).subscribe((function(e){return l(e.data)}))}catch(e){console.log(e)}}),[]);return Object(A.jsxs)(O.a.Fragment,{children:[null!==s&&Object(A.jsx)(D,{imageURL:null===s||void 0===s?void 0:s.logo}),Object(A.jsx)(f.a,{pt:2,px:4,children:Object(A.jsx)(I.a,{style:{textAlign:"center"},children:t("welcome",{company_name:null!==s?s.company_name:"our Shop"})})}),Object(A.jsx)(f.a,{pt:2,px:4,children:Object(A.jsx)(S.a,{id:"standard-full-width",placeholder:t("Enter Your Contact Number"),fullWidth:!0,margin:"normal",variant:"outlined",onChange:function(e){return b(e.target.value)},InputProps:{style:{borderRadius:"28px"}}})}),Object(A.jsx)(f.a,{pt:4,pl:4,children:Object(A.jsx)(E.a,{children:Object(A.jsxs)(R.a,{children:[Object(A.jsx)(_.a,{color:"primary",checked:r,onChange:function(){c(!r)},name:"Agreed",style:{float:"left"}}),Object(A.jsxs)(I.a,{variant:"caption",children:[t("I have read, understood and agreed with your")," ",Object(A.jsxs)(I.a,{color:"primary",variant:"caption",style:{cursor:"pointer",display:"inline-block"},onClick:function(){return Y(!0)},children:[" ",t("Terms and Conditions")]})]})]})})}),Object(A.jsx)(f.a,{p:2,children:Object(A.jsx)(N,{})}),Object(A.jsx)(f.a,{pt:4,px:4,children:Object(A.jsx)(L.a,{text:t("Swipe to Login"),color:"#EDA03A",onSuccess:function(){var n=[];null===u&&n.push(t("Enter the Contact number")),r||n.push(t("Agree to the terms and coditions by selecting the checkbox below")),n.length?(F(n),W.current.reset()):(e.toggleWaiting&&e.toggleWaiting(),M(9994,u).subscribe((function(t){return U(9994,t.data.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b").subscribe((function(){e.toggleWaiting&&e.toggleWaiting(),e.nextAction(t.data)}))})))},ref:W})}),null!==s&&Object(A.jsxs)(v.a,{open:V,fullScreen:!0,fullWidth:!0,children:[Object(A.jsx)(y.a,{children:t("Terms and Conditions")}),Object(A.jsx)(w.a,{style:{overflow:"hidden",padding:0,paddingLeft:16},children:Object(A.jsx)("iframe",{src:s.terms_and_conditions_url,style:{width:"100%",height:"100%",border:"none"}})}),Object(A.jsx)(C.a,{children:Object(A.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return Y(!1)},children:t("Close")})})]}),0!==k.length&&Object(A.jsxs)(v.a,{open:k.length,maxWidth:"lg",style:{width:"80vw",height:"60vw"},children:[Object(A.jsx)(y.a,{children:"Error!!"}),Object(A.jsx)(w.a,{style:{overflow:"hidden"},children:k.map((function(e){return Object(A.jsx)(f.a,{p:1,children:Object(A.jsx)(B.a,{severity:"error",children:e})})}))}),Object(A.jsx)(C.a,{children:Object(A.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return F([])},children:"Ok"})})]})]})};G.defaultProps={nextAction:function(){},prevAction:function(){}};var V=G,Y=n(239),q=n.n(Y),X=n(240),Z=n(735),Q=function(e){return Object(A.jsx)(O.a.Fragment,{children:Object(A.jsxs)(Z.a,{container:!0,style:{height:"100vh"},children:[Object(A.jsx)(Z.a,{item:!0,xs:12,className:"translucent",style:{height:"".concat((100-e.windowSize)/2,"%")}}),Object(A.jsx)(Z.a,{item:!0,xs:12,style:{height:"".concat(e.windowSize,"%")},children:Object(A.jsxs)(Z.a,{container:!0,style:{height:"100%"},children:[Object(A.jsx)(Z.a,{item:!0,xs:1,className:"translucent"}),Object(A.jsxs)(Z.a,{item:!0,xs:10,className:"window",style:{borderColor:e.borderColor},children:[Object(A.jsx)("div",{className:"windowCorner topLeftWindowCorner",style:{borderColor:e.borderColor}}),Object(A.jsx)("div",{className:"windowCorner topRightWindowCorner",style:{borderColor:e.borderColor}}),Object(A.jsx)("div",{className:"windowCorner bottomLeftWindowCorner",style:{borderColor:e.borderColor}}),Object(A.jsx)("div",{className:"windowCorner bottomRightWindowCorner",style:{borderColor:e.borderColor}})]}),Object(A.jsx)(Z.a,{item:!0,xs:1,className:"translucent"})]})}),Object(A.jsx)(Z.a,{item:!0,xs:12,className:"translucent",style:{height:"".concat((100-e.windowSize)/2,"%")}})]})})};Q.defaultProps={windowSize:15,borderColor:"#7EF424"};var $=Q,ee=n(241),te=n.n(ee),ne=te()(f.a)({position:"relative",width:"100%",textAlign:"center",color:"#fff",zIndex:2002,backgroundColor:"#000",maxSize:"640px",borderRadius:"8px"}),ae=function(e){return Object(A.jsx)(m.a,{variant:e.variant,color:e.color,fullWidth:e.fullWidth,size:e.size,style:{borderRadius:"28px",height:"0.05%",textTransform:"none",paddingLeft:"16px",paddingRight:"16px"},onClick:function(){e.onClick()},children:e.label})};ae.defaultProps={label:"",color:"primary",onClick:function(){},fullWidth:!0,size:"medium",variant:"contained"};var re=ae,ce=function(e,t,n,a,r){return Object(T.a)(P.post("/cardata/external/companies/".concat(e,"/assessments/").concat(t,"/files"),{fileExtension:a,md5s:r},{headers:{"device-id":n},"Content-Type":"application/json"}))},ie=function(e,t,n,a,r){return console.log("IMGMD5 UPLOAD",t),Object(T.a)(P.request({method:"PUT",url:e,data:t,headers:{"Content-MD5":n,"Content-Type":a}}))},oe=function(e,t,n,a,r,c,i,o){return Object(T.a)(P.put("/cardata/external/companies/".concat(e,"/assessments/").concat(t,"/files/").concat(a),{gps:r,original_image_resolution:c,tags:i,upload_done:o},{headers:{"device-id":n},"Content-Type":"application/json"}))},se=O.a.createContext([]),le=n(327),de=n(476),je=n.n(de),ue=(n(570),n(571),n(572)),be=n.n(ue),he=function(e,t){switch("".concat(e,"x").concat(t)){case"4032x3024":return"DCI 4K (iCAM 12MP)";case"3840x2160":return"4K (iCAM 12MP)";case"4096x2160":return"DCI 4K";case"3840x2160":return"4K";case"2048x1152":return"2K";case"1920x1080":return"Full HD";case"1280x720":return"HD";case"640x480":return"SD";default:switch(e){case 4032:return"DCI 4K";case 3840:return"4K";case 2048:return"2K";case 1920:return"Full HD";case 1280:case 640:return"HD";default:return"Non SD"}}};function xe(){return pe.apply(this,arguments)}function pe(){return(pe=Object(X.a)(q.a.mark((function e(){var t,n,a,r,c,i,o,s,l,d,j,u,b,h,x,p,g,O;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,n=navigator.mediaDevices.getSupportedConstraints(),console.log("Supported Constraints",n),e.prev=3,e.prev=4,e.next=7,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"environment"}}});case 7:t=e.sent,e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(4),e.prev=12,e.next=15,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{exact:"user"}}});case 15:t=e.sent,e.next=23;break;case 18:return e.prev=18,e.t1=e.catch(12),e.next=22,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 22:t=e.sent;case 23:return e.next=25,t.getVideoTracks();case 25:if(a=e.sent,r=a[0],"getCapabilities"in a[0]&&a[0].getCapabilities(),r.getSettings(),c="",!(navigator.platform.indexOf("Mac")>-1)){e.next=88;break}return e.prev=31,c="DCI 4K",i={width:{ideal:4032},height:{ideal:3024}},e.next=36,r.applyConstraints(i);case 36:e.next=86;break;case 38:return e.prev=38,e.t2=e.catch(31),e.prev=40,c="DCI 4K",o={width:{ideal:3840},height:{ideal:2160}},e.next=45,r.applyConstraints(o);case 45:e.next=86;break;case 47:return e.prev=47,e.t3=e.catch(40),e.prev=49,c="DCI 4K",s={width:{ideal:3840},height:{ideal:2160}},e.next=54,r.applyConstraints(s);case 54:e.next=86;break;case 56:return e.prev=56,e.t4=e.catch(49),e.prev=58,c="Full HD",l={width:{ideal:1920},height:{ideal:1080}},e.next=63,r.applyConstraints(l);case 63:e.next=86;break;case 65:return e.prev=65,e.t5=e.catch(58),e.prev=67,c="HD",d={width:{ideal:1280},height:{ideal:720}},e.next=72,r.applyConstraints(d);case 72:e.next=86;break;case 74:return e.prev=74,e.t6=e.catch(67),e.prev=76,c="SD",j={width:{ideal:640},height:{ideal:480}},e.next=81,r.applyConstraints(j);case 81:e.next=86;break;case 83:e.prev=83,e.t7=e.catch(76),alert(e.t7);case 86:e.next=149;break;case 88:return e.prev=88,c="DCI 4K",u={width:{ideal:4096},height:{ideal:2160}},console.log("DCI 4k",u),e.next=94,r.applyConstraints(u);case 94:e.next=149;break;case 96:return e.prev=96,e.t8=e.catch(88),e.prev=98,c="UHD",b={width:{ideal:3840},height:{ideal:2160}},console.log("UHD",b),e.next=104,r.applyConstraints(b);case 104:e.next=149;break;case 106:return e.prev=106,e.t9=e.catch(98),e.prev=108,c="2K",h={width:{ideal:2048},height:{ideal:1152}},console.log("2K",h),e.next=114,r.applyConstraints(h);case 114:e.next=149;break;case 116:return e.prev=116,e.t10=e.catch(108),e.prev=118,c="Full HD",x={width:{ideal:1920},height:{ideal:1080}},console.log("Full HD",x),e.next=124,r.applyConstraints(x);case 124:e.next=149;break;case 126:return e.prev=126,e.t11=e.catch(118),e.prev=128,c="HD",p={width:{ideal:1280},height:{ideal:720}},console.log("HD",p),e.next=134,r.applyConstraints(p);case 134:e.next=149;break;case 136:return e.prev=136,e.t12=e.catch(128),e.prev=138,c="SD",g={width:{ideal:640},height:{ideal:480}},console.log("SD",g),e.next=144,r.applyConstraints(g);case 144:e.next=149;break;case 146:e.prev=146,e.t13=e.catch(138),alert(e.t13);case 149:return(O=r.getSettings()).reso=c,e.abrupt("return",{stream:t,settings:O,reso:c});case 154:e.prev=154,e.t14=e.catch(3),console.error(e.t14);case 157:case"end":return e.stop()}}),e,null,[[3,154],[4,10],[12,18],[31,38],[40,47],[49,56],[58,65],[67,74],[76,83],[88,96],[98,106],[108,116],[118,126],[128,136],[138,146]])})))).apply(this,arguments)}var ge=function(e,t){return new Promise((function(t,n){console.log("dataURL",e);var a=new FileReader;je()(e);a.onloadend=function(){var e=Object(X.a)(q.a.mark((function e(n){var r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"sample",new Uint8Array(a.result),console.log(a.result),r=btoa(be.a.ArrayBuffer.hash(a.result,!0)),console.log("dataURL",r,a.result),t([r,a.result]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.readAsArrayBuffer(e)}))},Oe=te()(f.a)({height:"1px",backgroundColor:"#EBEBEB"}),fe=function(e){var t=O.a.useState([]),n=Object(p.a)(t,2),a=n[0],r=n[1],c=new le.BrowserMultiFormatReader,i=O.a.useRef(),o=O.a.useRef(),s=O.a.useContext(se);return 0===Object.keys(s).length&&s.constructor===Object&&(s={login:JSON.parse(sessionStorage.getItem("login")),geoLocation:JSON.parse(sessionStorage.getItem("geoLocation"))}),Object(g.useEffect)(Object(X.a)(q.a.mark((function t(){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n=c.decodeFromConstraints({audio:!1,video:{facingMode:{exact:"environment"}}})}catch(a){try{n=c.decodeFromConstraints({audio:!1,video:{facingMode:{exact:"user"}}})}catch(l){n=c.decodeFromConstraints({audio:!1,video:!0})}}console.log("codeReader",c),console.log("Started continous decode from camera with id ".concat(n[0])),console.log(i.current),c.decodeFromVideoDevice(n[0],o.current,(function(t,n){if(t){var a=t.text.split("%");console.log("carInfo",a),r(a),c.captureCanvas.toBlob(function(){var t=Object(X.a)(q.a.mark((function t(n){var r,i,o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(n);case 2:r=t.sent,i=Object(p.a)(r,1),o=i[0],console.log("BLOB",n),e.toggleWaiting&&e.toggleWaiting(),ce(9994,s.login.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b","PNG",o).subscribe((function(t){console.log("Uploading the Image to the URL ",t.data);try{ie(t.data.uploadUrl,n,o,"image/png").subscribe((function(n){if(200===n.status&&e.nextAction){var r=[{tag_type:"VEHICLE_IDENTIFIER",value:"BAR_CODE",make:a[9],model:a[8],license_number:a[6],registration_number:a[7],engine_number:a[13],vin_number:a[12]}];oe(9994,s.login.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b",t.data.id,s.geoLocation,{height:c.captureCanvas.width,width:c.captureCanvas.width},r,!0)}}))}catch(l){console.error("Error",l)}}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c.stopStreams()}!n||n instanceof le.NotFoundException||console.error(n)}));case 5:case"end":return t.stop()}}),t)}))),[]),Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(f.a,{p:2,style:{display:"block",width:"100%",position:"absolute"},children:Object(A.jsx)(ne,{children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(f.a,{p:1,children:Object(A.jsx)(I.a,{variant:"body1",children:"Generate Vehicle Details"})}),Object(A.jsxs)(Z.a,{container:!0,children:[Object(A.jsx)(Z.a,{item:!0,xs:1}),Object(A.jsx)(Z.a,{item:!0,xs:4,children:Object(A.jsx)(f.a,{children:Object(A.jsx)(re,{color:"secondary",size:"small",fullWidth:!1,label:"License Disc"})})}),Object(A.jsx)(Z.a,{item:!0,xs:1}),Object(A.jsx)(Z.a,{item:!0,xs:4,children:Object(A.jsx)(f.a,{children:Object(A.jsx)(re,{color:"secondary",size:"small",fullWidth:!1,label:"Vin Number",variant:"text"})})}),Object(A.jsx)(Z.a,{item:!0,xs:1})]})]})})}),Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"20%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Place our License disc within the frames and hold it there for a few second."})}),Object(A.jsx)(f.a,{children:Object(A.jsx)("div",{children:Object(A.jsx)("video",{id:"video",width:"300",height:"200",ref:o})})}),Object(A.jsx)(f.a,{style:{top:0,left:0},children:Object(A.jsx)($,{windowSize:24})}),Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"64%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Move Closer to the scan area."})}),Object(A.jsxs)(v.a,{open:a.length>0,size:"md",children:[Object(A.jsx)(y.a,{disableTypography:"false",children:Object(A.jsx)(I.a,{variant:"h4",style:{textAlign:"center"},children:"Details found !"})}),Object(A.jsxs)(f.a,{p:1,m:2,textAlign:"center",children:[Object(A.jsx)(I.a,{variant:"h6",children:a[9]}),Object(A.jsx)(Oe,{}),Object(A.jsx)(I.a,{variant:"body2",textAlign:"center",children:"Make"})]}),Object(A.jsxs)(f.a,{p:1,m:2,textAlign:"center",children:[Object(A.jsx)(I.a,{variant:"h6",children:a[8]}),Object(A.jsx)(Oe,{}),Object(A.jsx)(I.a,{variant:"body2",textAlign:"center",children:"Model"})]}),Object(A.jsxs)(f.a,{p:1,m:2,textAlign:"center",children:[Object(A.jsx)(I.a,{variant:"h6",children:a[6]}),Object(A.jsx)(Oe,{}),Object(A.jsx)(I.a,{variant:"body2",textAlign:"center",children:"License No"})]}),Object(A.jsxs)(f.a,{p:1,m:2,textAlign:"center",children:[Object(A.jsx)(I.a,{variant:"h6",children:a[12]}),Object(A.jsx)(Oe,{}),Object(A.jsx)(I.a,{variant:"body2",textAlign:"center",children:"Vin No"})]}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(re,{label:"Retake",color:"tertiary",onClick:function(){console.log("RESET"),r([]),c.reset()}}),Object(A.jsx)(re,{label:"Confirm",onClick:function(){console.log("next Clicked",e.nextAction),e.nextAction(a)}})]})]})]})},me=n(738),ve=n(154),ye=n(752),we=n(753),Ce=n(684),Se=n(727),Ae=n(736),ke=function(e){return Object(A.jsx)(Ae.a,{style:{height:"100%",width:"100%"},children:Object(A.jsx)("img",{src:"/images/CaptureButton.png",style:{textAlign:"center",width:"80px"}})})},De=function(e){return Object(A.jsx)(f.a,{p:4,style:{display:"block",position:"absolute",top:"40%",right:"0%",zIndex:205,textAlign:"center",color:"white"},children:Object(A.jsx)(Se.a,{onClick:e.onClick,children:Object(A.jsx)(ke,{})})})},Ie=function(e,t,n,a,r,c,i,o){return Object(T.a)(P.put("/cardata/external/companies/".concat(e,"/assessments/").concat(t,"/files/").concat(a),{gps:r,original_image_resolution:c,tags:i,upload_done:o},{headers:{"device-id":n},"Content-Type":"application/json"}))},Re="boundry",Ee=function(e){var t=O.a.useRef(),n=O.a.useRef(),a=O.a.useRef(),r=O.a.useRef(),c=O.a.useRef(),i=O.a.useRef(),o=O.a.useRef(),s=O.a.useState(),l=Object(p.a)(s,2),d=l[0],j=l[1],u=O.a.useRef(),b=O.a.useState({}),f=Object(p.a)(b,2),m=f[0],v=f[1],y=O.a.useState({}),w=Object(p.a)(y,2),C=(w[0],w[1]),S=O.a.useState(!1),k=Object(p.a)(S,2),D=(k[0],k[1]),I=O.a.useState(),R=Object(p.a)(I,2),E=R[0],N=R[1],_=O.a.useState("INIT"),L=Object(p.a)(_,2),F=L[0],W=L[1],P=Object(ve.a)().getMonitor(),T=O.a.useRef(),z=O.a.useState({x:0,y:0}),M=Object(p.a)(z,2),U=M[0],B=M[1],H=O.a.useState({x:0,y:0}),K=Object(p.a)(H,2),J=K[0],G=K[1],V=O.a.useContext(se);0===Object.keys(V).length&&V.constructor===Object&&(V={login:JSON.parse(sessionStorage.getItem("login")),geoLocation:JSON.parse(sessionStorage.getItem("geoLocation"))}),console.log("carData",V);var Y=Object(ye.a)((function(){return{type:Re,collect:function(e){return{isDragging:!!e.isDragging()}}}})),Z=Object(p.a)(Y,2),Q=Z[0].isDragging,$=Z[1],ee=Object(we.a)((function(){return{accept:Re,drop:function(){return ae(d,U,J)},collect:function(e){return{isOver:!!e.isOver()}}}}),[U,J,d]),te=Object(p.a)(ee,2),ne=(te[0].isOver,te[1]),ae=function(e,t,n){var a=t.x-n.x,r=t.y-n.y;console.log(e,t,n);var c=e.current.getClientRects(),i=a+c[0].width,o=r+c[0].height;e.current.style.left="".concat(a,"px"),e.current.style.top="".concat(r,"px");var s=Object(x.a)(Object(x.a)({},E),{},Object(h.a)({},e.current.id,[{x:a,y:r},{x:i,y:o}]));N(s)},re=function(){var e=Object(Ce.a)(),t=e.display,n=(e.itemType,e.item,e.style);return t?Object(A.jsx)("div",{className:"boundingBoxWrapper",style:n,children:Object(A.jsx)("div",{className:"boundingBox"})}):null},oe=function(e){var t=e.width,a=e.height,r=n.current.offsetWidth,c=n.current.offsetHeight;r>c?c=Math.floor(r*a/t):r=Math.floor(c*t/a);var i=c/a,o=r/t,s=0;return r>document.documentElement.clientWidth&&(s=-(r-document.documentElement.clientWidth)/2),console.log(t,a,r,c,s,0),[t,a,r,c,s,0,o,i]},le=O.a.useCallback(Object(X.a)(q.a.mark((function e(){var n,r,c,i,s,l,d,j,u,b,h,x;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe();case 2:(n=e.sent)&&t.current&&("srcObject"in t.current?t.current.srcObject=n.stream:t.src=window.URL.createObjectURL(n.stream),v(n.settings),r=oe(n.settings),c=Object(p.a)(r,8),i=c[0],s=c[1],l=c[2],d=c[3],j=c[4],u=c[5],b=c[6],h=c[7],t.current.width=i,t.current.height=s,a.current.width=i,a.current.height=s,l<document.documentElement.clientWidth?t.current.style.transform="translate(".concat(-t.current.offsetLeft,"px, ").concat(-t.current.offsetTop,"px) scale(").concat(b,", ").concat(h,")"):(console.log("translate(".concat(-j,"px, ").concat(-u,"px) scale(").concat(b,", ").concat(h,")")),t.current.style.transform="translate(".concat(j,"px, ").concat(-t.current.offsetTop,"px) scale(").concat(b,", ").concat(h,")")),t.current.style.transformOrigin="top left",o.current.width=i,o.current.height=s,o.current.style.width="".concat(l,"px"),o.current.style.height="".concat(d,"px"),x={video:"".concat(i," x ").concat(s," (").concat(he(i,s),")"),scale:"".concat(b," x ").concat(h),media:"".concat(n.settings.width," x ").concat(n.settings.height),target:"".concat(l," x ").concat(d),targetXY:"".concat(j," x ").concat(u)},C(x));case 4:case"end":return e.stop()}}),e)}))),[t,n,i,o]);window.addEventListener("orientationchange",(function(e){le()})),Object(g.useEffect)(Object(X.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le();case 1:case"end":return e.stop()}}),e)}))),[t,n,i,o]);var de=function(){var n=Object(X.a)(q.a.mark((function n(){var a,c,i,s,l,d,j;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=oe(m),c=Object(p.a)(a,8),i=c[0],s=c[1],c[2],c[3],c[4],c[5],c[6],c[7],l=o.current.getContext("2d"),D(!0),t.current.pause(),l.drawImage(t.current,0,0),480,d=r.current.getContext("2d"),r.current.width=480,r.current.height=r.current.width/1.7,d.scale(480/o.current.width,480/1.7/o.current.height),d.drawImage(t.current,2,0),j=r.current.toDataURL("image/png"),o.current.toBlob(function(){var t=Object(X.a)(q.a.mark((function t(n){var a,r,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(n);case 2:a=t.sent,r=Object(p.a)(a,1),c=r[0],console.log("BLOB",n),e.toggleWaiting&&e.toggleWaiting(),ce(9994,V.login.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b","PNG",c).subscribe((function(t){console.log("Uploading the Image to the URL ",t.data);try{ie(t.data.uploadUrl,n,c,"image/png").subscribe((function(n){200===n.status&&e.nextAction&&(Ie(9994,V.login.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b",t.data.id,V.geoLocation,{height:i,width:s},[{tag_type:"AREA",value:e.side}],!0),e.nextAction(Object(x.a)(Object(x.a)({},t.data),{},{thumbnail:j})))}))}catch(a){console.error("Error",a)}}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),setTimeout((function(){return D(!1)}),3e3),W("CAPTURED");case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();O.a.useEffect((function(){P.subscribeToOffsetChange((function(){var e=P.getClientOffset(),t=P.getInitialClientOffset(),n=P.getInitialSourceClientOffset();t&&n&&(G({x:t.x-n.x,y:t.y-n.y}),B(e))}))}),[P]);return console.log("DRAGGING",Q),Object(A.jsxs)("div",{ref:ne,children:[!1,Object(A.jsxs)("div",{ref:n,className:"videoWrapper",style:{overflow:"CAPTURED"===F?"auto":"hidden"},children:[Object(A.jsx)("video",{ref:t,id:"camvideo",autoPlay:!0,playsInline:!0}),Object(A.jsx)("img",{ref:a,style:{border:"solid 2px red",display:"none"}}),Object(A.jsx)("img",{ref:T,style:{border:"solid 2px red",display:"none"}})]}),Object(A.jsxs)("div",{style:{position:"absolute"},children:[Object(A.jsx)("canvas",{ref:i,style:{border:"solid 2px red",display:"none"}}),Object(A.jsx)("canvas",{ref:o,style:{border:"solid 2px green",display:"none"}}),Object(A.jsx)("canvas",{ref:r,style:{border:"solid 2px orange",position:"absolute",bottom:"10px",zIndex:"1000",display:"none"}})]}),Object(A.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:u,style:{display:"none"},children:"image"}),"BBOX"===F&&Object(A.jsx)("div",{className:"boundingBoxWrapper",id:"bbox",ref:c,onTouchStart:function(){return j(c)},onMouseDown:function(){return j(c)},style:{opacity:Q?0:1},children:Object(A.jsx)("div",{className:"boundingBox",ref:$,style:{cursor:"move",display:"inline-block"}})}),Object(A.jsx)("a",{id:"downloadAnchor",href:"http://chetandr.github.com",ref:u,style:{display:"none"},children:"image"}),Object(A.jsx)(re,{}),Object(A.jsx)(De,{onClick:de})]})};Ee.defaultProps={nextAction:function(){},side:""};var Ne=Ee,_e=n(682),Le=n(739);function Fe(e){return e.side?Object(A.jsx)(me.a,{backend:_e.a,options:{enableMouseEvents:!0},children:Object(A.jsx)(Ne,{nextAction:e.nextAction,side:e.side,toggleWaiting:e.toggleWaiting})}):Object(A.jsx)(Le.a,{})}Fe.defaultProps={nextAction:function(){},side:""};var We=Fe,Pe=function(e){var t="/images/overlays/".concat(e.image);return Object(A.jsx)("img",{src:t,width:e.width})};Pe.defaultProps={image:"FrontFull.png",width:"60%"};var Te=Pe,ze=function(e){return Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"10px",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Position front of the car within the outlines and take a photo."})}),Object(A.jsx)(We,{nextAction:function(t){console.log("next Clicked",e.nextAction),e.nextAction(t)},side:"FRONT_SIDE",toggleWaiting:e.toggleWaiting}),Object(A.jsx)(f.a,{style:{display:"block",width:"100%",position:"absolute",top:"20%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(Te,{image:"FrontFull.png",width:"50%"})})]})},Me=function(e){return Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"10px",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Position driver side of the car within the outlines and take a photo."})}),Object(A.jsx)(We,{nextAction:function(t){console.log("next Clicked",e.nextAction),e.nextAction(t)},side:"DRIVER_SIDE",toggleWaiting:e.toggleWaiting}),Object(A.jsx)(f.a,{style:{display:"block",width:"100%",position:"absolute",top:"35%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(Te,{image:"DriverSideFull.png"})})]})},Ue=function(e){return Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"10px",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Position passenger side of the car within the outlines and take a photo."})}),Object(A.jsx)(We,{nextAction:function(t){console.log("next Clicked",e.nextAction),e.nextAction(t)},side:"PASSENGER_SIDE",toggleWaiting:e.toggleWaiting}),Object(A.jsx)(f.a,{style:{display:"block",width:"100%",position:"absolute",top:"35%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(Te,{image:"PassengerSideFull.png"})})]})},Be=function(e){return Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(f.a,{p:4,style:{display:"block",width:"100%",position:"absolute",top:"10px",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(I.a,{children:"Position rear of the car within the outlines and take a photo."})}),Object(A.jsx)(We,{nextAction:function(t){console.log("next Clicked",e.nextAction),e.nextAction(t)},side:"REAR_SIDE",toggleWaiting:e.toggleWaiting}),Object(A.jsx)(f.a,{style:{display:"block",width:"100%",position:"absolute",top:"20%",zIndex:200,textAlign:"center",color:"white"},children:Object(A.jsx)(Te,{image:"RearFull.png",width:"50%"})})]})},He=n(740),Ke=n(742),Je=n(741),Ge=n(743),Ve=n(725),Ye=function(e,t,n,a,r){return Object(T.a)(P.post("/cardata/external/companies/".concat(e,"/assessments/").concat(t,"/submit"),{assessment_location:a,preferred_location:r},{headers:{"device-id":n},"Content-Type":"application/json"}))},qe=te()(Ve.a)({margin:"16px 8px 16px 8px",borderRadius:"16px",border:"solid 1px #DADCE6"}),Xe=te()(He.a)({margin:"8px",backgroundColor:"#F0F1F5"}),Ze=function(e){var t=Object(g.useContext)(se);Object.keys(t).length||(t={license:JSON.parse(sessionStorage.getItem("license")),login:JSON.parse(sessionStorage.getItem("login")),front:JSON.parse(sessionStorage.getItem("front")),driverside:JSON.parse(sessionStorage.getItem("driverside")),passengerside:JSON.parse(sessionStorage.getItem("passengerside")),rear:JSON.parse(sessionStorage.getItem("rear")),geoLocation:JSON.parse(sessionStorage.getItem("geoLocation"))}),console.log("carData",t);var n=O.a.useState(!1),a=Object(p.a)(n,2),r=a[0],c=a[1];return Object(A.jsxs)(f.a,{children:[Object(A.jsxs)(He.a,{children:[Object(A.jsx)(Je.a,{title:"Assessment Summary",titleTypographyProps:{align:"center"}}),Object(A.jsxs)(Ke.a,{children:[Object(A.jsxs)(Z.a,{container:!0,spacing:2,children:[Object(A.jsx)(Z.a,{item:!0,xs:6,children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Make"}),Object(A.jsx)(I.a,{variant:"h6",children:t.license[9]})]})}),Object(A.jsx)(Z.a,{item:!0,xs:6,children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Model"}),Object(A.jsx)(I.a,{variant:"h6",children:t.license[8]})]})})]}),Object(A.jsxs)(Z.a,{container:!0,spacing:2,children:[Object(A.jsx)(Z.a,{item:!0,xs:6,children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(I.a,{variant:"body2",children:"License Plate"}),Object(A.jsx)(I.a,{variant:"h6",children:t.license[6]})]})}),Object(A.jsx)(Z.a,{item:!0,xs:6,children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Vin Number"}),Object(A.jsx)(I.a,{variant:"h6",children:t.license[12]})]})})]}),Object(A.jsxs)(Z.a,{container:!0,spacing:2,children:[Object(A.jsx)(Z.a,{item:!0,xs:6,children:Object(A.jsxs)(f.a,{p:2,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Request Date"}),Object(A.jsx)(I.a,{variant:"h6",children:new Intl.DateTimeFormat("en-ZA").format(new Date)})]})}),Object(A.jsx)(Z.a,{item:!0,xs:6})]}),Object(A.jsx)(Z.a,{container:!0,spacing:2,children:Object(A.jsx)(Z.a,{item:!0,xs:6})})]})]}),Object(A.jsxs)(Xe,{children:[Object(A.jsx)(Je.a,{title:"Front Side"}),Object(A.jsx)(Z.a,{container:!0,spacing:2,children:Object(A.jsx)(Z.a,{item:!0,xs:12,children:Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ge.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.front.thumbnail,title:"Front Side"}),Object(A.jsxs)(Ke.a,{children:[Object(A.jsxs)(f.a,{mb:3,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged Area"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged type"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]})]})]})})})]}),Object(A.jsxs)(Xe,{children:[Object(A.jsx)(Je.a,{title:"Driver Side"}),Object(A.jsx)(Z.a,{container:!0,spacing:2,children:Object(A.jsx)(Z.a,{item:!0,xs:12,children:Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ge.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.driverside.thumbnail,title:"Front Side"}),Object(A.jsxs)(Ke.a,{children:[Object(A.jsxs)(f.a,{mb:3,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged Area"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged type"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]})]})]})})})]}),Object(A.jsxs)(Xe,{children:[Object(A.jsx)(Je.a,{title:"Passenger Side"}),Object(A.jsx)(Z.a,{container:!0,spacing:2,children:Object(A.jsx)(Z.a,{item:!0,xs:12,children:Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ge.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.passengerside.thumbnail,title:"Front Side"}),Object(A.jsxs)(Ke.a,{children:[Object(A.jsxs)(f.a,{mb:3,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged Area"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged type"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]})]})]})})})]}),Object(A.jsxs)(Xe,{children:[Object(A.jsx)(Je.a,{title:"Rear Side"}),Object(A.jsx)(Z.a,{container:!0,spacing:2,children:Object(A.jsx)(Z.a,{item:!0,xs:12,children:Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ge.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.rear.thumbnail,title:"Front Side"}),Object(A.jsxs)(Ke.a,{children:[Object(A.jsxs)(f.a,{mb:3,children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged Area"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(I.a,{variant:"body2",children:"Damaged type"}),Object(A.jsx)(I.a,{variant:"h6",children:"-NA-"})]})]})]})})})]}),Object(A.jsx)(f.a,{p:1,m:2,textAlign:"right",children:Object(A.jsx)(re,{label:"Submit",fullWidth:!1,onClick:function(){e.toggleWaiting&&e.toggleWaiting(),Ye(9994,t.login.assessment_id,"b04d837c-3539-430e-b9ae-159dcbe1e96b",t.geoLocation,t.geoLocation).subscribe((function(e){return c(!0)}))}})}),Object(A.jsxs)(v.a,{open:r,size:"md",children:[Object(A.jsx)(y.a,{style:{textAlign:"center"},children:"Thank you !"}),Object(A.jsxs)(w.a,{children:[Object(A.jsx)(I.a,{style:{textAlign:"center"},children:"Your vehicle assessment is now complete!"}),Object(A.jsx)(I.a,{style:{textAlign:"center"},children:"We will be in touch with you soon."})]}),Object(A.jsx)(C.a,{style:{justifyContent:"center"},children:Object(A.jsx)(re,{label:"Ok",onClick:function(){},fullWidth:!1})})]})]})},Qe=[{type:"Onboard",step:"login",contained:!0},{type:"Onboard",step:"license"},{type:"Inspection",step:"front"},{type:"Inspection",step:"driverside"},{type:"Inspection",step:"passengerside"},{type:"Inspection",step:"rear"},{type:"Summary",step:"report"},{type:"OffBoard",step:"report"}],$e=n(56),et=Object($e.a)({typography:{fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},palette:{primary:{main:"#EDA03A"},secondary:{main:"rgb(126, 244, 36)"}},overrides:{MuiButton:{textSecondary:{color:"#FFF"}},MuiCardMedia:{img:{borderTopLeftRadius:"16px",borderTopRightRadius:"16px"}}}}),tt=n(746),nt=n(745),at=n(680),rt=n.n(at),ct=n(576),it=n.n(ct),ot=n(661),st=n.n(ot),lt=n(4),dt=n(678),jt=n(679),ut=n(686),bt=n(683),ht=function(e){Object(ut.a)(n,e);var t=Object(bt.a)(n);function n(){var e;Object(dt.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:null,errorInfo:null},e}return Object(jt.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState(e,t)}},{key:"render",value:function(){return this.state.errorInfo?Object(A.jsx)(B.a,{severity:"error",children:"Error Rendering the Component"}):this.props.children}}]),n}(g.Component);var xt=n(744),pt=n(730),gt=Object(K.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#EDA03A"}}}));t.default=function(){var e=O.a.useRef(),t=gt(),n=O.a.useState({}),a=Object(p.a)(n,2),r=a[0],c=a[1],i=Object(lt.g)(),o=i.type,s=i.step,l=O.a.useState(!1),d=Object(p.a)(l,2),j=d[0],u=d[1],g=function(e){var t="/journey/".concat(Qe[D].type,"/").concat(Qe[D].step);e&&(c(Object(x.a)(Object(x.a)({},r),{},Object(h.a)({},s,e))),sessionStorage.setItem(s,JSON.stringify(e))),console.log("nextAction",Qe[D].type.toLowerCase()),u(!1),y.push(t)},m=function(){u(!0)},v=function(e){var t=e.type,n=e.step,a=[];if(console.log("Module",st()(t),st()(n).split(" ").join("")),t){var r=O.a.createElement(b[st()(t)][st()(n)].default,{nextAction:g,toggleWaiting:m});a.push(r)}return a};o||s||(o=Qe[0].type,s=Qe[0].step);var y=Object(lt.f)(),w=function(){return Object(A.jsx)(f.a,{children:Object(A.jsxs)(pt.a,{className:t.backdrop,open:j,children:[Object(A.jsx)(xt.a,{color:"inherit",thickness:4,size:60}),Object(A.jsx)("img",{src:"/carScan_icon.png",width:"40px",style:{marginLeft:"-50px"}})]})})},C=function(e,t){var n=it()(Qe,(function(n){return n.type.toLowerCase()===e.toLowerCase()&&n.step.toLowerCase()===t.toLowerCase()}));return[n-1,n,n+1]}(o,s),S=Object(p.a)(C,3),k=(S[0],S[1]),D=S[2];"license"===Qe[k].step&&(r.geoLocation||new Promise((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,a=t.coords.longitude;e({lat:n,long:a})}),(function(){console.error("Unable to retrieve your location")})):console.info("Geolocation is not supported by your browser")})).then((function(e){c(Object(x.a)(Object(x.a)({},r),{},{geoLocation:e})),sessionStorage.setItem("geoLocation",JSON.stringify(e))})));var I=Qe[k];return o&&s?Object(A.jsxs)(O.a.Fragment,{children:[Object(A.jsx)(nt.a,{}),Object(A.jsx)(rt.a,{theme:et,children:Object(A.jsx)(se.Provider,{value:r,children:I.container?Object(A.jsx)(tt.a,{children:Object(A.jsxs)(ht,{children:[w(),o&&s&&v({type:o,step:s})]})}):o&&s&&Object(A.jsxs)(ht,{children:[w(),Object(A.jsx)(f.a,{ref:e,children:v({type:o,step:s})})]})})})]}):Object(A.jsx)(Le.a,{})}}}]);
//# sourceMappingURL=4.f68499d7.chunk.js.map