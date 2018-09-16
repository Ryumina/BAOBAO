/*menu_bar*/
$(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	});
});

$(document).ready(function () {

	$('.slick-items').slick({

		autoplay : true,

		dots: true,

		speed : 1500 /* 이미지가 슬라이딩시 걸리는 시간 */,

		infinite: true,

		autoplaySpeed: 4000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,

		arrows: true,

		slidesToShow: 1,

		slidesToScroll: 1,

		fade: false
	});
});

$(function(){

	$("#menu_bar").on("click",function(){
		$("#nav_wrap").fadeIn(300);
		$("#nav").animate({"right":"0px"},1000,"easeOutCubic");
	});




	var a=0;

	$(".main_page_3_right_btn").find("li").eq(0).click(function(){
		a--;
		a=a%3;
		if(a==-1){
			b==2;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-200vw"},1000,"swing")
		}else if(a==-2){
			b==1;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-100vw"},1000,"swing")
		}else{
			b==0;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"0px"},1000,"swing")
		};
	});

	var b=0;

	$(".main_page_3_right_btn").find("li").eq(1).click(function(){
		b++;
		b=b%3;
		if(b==1){
			a==-2;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-100vw"},1000,"swing");
		}else if(b==2){
			a==-1;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-200vw"},1000,"swing")
		}else{
			a==0;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"0px"},1000,"swing");
		};
	});

  $('.right_btn a').click(function () {
    var id = $(this).attr('href')
    var scrollTop = id === '#' ? 0 : $(id).offset().top
    $("html").animate({
      scrollTop: scrollTop
    }, 500, "swing")
  });













});