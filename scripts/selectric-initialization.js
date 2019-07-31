function selectricCall() {
    $('select').selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });

    $('#color-select').selectric({
        optionsItemBuilder: function(itemData, element, index) {
          var element_color = $(element[0][index]).data('color');
          return element.val().length ? '<span class="span_color_icon" style="background:' + element_color + ';"></span>' + itemData.text : itemData.text;
        },
        labelBuilder: function(item) {
          var element_color = $($(item)[0]['element'][0]).data('color');
          return item.text.length ? '<span class="span_color_icon" style="background:' + element_color + ';"></span>' + item.text : item.text;
        }
      });
};

function selectricInit(){
	selectricCall();
};