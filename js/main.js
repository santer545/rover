$(document).ready(function() {

    gumburgerButtonAnimate();

    scrollDown();

    maskedInput();

    backToTop();

    showDescribe();

});

$(window).resize(function() {
    showDescribe();
});


function gumburgerButtonAnimate() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
        $('.header-nav').toggleClass('active');
    });
    $('#nav-icon2').click(function() {
        $(this).toggleClass('open');
        $('.footer-nav').toggleClass('active');
    });

    $('#nav-icon4').click(function() {
        $('.footer-nav').removeClass('active');
        $('#nav-icon2').removeClass('open');
    });
}

function scrollDown() {
    $('.js-scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 300, 'linear');
    });
}

function maskedInput() {
    //phone 
    $('input[type=tel]').mask("+99(999)999-9999");
}

function backToTop() {


    if ($('.js-to-top').length) {
        var scrollTrigger = 400,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.js-to-top').addClass('show');
                } else {
                    $('.js-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('.js-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}



function showDescribe() {
    if ($(window).width() >= '992') {
        $('.slide-info').addClass('hidden');
        $('[id^="slide-"]').mouseenter(function() {
            $(this).find('.img-transparent').addClass('hidden');
            $(this).find('.img-full').removeClass('hidden');
            var id_element = $(this).attr('id');
            $('[data-id=' + id_element + ']').removeClass('hidden');
        });
        $('[id^="slide-"]').mouseleave(function() {
            $(this).find('.img-transparent').removeClass('hidden');
            $(this).find('.img-full').addClass('hidden');
            $('.slide-info').addClass('hidden');
        });
    } else {
        console.log('!!!');
        $('.section-describe').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="slider-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="slider-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
        });

        $('.plus').click(function() {
            var slideIndex = $(this).index();
            $('.section-describe').slick('slickGoTo', parseInt(slideIndex));
        });

        $('#slide-4').click(function() {
            $('.img-wrapper').css({
                '-webkit-transform': 'translateX(-100px)',
                '-moz-transform': 'translateX(-100px)',
                '-ms-transform': 'translateX(-100px)',
                '-o-transform': 'translateX(-100px)',
                'transform': 'translateX(-100px)'
            });
            
            $(this).find('.img-transparent').addClass('hidden');
            $(this).find('.img-full').removeClass('hidden');
        });
        $('#slide-1').click(function() {
            $('.img-wrapper').css({
                '-webkit-transform': 'translateX(-150px)',
                '-moz-transform': 'translateX(-150px)',
                '-ms-transform': 'translateX(-150px)',
                '-o-transform': 'translateX(-150px)',
                'transform': 'translateX(-150px)'
            });
            
            $(this).find('.img-transparent').addClass('hidden');
            $(this).find('.img-full').removeClass('hidden');
        });
        $('#slide-2').click(function() {
            $('.img-wrapper').css({
                '-webkit-transform': 'translateX(-300px)',
                '-moz-transform': 'translateX(-300px)',
                '-ms-transform': 'translateX(-300px)',
                '-o-transform': 'translateX(-300px)',
                'transform': 'translateX(-300px)'
            });
            
            $(this).find('.img-transparent').addClass('hidden');
            $(this).find('.img-full').removeClass('hidden');
        });
        $('#slide-3').click(function() {
            $('.img-wrapper').css({
                '-webkit-transform': 'translateX(-50px)',
                '-moz-transform': 'translateX(-50px)',
                '-ms-transform': 'translateX(-50px)',
                '-o-transform': 'translateX(-50px)',
                'transform': 'translateX(-50px)'
            });
            
            $(this).find('.img-transparent').addClass('hidden');
            $(this).find('.img-full').removeClass('hidden');
        });
    }
}