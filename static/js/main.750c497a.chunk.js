(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),r=(n(18),n(11)),s=n(7),l=n(2),u=n(3),d=n(5),h=n(4),b=n(6),m=n(1),f=n(8),j=(n(20),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={todoText:""},n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(Object(m.a)(n))),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(Object(s.a)({},this.state)),this.setState({todoText:""})}},{key:"render",value:function(){var e=this.state.todoText;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"todo-input",name:"todoText",type:"text",key:"todoText",value:e,autoComplete:"off",onChange:this.handleChange,placeholder:"Add New Todo"}))}}]),t}(a.Component)),v=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.todoText,a=e.onDelete;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("ul",null,o.a.createElement("li",{className:"todo-item"},o.a.createElement("button",{className:"delete-btn",type:"button",onClick:function(){return a(t)}},"X"),n)))}}]),t}(a.Component)),O=(n(24),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onDelete,t=this.props.todos.map(function(t,n){return o.a.createElement(v,Object.assign({key:t.id},t,{onDelete:e}))});return o.a.createElement("div",{className:"todos-container"},t)}}]),t}(a.Component)),p=(n(26),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={todos:[],todoText:"",nextId:0},n.onDelete=n.onDelete.bind(Object(m.a)(Object(m.a)(n))),n.handleSave=n.handleSave.bind(Object(m.a)(Object(m.a)(n))),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onDelete",value:function(e){var t=this.state.todos.filter(function(t){return t.id!==e});this.setState({todos:t})}},{key:"handleSave",value:function(e){var t=this;this.setState(function(n,a){var o=Object(s.a)({},e,{id:t.state.nextId});return{nextId:n.nextId+1,todos:[].concat(Object(r.a)(t.state.todos),[o])}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App-container"},o.a.createElement("header",{className:"header-container"},"Todo List"),o.a.createElement(j,{onSave:this.handleSave}),o.a.createElement(O,{onDelete:this.onDelete,todos:this.state.todos}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.750c497a.chunk.js.map