$(function() {
    /* menu */
    $('.hamburger').on('click', function() {
        hamburger();
    })
})

function hamburger() {
    $('.hamburger').toggleClass('active');

    if($('.hamburger').hasClass('active')) {
        $('#navi').addClass('active');
    } else {
        $('#navi').removeClass('active');
    }
}

$('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
        $(this).stop().addClass('slide-left');
    }
});

$('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
        $(this).stop().addClass('slide-right');
    }
});

