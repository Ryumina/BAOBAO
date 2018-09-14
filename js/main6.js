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

		speed : 1000 /* 이미지가 슬라이딩시 걸리는 시간 */,

		infinite: true,

		autoplaySpeed: 4000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,

		arrows: true,

		slidesToShow: 1,

		slidesToScroll: 1,

		fade: false

	});

});
