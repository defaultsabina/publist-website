const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector(".nav-list");
const li=document.querySelector(".ul-list");
const title=document.querySelector(".title");
const menu=document.querySelector(".menu");


hamburger.addEventListener("click", function(){
    navList.classList.toggle("show-list");
    li.classList.toggle("show-ul");
    title.classList.toggle("add-mt");
    menu.classList.toggle("reduce-menu");
})
