webpackJsonp([1],{125:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(1),n(57),n(170),n(92);var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}u((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(n){return function(a){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,r&&(o=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(r,n[1])).done)return o;switch(r=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,r=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){s.label=n[1];break}if(6===n[0]&&s.label<o[1]){s.label=o[1],o=n;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(n);break}o[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],r=0}finally{i=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}var i,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},o=function(){function t(t,e,n){this.fba=t,this.firestore=e,this.platform=n,this.events=["Itinerary clicked"],this.location={}}return t.prototype.eventLog=function(t,e){return i(this,void 0,void 0,function(){return r(this,function(n){return this.platform.is("cordova")&&(this.eventLogFB(t,e),this.eventLogFS(t,e)),[2]})})},t.prototype.eventLogFS=function(t,e){return i(this,void 0,void 0,function(){return r(this,function(n){return this.device={},this.saveEvent(t,e,"Success"),[2]})})},t.prototype.eventLogFB=function(t,e){return i(this,void 0,void 0,function(){return r(this,function(n){return e.timestamp=new Date,this.fba.logEvent(t,{code:e}).then(function(t){},function(t){}),[2]})})},t.prototype.saveEvent=function(t,e,n){return i(this,void 0,void 0,function(){return r(this,function(i){return this.firestore.eventLog({event:t,code:e,device:this.device,readStatus:n,location:this.location}),[2]})})},t}()},194:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(1),n(92),n(300);var i=function(){return function(){}}()},232:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=232},261:function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"../pages/user-itinerary/user-itinerary.module.ngfactory":[397,0]};i.keys=function(){return Object.keys(r)},i.id=261,t.exports=i},300:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(1);var i=function(){function t(t,e,n){var i=this;this.logger=t,this.config=e,this.firestore=n,this.show=!1,this.showDetails=[],this.lang="en",this.lang="en",this.config.getLanguage().subscribe(function(t){return i.lang=t}),this.firestore.getActivityMasterList().valueChanges().subscribe(function(t){i.activityTemplates=t[0]})}return t.prototype.ngOnInit=function(){this.showDetails.fill(!1,0,this.day.length)},t.prototype.getObjectKeys=function(t){return Object.keys(t)},t.prototype.compare=function(t,e){return t.displayOrder<e.displayOrder?-1:t.displayOrder>e.displayOrder?1:0},t.prototype.getDescription=function(t){var e=this.activityTemplates.fields.find(function(e){return e.name==t});return void 0==e?"NOT FOUND":e.label[this.lang]},t.prototype.getValue=function(t,e){if("startTime"==t||"endTime"==t){var n="",i=e.toDate(),r=i.getHours();r<10&&(n="0"),n+=r.toString()+":";var o=i.getMinutes();return o<10&&(n+="0"),n+=o.toString()}if("object"!=typeof e)return""==e?"SUDHIR: NULL":0==e?"ZERO":"0"==e?"SUDHIR: ZERO IN STRING":e;if("contact"==t){var a=[];return void 0!=e.name&&""==e.name.trim()?a.push({description:"Name",val:"To be finalized soon..."}):a.push({description:"Name",val:e.name}),a.push(""==e.mob?{description:"mob",val:" - "}:{description:"mob",val:e.mob}),a.push(""==e.sms?{description:"sms",val:" - "}:{description:"sms",val:e.sms}),a.push(""==e.whatsapp?{description:"whatsapp",val:" - "}:{description:"whatsapp",val:e.whatsapp}),a}},t.prototype.isMulitiple=function(t,e){return"contact"==t},t.prototype.funTime=function(t,e){this.logger.eventLog("funTime",{day:t,index:1}),alert("This is under construction. Stay tunned for more details")},t.prototype.toggleShow=function(t){this.logger.eventLog("day click",{day:t}),this.show=!this.show},t.prototype.toggleShowDetails=function(t,e,n,i){this.logger.eventLog("activity click"+i,{day:t,activity:e}),this.showDetails[n]=!this.showDetails[n]},t}()},311:function(t,e,n){"use strict";function i(t){return o._22(0,[(t()(),o.Z(0,0,null,null,2,"ion-nav",[],null,null,null,O.b,O.a)),o._16(6144,null,S.a,null,[A.a]),o.Y(2,4374528,null,0,A.a,[[2,M.a],[2,D.a],P.a,C.a,j.a,o.j,o.u,o.z,o.i,x.l,E.a,[2,N.a],U.a,o.k],{root:[0,"root"]},null),(t()(),o._20(-1,null,["\n"]))],function(t,e){t(e,2,0,e.component.rootPage)},null)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(50),o=n(0),a=(n(1),n(92),n(123)),s=n(124),u=(n(394),n(169),n(299)),c=n(170),l=n(194),p=n(16),f=n(57),h=function(){function t(t,e,n,i,r){this.firestore=i,this.location=r,this.rootPage="UserItineraryPage",this.initializeURLParams(),t.ready().then(function(){e.styleDefault(),n.hide()})}return t.prototype.initializeURLParams=function(){var t,e=this.location.path(!0);/\?(.+?\=.+){1}/.test(e)&&(t={},e.split("?")[1].split("&").forEach(function(e){var n=e.split("=");t[n[0]]=n[1]})),this.firestore.setItrCode(t)},t}(),d=n(91),g=n(125),_=function(){return function(){}}(),v=n(80),y=n(302),b=n(303),m=n(304),w=n(305),k=n(306),I=n(307),T=n(308),F=n(309),L=n(310),O=n(396),S=n(52),A=n(84),M=n(6),D=n(34),P=n(12),C=n(2),j=n(5),x=n(8),E=n(47),N=n(20),U=n(13),B=o.X({encapsulation:2,styles:[],data:{}}),R=o.V("ng-component",h,function(t){return o._22(0,[(t()(),o.Z(0,0,null,null,1,"ng-component",[],null,null,null,i,B)),o.Y(1,49152,null,0,h,[j.a,s.a,a.a,f.a,p.g],null,null)],null,null)},{},{},[]),z=n(173),H=n(26),Z=n(274),G=n(67),K=n(145),W=n(147),Y=n(172),$=n(21),q=n(49),V=n(58),Q=n(152),J=n(202),X=n(82),tt=n(59),et=n(177),nt=n(107),it=n(181),rt=n(175),ot=n(189),at=n(298),st=n(174),ut=n(45),ct=n(153),lt=n(176),pt=o.W(_,[v.b],function(t){return o._7([o._8(512,o.i,o.S,[[8,[y.a,b.a,m.a,w.a,k.a,I.a,T.a,F.a,L.a,R]],[3,o.i],o.s]),o._8(5120,o.r,o._17,[[3,o.r]]),o._8(4608,p.m,p.l,[o.r,[2,p.w]]),o._8(5120,o.b,o._1,[]),o._8(5120,o.p,o._9,[]),o._8(5120,o.q,o._12,[]),o._8(4608,r.c,r.q,[p.d]),o._8(6144,o.D,null,[r.c]),o._8(4608,r.f,z.a,[]),o._8(5120,r.d,function(t,e,n,i,o){return[new r.k(t,e),new r.o(n),new r.n(i,o)]},[p.d,o.u,p.d,p.d,r.f]),o._8(4608,r.e,r.e,[r.d,o.u]),o._8(135680,r.m,r.m,[p.d]),o._8(4608,r.l,r.l,[r.e,r.m]),o._8(6144,o.B,null,[r.l]),o._8(6144,r.p,null,[r.m]),o._8(4608,o.G,o.G,[o.u]),o._8(4608,r.h,r.h,[p.d]),o._8(4608,r.i,r.i,[p.d]),o._8(4608,H.k,H.k,[]),o._8(4608,H.c,H.c,[]),o._8(4608,Z.AngularFirestore,Z.AngularFirestore,[G.FirebaseOptionsToken,[2,G.FirebaseNameOrConfigToken],[2,Z.EnablePersistenceToken],[2,Z.FirestoreSettingsToken],o.w,o.u,[2,Z.PersistenceSettingsToken]]),o._8(5120,G.FirebaseApp,G._firebaseAppFactory,[G.FirebaseOptionsToken,[2,G.FirebaseNameOrConfigToken]]),o._8(4608,u.a,u.a,[G.FirebaseOptionsToken,[2,G.FirebaseNameOrConfigToken],o.w,o.u]),o._8(4608,K.a,K.a,[P.a,C.a]),o._8(4608,W.a,W.a,[P.a,C.a]),o._8(4608,Y.a,Y.a,[]),o._8(4608,$.a,$.a,[]),o._8(4608,q.a,q.a,[j.a]),o._8(4608,V.a,V.a,[C.a,j.a,o.u,U.a]),o._8(4608,Q.a,Q.a,[P.a,C.a]),o._8(5120,p.h,J.c,[p.s,[2,p.a],C.a]),o._8(4608,p.g,p.g,[p.h]),o._8(5120,X.b,X.d,[P.a,X.a]),o._8(5120,N.a,N.b,[P.a,X.b,p.g,tt.b,o.i]),o._8(4608,et.a,et.a,[P.a,C.a,N.a]),o._8(4608,nt.a,nt.a,[P.a,C.a]),o._8(4608,it.a,it.a,[P.a,C.a,N.a]),o._8(4608,rt.a,rt.a,[C.a,j.a,U.a,P.a,x.l]),o._8(4608,ot.a,ot.a,[P.a,C.a]),o._8(4608,E.a,E.a,[j.a,C.a]),o._8(4608,s.a,s.a,[]),o._8(4608,a.a,a.a,[]),o._8(4608,d.a,d.a,[Z.AngularFirestore]),o._8(4608,f.a,f.a,[Z.AngularFirestore,d.a]),o._8(4608,c.a,c.a,[]),o._8(4608,g.a,g.a,[c.a,f.a,j.a]),o._8(512,p.c,p.c,[]),o._8(512,o.k,at.a,[]),o._8(256,C.b,{},[]),o._8(1024,st.a,st.b,[]),o._8(1024,j.a,j.b,[r.b,st.a,o.u]),o._8(1024,C.a,C.c,[C.b,j.a]),o._8(512,U.a,U.a,[j.a]),o._8(512,ut.a,ut.a,[]),o._8(512,P.a,P.a,[C.a,j.a,[2,ut.a]]),o._8(512,x.l,x.l,[P.a]),o._8(256,X.a,{links:[{loadChildren:"../pages/user-itinerary/user-itinerary.module.ngfactory#UserItineraryPageModuleNgFactory",name:"UserItineraryPage",segment:"user-itinerary",priority:"low",defaultHistory:[]}]},[]),o._8(512,o.h,o.h,[]),o._8(512,ct.a,ct.a,[o.h]),o._8(1024,tt.b,tt.c,[ct.a,o.o]),o._8(1024,o.c,function(t,e,n,i,o,a,s,u,c,l,p,f,h){return[r.s(t),lt.a(e),Y.b(n,i),rt.b(o,a,s,u,c),tt.d(l,p,f,h)]},[[2,o.t],C.a,j.a,U.a,C.a,j.a,U.a,P.a,x.l,C.a,X.a,tt.b,o.u]),o._8(512,o.d,o.d,[[2,o.c]]),o._8(131584,o.f,o.f,[o.u,o.T,o.o,o.k,o.i,o.d]),o._8(512,o.e,o.e,[o.f]),o._8(512,r.a,r.a,[[3,r.a]]),o._8(512,H.j,H.j,[]),o._8(512,H.d,H.d,[]),o._8(512,H.i,H.i,[]),o._8(512,J.a,J.a,[]),o._8(512,Z.AngularFirestoreModule,Z.AngularFirestoreModule,[]),o._8(512,G.AngularFireModule,G.AngularFireModule,[]),o._8(512,u.b,u.b,[]),o._8(512,l.a,l.a,[]),o._8(512,_,_,[]),o._8(256,G.FirebaseOptionsToken,{apiKey:"AIzaSyBxKVsMnMnBYz65usQAZqbBB9LhnmnCbLY",authDomain:"seva-6cc88.firebaseapp.com",databaseURL:"https://seva-6cc88.firebaseio.com",projectId:"seva-6cc88",storageBucket:"seva-6cc88.appspot.com",messagingSenderId:"578460806647"},[]),o._8(256,G.FirebaseNameOrConfigToken,void 0,[]),o._8(256,Z.EnablePersistenceToken,!0,[]),o._8(256,Z.PersistenceSettingsToken,void 0,[]),o._8(256,v.a,h,[]),o._8(256,p.a,"/",[])])});Object(o.M)(),Object(r.j)().bootstrapModuleFactory(pt)},57:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(1);var i=n(339),r=(n.n(i),n(341)),o=(n.n(r),n(262)),a=(n.n(o),n(169)),s=(n.n(a),function(){function t(t,e){this.firestore=t,this.config=e}return t.prototype.getTimeInFSFormat=function(t){var e=new Date(t);return e.setHours(e.getUTCHours()),e.setMinutes(e.getUTCMinutes()),o.firestore.Timestamp.fromDate(e)},t.prototype.getTimeFromSecs=function(t){return o.firestore.Timestamp.fromMillis(1e3*t)},t.prototype.getItinerary=function(t){var e=this;return this.firestore.collection("itinerary",function(n){return n.where("appId","==",e.config.getAppId()).where("id","==",t)})},t.prototype.eventLog=function(t){var e=this.firestore.createId();t.id=e,t.appId=this.config.getAppId(),this.firestore.doc("events/"+e).set(t)},t.prototype.setItrCode=function(t){this.itrcode=t},t.prototype.getItrCode=function(){return void 0!=this.itrcode&&void 0!=this.itrcode.itrcode?this.itrcode.itrcode:null},t.prototype.getOtherPackages=function(){var t=this;return this.firestore.collection("packages",function(e){return e.where("appId","==",t.config.getAppId())})},t.prototype.getActivityMasterList=function(){var t=this;return this.firestore.collection("activityMasterList",function(e){return e.where("appId","==",t.config.getAppId())})},t}())},91:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(1);var i=n(17),r=n(169),o=(n.n(r),function(){function t(t){this.firestore=t,this.lang$=new i.BehaviorSubject([]),this.app={amId:"oEAdPhLK9pB8ghCQeFi1",appId:2,appWidget:"com.exploritage.alfresco_test"},this.lang="en",this.lang$.next(this.lang)}return t.prototype.getLanguage=function(){return this.lang$},t.prototype.setLanguage=function(t){this.lang=t,this.lang$.next(t)},t.prototype.getAppId=function(){return this.app.appId},t.prototype.getAppIdWithDetails=function(){return this.firestore.collection("appConfig",function(t){return t.where("appWidget","==","com.exploritage.alfresco_test")})},t}())}},[311]);