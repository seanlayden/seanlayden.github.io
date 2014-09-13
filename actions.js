$(document).ready(function() {

  $(".box").on('click', 'button', function() {
    $(this).closest(".box").find('.seemore').slideToggle("fast");
  });

  $(".navbar-toggle").on('mouseenter', function() {
    $(this).css("background-color", "white");
    $(this).css("border", "1px solid #e8e8e8");
  });

  $(".navbar-toggle").on("mouseleave", function() {
    $(this).css("background-color", "white");
    $(this).css("border", "1px solid white");
  })

  $(".navbar-toggle").on('click', function() {
    $(this).css("background-color", "white");
  })

})
