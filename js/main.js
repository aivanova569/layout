$(document).ready(function(){

	$('.menu-list .btn').on('click', function(){
		$('.menu-list .btn').removeClass("active");
		$(this).addClass("active");
	});



	$('.slider__inner').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	

		 responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    },
  ]

	});


	$('.news__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	

		 responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
      }
    },
  ]


	});

	$('.btn-menu').click(function(){
		$('.menu-list').slideToggle();
	});

});