$(document).ready(function() {

// button

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
const MENULINK = document.querySelectorAll('.menu-list__item');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

for (let i = 0; i < MENULINK.length; i++) {
  MENULINK[i].addEventListener('click', () => {
    menuBtn.classList.remove('active');
	  menu.classList.remove('active');
  })
}


// header

const HEADER = document.querySelector('.header');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    HEADER.style.background = ' #f8f1ea4f';
  } else {
    HEADER.style.background = '#F8F1EA';
  }
}

// top button

const UPBTN = document.querySelector('.btn-up');
UPBTN.addEventListener('click', () => {
  document.body.scrollTo = 0;
  document.documentElement.scrollTop = 0;
})

// alider main

$('.slider').slick({
  arrows:false,
  dots:true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  autoplay: true,
  fade: true,
  cssEase: 'linear'
})

// SLIDER Guitars

  $('.guitars').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
        slidesToShow: 3,
        centerMode: false, 
        dots: false,
        arrows: true,
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
  slidesToShow: 8,
  adaptiveHeight: true,
  arrows: true,
  centerMode: false,
  autoplay: true,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
  responsive: [
    {
      breakpoint: 1170,
      settings: {
      slidesToShow: 6, 
      dots: false,
      arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 1,
      dots: true,
      arrows: false,
      }
    }
   ]
});


});
