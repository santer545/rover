$(document).ready(function() {
    gumburgerButtonAnimate();


    scrollDown();


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
}

function scrollDown() {
    $('.js-scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 300, 'linear');
    });
}