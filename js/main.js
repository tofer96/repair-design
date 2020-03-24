
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    
    });

});

$(document).ready(function(){
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
    
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 30 + bullets.width() + 15);
    bullets.css('left', prev.width() +22);
    
    new WOW().init();
    //Валидация формы

    $('.modal__form').validate ({
        rules: {
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: "required",
            userEmail: {
              required: true, 
              email: true 
            }
          },
            errorElement: "em",
            errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв",
                    rangelength: "Имя не длиннее 15 символов"
            },  
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите Ваш E-mail",
              email: "введите в формате: name@domain.com"
            }
          },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('форма отправлена, мы свяжемся с вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        } 
    });
    $('.footer__form').validate ({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: "required",
            userQuestion: {
              required: true,
            }
          },
          errorElement: "em",
          errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух символов",
                    rangelength: "Имя не длиннее 15 символов"
                },  
                userPhone: "Телефон обязателен",

                userQuestion: {
                    required: "Задайте вопрос",
                }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('форма отправлена, мы свяжемся с вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        } 
    });
    $('.control__form').validate ({
        // errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: "required",
          },
          errorElement: "em",
            errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв",
                    rangelength: "Имя не длиннее 15 символов"
                },  
                userPhone: "Телефон обязателен",
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    alert('форма отправлена, мы свяжемся с вами через 10 минут');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        } 
    });
    
    // Маска для телефона 
    $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
    // Яндекс карты
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
            
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/myicon.jpg',
                // Размеры метки.
                iconImageSize: [30, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
        myMap.behaviors.disable('scrollZoom');
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
});



