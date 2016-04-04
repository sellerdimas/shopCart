Template.rezdelnyyNav.events({
	'click .brand-logo':function(e){
		e.preventDefault();
		Router.go('main');
	}
});

Template.rezdelnyyNav.events({
    'click .blockCart':function(e, tmpl) {
    	Router.go('cart');
        


    }
});
Template.rezdelnyyNav.helpers({
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