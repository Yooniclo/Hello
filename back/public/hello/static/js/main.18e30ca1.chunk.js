(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s,a=n(0),c=n(6),i=n.n(c),r=n(3),l=n.n(r),o=n(4),u=n(2),d=n(1),j=(n(13),function(){var e=Object(d.useRef)(null),t=Object(d.useRef)(null),n=Object(d.useRef)(null),c=Object(d.useRef)(null),i=Object(d.useState)(!1),r=Object(u.a)(i,2),j=r[0],b=r[1],h=Object(d.useState)(!1),p=Object(u.a)(h,2),O=p[0],v=p[1],m=Object(d.useState)(!1),f=Object(u.a)(m,2),y=f[0],x=f[1],k=Object(d.useState)(!1),g=Object(u.a)(k,2),N=g[0],S=g[1],w=Object(d.useState)([]),D=Object(u.a)(w,2),C=D[0],T=D[1],L=Object(d.useState)([]),E=Object(u.a)(L,2),R=E[0],M=E[1],H=Object(d.useState)(!0),J=Object(u.a)(H,2),A=J[0],P=J[1];Object(d.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://littlehero.io:5000/init");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,T(n),M(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[T,C]);var U=function(){var e=Object(o.a)(l.a.mark((function e(){var n,s,a,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(null===(n=c.current)||void 0===n?void 0:n.value)){e.next=12;break}return v(!0),i={url:null===(a=c.current)||void 0===a?void 0:a.value},e.next=5,fetch("https://littlehero.io:5000/backend/extract",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 5:return r=e.sent,e.next=8,r.json();case 8:"Success"===e.sent.message?(t.current.style.display="block",t.current.classList.add("success"),t.current.innerHTML="\uace1\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4",v(!1)):(t.current.style.display="block",t.current.classList.add("fail"),t.current.innerHTML="\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL \uc785\ub2c8\ub2e4",v(!1)),e.next=13;break;case 12:v(!1);case 13:0===(null===(s=c.current)||void 0===s?void 0:s.value.length)&&(t.current.style.display="none",t.current.innerHTML="");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={filename:t.target.previousSibling.innerHTML},e.next=3,fetch("https://littlehero.io:5000/backend/delete",{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 3:return s=e.sent,e.next=6,s.json();case 6:"Success"===e.sent.message&&(t.target.previousSibling.remove(),t.target.remove());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{id:"hello",onClick:function(){j&&b(!1)},children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{className:"logo",children:"Hello!"}),Object(a.jsx)("div",{className:"settings",onClick:function(){b(!j)}}),j?Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{onClick:function(){return x(!0)},children:"\uace1 \ub4f1\ub85d"}),Object(a.jsx)("li",{onClick:function(){return S(!0)},children:"\uace1 \uc0ad\uc81c"})]}):null]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{className:"status-wrapper",ref:n,children:Object(a.jsxs)("div",{className:"music-wave-loader",ref:e,children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})}),Object(a.jsxs)("div",{className:"control-wrapper",children:[Object(a.jsx)("button",{onClick:function t(){var a;n.current.style.display="block";for(var c=null===(a=e.current)||void 0===a?void 0:a.children,i=0;i<c.length;i++)c[i].style.animation="animate 1s linear infinite";c[0].style.animationDelay="0s",c[1].style.animationDelay="0.3s",c[2].style.animationDelay="0.6s",c[3].style.animationDelay="0.9s",c[4].style.animationDelay="0.2s",c[5].style.animationDelay="0.5s",c[6].style.animationDelay="0.8s",A||P(!0);var r,l,o=(r=0,l=C.length,Math.floor(Math.random()*(l-r)+r));void 0!==s&&s.pause(),(s=new Audio("/hello/mp3/"+C[o])).play(),C.splice(o,1),s.addEventListener("ended",t)},children:"PLAY"}),A?Object(a.jsx)("button",{onClick:function(){if(void 0!==s){var t;n.current.style.display="none";for(var a=null===(t=e.current)||void 0===t?void 0:t.children,c=0;c<a.length;c++)a[c].style.animation="";s.pause(),P(!1)}},children:"STOP"}):Object(a.jsx)("button",{onClick:function(){if(void 0!==s){var t;n.current.style.display="block";for(var a=null===(t=e.current)||void 0===t?void 0:t.children,c=0;c<a.length;c++)a[c].style.animation="animate 1s linear infinite";a[0].style.animationDelay="0s",a[1].style.animationDelay="0.3s",a[2].style.animationDelay="0.6s",a[3].style.animationDelay="0.9s",a[4].style.animationDelay="0.2s",a[5].style.animationDelay="0.5s",a[6].style.animationDelay="0.8s",s.play(),P(!0)}},children:"RESTART"})]})]}),Object(a.jsx)("footer",{}),y?Object(a.jsxs)("div",{className:"add-music-wrapper",children:[Object(a.jsx)("input",{type:"text",placeholder:"\uc720\ud29c\ube0c \ub9c1\ud06c\ub97c \uc785\ub825\ud558\uc138\uc694",spellCheck:!1,ref:c,onKeyUp:U}),O?Object(a.jsx)("div",{className:"loading-wrapper",children:Object(a.jsx)("div",{className:"loading"})}):null,Object(a.jsx)("div",{className:"add-result",ref:t}),Object(a.jsx)("div",{className:"close-add-music",onClick:function(){x(!1),v(!1)},children:"\ub2eb\uae30"})]}):null,N?Object(a.jsxs)("div",{className:"remove-modal",children:[Object(a.jsx)("div",{className:"modal-overlay"}),Object(a.jsxs)("div",{className:"modal-wrapper",children:[Object(a.jsx)("div",{className:"modal-header",children:"header"}),Object(a.jsx)("div",{className:"modal-contents",children:R.map((function(e,t){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:e},t),Object(a.jsx)("span",{onClick:B,children:"x"})]})}))}),Object(a.jsx)("div",{className:"modal-footer",onClick:function(){return S(!1)},children:"\ub2eb\uae30"})]})]}):null]})});i.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.18e30ca1.chunk.js.map