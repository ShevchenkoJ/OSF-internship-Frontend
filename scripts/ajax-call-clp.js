function ajaxCall() {
	var itemsDrowCounter = 0;
	var popularItemsArray;

	function loadPopularItems() {
		if (popularItemsArray){
			drowEachRow(popularItemsArray);
		} else {
			$.ajax({
				type: "GET",
				url: "./clp-products.json",
				success: function(result) {
					console.log(result);
					popularItemsArray = result;
					drowEachRow(popularItemsArray);
				},
				error: function() {
					drowEachRow(false);
				}
			});
		}
	};

	function drowEachRow(result) {
		var output;
		var error_msg = false;
		if(!result || itemsDrowCounter >= result.length) {
			if(!$('.error__json__message').length) {
				output = "<div class='error__json__message'>Sorry, no more items...</div>";
				error_msg = true;
				$("#load-more").hide();
			}
		} else {
			output = itemsRowDraw(result,itemsDrowCounter);
			itemsDrowCounter+=4;
		}
		$('.popular-items_row').append(output);

		if (error_msg) {
			setTimeout(function(){
				$('.error__json__message').remove();
			}, 3000);
		}
	}

	function singleItemDraw(background, text, price){
		var item =  `<div class="col-lg-3 popular-item" style="background-image: url('`+ background +`')">
						<div class="item-text_container">
							<span class="item-text">`+ text +`</span>
							<span class="price">`+ price +`</span></div><div class="popular-item_hover"> 
							<button class="plus" id="#minicart" title="add"></button>
							<button class="like" id="#wishlist" title="like"></button>
						</div>
					</div>
				  `;
		return item;
	};

	function itemsRowDraw (itemsArray, startItem){
		var finishItem = itemsArray.length <= startItem + 4 ? itemsArray.length : startItem + 4;
		var itemsRow = "";
		for (var i = startItem; i < finishItem; i++) { 
			itemsRow += singleItemDraw(itemsArray[i]['background'], itemsArray[i]['text'], itemsArray[i]['price']);
		}
		if (finishItem == itemsArray.length) {
			$("#load-more").hide();	
		}
		return itemsRow;
	};

    $("#load-morу").click(function() {
		loadPopularItems();    
    });
}