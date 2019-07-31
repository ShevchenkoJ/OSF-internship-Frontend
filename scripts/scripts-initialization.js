function scriptsInitialization() {
    owlCarouselAdjustment();
    ajaxCall("./homepage-array.json",".home_container");
    ajaxCall("./clp-array.json", ".category-landing_container");
    headerInit();
    tailsInit();
    footerInit();
    tabsInit();
    clpFilterAdjustment();
    widgetInit();
    easyzoomAdjustments();
    selectricInit();
};

$(document).ready(function(){ 
    scriptsInitialization();
});