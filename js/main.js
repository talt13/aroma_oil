$(function(){
  $('.benefits__slider').slick({
      prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="img/arrow__prev.svg" alt=""></button>',
      nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="img/arrow__next.svg" alt=""></button>',
      autoplay: true,
      autoplaySpeen: 3000,
      fade: true
  });

  $('.oil__slider').slick({
    prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="img/arrow__prev.svg" alt=""></button>',
    nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="img/arrow__next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeen: 3000,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows:false
        }
      },
    ]
});

$(".menu, .oil__body").on("click","a", function (event) {
      event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
});