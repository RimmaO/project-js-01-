var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequiref9fd;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequiref9fd=i),i("bUb57"),i("rtSae"),i("eEHR3");const a=document.querySelector(".js-list");let s=1;new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(s+=1,serviceMovie(s).then((e=>{a.insertAdjacentHTML("beforeend",o(e.results)),e.total_pages<=e.page&&t.unobserve(guard)})))}))}),{root:null,rootMargin:"400px",threshold:0});async function o(e){const t=e.map((({genre_ids:e})=>async function(e){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=b90b64a7e05f9e36894001e36eb3b3c7");let n=[];const i=(await t.json()).genres;for(const t of i)e.genre_ids.includes(t.id)&&n.push(t.name);return n}({genre_ids:e}))),n=await Promise.all(t);return e.slice(0,3).map((({original_title:e,poster_path:t,vote_average:i,id:a,release_date:s},o)=>`<li class='cards-list-item' data-id='${a}'> \n          <img class='cards__list-img' src="https://image.tmdb.org/t/p/w300${t}" alt="${e}" loading="lazy" \n          width="395px" \n          height="354px"> \n\n          <div class='weekly-trends__overlay'></div> \n         <div class='cards__bloc-stars'> \n            <h2 class='cards__list-title'>${e}</h2> \n            <div class='cards__list-text'>${n[o].join(", ")} | ${s.slice(0,4)}</div>  \n          </div> \n        </li>`)).join("")}(async function(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b90b64a7e05f9e36894001e36eb3b3c7&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})().then((async e=>{a.insertAdjacentHTML("beforeend",await o(e.results))})).catch((e=>console.log(e))),i("bTcpz");var r=i("2shzp"),l=i("9fyS7");const c=document.querySelector(".upcoming-section-title");let d,p;function u(){const e=JSON.parse(localStorage.getItem("librariesKey"))||[],t=d.id;if(function(e){return(JSON.parse(localStorage.getItem("librariesKey"))||[]).some((t=>t.id===e))}(t)){const n=e.findIndex((e=>e.id===t));e.splice(n,1),localStorage.setItem("librariesKey",JSON.stringify(e)),p.textContent="Add to my library"}else e.push(d),localStorage.setItem("librariesKey",JSON.stringify(e)),p.textContent="Remove from my library"}(async function(){const e=(await r.default.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US",{params:{api_key:l.KEY}})).data,t=Math.floor(Math.random()*e.results.length);return e.results[t]})().then((e=>{d=e,async function(e){const t=(await async function(e){const t=await r.default.get("https://api.themoviedb.org/3/genre/movie/list?language=en",{params:{api_key:l.KEY}});let n=[];const i=t.data.genres;for(const t of i)e.genre_ids.includes(t.id)&&n.push(t.name);return n}(e).then((e=>e))).map(((e,t)=>0===t?e.charAt(0).toUpperCase()+e.slice(1):e.toLowerCase())).join(", "),n=e.release_date.split("-"),i=`${n[2]}.${n[1]}.${n[0]}`,a=`<div class="upcoming-desktop-container"><img \n  class="upcoming-section-img" \n  src="${function(e){const t="https://image.tmdb.org/t/p/";return window.innerWidth>=768?`${t}w1280/${e.backdrop_path}`:`${t}w500/${e.poster_path}`}(e)}" \n  alt="${e.title}" \n/> \n<div class="upcoming-desktop-flex"> \n  <h3 class="upcoming-movie-title">${e.title}</h3> \n  <div class="upcoming-flex-container"> \n    <div class="upcoming-tablet-flex"> \n      <div class="upcoming-data-flex"> \n        <p class="info-key">Release date</p> \n        <p class="info-value info-value-date">${i}</p> \n      </div> \n      <div class="upcoming-data-flex"> \n        <p class="info-key">Vote / Votes</p> \n        <p class="info-value"> \n          <span class="info-value-vote"> ${e.vote_average}</span> / \n          <span class="info-value-vote">${e.vote_count}</span> \n        </p> \n      </div> \n    </div> \n    <div class="upcoming-tablet-flex"> \n      <div class="upcoming-data-flex"> \n        <p class="info-key">Popularity</p> \n        <p class="info-value">${e.popularity.toFixed(1)}</p> \n      </div> \n      <div class="upcoming-data-flex"> \n        <p class="info-key">Genre</p> \n        <p class="info-value">${t}</p> \n      </div> \n    </div> \n  </div> \n \n  <h4 class="about-title">About</h4> \n  <p class="about-description">${e.overview}</p> \n  <button class="library-button upcoming-button">Add to my library</button> \n</div></div> \n        `;c.insertAdjacentHTML("afterend",a),p=document.querySelector(".library-button"),p.addEventListener("click",u)}(e)})).catch((()=>{if(!d)return function(){const e='<div class="error-message"><p>Oops...</p><p>We are very sorry!</p><p>There are no upcoming movies at the moment.</p></div> ';c.insertAdjacentHTML("afterend",e)}();!function(){const e='<div class="error-message"><p>Oops...</p><p>We are very sorry!</p><p>Something went wrong.</p></div>';c.insertAdjacentHTML("afterend",e)}()})),i("epHO8");
//# sourceMappingURL=index.db245ea6.js.map
