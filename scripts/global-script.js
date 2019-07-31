function headerInit(){
	$('.drop-down__hover').hover(function(){
		$('.drop-down_container').toggleClass('drop-down_container__visible');
	});
	$('.drop-down_container').hover(function(){
		$(this).toggleClass('drop-down_container__visible');
	});
	$('.lang_hover').hover(function(){
		$('.drop-down-lang').toggleClass('drop-down-lang__visible');
	});
	$('.drop-down-lang').hover(function(){
		$(this).toggleClass('drop-down-lang__visible');
	});
	$('.currency_hover').hover(function(){
		$('.drop-down-currency').toggleClass('drop-down-currency__visible');
	});
	$('.drop-down-currency').hover(function(){
		$(this).toggleClass('drop-down-currency__visible');
	});
	$('.account-nav__link').hover(function(){
		$(this).find('.account-nav__counter').toggleClass('account-nav__counter_hover');
	});
	
};

function tailsInit(){
	$(document).on('mouseenter', '.popular-item_hover', function(){
		$(this).find('.plus').addClass('plus__visible');
		$(this).find('.like').addClass('like__visible');
	});

	$(document).on('mouseleave', '.popular-item_hover', function(){
		$(this).find('.plus').removeClass('plus__visible');
		$(this).find('.like').removeClass('like__visible');
	});
};

function footerInit(){
	$(document).on('click', '.contact-open-dropdown_button', function(){
		$(this).removeClass('contact-open-dropdown_button');
		$(this).addClass('contact-close-dropdown_button');
		$(this).parent().find('.footer-nav').slideDown();
	});
	
	$(document).on('click', '.contact-close-dropdown_button', function(){
		$(this).removeClass('contact-close-dropdown_button');
		$(this).addClass('contact-open-dropdown_button');
		$(this).parent().find('.footer-nav').slideUp();
	});
	 
	$(document).on('click', '.open-dropdown_button', function(){
		$(this).removeClass('open-dropdown_button');
		$(this).addClass('close-dropdown_button');
		$(this).parent().find('.footer-nav').slideDown();
	});
	
	$(document).on('click', '.close-dropdown_button', function(){
		$(this).removeClass('close-dropdown_button');
		$(this).addClass('open-dropdown_button');
		$(this).parent().find('.footer-nav').slideUp();
 	});
};

function tabsInit() {
	$('.tab_column').click(function() {
		$('.tab-wrapper').removeClass('tab-wrapper_active');
		$(this).find('.tab-wrapper').addClass('tab-wrapper_active');
		$('.tab-text_row').removeClass('tab-text_row_active');
		$($(this).attr('data-content')).addClass('tab-text_row_active');
	});
};

function clpFilterAdjustment(){
	$(document).on('click', '.hide-filter_button', function(){
		$(this).hide();
		$('.show-filter_button').show();
		$('.hide-filter_button').parent().find('.show-hide-filters').hide();
	});
	
	$(document).on('click', '.show-filter_button', function(){
		$(this).hide();
		$('.hide-filter_button').show();
		$('.show-filter_button').parent().find('.show-hide-filters').show();
	});
};

function cookiesInit() {
	if (localStorage.getItem('hide_cookies_popup') != 'true') {
		setTimeout(function(){
			$('.cookies_wrapper').show();
		},10000);
	}

	$('.cookies_wrapper .close_button').click(function(){
		$('.cookies_wrapper').hide();
	})

	$('.accept-cookies_button').click(function(){
		localStorage.setItem('hide_cookies_popup','true');
		$('.cookies_wrapper').hide();
	});
}

function loginInit() {
	$('.hide-pass_icon').click(function(){
		$('.input_field_password').attr('type', 'input');
		$(this).hide();
		$('.show-pass_icon').show();
	})

	$('.show-pass_icon').click(function(){
		$('.input_field_password').attr('type', 'password');
		$(this).hide();
		$('.hide-pass_icon').show();
	})

	$('.login_wrapper_space').click(function(){
		$('.login_wrapper').hide();
	});

	$(document).on('keydown', function(e){
		if (e.key == 'Escape') {
			$('.login_wrapper').hide();
		}
	})

	$('#user').click(function(){
		$('.login_wrapper').show();
	})
}

function addToMinicart() {
	function increaseMinicartCounter() {
		var counter = 0;
		if (localStorage.getItem('minicart')) {
			if (localStorage.getItem('minicart')<20) {
				counter = parseInt(localStorage.getItem('minicart')) + 1;
			} else {
			counter= 20;
			alert('Sorry, you can add to minicart up to 20 items...');
			}
		} else {
			counter = 1;
		}
		localStorage.setItem('minicart', counter);
		return counter;
	};

	function setMinicartCounter() {
		var counter = 0;
		if (localStorage.getItem('minicart')) {
			counter = localStorage.getItem('minicart');
		}
		$('#minicart .account-nav__counter').text(counter);	
	};

	function reduceMinicartCounter() {
	}

	function quantityValidation(field_selector,reg) {
		var str = $(field_selector).val();
		if(!reg.test(str)) {
			$(field_selector).val(str.slice(0, -1));
		}
	}
	setMinicartCounter();

	$('.products-counter_text').on('keyup', function(e){
		quantityValidation('.products-counter_text',/^\d+$/);
	});

	$('.products-counter_text').on('blur', function(e){
		if($('.products-counter_text').val() == ''){
			$('.products-counter_text').val(1);
		}
	});

	$('.addToMinicart').click(function(){
		$('#minicart .account-nav__counter').text(increaseMinicartCounter());
	});

	$('.counter_add-product').click(function(){
		var current_val = $('.products-counter_text').val();
		$('.products-counter_text').val(parseInt(current_val) + 1);
	})

	$('.counter_subtract-product').click(function(){
		var current_val = $('.products-counter_text').val();
		if(current_val > 1) {
			current_val -= 1;
			$('.products-counter_text').val(current_val);
		}
	})

	$('#add-to-cart').click(function(e){
		e.preventDefault();
		var current_bag = parseInt(localStorage.getItem('minicart'));
		var add_item = parseInt($('.products-counter_text').val());
		var total_quantity = current_bag + add_item;

		if(total_quantity  <= 20) {			
			localStorage.setItem('minicart', total_quantity)
			$('#minicart .account-nav__counter').text(total_quantity);
		} else {
			alert('Sorry but you can have in one time only 20 products. Please change you quantity.');
		}
	});

};

function addToWishlist() {
	function increaseWishlistCounter() {
		var counter = 0;
		if (localStorage.getItem('wishlist')) {
			counter = parseInt(localStorage.getItem('wishlist')) + 1;
		} else {
			counter = 1;
		}
		localStorage.setItem('wishlist', counter);
		return counter;
	};

	function setWishlistCounter() {
		var counter = 0;
		if (localStorage.getItem('wishlist')) {
			counter = localStorage.getItem('wishlist');
		} 
		$('#wishlist .account-nav__counter').text(counter);	
	};

	setWishlistCounter();

	$('.addToWishlist').click(function(){
		$('#wishlist .account-nav__counter').text(increaseWishlistCounter());
	});

};

function globalHeaderInit() {
	$('.dropped_item').click(function(e){
		e.preventDefault();

		if($(this).hasClass('open_dropped_item')) {
			$(this).next('ul').hide();
			$(this).removeClass('open_dropped_item');
		} else {
			$(this).next('ul').show();
			$(this).addClass('open_dropped_item');
		}
	});

	$('.burger_icon_open').click(function(){
		$('.drop_down_mobile').show();
		$('.burger_icon_close').show();
		$(this).hide();
	})

	$('.burger_icon_close').click(function(){
		$('.drop_down_mobile').hide();
		$('.burger_icon_open').show();
		$(this).hide();
	})
}

function widgetInit(){
	globalHeaderInit();
	addToMinicart();
	addToWishlist();
	cookiesInit();
	loginInit();
};



  