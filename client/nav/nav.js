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


Template.nav.events({
    'click #navButton':function(e, tmpl) {
    	$('#modal2').openModal();
        


    }
});