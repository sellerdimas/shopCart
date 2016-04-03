Template.mainSlider.events({
       'click .sliderButton': function (e) {
        e.preventDefault();
        var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 800);

    }
});
Template.mainSlider.events({
       'click .MainArrowBlock': function (e) {
        e.preventDefault();
        var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 800);

    }
});