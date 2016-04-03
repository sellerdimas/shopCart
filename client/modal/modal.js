
/*Template.main.events({
    'click #materialize-lean-overlay-2': function (e) {
        $('#modal1').closeModal();
                 var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 200);
            

    }.lean-overlay
});
*/
Template.modal2.events({
    'click .close': function (e) {
        $('#modal2').closeModal();

    }
});
Template.modal3.events({
    'click .close': function (e) {
        $('#modal3').closeModal();
    }
});
Template.modal2.events({
    'click .modalSendButt': function (e) {
        var modal = {
            name: $('#name1').val(),
            number:$('#number1').val(),
            email: $('#email1').val()
        }
       
        if(modal.name && modal.number && modal.email){
            Meteor.call('Calls',modal, function (err, res) {
                if(err){
                    console.log('error methods moadal2');
                }else{
                     $('#modal2').closeModal();
                     ga('send', 'event', 'zvonok', 'zakaz_zvonka');
                     yaCounter35842265.reachGoal('zvonok');
                     $('#modal3').openModal();
                     
                }

            });       
        }else{
            alert('Вы не заполнели все поля');
        }
    }
});


