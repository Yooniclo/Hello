(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(6),a=n.n(c),r=n(2),l=n.n(r),i=n(5),o=n(3),u=n(1),j=(n(13),function(){var e=Object(u.useRef)(null),t=Object(u.useRef)(null),n=Object(u.useRef)(null),c=Object(u.useState)(!1),a=Object(o.a)(c,2),r=a[0],j=a[1],d=Object(u.useState)(!1),b=Object(o.a)(d,2),p=b[0],h=b[1],O=Object(u.useState)(!1),f=Object(o.a)(O,2),x=f[0],v=f[1],m=Object(u.useState)([]),y=Object(o.a)(m,2),k=y[0],w=y[1];Object(u.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://littlehero.io:5000/init");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){var e=Object(i.a)(l.a.mark((function e(){var s,c,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(null===(s=n.current)||void 0===s?void 0:s.value)){e.next=12;break}return h(!0),r={url:null===(a=n.current)||void 0===a?void 0:a.value},e.next=5,fetch("https://littlehero.io:5000/backend/extract",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 5:return i=e.sent,e.next=8,i.json();case 8:"Success"===e.sent.message?(t.current.style.display="block",t.current.classList.add("success"),t.current.innerHTML="\uace1\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4",h(!1)):(t.current.style.display="block",t.current.classList.add("fail"),t.current.innerHTML="\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL \uc785\ub2c8\ub2e4",h(!1)),e.next=13;break;case 12:h(!1);case 13:0===(null===(c=n.current)||void 0===c?void 0:c.value.length)&&(t.current.style.display="none",t.current.innerHTML="");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e,t){return Math.floor(Math.random()*(t-e)+e)};return Object(s.jsxs)("div",{id:"hello",onClick:function(){r&&j(!1)},children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("div",{className:"logo",children:"Hello!"}),Object(s.jsx)("div",{className:"settings",onClick:function(){j(!r)}}),r?Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:function(){return v(!0)},children:"\uace1 \ub4f1\ub85d"}),Object(s.jsx)("li",{children:"\uace1 \uc0ad\uc81c"})]}):null]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"status-wrapper",children:Object(s.jsxs)("div",{className:"music-wave-loader",ref:e,children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]})}),Object(s.jsx)("div",{className:"control-wrapper",children:Object(s.jsx)("button",{onClick:function(){for(var t,n=null===(t=e.current)||void 0===t?void 0:t.children,s=0;s<n.length;s++)n[s].style.animation="animate 1s linear infinite";n[0].style.animationDelay="0s",n[1].style.animationDelay="0.3s",n[2].style.animationDelay="0.6s",n[3].style.animationDelay="0.9s",n[4].style.animationDelay="0.2s",n[5].style.animationDelay="0.5s",n[6].style.animationDelay="0.7s";var c=N(0,k.length),a=new Audio("https://littlehero.io:5000/hello/mp3/"+k[c]);a.play(),a.addEventListener("ended",(function(){c=N(0,k.length),(a=new Audio("/hello/mp3/"+k[c])).play()}))},children:"PLAY"})})]}),Object(s.jsx)("footer",{}),x?Object(s.jsxs)("div",{className:"add-music-wrapper",children:[Object(s.jsx)("input",{type:"text",placeholder:"\uc720\ud29c\ube0c \ub9c1\ud06c\ub97c \uc785\ub825\ud558\uc138\uc694",spellCheck:!1,ref:n,onKeyUp:g}),p?Object(s.jsx)("div",{className:"loading-wrapper",children:Object(s.jsx)("div",{className:"loading"})}):null,Object(s.jsx)("div",{className:"add-result",ref:t}),Object(s.jsx)("div",{className:"close-add-music",onClick:function(){v(!1),h(!1)},children:"\ub2eb\uae30"})]}):null]})});a.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.867e9b67.chunk.js.map