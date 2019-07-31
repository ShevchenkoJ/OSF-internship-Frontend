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
				items:4,
			}
		}
	});
	
	$('.mobile-gallery-thumbnails').owlCarousel({
        items: 3,
        dots:true,
        nav:false,
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
};