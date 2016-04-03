Template.razdelnyy.helpers({
    modalNewCollections:function () {
            return NewCollections.find();
        }
    
  });
/*Template.razdelnyy.onRendered(function () {
 $('.colorPhoto img').click(function (e) {
    $(".colorPhoto img").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass('active');

     


    })

  
})*/
Template.razdelnyy.events({
    'click .arrowRazdelnyy': function (e, tmpl) {
         $("body,html").animate({scrollTop: 0 }, 500);
    }
});
Template.razdelnyy.events({
    'click .menejerRazdelnyy': function (e, tmpl) {
      $('#modal2').openModal();
    }
});
Template.razdelnyy.events({
    'click .closeRazdelnyy': function (e, tmpl) {
        var imgSrc = $(e.target).attr('src');
        if(imgSrc === "/HcloseRazdelnyy.png"){
            $('.soc').fadeOut(600);
            $( e.target ).attr('src', '/Hplus.png');
        }else{
            $('.soc').fadeIn(600);
            $( e.target ).attr('src', '/HcloseRazdelnyy.png');
        }
         
    }
});
Template.razdelnyy.onRendered(function () {
  $( '.socSet img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(1);
            newImgSrc2 = '/H' + newImgSrc;
            $( this ).attr('src', newImgSrc2);
        },function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(2);
            newImgSrc2 = "/" + newImgSrc;
            $( this ).attr('src', newImgSrc2);
        }
    );
    $( '.closeAndArrow img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(1);
            newImgSrc2 = '/H' + newImgSrc;
            $( this ).attr('src', newImgSrc2);
        },function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(2);
            newImgSrc2 = "/" + newImgSrc;
            $( this ).attr('src', newImgSrc2);
        }
    );
  $('.arrowRazdelnyy').hide();  
  $(window).scroll(function () {
        var flag = $(this).scrollTop();
        if(flag > 250){
            $('.arrowRazdelnyy').fadeIn(500);  
        }else{
            $('.arrowRazdelnyy').fadeOut(500);
        }
    });
       $('.tooltipped').tooltip({delay: 50});
});

Template.razdelnyy.events({
    'click .modalPhoto img': function (e, tmpl) {
         var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});




Template.razdelnyy.events({
    'click #tableSize': function (e, tmpl) {
      /* var imgSrc = $(e.target).attr('name');
            $('.tablSize').attr('src', imgSrc);*/
                       var destination = $('.tableSize').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 900);
    }
});
Template.razdelnyy.events({
    'click .colorPhoto img': function (e, tmpl) {
           $(".colorPhoto img").removeClass("colorActive"); //удаляем класс во всех вкладках
        $(e.target).addClass('colorActive');
        var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});
Template.razdelnyy.events({
    'click .razdelnyysmalImg img': function (e, tmpl) {
           $(".razdelnyysmalImg img").removeClass("razdelnyyColorActive"); //удаляем класс во всех вкладках
        $(e.target).addClass('razdelnyyColorActive');
        var imgSrc = $(e.target).attr('src');
            $('#mainImg').attr('src', imgSrc);
    }
});
Template.razdelnyy.events({
    'click .close': function (e) {
        $('#modal1').closeModal();
                 var destination = $('.tovar').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 50);
            

    }
});

Template.razdelnyy.events({
    'click .modalButt': function (e, tmpl) {
            var modalVal = {
                header: $('.ModalTovarHeader').text(),
                firma: $('.modalFirma').text(),
                price: $('.mPirce').text(),
                sizeByst: $('.selectSizeByst').val(),
                sizeTrysu: $('.selectSizeTrysu').val(),
                quantity: $('.quantity').val(),
                color: $('.colorPhoto .colorActive').attr('src'),
                name: $('#name').val(),
                number: $('#namber').val()
            }
            console.log(modalVal.header,
            modalVal.firma,
            modalVal.price,
            modalVal.sizeByst,
            modalVal.sizeTrysu,
            modalVal.name,
            modalVal.number);     
            if(modalVal.name && modalVal.number && modalVal.color){
            Meteor.call('Orders',modalVal, function (err, res) {
                if(err){
                    console.log('error methods');
                }else{

                     ga('send', 'event', 'zakaz', 'buy_kypalnik');
                    yaCounter35842265.reachGoal('zakaz');
                     $('#modal3').openModal();
                     
                }
            });       
        }else{
            alert('Вы не выбрали цвет или не ввели имя и телефон');
        }
    }
});