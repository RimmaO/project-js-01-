!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequiref9fd;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiref9fd=a),a("i8Q71"),a("gtycc"),a("gVa74");var i=a("bpxeT"),s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))};var o=a("2TvXO");function c(){var t=e(s)(["data-id=","'> \n          <img class='cards__list-img' src=\"","",'" alt="',"\"> \n          <div class='weekly-trends__overlay'></div> \n          <div class='cards__bloc-stars'> \n            <h2 class='cards__list-title'>","</h2> \n            <div class='cards__list-text'>"," | ","</div>  \n          </div> \n        </li>"]);return c=function(){return t},t}var u,l="https://api.themoviedb.org/3",f="/trending/movie/week",d="b90b64a7e05f9e36894001e36eb3b3c7",p="https://image.tmdb.org/t/p/w300",v=document.querySelector(".js-list"),h=1;new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&serviceMovie(h+=1).then((function(e){v.insertAdjacentHTML("beforeend",m(e.results)),e.total_pages<=e.page&&t.unobserve(guard)}))}))}),{root:null,rootMargin:"400px",threshold:0});function g(){return g=e(i)(e(o).mark((function t(){var r,n=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:1,e.abrupt("return",fetch("".concat(l).concat(f,"?api_key=").concat(d,"&page=").concat(r)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})));case 2:case"end":return e.stop()}}),t)}))),g.apply(this,arguments)}function b(e){return _.apply(this,arguments)}function _(){return(_=e(i)(e(o).mark((function t(r){var n,a,i,s,c,u,l,f,p,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key="+d);case 2:return n=e.sent,e.next=5,n.json();case 5:for(a=e.sent,i=[],s=a.genres,c=!0,u=!1,l=void 0,e.prev=9,f=s[Symbol.iterator]();!(c=(p=f.next()).done);c=!0)v=p.value,r.genre_ids.includes(v.id)&&i.push(v.name);e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),u=!0,l=e.t0;case 17:e.prev=17,e.prev=18,c||null==f.return||f.return();case 20:if(e.prev=20,!u){e.next=23;break}throw l;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.abrupt("return",i);case 26:case"end":return e.stop()}}),t,null,[[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=e(i)(e(o).mark((function t(r){var n,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.map((function(e){return b({genre_ids:e.genre_ids})})),e.next=3,Promise.all(n);case 3:return a=e.sent,r[Math.floor(Math.random()*r.length)],e.abrupt("return",r.slice(0,3).map((function(e,t){var r=e.original_title,n=e.poster_path,i=e.release_date,s=e.id,o=a[t];return"<li class='cards-list-item"(c(),s,p,n,r,r,o.join(", "),i.slice(0,4))})).join(""));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(function(){return g.apply(this,arguments)})().then((u=e(i)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,m(r.results);case 3:e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1);case 5:case"end":return e.stop()}}),t)}))),function(e){return u.apply(this,arguments)})).catch((function(e){return console.log(e)}));var y=document.querySelectorAll(".rating__item");Array.prototype.slice.call(y).forEach((function(e){return e.addEventListener("click",(function(){return e.parentNode.dataset.totalValue=e.dataset.itemValue}))})),a("5xtVg"),a("eYP6B"),a("7hKzD")}();
//# sourceMappingURL=index.67cb5a29.js.map
