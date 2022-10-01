document.addEventListener('DOMContentLoaded', () => {

/// BUTTON

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


/// SLIDER

$(document).ready(function(){
  $('.guitars').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });


})


});