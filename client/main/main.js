Template.main.onRendered(function () {

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


});
Template.main.events({
    'click .zakazZvonok':function(e, tmpl) {
      $('#modal2').openModal();
        


    }
});