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

//페이지 로드될 때 이미지 fade효과
$(document).ready(function(){
	$('.top_message_image_box').each(function(i){
		$(this).animate({"opacity":"1","top":"40%"},2000,"easeOutCubic");
	})
});

//scroll down → article fade in
$(window).on("load",function() {
  $(window).scroll(function() {

    var windowBottom = $(this).scrollTop() + $(this).innerHeight()*2;

    $(".top_message_text_box").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});





