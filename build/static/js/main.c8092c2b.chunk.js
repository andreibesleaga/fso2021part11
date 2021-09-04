(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(14),a=t.n(r),s=t(3),o=(t(19),t(2)),c=t(4),u=t.n(c),i="/api/persons",l={getAll:function(){return u.a.get(i)},create:function(e){return u.a.post(i,e)},update:function(e,n){return u.a.put("".concat(i,"/").concat(e),n)},erase:function(e){return u.a.delete("".concat(i,"/").concat(e))}},d=t(0),m=function(e){return null===e||null===e.message||null===e.message.message||void 0===e.message.message||""===e.message.message?null:Object(d.jsx)("div",{className:e.message.type,children:e.message.message})},b=function(e){return Object(d.jsx)("input",{value:e.filter,onChange:e.handleFilterChange})},j=function(e){var n=function(e,n){var t=[];return e.forEach((function(e){0===e.name.toLowerCase().indexOf(n.toLowerCase())&&t.push(e)})),t}(e.persons,e.filter);return Object(d.jsx)("ul",{children:n.map((function(n){return Object(d.jsx)(f,{persona:n,handlePersonDelete:e.handlePersonDelete},n.name)}))})},f=function(e){return Object(d.jsxs)("li",{children:[e.persona.name," : ",e.persona.number," ",Object(d.jsx)("button",{value:e.persona.id,onClick:e.handlePersonDelete,children:"delete"})," ",Object(d.jsx)("br",{})]})},h=function(e){return Object(d.jsxs)("form",{onSubmit:e.addPerson,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{type:"text",value:e.newName,onChange:e.handleNameChange}),"number: ",Object(d.jsx)("input",{type:"text",value:e.newNumber,onChange:e.handleNumberChange})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},p=function(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),c=Object(s.a)(a,2),u=c[0],i=c[1],f=Object(o.useState)(""),p=Object(s.a)(f,2),g=p[0],O=p[1],v=Object(o.useState)(""),x=Object(s.a)(v,2),y=x[0],w=x[1],C=Object(o.useState)({type:"",message:""}),N=Object(s.a)(C,2),P=N[0],k=N[1];Object(o.useEffect)((function(){D()}),[]);var D=function(){l.getAll().then((function(e){r(e.data)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(m,{message:P}),Object(d.jsxs)("p",{children:["filter names:",Object(d.jsx)(b,{handleFilterChange:function(e){w(e.target.value)},filter:y})," ",Object(d.jsx)("br",{})]}),Object(d.jsx)("h2",{children:"add a new: "}),Object(d.jsx)(h,{newName:u,newNumber:g,addPerson:function(e){if(e.preventDefault(),""!==u&&""!==g){var n={name:u,number:g},a=t.find((function(e){return e.name===u}));void 0===a?(l.create(n).then((function(e){r(t.concat(e.data)),k({type:"info",message:"".concat(u," added to server")}),setTimeout((function(){k(null)}),5e3)})).catch((function(e){var n="Error saving person to server";n=e.response&&e.response.data?e.response.data.error:e.request?e.request:e.message,k({type:"error",message:"".concat(n)}),setTimeout((function(){k(null)}),5e3)})),i(""),O("")):(window.confirm("".concat(u," is already added to phonebook. Do you want to update phone number ?"))&&l.update(a.id,n).then((function(e){D(),k({type:"info",message:"".concat(u," number updated on server")}),setTimeout((function(){k(null)}),5e3)})).catch((function(e){var n="Error updating person on server";n=e.response&&e.response.data?e.response.data.error:e.request?e.request:e.message,k({type:"error",message:"".concat(n)}),setTimeout((function(){k(null)}),5e3),D()})),i(""),O(""))}else alert("name and number must not be empty!")},handleNameChange:function(e){i(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)(j,{persons:t,filter:y,handlePersonDelete:function(e){window.confirm("Are you sure you want to delete the person?")&&l.erase(e.target.value).then((function(e){D(),k({type:"info",message:"Person removed from server"}),setTimeout((function(){k(null)}),5e3)})).catch((function(e){k({type:"error",message:"Error removing from server"}),setTimeout((function(){k(null)}),5e3),D()}))}})]})};a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c8092c2b.chunk.js.map