/*! echo.js v1.7.0 | (c) 2015 @toddmotto | https://github.com/toddmotto/echo
*/ !function(t,e){"function"==typeof
define&&define.amd?define(function(){return e(t)}):"object"==typeof
exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var
e,n,o,r,c,a={},u=function(){},d=function(t){return
null===t.offsetParent},i=function(t,e){if(d(t))return!1;var
n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n
.top<=e.b},l=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.re
nder(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,i=n.of
fsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,1
0)};e={t:s(n.offsetTop,i),b:s(n.offsetBottom,i),l:s(n.offsetLeft,f),r:s(n.offs
etRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u
,a.render(),document.addEventListener?(t.addEventListener("scroll",l,!1),t.add
EventListener("load",l,!1)):(t.attachEvent("onscroll",l),t.attachEvent("onload
",l))},a.render=function(){for(var
n,o,r=document.querySelectorAll("img[dataecho], [data-echo-background]"),d=r.l
ength,l={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeig
ht)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},f=0;d>f;f+
+)o=r[f],i(o,l)?(c&&o.setAttribute("data-echo-
placeholder",o.src),null!==o.getAttribute("data-echo-
background")?o.style.backgroundImage="url("+o.getAttribute("data-echo-backgrou
nd")+")":o.src=o.getAttribute("dataecho"),c||(o.removeAttribute("dataecho"),o.
removeAttribute("data-echo-background")),u(o,"load")):c&&(n=o.getAttribute
("data-echo-placeholder"))&&(null!==o.getAttribute("data-echo-
background")?o.style.backgroundImage="url("+n+")":o.src=n,o.removeAttribute
("data-echo-placeholder"),u(o,"unload"));d||a.detach()},a.detach=function(){do
cument.removeEventListener?t.removeEventListener("scroll",l):t.detachEvent("on
scroll",l),clearTimeout(n)},a});
