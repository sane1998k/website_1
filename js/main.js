function checkWidthScreen(e){let t=document.querySelector(".header-top-lang"),o=document.querySelector(".header-menu"),d=document.querySelectorAll(".header-bottom__column .header-bottom-menu")[0],n=document.querySelectorAll(".header-bottom__column .header-bottom-menu")[1];e<767?t.classList.contains("done")||(t.classList.add("done"),d.classList.add("done"),n.classList.add("done"),o.appendChild(t),o.appendChild(d),o.appendChild(n)):t.classList.contains("done")&&(d=document.querySelectorAll(".header-menu .header-bottom-menu")[0],n=document.querySelectorAll(".header-menu .header-bottom-menu")[1],t.classList.remove("done"),d.classList.remove("done"),n.classList.remove("done"),document.querySelector(".header-top").prepend(t),document.querySelectorAll(".header-bottom__column")[0].prepend(d),document.querySelectorAll(".header-bottom__column")[2].prepend(n))}function getResult(){checkWidthScreen(window.outerWidth)}window.addEventListener("resize",(function(e){getResult()})),getResult();