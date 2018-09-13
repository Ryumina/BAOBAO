
/*menu_bar*/
$(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	});
});

$(function(){
	$(".bottom_btn").find("li").eq(0).click(function(){
		$("#main_slide").animate().stop();
		$("#main_slide").animate({"left":"0px"},1000,"easeInOutQuad");
	});

	$(".bottom_btn").find("li").eq(1).click(function(){
		$("#main_slide").animate().stop();
		$("#main_slide").animate({"left":"-1320px"},1000,"easeInOutQuad");
	});
});