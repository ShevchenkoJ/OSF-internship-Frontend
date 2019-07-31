function owlCarouselAdjustment() {

var currentPage = 0;

    $('.carousel_banner').owlCarousel({
        items: 1,
        dots:true,
        nav:false,
    });
     
    $('.featured-products_row').owlCarousel({
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			768:{
				items:3,
			},
			1200:{
				items:4,
			}
		}
    });

	$('.nav-symbol_prev').click(function() {
		currentPage-=1;
		console.log(currentPage,"currentPage");
		$('.featured-products_row').trigger('to.owl.carousel',[currentPage, 300]);
	})

	$('.nav-symbol_next').click(function() {
		currentPage+=1;
		console.log(currentPage,"currentPage");
		$('.featured-products_row').trigger('to.owl.carousel',[currentPage, 300]);
	})
	
	$('.nav-symbol_prev').hover(function(){
		$(this).toggleClass('owl-prev');
	});
	$('.nav-symbol_next').hover(function(){
		$(this).addClass('owl-next');
	});

	function carouselMobileInit() {
		$('.home_container .popular-items_row').addClass('owl-theme');
		$('.home_container .popular-items_row').addClass('owl-carousel');
		$('.home_container .popular-items_row').owlCarousel({
			items: 1,
			dots:true,
			nav:false,
		});
	}

	$(window).resize(function() {
		if ($(window).width() <= 767) {
			carouselMobileInit();
		} else {
			$('.home_container .popular-items_row').owlCarousel('destroy'); 
		}
	})

	if ($(window).width() <= 767) {
		carouselMobileInit();
	}
	
};