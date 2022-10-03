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
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
        slidesToShow: 3,
        centerMode: false, 
        dots: true,
        arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        centerMode: false, 
        dots: true,
        arrows: false,
        }
      }
     ]
  });

/// SLIDER Companies

$('.company').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  adaptiveHeight: true,
  arrows: true,
  centerMode: false,
  autoplay: true,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 1,
      speed: 400,
      centerMode: false, 
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      }
    }
   ]
});


})

});