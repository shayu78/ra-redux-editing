(this["webpackJsonpra-redux-editing"]=this["webpackJsonpra-redux-editing"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(5),r=n.n(c),s=(n(18),n(2)),o=n(1);function u(){var e=Object(s.c)((function(e){return e.serviceAdd})),t=Object(s.b)(),n=function(e){var n=e.target,i=n.name,a=n.value;t({type:"CHANGE_SERVICE_FIELD",payload:{field:i,value:a}})};return Object(o.jsxs)("form",{className:"form",onSubmit:function(n){n.preventDefault();var i=e.id,a=e.name,c=e.price;t({type:"ADD_SERVICE",payload:{id:i,name:a,price:c}})},onReset:function(){return t({type:"CANCEL_SERVICE"})},children:[Object(o.jsx)("input",{className:"input w-100",name:"name",onChange:n,value:e.name,required:!0}),Object(o.jsx)("input",{className:"input",type:"number",min:"0",max:"999999",name:"price",onChange:n,value:e.price,required:!0}),Object(o.jsx)("button",{className:"button",type:"submit",children:"Save"}),e.id&&Object(o.jsx)("button",{className:"button",type:"reset",children:"Cancel"})]})}function d(){var e=Object(s.c)((function(e){return e.serviceList})),t=Object(s.c)((function(e){return e.serviceAdd})),n=Object(s.b)();return Object(o.jsx)("ul",{className:"list",children:e.map((function(e){return Object(o.jsxs)("li",{className:"list__item",children:[Object(o.jsx)("span",{className:"list__item__name",children:e.name}),Object(o.jsx)("span",{className:"list__item__price",children:e.price}),Object(o.jsxs)("div",{className:"buttons__wrapper",children:[Object(o.jsx)("i",{className:"material-icons mini__button",onClick:function(){return function(e){var t=e.id,i=e.name,a=e.price;n({type:"EDIT_SERVICE",payload:{id:t,name:i,price:a}})}(e)},children:"edit"}),Object(o.jsx)("i",{className:"material-icons mini__button",onClick:function(){return i=e.id,t.id===i&&n({type:"CANCEL_SERVICE"}),void n({type:"REMOVE_SERVICE",payload:{id:i}});var i},children:"close"})]})]},e.id)}))})}n(26),n(27);var l=n(3),m=n(13),p=n(7),j=[{id:Object(p.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:21e3},{id:Object(p.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:25e3}];var b=n(6),E=n(4),_={id:null,name:"",price:""};var O=Object(l.b)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SERVICE":var n=t.payload,i=n.id,a=n.name,c=n.price;return i?e.map((function(e){return e.id===i?{id:i,name:a,price:c}:e})):[].concat(Object(m.a)(e),[{id:Object(p.a)(),name:a,price:Number(c)}]);case"REMOVE_SERVICE":var r=t.payload;return e.filter((function(e){return e.id!==r.id}));default:return e}},serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SERVICE_FIELD":var n=t.payload,i=n.field,a=n.value;return Object(E.a)(Object(E.a)({},e),{},Object(b.a)({},i,a));case"EDIT_SERVICE":var c=t.payload,r=c.id,s=c.name,o=c.price;return{id:r,name:s,price:o};case"ADD_SERVICE":case"CANCEL_SERVICE":return Object(E.a)({},_);default:return e}}}),v=Object(l.c)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var f=function(){return Object(o.jsxs)(s.a,{store:v,children:[Object(o.jsx)(u,{}),Object(o.jsx)(d,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.cd330ee5.chunk.js.map