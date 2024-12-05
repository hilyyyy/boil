(function(){"use strict";var e={7238:function(e,t,o){var n=o(5130),i=o(6768),l=o(4232);const d={id:"app"},a={"aria-labelledby":"list-summary",class:"stack-large"};function s(e,t,o,n,s,r){const u=(0,i.g2)("to-do-form"),c=(0,i.g2)("to-do-item"),b=(0,i.g2)("el-button"),m=(0,i.g2)("chart-component");return(0,i.uX)(),(0,i.CE)("div",d,[t[1]||(t[1]=(0,i.Lk)("h1",null,"My To-Do List",-1)),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.v_)(r.listSummary),513),(0,i.bF)(u,{onTodoAdded:r.addToDo},null,8,["onTodoAdded"]),(0,i.Lk)("ul",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.bF)(c,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>r.updateDoneStatus(e.id),onItemDeleted:t=>r.deleteToDo(e.id),onItemEdited:t=>r.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))]),(0,i.bF)(b,{type:"primary",onClick:r.handleClick},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Click Me")]))),_:1},8,["onClick"]),(0,i.bF)(m)])}o(4114),o(8992),o(4520),o(2577);const r={key:0,class:"stack-small"},u={class:"custom-checkbox"},c=["id","checked"],b=["for"],m={class:"btn-group"},p={class:"visually-hidden"},h={class:"visually-hidden"};function f(e,t,o,n,d,a){const s=(0,i.g2)("to-do-item-edit-form");return d.isEditing?((0,i.uX)(),(0,i.Wv)(s,{key:1,id:o.id,label:o.label,onItemEdited:a.itemEdited,onEditCancelled:a.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",u,[(0,i.Lk)("input",{type:"checkbox",class:"checkbox",id:o.id,checked:a.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed",o.id))},null,40,c),(0,i.Lk)("label",{for:o.id,class:"checkbox-label"},(0,l.v_)(o.label),9,b)]),(0,i.Lk)("div",m,[(0,i.Lk)("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=(...e)=>a.toggleToItemEditForm&&a.toggleToItemEditForm(...e))},[t[3]||(t[3]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",p,(0,l.v_)(o.label),1)],512),(0,i.Lk)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>a.deleteToDo&&a.deleteToDo(...e))},[t[4]||(t[4]=(0,i.eW)(" Delete ")),(0,i.Lk)("span",h,(0,l.v_)(o.label),1)])])]))}const v={class:"edit-label"},y=["id"],k={class:"btn-group"},g={class:"visually-hidden"},C={type:"submit",class:"btn btn__primary"},T={class:"visually-hidden"};function _(e,t,o,d,a,s){return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",v,'Edit Name for "'+(0,l.v_)(o.label)+'"',1),(0,i.bo)((0,i.Lk)("input",{id:o.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>a.newLabel=e)},null,8,y),[[n.Jo,a.newLabel,void 0,{trim:!0}]])]),(0,i.Lk)("div",k,[(0,i.Lk)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>s.onCancel&&s.onCancel(...e))},[t[3]||(t[3]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",g,"editing "+(0,l.v_)(o.label),1)]),(0,i.Lk)("button",C,[t[4]||(t[4]=(0,i.eW)(" Save ")),(0,i.Lk)("span",T,"edit for "+(0,l.v_)(o.label),1)])])],32)}var L={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){this.$emit("edit-cancelled")}},watch:{label(e){this.newLabel=e}},mounted(){const e=this.$refs.labelInput;e.focus()}},D=o(1241);const E=(0,D.A)(L,[["render",_],["__scopeId","data-v-0f136b30"]]);var I=E,S={components:{ToDoItemEditForm:I},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{deleteToDo(){this.$emit("item-deleted",this.id)},toggleToItemEditForm(){this.isEditing=!0},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e.focus()}))},itemEdited(e){this.$emit("item-edited",this.id,e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()}}};const w=(0,D.A)(S,[["render",f],["__scopeId","data-v-1832be2a"]]);var x=w,O=o(3165),$=o.n(O);function A(e,t,o,l,d,a){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(0,n.D$)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[t[2]||(t[2]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>d.label=e),class:"input__lg"},null,512),[[n.Jo,d.label,void 0,{lazy:!0,trim:!0}]]),t[3]||(t[3]=(0,i.Lk)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1))],32)}var F={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const j=(0,D.A)(F,[["render",A]]);var B=j;const W={ref:"chart",style:{width:"600px",height:"400px"}};function X(e,t,o,n,l,d){return(0,i.uX)(),(0,i.CE)("div",W,null,512)}var M=o(9671),q={name:"ChartComponent",mounted(){const e=this.$refs.chart,t=M.Ts(e);t.setOption({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"bar"}]})}};const P=(0,D.A)(q,[["render",X],["__scopeId","data-v-4b92470a"]]);var V=P,z={name:"App",components:{ToDoItem:x,ToDoForm:B,ChartComponent:V},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean}},data(){return{ToDoItems:[{id:$()("todo-"),label:"Learn Vue",done:!1},{id:$()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:$()("todo-"),label:"Have fun",done:!0},{id:$()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:$()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const o=this.ToDoItems.find((t=>t.id===e));o.label=t},handleClick(){alert("Button clicked!")}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const J=(0,D.A)(z,[["render",s]]);var U=J,H=o(1571);o(4188);const K=(0,n.Ef)(U);K.use(H.A),K.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&l||d>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,l<d&&(d=l));if(a){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,d=n[0],a=n[1],s=n[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var u=s(o)}for(t&&t(n);r<d.length;r++)l=d[r],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7238)}));n=o.O(n)})();
//# sourceMappingURL=app.b47d5fb9.js.map