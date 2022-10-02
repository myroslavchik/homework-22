document.addEventListener('DOMContentLoaded', () => {

/// BUTTON

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

/// SLIDER main 

$('.slider').slick({
  arrows:false,
  dots:true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  autoplay: true,

})

/// SLIDER Guitars

$(document).ready(function(){
  $('.guitars').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

/// SLIDER Companies

$('.company').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  centerMode: true,
  autoplay: true
});


})

});