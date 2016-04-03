Template.tovar.helpers({
    tovarNewCollections:function () {
            return NewCollections.find({}, {sort: {price: 1}});
        }
    
  });

Template.tovar.onRendered(function () {
    $('.colorSquare img').hide();
    $('.hoverImg').hide();
  $( '.tovar img' ).hover(
        function() {
            var imgSrc = $(this).attr('names');
            console.log(imgSrc);
            var imgName = $(this).attr('name');
            $( this ).attr('src', imgName);
        
        },function() {
            var imgSrc = $(this).attr('names');
            $( this ).attr('src', imgSrc);         
        }
    );
  $('.tovarBlock').click(function (e) {
    $('.tablSize').attr('src', 's.png');
        var tovarId = $(this).attr('name');
        Session.set('tovarId', tovarId);
        console.log(Session.get('tovarId'));
 /*       $('#modal1').openModal();*/
            Router.go('razdelnyy', {name: Session.get('tovarId')});


    })
    $('#materialize-lean-overlay-2').click(function (e) {
        console.log('asdasdasdasd');

    })
$( '.colorSquare' ).hover(
        function() {
            var name = $(this).attr('name');
            $(this).parent().prev().children().attr('src', name)
        
        },
        function() {
            var img = $(this).parent().prev().children().attr('names');
            $(this).parent().prev().children().attr('src', img);
        
        }
    );
       
});





