!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";var o=function(){function t(){this.str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",this.len=35,this.cookieStr=""}return t.prototype.read=function(t){var e=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie);return e?e[1]:null},t.prototype.write=function(t,e,n){void 0===n&&(n=7300);var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="; expires="+o.toUTCString();document.cookie=t+"="+e+r+"; path=/"},t.prototype.remove=function(t){this.write(t,"",-1)},t.prototype.generate=function(){for(var t=0;t<this.len;t+=1)this.cookieStr+=this.str[Math.floor(Math.random()*this.str.length)];return this.cookieStr},t}();e.a=new o},function(t,e,n){"use strict";var o=function(){function t(){this.clickPlace=[]}return t.prototype.xpath=function(){var t=this;window.addEventListener("click",function(e){t.clickPlace.push(t.getXpath(e.target))})},t.prototype.getXpath=function(t){if(t&&t.parentNode){for(var e=this.getXpath(t.parentNode)+"/"+t.tagName,n=[],o=0;o<t.parentNode.childNodes.length;o+=1){var r=t.parentNode.childNodes[o];r.tagName===t.tagName&&n.push(r)}if(n.length>1)for(var o=0;o<n.length;o+=1)if(n[o]===t){e+="["+(o+1)+"]";break}return e.toLowerCase()}return""},t.prototype.returnClickPlace=function(){return this.clickPlace},t}();e.a=new o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(1),i=(new Date).getTime();o.a.showAnythingPage(i),o.a.showWidgetPage(i),o.a.closeAnythingPage(i),r.a.xpath()},function(t,e,n){"use strict";var o=n(0),r=n(4),i=n(1),a=function(){function t(){this.projectTokenStatus=!1}return t.prototype.show=function(t,e,n){if(t+e==="wovn.io/"){var i=!o.a.read("WAPID"),a={event:"showLpTop",property:{newVisit:i,ready:n}};r.a.propertyInfo(a)}},t.prototype.closeAnythingPage=function(t){window.addEventListener("beforeunload",function(){var e=(new Date).getTime(),n=(e-t)/1e3,a=o.a.read("wap_last_event"),c=i.a.returnClickPlace(),p={event:"closeAnythingPage",property:{timeOnSite:n,clickPlace:c,lastEvent:a}};r.a.propertyInfo(p)})},t.prototype.showAnythingPage=function(t){var e=this;window.addEventListener("load",function(){var n=(new Date).getTime(),o=(n-t)/1e3;e.show(location.host,location.pathname,o)})},t.prototype.showWidgetPage=function(t){var e=this;window.addEventListener("wovnApiReady",function(){var n=(new Date).getTime(),o=(n-t)/1e3;e.projectTokenStatus=!0;var i=e.projectTokenStatus,a={event:"showWidgetPage",property:{loadTime:o,projectTokenStatus:i}};r.a.propertyInfo(a)}),setTimeout(function(){if(!e.projectTokenStatus){var t=e.projectTokenStatus,n={event:"showWidgetPage",property:{loadTime:0,projectTokenStatus:t}};r.a.propertyInfo(n)}},2e3)},t}();e.a=new a},function(t,e,n){"use strict";var o=n(0),r=n(5),i=n(6),a=function(){function t(){this.WAPID="WAPID"}return t.prototype.propertyInfo=function(t){var e=document.title,n=document.referrer,a=window.location.href,c=navigator.language,p=window.innerWidth||document.body.clientWidth,u=window.innerHeight||document.body.clientHeight,s=this.setWapCookie(),f=r.a.getSelectedLang(),h=r.a.getProjectToken(),d=r.a.getInsertType(),l=t.event;this.info={title:e,referer:n,url:a,lang:c,width:p,height:u,id:s,selectedLang:f,projectToken:h,insertType:d,event:l};var g;if(t&&t.property)for(g in t.property)this.info[g]=t.property[g];this.info=JSON.stringify(this.info),o.a.write("wap_last_event",t.event),i.a.post(this.info)},t.prototype.setWapCookie=function(){if(o.a.read(this.WAPID))return o.a.read(this.WAPID);var t=o.a.generate();return o.a.write(this.WAPID,t),t},t}();e.a=new a},function(t,e,n){"use strict";var o=n(0),r=function(){function t(){}return t.prototype.getWovnScriptTag=function(){var t=document.querySelector("[data-wovnio]");return t?(this.wovnScript=t,this.wovnScript):null},t.prototype.getProjectToken=function(){if(this.getWovnScriptTag()){return this.wovnScript.getAttribute("data-wovnio").match(/key=([^&]*)/)[1]}return null},t.prototype.getInsertType=function(){if(this.getWovnScriptTag()){var t=this.wovnScript.getAttribute("data-wovnio");return t.match(/backend=([^&]*)/)&&t.match(/backend=([^&]*)/)[1]?"backend":"script"}return null},t.prototype.getSelectedLang=function(){if(o.a.read("wovn_selected_lang"))return o.a.read("wovn_selected_lang")},t}();e.a=new r},function(t,e,n){"use strict";var o=function(){function t(){}return t.prototype.post=function(t){var e=this.newXhr();e.open("POST","https://wap.wovn.io/post",!0),e.onreadystaposttechange=function(){4===e.readyState&&(e=null)},e.send(t)},t.prototype.newXhr=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){return new ActiveXObject("Microsoft.XMLHTTP")}},t}();e.a=new o}]);