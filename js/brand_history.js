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

/*nav(modal)*/
$(function () {

  var isNav = false
  $(".menu_icon").on("click", function () {
    if (isNav) {
	  $("#header_wrap").addClass("back");
      $("#nav_wrap").fadeOut(300);
	  $("#nav").animate().stop();
      $("#nav").animate({"right": "-490px"}, 1000, "easeOutCubic");
    } else {
	  $("#header_wrap").removeClass("back");
      $("#nav_wrap").fadeIn(300);
	  $("#nav").animate().stop();
      $("#nav").animate({"right": "0px"}, 1000, "easeOutCubic");
    }
    isNav = !isNav
  });

});

//페이지 로드될 때 이미지 fadeIn
$(document).ready(function(){
	$('.corporate_history_title').each(function(i){
		$(this).animate({"opacity":"1","top":"0px"},1000,"easeOutCubic");
	})
});

//scroll down → article fade in
$(window).on("load",function() {
  $(window).scroll(function() {

    var windowBottom = $(this).scrollTop() + $(this).innerHeight()*2;

    $(".hideme").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});

//top 버튼 클릭시 맨 위로 이동
$(function(){
	$('.top_btn').click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0},1000,"easeOutCubic");
	});
});




