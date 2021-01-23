(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{23:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e(1),c=e.n(r),o=e(9),i=e.n(o),s=(e(23),e(10)),u=e(11),d=e(12),l=e(17),b=e(16),j=e(2),x=e(3);function h(){var t=Object(j.a)(["\n background: white;\n color: #717171;\n font-size: 12px;\n font-weight: bold;\n padding: 4px 10px;\n border: 1px solid #212121;\n border-radius: 4px;\n box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n &:hover {\n     color: #212121;\n }\n &:focus {\n     outline: none;\n     border: 1px solid #212121;\n }\n &:active {\n     box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n }\n &:not(:last-child) {\n     margin-right: 8px;\n }\n"]);return h=function(){return t},t}var p=x.a.button(h());function f(){var t=Object(j.a)(["\n  padding: 15px 0;\n"]);return f=function(){return t},t}var v=x.a.div(f()),g=function(t){var n=t.callback;return Object(a.jsxs)(v,{onClick:n,children:[Object(a.jsx)(p,{"data-stat":"good",children:"Good"}),Object(a.jsx)(p,{"data-stat":"neutral",children:"Neutral"}),Object(a.jsx)(p,{"data-stat":"bad",children:"Bad"})]})};function O(){var t=Object(j.a)(["\n  list-style-type: none;\n"]);return O=function(){return t},t}function k(){var t=Object(j.a)(["\n  color: #212121;\n  font-size: 14px;\n  padding: 2px 0;\n"]);return k=function(){return t},t}function m(){var t=Object(j.a)(["\n  font-weight: bold;\n"]);return m=function(){return t},t}var w=x.a.span(m()),y=x.a.li(k()),N=x.a.ul(O()),P=e(5),T=e.n(P);function F(){var t=Object(j.a)(["\ncolor: #212121;\n"]);return F=function(){return t},t}var z=x.a.span.attrs((function(t){return{children:t.message}}))(F());z.propTypes={message:T.a.string};var C=z,S=function(t){var n=t.statName,e=t.val;return Object(a.jsxs)(y,{children:[n,": ",Object(a.jsx)(w,{children:e})]})},B=function(t){var n=t.good,e=t.neutral,r=t.bad,c=t.total,o=t.positivePercentage;return c?Object(a.jsxs)(N,{children:[Object(a.jsx)(S,{statName:"Good",val:"".concat(n)}),Object(a.jsx)(S,{statName:"Neutral",val:"".concat(e)}),Object(a.jsx)(S,{statName:"Bad",val:"".concat(r)}),Object(a.jsx)(S,{statName:"Total",val:"".concat(c)}),Object(a.jsx)(S,{statName:"Positive feedback",val:"".concat(o," %")})]}):Object(a.jsx)(C,{message:"No feedback given"})};function G(){var t=Object(j.a)(["\n width: 380px;\n margin: 0 auto;\n padding: 15px;\n background: pink;\n border-radius: 10px;\n box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.8) \n"]);return G=function(){return t},t}var J=x.a.div(G());function M(){var t=Object(j.a)(["\n color: #212121;\n font-size: ","px;\n font-weight: bold;\n"]);return M=function(){return t},t}var q=x.a.h1.attrs((function(t){return{children:t.title||""}}))(M(),(function(t){return t.fontSize||22}));q.propTypes={title:T.a.string.isRequired};var A=q,E=function(t){var n=t.title,e=t.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{title:n}),e]})},I=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={good:0,neutral:0,bad:0},t.handleClick=function(n){n.target!==n.currentTarget&&t.setState((function(t){return Object(s.a)({},n.target.dataset.stat,Number(t[n.target.dataset.stat])+1)}))},t}return Object(d.a)(e,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(t){return Math.round(this.state.good/(t-this.state.neutral)*100)}},{key:"render",value:function(){var t=this.countTotalFeedback(),n=this.countPositiveFeedbackPercentage(t),e=this.state,r=e.good,c=e.neutral,o=e.bad;return Object(a.jsx)(v,{children:Object(a.jsxs)(J,{children:[Object(a.jsx)(E,{title:"Please leave a feedback",children:Object(a.jsx)(g,{callback:this.handleClick})}),Object(a.jsx)(E,{title:"Statistics",children:Object(a.jsx)(B,{good:r,neutral:c,bad:o,total:t,positivePercentage:n})})]})})}}]),e}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ff616233.chunk.js.map