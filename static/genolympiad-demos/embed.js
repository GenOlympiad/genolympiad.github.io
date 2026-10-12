(() => {
 const selector='iframe[data-genolympiad-demo]';
 function accept(event){const d=event.data;if(!d||d.type!=='genolympiad-demo-size'||!Number.isFinite(d.height)||d.height<1||d.height>20000)return;for(const f of document.querySelectorAll(selector)){if(f.contentWindow!==event.source)continue;const origin=new URL(f.src,document.baseURI).origin;if(origin!=='null'&&event.origin!==origin)continue;f.style.height=Math.ceil(d.height)+'px';}}
 window.addEventListener('message',accept);
 function request(f){try{const body=f.contentDocument&&f.contentDocument.body;if(body){const h=Math.ceil(body.getBoundingClientRect().height);if(h>1)f.style.height=h+'px';}}catch(_){}try{f.contentWindow.postMessage({type:'genolympiad-demo-measure'},'*');}catch(_){}}
 function init(){for(const f of document.querySelectorAll(selector)){f.setAttribute('scrolling','no');f.addEventListener('load',()=>request(f));let width=0;if(window.ResizeObserver)new ResizeObserver(()=>{const w=f.getBoundingClientRect().width;if(w!==width){width=w;request(f);}}).observe(f);request(f);for(const delay of [100,500,1500])setTimeout(()=>request(f),delay);}window.addEventListener('resize',()=>document.querySelectorAll(selector).forEach(request));}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();