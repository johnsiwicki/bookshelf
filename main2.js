


$( document ).ready(function() {
    console.log( "ready!" );
    $('#books').on('click', '.book-remove', function(e){
    $(this).parent().remove();
});
});