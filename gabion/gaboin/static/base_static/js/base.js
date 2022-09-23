'use strict'

"Переключатель языка"
let optionContainerEls = document.querySelectorAll('.option_container');
document.querySelector('.select_box').addEventListener('click', event => {
    optionContainerEls.forEach(el => {
        el.classList.toggle('select_box_active');
    })
})

"Кнопка заказать звонок"
let bodyEl = document.querySelector('body');
let requestCallEls = document.querySelectorAll('.request_call > button');
let requestCallModal = document.querySelector('.request_call_modal');
requestCallEls.forEach(el => {
    el.addEventListener('click', () => {
        requestCallModal.classList.add('request_call_modal_active');
        bodyEl.style.cssText = 'overflow: hidden;';
    })
})
let modalCloseBtnEl = document.querySelector('.modal > .modal_close_btn');
modalCloseBtnEl.addEventListener('click', Event => {
    requestCallModal.classList.remove('request_call_modal_active');
    bodyEl.style.cssText = 'overflow: visible;';
})

"Меню бургер"
let menuBtnEl = document.querySelector('header > .menu_btn');
let menuEl = document.querySelector('header > .menu');
let menuCloseBtnEl = document.querySelector('header > .menu_close_btn');
menuBtnEl.addEventListener('click', ()=> {
    menuEl.classList.add('active_menu');
    menuCloseBtnEl.classList.add('menu_close_btn_active');
})
menuCloseBtnEl.addEventListener('click', ()=> {
    menuEl.classList.remove('active_menu');
    menuCloseBtnEl.classList.remove('menu_close_btn_active');
})



