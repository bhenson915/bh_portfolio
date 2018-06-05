$(document).ready(function(){
    $('#btn-menu').click(function(){
        $(this).toggleClass('fancy');
        $('.navigation').toggle('slide', function(){
            if ($(this).is(':visible'))
            $(this).css('display','flex');
        });
        $('.navigation-list').toggle('slide', function(){
            if ($(this).is(':visible'))
            $(this).css('display','flex');
        });
        $('.fa-bars').toggleClass('fa-times', 1000, "easeOutSine");
    });
});