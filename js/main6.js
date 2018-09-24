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
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['main_page_1_full', 'main_page_2_full', 'main_page_3_full', 'main_page_4_full', 'main_page_5_full']
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
		if(b==1){
			a=-2; 
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
	$.fn.fullpage.moveTo(id)
	checkRightBtn();
    //var scrollTop = id === '#' ? 0 : $(id).offset().top
	/* 위를 풀어서 쓴 것 var scrollTop
	if (id === '#') {
		scrollTop = 0
	} else {
		scrollTop = $(id).offset().top
	}*/
    //$("html,body").animate({
      //scrollTop: scrollTop
    //}, 700, "swing")
  });

/*logo 클릭시 맨 위로 이동*/
	$('#logo, .footer_box_logo').click(function(e){
		e.preventDefault()
		$.fn.fullpage.moveTo('main_page_1_full')
		$(".right_btn").find("a").removeClass("wheel");
		$(".right_btn").find("a").eq(0).addClass("wheel");
		// var logo = $(this).attr('href')
		// var scrollTop = logo === '#' ? 0 : $("#main_slide_wrap").offset().top
		// $("html").animate({scrollTop:scrollTop},700,"swing");
	});

});

$(function(){
	/*스크롤시 우측 고정버튼 색상 변화*/
	$(window).on("mousewheel",function(){
		checkRightBtn();
	});
});

	function checkRightBtn() {
		var bodyClass = $("body").attr('class');
		$(".right_btn").find("a").removeClass("wheel");
		switch(bodyClass) {
			case "fp-viewing-main_page_1_full": 
				$(".right_btn").find("a").eq(0).addClass("wheel");
				break;
			case "fp-viewing-main_page_2_full": 
				$(".right_btn").find("a").eq(1).addClass("wheel");
				break;
			case "fp-viewing-main_page_3_full": 
				$(".right_btn").find("a").eq(2).addClass("wheel");
				break;
			case "fp-viewing-main_page_4_full": 
				$(".right_btn").find("a").eq(3).addClass("wheel");
		}
	}
