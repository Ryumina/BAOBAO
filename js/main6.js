/*menu_bar*/
$(function () {
	var c=0;

	$('.menu_icon').on('click', function() {
		c++;
		c=c%2;

		/*nav open*/
		if(c==1){
			$('.menu-bar').css('background', '#fff');
		/*nav close*/
		}else{
			$('.menu-bar').css('background', '#000');
		};
	});
});

/*main_page_1 slide*/
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

/*nav(midal)*/
$(function () {

  var isNav = false
  $(".menu_icon").on("click", function () {
    if (isNav) {
      $("#nav_wrap").fadeOut(300);
	  $("#nav").animate().stop();
      $("#nav").animate({"right": "-490px"}, 1000, "easeOutCubic");
    } else {
      $("#nav_wrap").fadeIn(300);
	  $("#nav").animate().stop();
      $("#nav").animate({"right": "0px"}, 1000, "easeOutCubic");
    }
    isNav = !isNav
  });
});

/* fullpage */
$(function() {
	$('#main_wrap').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
	});
})

/*main_page_3 slide*/
$(function () {
	
	var a=0;

	$(".main_page_3_right_btn").find("li").eq(0).click(function(){
		a--;
		a=a%3;

		if(a==-1){
			b=2;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-200vw"},1000,"swing")
		}else if(a==-2){
			b=1;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-100vw"},1000,"swing")
		}else{
			b=0;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"0px"},1000,"swing")
		};
	});

	var b=0;

	$(".main_page_3_right_btn").find("li").eq(1).click(function(){
		b++;
		b=b%3;
		if(b==1){ //b는 보이는 것 그대로 1이다.
			a=-2; //a에 -2라는 값을 대입한다.
			//a의 값이 2인 상태에서 a==='2' 를 하게되면 flase 임 왜냐면 a는 숫자 2와 문자열 2 라는 변수의 type까지
			// 비교해서 더 정확한 결과를 받을 수 있음. 
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-100vw"},1000,"swing");
		}else if(b==2){
			a=-1;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"-200vw"},1000,"swing")
		}else{
			a=0;
			$("#main_page_3_slide").animate().stop();
			$("#main_page_3_slide").animate({"left":"0px"},1000,"swing");
		};
	});
});

/*right_btn*/
$(function(){
	$('.right_btn a').click(function (e) {
    e.preventDefault()
    var id = $(this).attr('href')
    // var scrollTop = id === '#' ? 0 : $(id).offset().top
	var scrollTop
	if (id === '#') {
		scrollTop = 0
	} else {
		scrollTop = $(id).offset().top
	}
    $("html").animate({
      scrollTop: scrollTop
    }, 700, "swing")
  });

/*logo 클릭시 맨 위로 이동*/
	$('#logo, .footer_box_logo').click(function(e){
		e.preventDefault()
		var logo = $(this).attr('href')
		var scrollTop = logo === '#' ? 0 : $("#main_slide_wrap").offset().top
			$("html").animate({scrollTop:scrollTop},700,"swing");
	});

});

$(function(){
	$(window).on("mousewheel",function(){
				var main_1=$("html").hasClass("wheel_1"); //hasClass의 대답은 true / flase 2가지임
				var main_2=$("html").hasClass("wheel_2");
				var main_3=$("html").hasClass("wheel_3");
				var main_4=$("html").hasClass("wheel_4");
				var main_5=$("html").hasClass("wheel_5");
				
				if(main_1==true){ //만약 a라는 클래스를 가지고 있다면~
					$("#btn").find("li").removeClass("click"); 
					$("#btn").find("li").eq(0).addClass("click");
				}else if(b==true){ //만약 b라는 클래스를 가지고 있다면~
					$("#btn").find("li").removeClass("click");
					$("#btn").find("li").eq(1).addClass("click");
				}else if(c==true){ //만약 c라는 클래스를 가지고 있다면~
					$("#btn").find("li").removeClass("click");
					$("#btn").find("li").eq(2).addClass("click");
				}
			});
});