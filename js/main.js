$(document).ready(function(){
	gumburgerButtonAnimate();
});



function gumburgerButtonAnimate() {
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.header-nav').toggleClass('active');
	});
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('.footer-nav').toggleClass('active');
	});
}