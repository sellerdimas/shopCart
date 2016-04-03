Template.footer.onRendered(function () {
  $( '.page-footer img' ).hover(
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
});