(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistic_list__Ftdyh",item:"Statistic_item__3O59p",value:"Statistic_value__2wlzE"}},,function(e,t,a){e.exports={wrapper:"FeedbackOptions_wrapper__1QeR7",feedbackBtn:"FeedbackOptions_feedbackBtn__1LH4G"}},,,,,function(e,t,a){e.exports={title:"Section_title__KZTWX"}},function(e,t,a){e.exports={notification:"Notification_notification__2AMj4"}},function(e,t,a){e.exports={container:"Feedback_container__1HFJi"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(5),i=a.n(s),o=a(6),r=a(7),l=a(12),d=a(11),u=a(3),b=a.n(u),j=a(0),h=function(e){var t=e.onGood,a=e.onNeutral,n=e.onBad;return Object(j.jsxs)("div",{className:b.a.wrapper,children:[Object(j.jsx)("button",{type:"button",className:b.a.feedbackBtn,onClick:t,children:"Good"}),Object(j.jsx)("button",{type:"button",className:b.a.feedbackBtn,onClick:a,children:"Neutral"}),Object(j.jsx)("button",{type:"button",className:b.a.feedbackBtn,onClick:n,children:"Bad"})]})},f=a(1),O=a.n(f),x=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsxs)("li",{className:O.a.item,children:["Good: ",t>0?Object(j.jsx)("span",{className:O.a.value,children:t}):t]}),Object(j.jsxs)("li",{className:O.a.item,children:["Neutral:"," ",a>0?Object(j.jsx)("span",{className:O.a.value,children:a}):a]}),Object(j.jsxs)("li",{className:O.a.item,children:["Bad: ",n>0?Object(j.jsx)("span",{className:O.a.value,children:n}):n]}),Object(j.jsxs)("li",{className:O.a.item,children:["Total: ",c>0?Object(j.jsx)("span",{className:O.a.value,children:c}):c]}),Object(j.jsxs)("li",{className:O.a.item,children:["Positive feedback:"," ","0%"!==s?Object(j.jsx)("span",{className:O.a.value,children:s}):s]})]})},p=a(8),v=a.n(p),m=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:v.a.title,children:t}),a]})},N=a(9),k=a.n(N);function _(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:k.a.notification,children:t})})}var g=a(10),B=a.n(g),F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good+e.state.neutral+e.state.bad;return(0===t?0:Math.round(100*e.state.good/t))+"%"},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.good,t=this.state.neutral,a=this.state.bad;return Object(j.jsxs)("div",{className:B.a.container,children:[Object(j.jsx)(m,{title:"Please leave your feedback",children:Object(j.jsx)(h,{onGood:this.handleGood,onNeutral:this.handleNeutral,onBad:this.handleBad})}),Object(j.jsx)(m,{title:"Statistics",children:0!==this.countTotalFeedback()?Object(j.jsx)(x,{good:e,neutral:t,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(_,{message:"No feedback given"})})]})}}]),a}(n.Component),S=F;function w(){return Object(j.jsx)("div",{children:Object(j.jsx)(S,{})})}a(18);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.88af29bc.chunk.js.map