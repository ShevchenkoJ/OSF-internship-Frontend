function easyzoomSetUp(){
    var $easyzoom = $('.easyzoom').easyZoom();

    var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

    $('.thumbnails').on('click', 'a', function(e) {
        var $this = $(this);

        e.preventDefault();

        api1.swap($this.data('standard'), $this.attr('href'));
    });
};

function ez() {
    		// Instantiate EasyZoom instances
		var $easyzoom = $('.easyzoom').easyZoom();

		// Setup thumbnails example
		var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);

			e.preventDefault();

			// Use EasyZoom's `swap` method
			api1.swap($this.data('standard'), $this.attr('href'));
		});
};

function easyzoomActiveThumb() {
	$('.gallery-preview_image').click(function() {
		$('.gallery-preview_image').removeClass('active_thumb');
		$(this).addClass('active_thumb');
	});
};


function easyzoomAdjustments(){
    ez();
    easyzoomActiveThumb();
};
