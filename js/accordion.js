'use strict';

let accordionButtons = document.querySelectorAll('[id^=accordion-button-]');
let accordionSections = document.querySelectorAll('[id^=accordion-section-]');
let accordionButtonDeco = document.querySelectorAll('.btn.read .deco span:nth-of-type(2)');


let MobNavLink = document.querySelectorAll("#app-bar__menu li a");


accordionButtons.forEach(function (item, index) {
    item.setAttribute('aria-controls', accordionSections[index].id);
    item.setAttribute('aria-expanded', 'false');
    accordionSections[index].setAttribute('aria-labelledby', item.id);
    accordionSections[index].setAttribute('tabindex', '-1');
    item.addEventListener('click', function () {
        accordionSections[index].classList.toggle('active');
        accordionButtonDeco[index].classList.toggle('vertical');
        if (item.getAttribute('aria-expanded') === 'false') {
            item.setAttribute('aria-expanded', 'true');
            accordionSections[index].focus();
        } else {
            item.setAttribute('aria-expanded', 'false');
            accordionSections[index].blur();
        }
    });
});


// BUDGET ACTIVATION FROM NAV //
mainNavLinks[4].onclick = function(){
    accordionSections[3].classList.add('active');
    accordionButtonDeco[3].classList.remove('vertical');
    if (accordionButtons[3].getAttribute('aria-expanded') === 'false') {
        accordionButtons[3].setAttribute('aria-expanded', 'true');
        accordionSections[3].focus();
    } else {
        accordionButtons[3].setAttribute('aria-expanded', 'false');
        accordionSections[3].blur();
    }
  }

  // COMMITMENT ACTIVATION FROM NAV //
mainNavLinks[5].onclick = function(){
    accordionSections[4].classList.add('active');
    accordionButtonDeco[4].classList.remove('vertical');
    if (accordionButtons[4].getAttribute('aria-expanded') === 'false') {
        accordionButtons[4].setAttribute('aria-expanded', 'true');
        accordionSections[4].focus();
    } else {
        accordionButtons[4].setAttribute('aria-expanded', 'false');
        accordionSections[4].blur();
    }
  }

  // GOALS ACTIVATION FROM NAV //
mainNavLinks[6].onclick = function(){
    accordionSections[5].classList.add('active');
    accordionButtonDeco[5].classList.remove('vertical');
    if (accordionButtons[5].getAttribute('aria-expanded') === 'false') {
        accordionButtons[5].setAttribute('aria-expanded', 'true');
        accordionSections[5].focus();
    } else {
        accordionButtons[5].setAttribute('aria-expanded', 'false');
        accordionSections[5].blur();
    }
  }

  // ACTIVATIONS FROM MOBILE //

  

  // BUDGET ACTIVATION FROM NAV //
  MobNavLink[4].onclick = function(){
    accordionSections[3].classList.add('active');
    accordionButtonDeco[3].classList.remove('vertical');
    if (accordionButtons[3].getAttribute('aria-expanded') === 'false') {
        accordionButtons[3].setAttribute('aria-expanded', 'true');
        accordionSections[3].focus();
    } else {
        accordionButtons[3].setAttribute('aria-expanded', 'false');
        accordionSections[3].blur();
    }
  }

  // COMMITMENT ACTIVATION FROM NAV //
MobNavLink[5].onclick = function(){
    accordionSections[4].classList.add('active');
    accordionButtonDeco[4].classList.remove('vertical');
    if (accordionButtons[4].getAttribute('aria-expanded') === 'false') {
        accordionButtons[4].setAttribute('aria-expanded', 'true');
        accordionSections[4].focus();
    } else {
        accordionButtons[4].setAttribute('aria-expanded', 'false');
        accordionSections[4].blur();
    }
  }

  // GOALS ACTIVATION FROM NAV //
MobNavLink[6].onclick = function(){
    accordionSections[5].classList.add('active');
    accordionButtonDeco[5].classList.remove('vertical');
    if (accordionButtons[5].getAttribute('aria-expanded') === 'false') {
        accordionButtons[5].setAttribute('aria-expanded', 'true');
        accordionSections[5].focus();
    } else {
        accordionButtons[5].setAttribute('aria-expanded', 'false');
        accordionSections[5].blur();
    }
  }