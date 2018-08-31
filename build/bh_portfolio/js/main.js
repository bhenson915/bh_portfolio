$(document).ready(function(){
    $('#btn-menu').click(function(){
        $(this).toggleClass('fancy');
        $('.mobile-nav').toggle('slide', function(){
            if ($(this).is(':visible'))
            $(this).css('display','flex');
        });
        $('.mobile-nav-list').toggle('slide', function(){
            if ($(this).is(':visible'))
            $(this).css('display','block');
        });
        $('.fa-bars').toggleClass('fa-times', 1000, "easeOutSine");
    });
});