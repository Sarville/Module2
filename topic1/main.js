/* eslint-disable max-len */
'use strict';

document.querySelector('.ads').remove();
document.querySelector('.item_three').after(document.querySelector('.item_four'));
document.querySelector('.item_three').querySelector('.props__list').append(...document.querySelectorAll('.props__item_three'));
document.querySelector('.item_five').querySelector('.props__list').append(...document.querySelectorAll('.props__item_five'));
document.querySelector('.item_two').querySelector('.props__list').append(...document.querySelectorAll('.props__item_two'));
document.querySelector('.item_four').querySelectorAll('.props__item')[2].after(document.querySelector('.item_two').querySelector('.props__item_four'));


