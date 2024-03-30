let desktopNav = document.querySelector("#nav_desktop");
let mobileNav = document.querySelector("#nav_mobile");
let navblock = document.querySelector(".navblock");
let head = document.querySelector(".header");
let menuIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-xmark");
let element = document.querySelectorAll("#reduceWidth");


menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    navblock.style.right = "0";
})


closeIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";
    navblock.style.right = "-2400px";
})

// console.log(desktopNav);
// console.log(window.innerWidth + "X" + window.innerHeight);
if(window.screen.width < 650){
    desktopNav.style.display = "none";
    mobileNav.style.display = "flex";
    navblock.style.right = "-2400px";
    menuIcon.style.display = "block";
    // head.style.height = "40px";
    console.log("pagla");
}
else if(window.screen.width < 1000){
    desktopNav.style.display = "flex";
    mobileNav.style.display = "none";
    element[0].style.fontSize = "20px";
    element[1].style.fontSize = "20px";
    element[2].style.fontSize = "20px";
    element[3].style.fontSize = "20px";
}
else{
    desktopNav.style.display = "flex";
    mobileNav.style.display = "none";
    element[0].style.fontSize = "25px";
    element[1].style.fontSize = "25px";
    element[2].style.fontSize = "25px";
    element[3].style.fontSize = "25px";
}


window.addEventListener('resize', () => {
    console.log("changing");
    // console.log(window.screen.width);
    // console.log(window.screen.height);
    console.log(element);
    if(window.screen.width < 650){
        desktopNav.style.display = "none";
        menuIcon.style.display = "block";
        mobileNav.style.display = "flex";
        navblock.style.right = "-2400px";
    // head.style.height = "40px";
    console.log("pagla");
    }
    else if(window.screen.width < 1000){
        
        desktopNav.style.display = "flex";
        mobileNav.style.display = "none";
        element[0].style.fontSize = "20px";
        element[1].style.fontSize = "20px";
        element[2].style.fontSize = "20px";
        element[3].style.fontSize = "20px";
    }
    else{
        desktopNav.style.display = "flex";
        mobileNav.style.display = "none";
        element[0].style.fontSize = "25px";
        element[1].style.fontSize = "25px";
        element[2].style.fontSize = "25px";
        element[3].style.fontSize = "25px";
    }
})