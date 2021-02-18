'use strict';

let accordionButtons = document.querySelectorAll('[id^=accordion-button-]');
let accordionSections = document.querySelectorAll('[id^=accordion-section-]');

accordionButtons.forEach(function (item, index) {
    item.setAttribute('aria-controls', accordionSections[index].id);
    item.setAttribute('aria-expanded', 'false');
    accordionSections[index].setAttribute('aria-labelledby', item.id);
    accordionSections[index].setAttribute('tabindex', '-1');
    item.addEventListener('click', function () {
        console.log(item, accordionSections[index]);
        accordionSections[index].classList.toggle('active');
        if (item.getAttribute('aria-expanded') === 'false') {
            item.setAttribute('aria-expanded', 'true');
            accordionSections[index].focus();
        } else {
            item.setAttribute('aria-expanded', 'false');
            accordionSections[index].blur();
        }
    });
});
