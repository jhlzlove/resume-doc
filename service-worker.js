if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>c(e,r),t={module:{uri:r},exports:o,require:d};s[r]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-de3660d1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/page.css",revision:"4d9bf47fa294a57ce2aa9ae88bd2a1ac"},{url:"css/style.min.css",revision:"16a4cc20ac2ecce2dfd8bc11dcf43592"},{url:"css/vue-pdf.css",revision:"87a92787efb89f95f9907fa30774f86a"},{url:"index.html",revision:"ea8a1ef28b436491bd45075a746989ed"},{url:"js/common.js",revision:"e842c8537dd317cdeb2228329ea7de1a"},{url:"js/css.escape.js",revision:"9f5b00357b986a9ac3bd618795a0eab6"},{url:"js/smooth-scroll.min.js",revision:"53a7fcc785e987d5ed08302f36de6653"},{url:"zh-cn/index.html",revision:"f6a6f1ea1ce95e18f94189ec1a5c96f3"}],{}),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
