(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(6),a=n.n(c),i=n(3),l=n.n(i),r=n(5),o=n(2),u=n(1),j=(n(13),function(){var e,t=Object(u.useRef)(null),n=Object(u.useRef)(null),c=Object(u.useRef)(null),a=Object(u.useState)(!1),i=Object(o.a)(a,2),j=i[0],d=i[1],b=Object(u.useState)(!1),p=Object(o.a)(b,2),O=p[0],h=p[1],f=Object(u.useState)(!1),x=Object(o.a)(f,2),v=x[0],y=x[1],m=Object(u.useState)([]),k=Object(o.a)(m,2),w=k[0],g=k[1],N=Object(u.useState)(!0),S=Object(o.a)(N,2),C=S[0],L=S[1];Object(u.useEffect)((function(){(function(){var e=Object(r.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://littlehero.io:5000/init");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(){var e=Object(r.a)(l.a.mark((function e(){var t,s,a,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(null===(t=c.current)||void 0===t?void 0:t.value)){e.next=12;break}return h(!0),i={url:null===(a=c.current)||void 0===a?void 0:a.value},e.next=5,fetch("https://littlehero.io:5000/backend/extract",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 5:return r=e.sent,e.next=8,r.json();case 8:"Success"===e.sent.message?(n.current.style.display="block",n.current.classList.add("success"),n.current.innerHTML="\uace1\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4",h(!1)):(n.current.style.display="block",n.current.classList.add("fail"),n.current.innerHTML="\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL \uc785\ub2c8\ub2e4",h(!1)),e.next=13;break;case 12:h(!1);case 13:0===(null===(s=c.current)||void 0===s?void 0:s.value.length)&&(n.current.style.display="none",n.current.innerHTML="");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e,t){return Math.floor(Math.random()*(t-e)+e)};return Object(s.jsxs)("div",{id:"hello",onClick:function(){j&&d(!1)},children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("div",{className:"logo",children:"Hello!"}),Object(s.jsx)("div",{className:"settings",onClick:function(){d(!j)}}),j?Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:function(){return y(!0)},children:"\uace1 \ub4f1\ub85d"}),Object(s.jsx)("li",{children:"\uace1 \uc0ad\uc81c"})]}):null]}),Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"status-wrapper",children:Object(s.jsxs)("div",{className:"music-wave-loader",ref:t,children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]})}),Object(s.jsxs)("div",{className:"control-wrapper",children:[Object(s.jsx)("button",{onClick:function(){for(var n,s=null===(n=t.current)||void 0===n?void 0:n.children,c=0;c<s.length;c++)s[c].style.animation="animate 1s linear infinite";s[0].style.animationDelay="0s",s[1].style.animationDelay="0.3s",s[2].style.animationDelay="0.6s",s[3].style.animationDelay="0.9s",s[4].style.animationDelay="0.2s",s[5].style.animationDelay="0.5s",s[6].style.animationDelay="0.8s";var a=D(0,w.length);void 0!==e&&e.pause(),(e=new Audio("/hello/mp3/"+w[a])).play(),e.addEventListener("ended",(function(){a=D(0,w.length),(e=new Audio("/hello/mp3/"+w[a])).play()}))},children:"PLAY"}),C?Object(s.jsx)("button",{onClick:function(){void 0!==e&&(e.pause(),L(!1))},children:"STOP"}):Object(s.jsx)("button",{onClick:function(){void 0!==e&&(e.play(),L(!0))},children:"RESTART"})]})]}),Object(s.jsx)("footer",{}),v?Object(s.jsxs)("div",{className:"add-music-wrapper",children:[Object(s.jsx)("input",{type:"text",placeholder:"\uc720\ud29c\ube0c \ub9c1\ud06c\ub97c \uc785\ub825\ud558\uc138\uc694",spellCheck:!1,ref:c,onKeyUp:T}),O?Object(s.jsx)("div",{className:"loading-wrapper",children:Object(s.jsx)("div",{className:"loading"})}):null,Object(s.jsx)("div",{className:"add-result",ref:n}),Object(s.jsx)("div",{className:"close-add-music",onClick:function(){y(!1),h(!1)},children:"\ub2eb\uae30"})]}):null]})});a.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3bdbcd8c.chunk.js.map