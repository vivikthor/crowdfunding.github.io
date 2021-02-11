'use strict';

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

      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
});