var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequiref9fd;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequiref9fd=n),n("bUb57"),n("rtSae"),n("eEHR3");const a=document.querySelector(".js-list");let i=1;new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(i+=1,serviceMovie(i).then((e=>{a.insertAdjacentHTML("beforeend",s(e.results)),e.total_pages<=e.page&&t.unobserve(guard)})))}))}),{root:null,rootMargin:"400px",threshold:0});async function s(e){const t=e.map((({genre_ids:e})=>async function(e){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=b90b64a7e05f9e36894001e36eb3b3c7");let r=[];const n=(await t.json()).genres;for(const t of n)e.genre_ids.includes(t.id)&&r.push(t.name);return r}({genre_ids:e}))),r=await Promise.all(t);e[Math.floor(Math.random()*e.length)];return e.slice(0,3).map((({original_title:e,poster_path:t,release_date:n,id:a},i)=>`<li class='cards-list-item``data-id=${a}'> 
          <img class='cards__list-img' src="${"https://image.tmdb.org/t/p/w300"}${t}" alt="${e}"> 
          <div class='weekly-trends__overlay'></div> 
          <div class='cards__bloc-stars'> 
            <h2 class='cards__list-title'>${e}</h2> 
            <div class='cards__list-text'>${r[i].join(", ")} | ${n.slice(0,4)}</div>  
          </div> 
        </li>`)).join("")}(async function(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b90b64a7e05f9e36894001e36eb3b3c7&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})().then((async e=>{a.insertAdjacentHTML("beforeend",await s(e.results))})).catch((e=>console.log(e)));const o=document.querySelectorAll(".rating__item");Array.prototype.slice.call(o).forEach((e=>e.addEventListener("click",(()=>e.parentNode.dataset.totalValue=e.dataset.itemValue)))),n("bTcpz"),n("br6gq"),n("epHO8");
//# sourceMappingURL=index.5567c8e8.js.map
