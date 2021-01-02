(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{23:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),o=e.n(r),c=e(9),i=e.n(c),s=(e(23),e(10)),u=e(11),d=e(12),l=e(17),b=e(16),h=e(2),j=e(3);function p(){var t=Object(h.a)(["\n padding: 15px 0; \n"]);return p=function(){return t},t}var f=j.a.div(p());function x(){var t=Object(h.a)(["\n background: white;\n color: #717171;\n font-size: 12px;\n font-weight: bold;\n padding: 4px 10px;\n border: 1px solid #212121;\n border-radius: 4px;\n box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n &:hover {\n     color: #212121;\n }\n &:focus {\n     outline: none;\n     border: 1px solid #212121;\n }\n &:active {\n     box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n }\n &:not(:last-child) {\n     margin-right: 8px;\n }\n"]);return x=function(){return t},t}var v=j.a.button(x());function g(){var t=Object(h.a)(["\n list-style-type: none;\n"]);return g=function(){return t},t}function O(){var t=Object(h.a)(["\n  color: #212121;\n  font-size: 14px;\n  padding: 2px 0;\n"]);return O=function(){return t},t}function k(){var t=Object(h.a)(["\n  font-weight: bold;\n"]);return k=function(){return t},t}var m=j.a.span(k()),w=j.a.li(O()),y=j.a.ul(g()),N=function(t){var n=t.statName,e=t.val;return Object(a.jsxs)(w,{children:[n,": ",Object(a.jsx)(m,{children:e})]})},P=function(t){var n=t.good,e=t.neutral,r=t.bad,o=t.total,c=t.positivePercentage;return Object(a.jsxs)(y,{children:[Object(a.jsx)(N,{statName:"Good",val:n}),Object(a.jsx)(N,{statName:"Neutral",val:e}),Object(a.jsx)(N,{statName:"Bad",val:r}),Object(a.jsx)(N,{statName:"Total",val:o}),Object(a.jsx)(N,{statName:"Positive feedback",val:c+"%"})]})};function F(){var t=Object(h.a)(["\n width: 380px;\n margin: 0 auto;\n padding: 15px;\n background: pink;\n border-radius: 10px;\n box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.8) \n"]);return F=function(){return t},t}var C=j.a.div(F()),T=e(5),S=e.n(T);function z(){var t=Object(h.a)(["\n color: #212121;\n font-size: ","px;\n font-weight: bold;\n"]);return z=function(){return t},t}var B=j.a.h1.attrs((function(t){return{children:t.title||""}}))(z(),(function(t){return t.fontSize||22}));B.propTypes={title:S.a.string.isRequired};var G=B,I=function(t){var n=t.title,e=t.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(G,{title:n}),e]})};function J(){var t=Object(h.a)(["\ncolor: #212121;\n"]);return J=function(){return t},t}var L=j.a.span.attrs((function(t){return{children:t.message}}))(J());L.propTypes={message:S.a.string};var M=L,q=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={good:0,neutral:0,bad:0},t.total=0,t.perc=0,t.handleClick=function(n){n.target!==n.currentTarget&&t.setState((function(t){return Object(s.a)({},n.target.dataset.stat,Number(t[n.target.dataset.stat])+1)}))},t}return Object(d.a)(e,[{key:"shouldComponentUpdate",value:function(t,n){return this.countTotalFeedback(n),this.countPositiveFeedbackPercentage(n),!!this.total}},{key:"countTotalFeedback",value:function(t){for(var n in this.total=0,t)this.total+=t[n];return this.total}},{key:"countPositiveFeedbackPercentage",value:function(t){return this.perc=Math.round(100*Number(t.good/(this.total-t.neutral)||0)),"".concat(this.perc,"%")}},{key:"render",value:function(){return Object(a.jsxs)(C,{children:[Object(a.jsx)(I,{title:"Please leave a feedback",children:Object(a.jsxs)(f,{onClick:this.handleClick,children:[Object(a.jsx)(v,{"data-stat":"good",children:"Good"}),Object(a.jsx)(v,{"data-stat":"neutral",children:"Neutral"}),Object(a.jsx)(v,{"data-stat":"bad",children:"Bad"})]})}),Object(a.jsx)(I,{title:"Statistics",children:this.total?Object(a.jsx)(P,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.total,positivePercentage:this.perc}):Object(a.jsx)(M,{message:"No feedback given"})})]})}}]),e}(r.Component);var A=function(){return Object(a.jsx)(q,{})},D=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),o(t),c(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),D()}},[[28,1,2]]]);
//# sourceMappingURL=main.920ecc48.chunk.js.map