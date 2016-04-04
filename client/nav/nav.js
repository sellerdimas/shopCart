Template.nav.events({
	'click .brand-logo':function(e){
		e.preventDefault();
		var destination = $('.tovar').offset().top;
		var minus = destination - 60;
		$("body,html").animate({scrollTop: minus }, 800);
	}
});

Template.nav.events({
	'click .navScroll':function(e){
		e.preventDefault();
		var atribyte = $(e.target).attr("href");
		var destination = $('.' + atribyte).offset().top;
		var minus = destination - 60;
		if(atribyte === 'port'){
			minus -= 40;
		}
		$("body,html").animate({scrollTop: minus }, 800);

	}
});



Template.nav.helpers({
	'itemCount':function(){
		return Session.get('Cart-itemCount');
	},
	'itemTotal':function(){
		return Session.get('Cart-itemTotal');
	},
	'itemsInCart':function(){
		return !Session.equals('Cart-itemCount', 0);
	}
});

Template.nav.events({
    'click .cartImg':function(e, tmpl) {
    	Router.go('cart');
        


    }
});
Template.nav.events({
    'click .countCart':function(e, tmpl) {
    	Router.go('cart');
        


    }
});

 Template.nav.onRendered(function () {

 	$('.tooltipped').tooltip({delay: 50});

});