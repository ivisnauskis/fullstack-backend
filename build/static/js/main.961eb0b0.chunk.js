(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),u=t.n(c),o=t(4),l=t(2),i=function(e){var n=e.newName,t=e.number,a=e.handleNameChange,c=e.handleNumberChange,u=e.handleAddClick;return r.a.createElement("div",null,r.a.createElement("h3",null,"add new"),r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:u},"add"))))},d=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.person,t=e.handlePersonDelete;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},s=function(e){var n=e.personsToShow,t=e.handlePersonDelete;return r.a.createElement("div",null,r.a.createElement("h3",null,"Numbers"),r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.id,person:e,handlePersonDelete:t})}))))},f=t(3),h=t.n(f),b="http://localhost:3001/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=(t(37),function(e){var n=e.message,t=e.isError;return n&&r.a.createElement("div",{className:"notification ".concat(t?"error":"success")},n)}),C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)("new name"),m=Object(l.a)(u,2),f=m[0],h=m[1],b=Object(a.useState)(""),C=Object(l.a)(b,2),j=C[0],O=C[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),S=N[0],y=N[1],D=Object(a.useState)(""),P=Object(l.a)(D,2),L=P[0],T=P[1],A=Object(a.useState)(!1),F=Object(l.a)(A,2),J=F[0],x=F[1];Object(a.useEffect)((function(){v().then((function(e){return c(e)}))}),[]);var B=function(e,n){x(!e),T(n),setTimeout((function(){T(null)}),5e3)},I=""===S?t:t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:L,isError:J}),r.a.createElement(d,{value:S,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement(i,{newName:f,handleNameChange:function(e){h(e.target.value)},number:j,handleNumberChange:function(e){O(e.target.value)},handleAddClick:function(e){e.preventDefault();var n={name:f.trim(),number:j},a=t.find((function(e){return e.name.toLowerCase().trim()===f.toLowerCase().trim()}));a?window.confirm("".concat(n.name," is already added to phone book, replace the old number with a new one?"))&&w(a.id,Object(o.a)(Object(o.a)({},a),{},{number:j})).then((function(e){c(t.map((function(n){return n.id===a.id?e:n}))),B(!0,"".concat(e.name," number has been updated."))})).catch((function(e){c(t.filter((function(e){return e.id!==a.id}))),B(!1,"".concat(n.name," has already been deleted from server."))})):E(n).then((function(e){c(t.concat(e)),B(!0,"".concat(e.name," has been added!"))}));h(""),O("")}}),r.a.createElement(s,{personsToShow:I,handlePersonDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&(p(e.id).catch((function(e){return console.log("already deleted from server.")})),c(t.filter((function(n){return n.id!==e.id}))),B(!0,"".concat(e.name," has been deleted!")))}}))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.961eb0b0.chunk.js.map