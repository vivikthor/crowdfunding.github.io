'use strict';


let mainNav = document.querySelector("#navbar");
let mainNavLinks = document.querySelectorAll("#navbar ul li a");
let mainSections = document.querySelectorAll("main section");


window.addEventListener("scroll", function () {

  let fromTop = window.scrollY;
  
  mainNavLinks.forEach(function (link) {
    let section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop <= fromTop &&
      (section.offsetTop + section.offsetHeight) > fromTop
    ) {

      link.classList.add('current', 'visible');
    } else {
      link.classList.remove('current', 'visible');
    }
  });
});



mainNav.onmouseover = function (){
  mainNav.classList.add("active");
  mainNavLinks.forEach(function (link) {
      link.classList.add('visible');
    });
}

mainNav.onmouseout = function (){
  mainNav.classList.remove("active");
  mainNavLinks.forEach(function (link) {
      link.classList.remove('visible');
    });
}