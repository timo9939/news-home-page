let mobile_nav=document.getElementById("mobile-menu");
const menuLoco= document.querySelector(".mobile-nav");
let closeLogo=document.querySelector("#close-logo")


mobile_nav.style.display="none";
console.log("js working")


function displayMenu(){
console.log("function called")
mobile_nav.style.display="flex";
menuLoco.style.display="none"
}

function closeMenu(){
    console.log("menu closed")
    mobile_nav.style.display="none"
    menuLoco.style.display="flex"
}