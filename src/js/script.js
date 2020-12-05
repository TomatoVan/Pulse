$(document).ready(function(){
    $('.carousel__inner').slick({
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
      
        speed: 900,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>', /* пишем путь не выходя из Js,т.к. уже находимся в самой src */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint:992, /* адаптация для планшетов */
                settings: {
                    dots: true,
                    arrows:false,
                    
                    
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click',function(e) {
                e.preventDefault(); /* чтобы на ссылке мы не переходили по новому адресу а выполняли наш скрипт */
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* автоматическое убирание класса актив */
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');/* eq помогает получать элемент по определенному индексу */
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


  // Не оптимизированная версия
   

 //   $('.catalog-item__link').each(function(i) {
   //     $(this).on('click',function(e) {
     //       e.preventDefault(); /* чтобы на ссылке мы не переходили по новому адресу а выполняли наш скрипт */
       //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* автоматическое убирание класса актив */
         //   $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');/* eq помогает получать элемент по определенному индексу */
       // })
    //})

    //$('.catalog-item__back').each(function(i) {
      //  $(this).on('click',function(e) {
        //    e.preventDefault(); /* чтобы на ссылке мы не переходили по новому адресу а выполняли наш скрипт */
          //  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); /* автоматическое убирание класса актив */
            //$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');/* eq помогает получать элемент по определенному индексу */
        //})
    //})


    //MODAL

    $('[data-modal=consultation]').on('click',function(){
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click',function(){
      $('.overlay,#consultation, #thanks, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });
    
    function validateForms(form){
      $(form).validate({
        rules: {
          name:"required",
          phone:"required",
          email: {
            required:true,
            email:true
          }
        },
        messages: {
          name: "Пожалуйства,введите своё имя",
          phone:"Пожалуйства,введите свой номер телефона",
          email: {
            required: "Пожалуйства,введите свою почту",
            email: "Неправильно введён адрес почты"
          }
        }
      });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
});



 
