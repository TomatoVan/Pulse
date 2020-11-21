$(document).ready(function(){
    $('.carousel__inner').slick(
        /* {
         infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        fade: true,
        cssEase: 'linear'
      } */
      {
        speed: 900,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>', /* пишем путь не выходя из Js,т.к. уже находимся в самой src */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint:992, /* адаптация для планшетов */
                settings: {
                    dots: true,
                    arrows:false
                }
            }
        ]
      }
      );
});