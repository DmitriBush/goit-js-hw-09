const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.disabled=!0;let a=0;e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,d.style.background=o(),console.log(d.style.backgroundColor),a=setInterval((()=>{d.style.background=o()}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.5cf6bea2.js.map
