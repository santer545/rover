$(document).ready(function() {

    gumburgerButtonAnimate();

    scrollDown();

    maskedInput();

    backToTop();

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