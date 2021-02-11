
window.addEventListener('DOMContentLoaded', function() {
/*=========================  Базовые настройки ================================================*/
	let input = document.getElementsByTagName('input');
	console.log(input);
	input[0].addEventListener('mouseLink', function() {
		input.style.border = "none";
		input.style.fontSize = 10 + "px";
	} );							
/*=========================  Modal ================================================*/
	let btnCallBack = document.querySelector('.back_call'),
		btnOrder = document.querySelector('.order_btn'),
		popup = document.querySelector('.popup'),
		btnClose = document.querySelector('.popup-close');

	btnCallBack.addEventListener('click', function() {
		popup.style.display = "block";
	})
	btnOrder.addEventListener('click', function() {
		popup.style.display = "block";
	})
	btnClose.addEventListener('click', function() {
		popup.style.display = "none";
	})
} );