(this.webpackJsonpcodebrew=this.webpackJsonpcodebrew||[]).push([[0],{150:function(e,t,a){e.exports={article:"article_article__2bJ1V",image:"article_image__wLPGr"}},178:function(e,t,a){e.exports=a(227)},183:function(e,t,a){},201:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);a(154);var n=a(0),l=a.n(n),r=a(21),i=a.n(r),c=(a(183),a(22)),o=a(13),u=a(109),s=a.n(u),m=a(26),d=a(7),h=a(236),f=a(234),b=a(171),E=a(127),p=a(8),v=a(175),g=a(102),y=a.n(g),w=a(147),x=a(168),O=a(169),S=a(87),j=a.n(S),C={apiKey:"AIzaSyDlYaYomTt3oU8fvlL8fBDt81gAzE4dLy0",authDomain:"codebrew-2020-8141c.firebaseapp.com",databaseURL:"https://codebrew-2020-8141c.firebaseio.com",projectId:"codebrew-2020-8141c",storageBucket:"codebrew-2020-8141c.appspot.com",messagingSenderId:"602894421608",appId:"1:602894421608:web:f9a8d137e066808cf8f5dd"},k=function(){function e(){Object(x.a)(this,e),j.a.initializeApp(C),this._auth=j.a.auth(),this._firestore=j.a.firestore(),this._storage=j.a.storage().ref(),this._user=null}return Object(O.a)(e,[{key:"submitArticle",value:function(){var e=Object(w.a)(y.a.mark((function e(t){var a=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.storage.child(t.name).put(t.image).then((function(e){return e.ref.getDownloadURL()})).then((function(e){return a.firestore.collection("articles").add({name:t.name,url:t.url,category:t.category.value,image:e})})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"submitEntry",value:function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.user;case 2:return a=e.sent,e.abrupt("return",this.firestore.collection("entries").add(Object(v.a)({user:a.email,time:(new Date).toISOString().substr(0,10)},t)));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"doRegister",value:function(e,t,a,n,l,r,i){var c=this;return this.auth.createUserWithEmailAndPassword(e,t).then((function(){return c.firestore.collection("users").add({email:e,name:a,age:n,diagnosis:l,history:r})})).then((function(){if(void 0!==i)return c.storage.child("".concat(e,"-behaviour")).put(i)}))}},{key:"auth",get:function(){return this._auth}},{key:"user",get:function(){var e=this;return null!==this._user||(this._user=new Promise((function(t,a){var n=e.auth.onAuthStateChanged((function(e){n(),t(e)}),a)}))),this._user}},{key:"persistenceSetting",get:function(){return j.a.auth.Auth.Persistence.LOCAL}},{key:"firestore",get:function(){return this._firestore}},{key:"storage",get:function(){return this._storage}}]),e}(),A=l.a.createContext(null),N=p.b().shape({name:p.c().required(),url:p.c().url().required(),category:p.b().shape({value:p.c().required(),label:p.c().required()}).required()}),I=[{value:"about",label:"About Autism"},{value:"school",label:"School"},{value:"socialisation",label:"Socialisation and Communication"},{value:"behaviour",label:"Behaviour"},{value:"health",label:"Your Child's Health"},{value:"family",label:"Family and Carers"},{value:"support",label:"Support"},{value:"books",label:"Books"},{value:"contact",label:"Get in Contact"}],B=function(){var e=Object(n.useContext)(A),t=Object(o.g)();Object(n.useEffect)((function(){s.a.init()}),[]);return l.a.createElement(m.a,{initialValues:{name:"",url:"",category:I[0]},onSubmit:function(a){return e.submitArticle(a).then((function(){t.push("/articles")})).catch((function(e){console.error(e)}))},validationSchema:N},(function(e){var t=e.isSubmitting,a=e.handleSubmit,n=e.setFieldValue,r=e.values;return l.a.createElement(h.a,{onSubmit:a},l.a.createElement(f.a.Header,null,"Add Article"),l.a.createElement(f.a.Body,null,l.a.createElement(d.a,{name:"name",type:"text",label:"Article Name"}),l.a.createElement(d.a,{name:"url",type:"text",label:"Article URL"}),l.a.createElement(h.a.File,{className:"mb-3",name:"image",label:"Article Image",onChange:function(e){return n("image",e.currentTarget.files[0])},custom:!0}),l.a.createElement(E.a,{options:I,value:r.category,onChange:function(e){return n("category",e)}})),l.a.createElement(f.a.Footer,null,l.a.createElement(b.a,{type:"submit",variant:"success",disabled:t},"Add Article")))}))},q=a(16),H=a(172),_=a.n(H),D=a(239),F=a(150),M=a.n(F),P=function(e){var t=e.article;return l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},l.a.createElement(D.a,{className:"ml-3 ".concat(M.a.article)},l.a.createElement(D.a.Img,{variant:"top",src:t.image,className:M.a.image}),l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,t.name))))},T={about:"About Autism",school:"School",socialisation:"Socialisation and Communication",behaviour:"Behaviour",health:"Your Child's Health",family:"Family and Carers",support:"Support",books:"Books",contact:"Get in Contact"},V=function(e){var t=e.category,a=Object(n.useState)([]),r=Object(q.a)(a,2),i=r[0],c=r[1],o=Object(n.useContext)(A);return Object(n.useEffect)((function(){o.firestore.collection("articles").where("category","==",t).get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();t.push(a)})),c(t)})).catch((function(e){console.error(e)}))}),[o.firestore,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"ml-3"},T[t]),l.a.createElement(_.a,{data:i.map((function(e){return l.a.createElement(P,{key:e.name,article:e})}))}))},R=["about","school","socialisation","behaviour","health","family","support","books","contact"],z=function(){return l.a.createElement(l.a.Fragment,null,R.map((function(e){return l.a.createElement("div",{key:e,className:"mt-3"},l.a.createElement(V,{category:e}))})),l.a.createElement(c.b,{to:"/article"},l.a.createElement("div",{className:"d-flex w-100"},l.a.createElement(b.a,{className:"ml-auto mb-2 mr-2"},"Create Article"))))},L=a(173),Q=a.n(L),W=(a(201),a(91)),U=(a(223),[{value:"all",label:"All"},{value:"socialInteraction",label:"Social Interaction"},{value:"communication",label:"Communication"},{value:"difficultBehaviour",label:"Difficult Behaviour"},{value:"attention",label:"Attention"},{value:"sleepQuality",label:"Sleep Quality"},{value:"overallMood",label:"Overall Mood"}]),G=function(e){var t=Object(n.useState)(U[0]),a=Object(q.a)(t,2),r=a[0],i=a[1],c=e.data.map((function(e){return"all"===r.value?{x:new Date(e.data.time).getTime(),y:e.count}:{x:new Date(e.data.time).getTime(),y:e.data[r.value]}}));return c.sort((function(e,t){return e.x-t.x})),l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("h3",{className:"headings"},"Trends Over Time"),l.a.createElement(W.e,{xType:"time",className:"ml-3 mr-auto",width:350,height:300},l.a.createElement(W.a,null),l.a.createElement(W.c,null),l.a.createElement(W.d,{title:"X Axis"}),l.a.createElement(W.b,{data:c})),l.a.createElement(E.a,{className:"ml-5 mr-5 mb-3",options:U,value:r,onChange:function(e){return i(e)}}))},Y=function(){var e=Object(n.useContext)(A),t=Object(n.useState)([]),a=Object(q.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)("2020-01-01"),u=Object(q.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)("2020-01-01"),h=Object(q.a)(d,2),f=h[0],b=h[1],E=Object(o.g)();return Object(n.useEffect)((function(){e.user.then((function(t){return e.firestore.collection("entries").where("user","==",t.email).get()})).then((function(e){var t=[],a="9",n="0";e.forEach((function(e){var l=e.data().time;t.push({data:e.data(),count:e.data().attention+e.data().communication+e.data().difficultBehaviour+e.data().overallMood+e.data().sleepQuality+e.data().socialInteraction,date:l}),a=-1===l.localeCompare(a)?l:a,n=1===l.localeCompare(n)?l:n})),i(t),m(a),b(n)}))}),[e.firestore,e.user]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"headings mt-3"},"History"),l.a.createElement("div",{className:"ml-3 mr-0 mt-3 mb-3"},l.a.createElement(Q.a,{startDate:s,endDate:f,classForValue:function(e){return e?e.count>=6&&e.count<=16?"color-scale-red":e.count>=17&&e.count<=18?"color-scale-amber":e.count>=19&&e.count<=32?"color-scale-green":void 0:"color-empty"},values:r,horizontal:!1,onClick:function(e){return E.push("/entry#".concat(e.date))}})),l.a.createElement(G,{data:r}))},J=a(90),K=a(44),X=a(240),$=a(233),Z=a(89),ee=a.n(Z),te=function(e){var t=e.question,a=e.info,r=e.onSelect,i=e.value,c=Object(n.useState)(null),o=Object(q.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(q.a)(m,2),f=d[0],b=d[1],E=Object(n.useRef)(null);Object(n.useEffect)((function(){void 0!==i&&s(i)}),[]);var p=function(e){s(e),r(e)};return l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,{ref:E,onClick:function(){return b(!f)}},t),l.a.createElement(X.a,{target:E.current,show:f,placement:"right"},(function(e){return l.a.createElement($.a,e,a)})),l.a.createElement("div",{className:"d-flex mt-2 justify-content-around"},l.a.createElement(K.a,{className:1===u?ee.a.selected:"",onClick:function(){return p(1)},icon:J.e,size:"lg"}),l.a.createElement(K.a,{className:2===u?ee.a.selected:"",onClick:function(){return p(2)},icon:J.a,size:"lg"}),l.a.createElement(K.a,{className:3===u?ee.a.selected:"",onClick:function(){return p(3)},icon:J.c,size:"lg"}),l.a.createElement(K.a,{className:4===u?ee.a.selected:"",onClick:function(){return p(4)},icon:J.d,size:"lg"}),l.a.createElement(K.a,{className:5===u?ee.a.selected:"",onClick:function(){return p(5)},icon:J.b,size:"lg"})))},ae=a(124),ne=p.b().shape({environmentalInfo:p.c().required("This is a required field."),socialInteraction:p.a().min(1).max(5).required(),communication:p.a().min(1).max(5).required(),difficultBehaviour:p.a().min(1).max(5).required(),attention:p.a().min(1).max(5).required(),sleepQuality:p.a().min(1).max(5).required(),overallMood:p.a().min(1).max(5).required(),otherComments:p.c()}),le=function(e){var t=Object(n.useContext)(A),a=Object(o.g)(),r=Object(o.h)(),i=Object(n.useState)(null),c=Object(q.a)(i,2),u=c[0],s=c[1],E=r.hash.substring(1);console.log(E),Object(n.useEffect)((function(){t.user.then((function(e){return t.firestore.collection("entries").where("time","==",E).where("user","==",e.email).get()})).then((function(e){e.forEach((function(e){console.log(e.data()),s(e.data())}))}))}),[t.firestore,t.user]);return""!=E&&null==u?l.a.createElement(l.a.Fragment,null):l.a.createElement(m.a,{initialValues:{environmentalInfo:null==u?"":u.environmentalInfo,otherComments:null==u?"":u.otherComments,difficultBehaviour:null==u?"":u.difficultBehaviour,attention:null==u?"":u.attention,socialInteraction:null==u?"":u.socialInteraction,communication:null==u?"":u.communication,sleepQuality:null==u?"":u.sleepQuality,overallMood:null==u?"":u.overallMood},validationSchema:ne,onSubmit:function(e){t.submitEntry(e).then((function(){a.push("/tracker")})).catch((function(e){console.error(e)}))}},(function(e){var t=e.isSubmitting,n=e.handleSubmit,r=e.setFieldValue,i=e.values;return l.a.createElement(h.a,{onSubmit:n},l.a.createElement(f.a.Header,null,l.a.createElement(K.a,{className:"mr-auto",icon:ae.a,size:"lg",onClick:function(){return a.goBack()}})),l.a.createElement(f.a.Body,null,l.a.createElement(d.a,{as:"textarea",name:"environmentalInfo",label:"What did your child do today?"}),l.a.createElement(te,{onSelect:function(e){return r("socialInteraction",e)},question:"Social Interaction",info:"How well did they get on with friends / family / strangers?",value:i.socialInteraction}),l.a.createElement(te,{onSelect:function(e){return r("communication",e)},question:"Communication",info:"How well did they express themselves today? How well did they listen?",value:i.communication}),l.a.createElement(te,{onSelect:function(e){return r("difficultBehaviour",e)},question:"Difficult Behaviour",info:"Was their behaviour disruptive and difficult to manage?",value:i.difficultBehaviour}),l.a.createElement(te,{onSelect:function(e){return r("attention",e)},question:"Attention",info:"How well did they pay attention?",value:i.attention}),l.a.createElement(te,{onSelect:function(e){return r("sleepQuality",e)},question:"Sleep Quality",info:"How well did they sleep?",value:i.sleepQuality}),l.a.createElement(te,{onSelect:function(e){return r("overallMood",e)},question:"Overall Mood",info:"Overall, did they have a happy day?",value:i.overallMood}),l.a.createElement(d.a,{as:"textarea",name:"otherComments",label:"Any other comments?"})),l.a.createElement(f.a.Footer,null,l.a.createElement(b.a,{type:"submit",variant:"success",disabled:t},"Submit")))}))},re=a(238),ie=a(235),ce=a(237),oe=l.a.forwardRef((function(e,t){var a=e.onClick;return l.a.createElement(K.a,{ref:t,className:"ml-auto",onClick:function(e){e.preventDefault(),a(e)},icon:ae.b,size:"lg"})})),ue=function(e){var t=Object(n.useContext)(A),a=Object(o.h)(),r=Object(o.g)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(re.a,{bg:"info"},l.a.createElement(re.a.Brand,{href:"/"},"Project Awesome"),l.a.createElement(ie.a,null,l.a.createElement(ie.a.Toggle,{as:oe}),l.a.createElement(ie.a.Menu,{alignRight:!0},l.a.createElement(ie.a.Item,{onClick:function(){t.auth.signOut().then((function(){r.push("/login")}))}},"Sign Out")))),l.a.createElement(ce.a,{justify:!0,variant:"tabs"},l.a.createElement(ce.a.Item,null,l.a.createElement(c.b,{className:"nav-link ".concat(a.pathname.includes("articles")?"active":""),to:"/articles"},"Home")),l.a.createElement(ce.a.Item,null,l.a.createElement(c.b,{className:"nav-link ".concat(a.pathname.includes("tracker")||a.pathname.includes("entry")?"active":""),to:"/tracker"},"Tracker")),l.a.createElement(ce.a.Item,null,l.a.createElement(c.b,{className:"nav-link ".concat(a.pathname.includes("profile")?"active":""),to:"/profile"},"Profile"))),e.children)},se=p.b().shape({email:p.c().email().required(),password:p.c().required()}),me=function(){var e=Object(n.useContext)(A),t=Object(o.g)();return l.a.createElement(m.a,{initialValues:{email:"",password:""},onSubmit:function(a){var n=a.email,l=a.password;e.auth.setPersistence(e.persistenceSetting).then((function(){return e.auth.signInWithEmailAndPassword(n,l)})).then((function(){t.push("/articles")})).catch((function(e){console.error(e)}))},validationSchema:se},(function(e){var t=e.isSubmitting,a=e.handleSubmit;return l.a.createElement(h.a,{onSubmit:a},l.a.createElement(f.a.Header,null,"Sign In"),l.a.createElement(f.a.Body,null,l.a.createElement(d.a,{name:"email",type:"email",label:"Email Address",id:"inputEmail",placeholder:"Email Address"}),l.a.createElement(d.a,{name:"password",type:"password",label:"Password",placeholder:"Password"})),l.a.createElement(f.a.Footer,null,l.a.createElement(c.b,{className:"mr-auto",to:"/register"},l.a.createElement(b.a,null,"Register")),l.a.createElement(b.a,{type:"submit",variant:"success",disabled:t},"Sign In")))}))},de=(a(226),a(129)),he=p.b().shape({email:p.c().email().required(),password:p.c().required(),name:p.c().required(),age:p.a().min(1).required(),diagnosis:p.c().required()}),fe=function(e){var t=e.profileData,a=Object(n.useContext)(A),r=Object(o.g)(),i=Object(n.useState)(void 0===t),u=Object(q.a)(i,2),E=u[0],p=(u[1],Object(n.useState)(t)),v=Object(q.a)(p,2);v[0],v[1];Object(n.useEffect)((function(){s.a.init()}),[]);return l.a.createElement(m.a,{initialValues:{age:void 0!==t?t.age:"",email:void 0!==t?t.email:""},validationSchema:he,onSubmit:function(e){var t=e.email,n=e.password,l=e.name,i=e.age,c=e.diagnosis,o=e.behaviourManagement,u=Object(de.a)(e,["email","password","name","age","diagnosis","behaviourManagement"]);a.doRegister(t,n,l,i,c,u,o).then((function(){r.push("/articles")})).catch((function(e){console.error(e)}))}},(function(e){var t=e.isSubmitting,a=e.handleSubmit,n=e.setFieldValue;return l.a.createElement(h.a,{onSubmit:a},E&&l.a.createElement(f.a.Header,null,"Register"),l.a.createElement(f.a.Body,null,l.a.createElement(d.a,{name:"email",type:"email",label:"Email"}),E&&l.a.createElement(d.a,{name:"password",type:"password",label:"Password"}),l.a.createElement(d.a,{name:"name",type:"text",label:"Name"}),l.a.createElement(d.a,{name:"age",type:"number",label:"Age"}),l.a.createElement(d.a,{name:"diagnosis",type:"text",label:"Diagnosis"}),l.a.createElement(D.a,{className:"mb-3"},l.a.createElement(D.a.Header,null,"Communication Style"),l.a.createElement(D.a.Body,null,l.a.createElement(d.a,{name:"receptive",as:"select",label:"Receptive"},l.a.createElement("option",null,"Verbal"),l.a.createElement("option",null,"Non-verbal"),l.a.createElement("option",null,"Visual")),l.a.createElement(d.a,{name:"expressive",as:"select",label:"Expressive"},l.a.createElement("option",null,"Verbal"),l.a.createElement("option",null,"Non-verbal"),l.a.createElement("option",null,"Visual")),l.a.createElement(d.a,{name:"communicationTool",type:"text",label:"Uses a communication tool?"}),l.a.createElement(d.a,{name:"yesNo",type:"text",label:"How do they say yes/no?"}),l.a.createElement(d.a,{name:"expressPain",type:"text",label:"How do they express pain?"}))),l.a.createElement(D.a,{className:"mb-3"},l.a.createElement(D.a.Header,null,"Extreme Behaviour Changes"),l.a.createElement(D.a.Body,null,l.a.createElement(d.a,{name:"stressed",type:"text",label:"How do you know if they are stressed?"}),l.a.createElement(d.a,{name:"toAvoid",type:"text",label:"Things to avoid with your child"}),l.a.createElement(d.a,{name:"hypersensitive",type:"text",label:"Is your child hypersensitive to certain things?"}),l.a.createElement(d.a,{name:"aggression",type:"text",label:"Does your child have a history of agitation/aggression?"}),l.a.createElement(d.a,{name:"banging",type:"text",label:"Does your child often exhibit behaviours such as head banging, screaming, rocking, flapping, hand wringing or repetitive vocalisations?"}),l.a.createElement(d.a,{name:"comfort",type:"text",label:"What is the best way to comfort your child?"}))),l.a.createElement(D.a,{className:"mb-3"},l.a.createElement(D.a.Header,null,"Social"),l.a.createElement(D.a.Body,null,l.a.createElement(d.a,{name:"interactAdults",type:"text",label:"How do they interact with adults?"}),l.a.createElement(d.a,{name:"interactAdults",type:"text",label:"How do they interact with other children?"}),l.a.createElement(d.a,{name:"interactChildren",type:"text",label:"How do they interact with other children?"}),l.a.createElement(d.a,{name:"eyeContact",type:"text",label:"Does your child avoid eye contact or being close to other people?"}),l.a.createElement(d.a,{name:"followInstructions",type:"text",label:"Can your child follow instructions?"}),l.a.createElement(d.a,{name:"focus",type:"text",label:"How long can your child sit still or focus for?"}))),l.a.createElement(d.a,{name:"foods",type:"text",label:"What are your child\u2019s favourite foods or beverages?"}),l.a.createElement(d.a,{name:"toys",type:"text",label:"What type of toys or activities does your child prefer?"}),l.a.createElement(d.a,{name:"hospital",type:"text",label:"How does your child behave at the doctor's / hospital?"}),l.a.createElement(h.a.File,{className:"mb-3",name:"behaviourManagement",label:"Behavioural Management Plan",onChange:function(e){return n("behaviourManagement",e.currentTarget.files[0])},custom:!0}),l.a.createElement(D.a,null,l.a.createElement(D.a.Header,null,"Medical Profile"),l.a.createElement(D.a.Body,null,l.a.createElement(d.a,{name:"medicalConditions",type:"text",label:"Does your child have any medical conditions?"}),l.a.createElement(d.a,{name:"medications",type:"text",label:"Does your child take any medications?"}),l.a.createElement(d.a,{name:"allergies",type:"text",label:"Does your child have any allergies?"}),l.a.createElement(d.a,{name:"pastSurgeries",type:"text",label:"Has your child undergone any past surgeries? If so how did they manage?"}),l.a.createElement(d.a,{name:"vaccinations",type:"text",label:"Is your child up to date with their vaccinations?"}),l.a.createElement(d.a,{name:"familyHistory",type:"text",label:"Does your family have a history of medical conditions?"})))),E&&l.a.createElement(f.a.Footer,null,l.a.createElement(c.b,{className:"mr-auto",to:"/login"},l.a.createElement(b.a,null,"Sign In")),l.a.createElement(b.a,{type:"submit",variant:"success",disabled:t},"Register")))}))},be=function(e){var t=Object(n.useContext)(A),a=Object(n.useState)(null),r=Object(q.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){t.user.then((function(e){return console.log(e),t.firestore.collection("users").where("email","==",e.email).get()})).then((function(e){e.forEach((function(e){console.log(e.data()),c(e.data())}))}))}),[]),null==i?l.a.createElement(l.a.Fragment,null):l.a.createElement(fe,{profileData:i})},Ee=function(e){var t=e.children,a=Object(de.a)(e,["children"]),r=Object(n.useContext)(A),i=Object(n.useState)(""),c=Object(q.a)(i,2),u=c[0],s=c[1];return Object(n.useEffect)((function(){r.user.then(s)}),[r.user]),""===u?l.a.createElement(l.a.Fragment,null):null!==u?l.a.createElement(o.b,a,t):l.a.createElement(o.a,{to:"/login"})},pe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/"},l.a.createElement(o.a,{to:"/articles"})),l.a.createElement(o.b,{exact:!0,path:"/login"},l.a.createElement(me,null)),l.a.createElement(o.b,{exact:!0,path:"/register"},l.a.createElement(fe,null)),l.a.createElement(ue,null,l.a.createElement(Ee,{exact:!0,path:"/articles"},l.a.createElement(z,null)),l.a.createElement(Ee,{exact:!0,path:"/tracker"},l.a.createElement(Y,null)),l.a.createElement(Ee,{exact:!0,path:"/profile"},l.a.createElement(be,null)),l.a.createElement(Ee,{exact:!0,path:"/entry"},l.a.createElement(le,null)),l.a.createElement(Ee,{exact:!0,path:"/article"},l.a.createElement(B,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A.Provider,{value:new k},l.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports={selected:"question_selected__uTm2h","change-color":"question_change-color__1Oh75"}}},[[178,1,2]]]);
//# sourceMappingURL=main.fa708866.chunk.js.map