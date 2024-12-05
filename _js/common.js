$(function () {
  // Header
  $(".header_gnb ul.gnb").mouseover(function () {
    $('.header').addClass('white')
		$(".header_sidebar").stop().slideDown("fast");
	});
  
  $(".header_sidebar").mouseleave(function () {
    $(".header").removeClass("white");
		$(".header_sidebar").stop().slideUp("fast");
  });
  
  let lastScrollTop = 0;
	function scrollHeader() {
		var _header = $(".header");
		var currentPos = $(window).scrollTop();
		var moveDistance = currentPos - lastScrollTop;
		var scrollRange = -10;
		if (moveDistance > 0) {
			_header.addClass("hide");
		} else {
			if (moveDistance < scrollRange) {
				_header.removeClass("hide");
			}
		}
		lastScrollTop = currentPos;
  }
  
  $(window).scroll(function () {
		scrollHeader();
	});
})

