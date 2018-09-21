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


	/*slick slider*/
	$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});

//페이지 로드될 때 이미지 fadeIn
$(document).ready(function(){
	$('.fade_img').hide().fadeIn(1300);
});


