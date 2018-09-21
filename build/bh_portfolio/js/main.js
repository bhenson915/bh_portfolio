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
    var sortProjects= $(this).data('id');
    if($('#web-sort').on('click', function(){
        $(sortProjects).addClass('display', 'none');
    }));

    // $('.project-card-alternate').on('click', function(){
    //     alert($(this).data('id'));
    // });
});

        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"; 
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block"; 
        }