(this.webpackJsonpstia=this.webpackJsonpstia||[]).push([[0],{62:function(e,a,t){e.exports=t(92)},68:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(37),l=t.n(s),o=t(31),i=t(25),c=(t(67),t(68),t(8)),m=t(9),u=t(12),h=t(10),d=t(11),p=t(33),E=t(26),b=t(56),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E.a,{md:6,className:"image-holder"},r.a.createElement(b.a,{id:"logo-image",src:"images/logo-dark-cropped.PNG",fluid:!0})),r.a.createElement(E.a,{md:6},r.a.createElement("a",{className:"btn btn-home-custom help",href:"/help"},"Help Me Help You"),r.a.createElement("a",{className:"btn btn-home-custom login",href:"/requestReason"},"Request A Reason"),r.a.createElement("a",{className:"btn btn-home-custom testimonials",href:"/testimonials"},"Testimonials"),r.a.createElement("a",{className:"btn btn-home-custom about",href:"/about"},"FAQ")))}}]),a}(r.a.Component),g=t(6),w=t(16),k=t(13),v=t(7),y=t(4),C=t(57),S=t(61),I=t(34),j=t(36);var O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).submit=function(e){for(var a=t.state.selectedIssue,n=t.state.selectedTone,r=t.state.emailAddress,s=t.state.data,l=null,o=0;o<s.catagories.length;o++)for(var i=s.catagories[o],c=0;c<i.issues.length;c++){var m=i.issues[c];m.text===a&&(l=m,window.location.reload())}var u={};l?(u.emailAddress=r,u.htmlMessage=l.messageTone[n].html,u.textMessage=l.messageTone[n].text,u.subject=l.subject,j.post("http://localhost:3001/api/v1/message",JSON.stringify(u),{headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){console.log(e)}))):alert("select something you hoser")},t.handleEmailAddressChange=function(e){t.setState({emailAddress:e.target.value})},t.state={uiIssues:[],data:{},selectedIssue:null,selectedTone:null,emailAddress:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"setTone",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){!function e(a){j.get("reasons.json").then((function(t){var n=[];a.setState({data:t.data});for(var s=0;s<t.data.catagories.length;s++){var l=t.data.catagories[s];n.push(r.a.createElement("h4",{key:s},l.name));for(var o=function(){var t=l.issues[i];n.push(r.a.createElement(w.a,{id:"issue-button",key:s+"-"+i,className:function(){if(t.text===a.state.selectedIssue)return"selected"}(),onClick:function(){a.setState({selectedIssue:t.text}),e(a)}},t.text))},i=0;i<l.issues.length;i++)o()}a.setState({uiIssues:n})}))}(this)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement("br",null),r.a.createElement(k.a,null,r.a.createElement("h1",{id:"help-title"},"Help Me Help You"),r.a.createElement("br",null),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,null,r.a.createElement("h2",{id:"theirEmail"},"Step 1: Their Email Address"),r.a.createElement("h5",{id:"step1"},"Enter the email of the person you would like to send your concern to."),r.a.createElement(g.a.Control,{type:"email",placeholder:"tomcruise@cruisin.com",value:this.state.emailAddress,onChange:this.handleEmailAddressChange})),r.a.createElement(g.a.Group,null,r.a.createElement("h2",{id:"theirEmail"},"Step 2: Tone"),r.a.createElement("h5",{id:"step2"},"Pick how you would like to sound in the email. Blunt would be more direct and to the point, whereas apologetic would be easier."),r.a.createElement(p.a,{id:"toneButtons"},r.a.createElement(C.a,null,r.a.createElement(S.a,{type:"radio",name:"options",defaultValue:this.state.selectedTone},r.a.createElement(I.a,{id:"bluntButton",value:"blunt",onClick:function(){return e.setState({selectedTone:"blunt"})}},"Blunt"),r.a.createElement(I.a,{id:"apologeticButton",value:"apologetic",onClick:function(){return e.setState({selectedTone:"apologetic"})}},"Apologetic"))))),r.a.createElement(g.a.Group,null,r.a.createElement("h2",{id:"templateReasons"},"Step 3: Reasons"),r.a.createElement("h5",{id:"step3"},"Choose the reason why you are sending the email"),r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(E.a,{id:"issue-col"},this.state.uiIssues)))),r.a.createElement(w.a,{href:"#",className:"btn btn-custom",onClick:this.submit},"Submit"),r.a.createElement("br",null)))}}]),a}(r.a.Component),q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement("br",null),r.a.createElement("h1",{id:"testimonials-title"},"Request A Reason"),r.a.createElement(k.a,null,r.a.createElement("h3",{id:"directions"},"Do we not have the issue that you would like to address? If so, start thinking about some issues you would like us to add! Soon, there will be a form for you to fill out! We can't come up with all the reasons by ourselves!")))}}]),a}(r.a.Component),L=t(28),A=t(36),T=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleIssueInputChange=function(e){t.setState({issue:e.target.value})},t.handleCategoryInputChange=function(e){t.setState({category:e.target.value})},t.handleFormSubmit=function(e){var a={};a.issue=t.state.issue,a.category=t.state.category;var n=Object(L.a)(t);A.defaults.withCredentials=!0,A.post("http://localhost:3001/api/v1/suggestion",JSON.stringify(a),{headers:{"Content-Type":"application/json"}}).then((function(e){n.setState({allGood:!0})})).catch((function(e){console.log(e)}))},t.renderRedirect=function(){if(t.state.allGood)return r.a.createElement(i.a,{to:"/requestReason"})},t.state={issue:"",category:"",allGood:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderRedirect(),r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason")," ")),r.a.createElement("br",null),r.a.createElement("h1",{id:"testimonials-title"},"Request A Reason"),r.a.createElement(k.a,null,r.a.createElement("h2",{id:"directions"},"Fill out the box with a reason that you believe is important. Example: bad breath, loud music, on phone too much, etc"),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"issue"},r.a.createElement(g.a.Label,null,"Issue"),r.a.createElement(g.a.Control,{as:"textarea",rows:"3",value:this.state.issue,onChange:this.handleIssueInputChange})),r.a.createElement(g.a.Group,{controlId:"category"},r.a.createElement(g.a.Label,null,"Category"),r.a.createElement(g.a.Control,{as:"textarea",rows:"3",value:this.state.category,onChange:this.handleCategoryInputChange}))),r.a.createElement(w.a,{className:"btn btn-custom",onClick:this.handleFormSubmit},"Submit")))}}]),a}(r.a.Component),N=t(60),H=t(36),R=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleUsernameInputChange=function(e){t.setState({username:e.target.value})},t.handlePasswordInputChange=function(e){t.setState({password:e.target.value})},t.handleFormSubmit=function(e){if(t.state.password&&t.state.username){var a={};a.username=t.state.username,a.password=t.state.password;var n=Object(L.a)(t);H.defaults.withCredentials=!0,H.post("http://localhost:3001/api/v1/loginCheck",JSON.stringify(a),{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),null===e.data.result?n.setState({message:"Try Again, bad password or username"}):n.setState({allGood:!0})})).catch((function(e){console.log(e)}))}},t.renderRedirect=function(){if(t.state.allGood)return r.a.createElement(i.a,{to:"/requestForm"})},t.renderMessage=function(){if(null!=t.state.message)return r.a.createElement(N.a,{variant:"danger"},t.state.message)},t.state={username:"",password:"",allGood:!1,message:null},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderRedirect(),r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement("br",null),r.a.createElement(k.a,null,r.a.createElement("h1",{id:"login-title"},"Login"),r.a.createElement("br",null),this.renderMessage(),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"username"},r.a.createElement(g.a.Label,null,"Username"),r.a.createElement(g.a.Control,{value:this.state.username,onChange:this.handleUsernameInputChange,type:"input",placeholder:"Username"})),r.a.createElement(g.a.Group,{controlId:"password"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{value:this.state.password,onChange:this.handlePasswordInputChange,type:"password",placeholder:"Password"})),r.a.createElement(w.a,{className:"btn btn-custom loginSubmit",onClick:this.handleFormSubmit,variant:"primary"},"Submit"))))}}]),a}(r.a.Component),F=t(36),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleUsernameInputChange=function(e){t.setState({username:e.target.value})},t.handlePasswordInputChange=function(e){t.setState({password:e.target.value})},t.handlePassword2InputChange=function(e){t.setState({password2:e.target.value})},t.handleFormSubmit=function(e){if(t.state.password&&t.state.password2&&t.state.username&&t.state.password===t.state.password2){var a={};a.username=t.state.username,a.password=t.state.password,F.defaults.withCredentials=!0,F.post("http://localhost:3001/api/v1/login",JSON.stringify(a),{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t.setState({loggedIn:!0})}},t.renderRedirect=function(){if(t.state.loggedIn)return r.a.createElement(i.a,{to:"/requestForm"})},t.state={username:"",password:"",password2:"",loggedIn:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderRedirect(),r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement("br",null),r.a.createElement(k.a,null,r.a.createElement("h1",{id:"signUp-title"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"formBasicUsername"},r.a.createElement(g.a.Label,null,"Username"),r.a.createElement(g.a.Control,{value:this.state.username,onChange:this.handleUsernameInputChange,name:"username",type:"input",placeholder:"Enter Username"})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{value:this.state.password,onChange:this.handlePasswordInputChange,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword2"},r.a.createElement(g.a.Label,null,"Confirm Password"),r.a.createElement(g.a.Control,{value:this.state.password2,onChange:this.handlePassword2InputChange,name:"password2",type:"password",placeholder:"Password"})),r.a.createElement(w.a,{className:"btn btn-custom submitSignUp",onClick:this.handleFormSubmit,variant:"primary"},"Submit")),r.a.createElement("br",null)))}}]),a}(r.a.Component),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"#home"},"So This Is Awkward"),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"About"),r.a.createElement(y.a.Link,{href:"/login"},"Login or SignUp"))))}}]),a}(r.a.Component),G=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement("br",null),r.a.createElement("h1",{id:"testimonials-title"},"Testimonials"),r.a.createElement(k.a,null,r.a.createElement("h3",{className:"qa-question"},"Jennifer"),r.a.createElement("p",{className:"qa-answer"},'"So This Is Awkward" saved my marriage! My husband has bad breath and it was interfering with our relationship. By sending an anonymous message, I was able to communicate this sensitive problem. Everything is better now!'),r.a.createElement("h3",{className:"qa-question"},"Sandy"),r.a.createElement("p",{className:"qa-answer"},"OH LAWD! you saved me, my sons feet were straight up murderin' my nose holes. Now he thinks persons besides me think he stank. Maybe now he will start washin' every day."),r.a.createElement("h3",{className:"qa-question"},"Anonymous"),r.a.createElement("p",{className:"qa-answer"},'One of my co-workers tends to smoke during work. I usually don\'t mind, but lately, the smell has been giving me a headache: distratcing me from my duties. I was able to send an email from "So This Is Awkward" to them and now they are more concienious of the smell. Thank you!')))}}]),a}(r.a.Component),M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{bg:"dark",variant:"dark"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("span",{id:"blue"},"So")," ",r.a.createElement("span",{id:"orange"},"This")," ",r.a.createElement("span",{id:"green"},"Is")," ",r.a.createElement("span",{id:"pink"},"Awkward")),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"/"},"Home"),r.a.createElement(y.a.Link,{href:"/help"},"Help Me, Help You, Help Someone"),r.a.createElement(y.a.Link,{href:"/testimonials"},"Testimonials"),r.a.createElement(y.a.Link,{href:"/about"},"FAQ"),r.a.createElement(y.a.Link,{href:"/requestReason"},"Request A Reason"))),r.a.createElement(k.a,null,r.a.createElement("br",null),r.a.createElement("h1",{id:"about-FAQ"},"FAQ"),r.a.createElement("h3",{className:"qa-question"},"What is the point of this?"),r.a.createElement("p",{className:"qa-answer"},"The point of this website is to relieve people of having awkward and maybe offensive conversations. Instead of you having to feel guilty or having to put up with the issues that people throw in your direction, So This Is Awkward does all the hard work for you."),r.a.createElement("h3",{className:"qa-question"},"Could people use this to bully someone?"),r.a.createElement("p",{className:"qa-answer"},"That is not the point of the website. So This Is Awkward has pre-made options that you can choose from. There is no way to send customized messages that could be used to hurt someone. This website wants to bring attention to issues that some people have without being a jerk about it."),r.a.createElement("h3",{className:"qa-question"},"Why can't I send my own message?"),r.a.createElement("p",{className:"qa-answer"},"So This Is Awkward does not want to play a part in bullying or possible abuse. We have a myriad of pre-made buttons and options to choose from. If your issue is not there, then it is too personal to deal with over email."),r.a.createElement("h3",{className:"qa-question"},"How does the person I send it to get it?"),r.a.createElement("p",{className:"qa-answer"},"So This Is Awkward emails the person you would like to send it to."),r.a.createElement("h3",{className:"qa-question"},"What if I don't want to recieve the emails?"),r.a.createElement("p",{className:"qa-answer"},"If you so happen to get an unfortunate email, there is an option to opt-out if you no longer want to know what is wrong with you."),r.a.createElement("h3",{className:"qa-question"},"What if my issue isn't on here?"),r.a.createElement("p",{className:"qa-answer"},"Then it is probably too personal to handle over email.")))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:f}),r.a.createElement(i.b,{exact:!0,path:"/help",component:O}),r.a.createElement(i.b,{exact:!0,path:"/requestReason",component:q}),r.a.createElement(i.b,{exact:!0,path:"/requestForm",component:T}),r.a.createElement(i.b,{exact:!0,path:"/login",component:R}),r.a.createElement(i.b,{exact:!0,path:"/signUp",component:x}),r.a.createElement(i.b,{exact:!0,path:"/signedIn",component:B}),r.a.createElement(i.b,{exact:!0,path:"/testimonials",component:G}),r.a.createElement(i.b,{exact:!0,path:"/about",component:M}))));l.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.983056bd.chunk.js.map