$(document).ready(function() {

  $(".box").on('click', 'button', function() {
    $(this).closest(".box").find('.seemore').slideToggle("fast");
  });

  $(".navbar-toggle").on('mouseenter', function() {
    $(this).css("background-color", "#ddd");
    $(this).css("border", "1px solid #333");
    $(this).css("border-radius", "5px");
  });

  $(".navbar-toggle").on("mouseleave", function() {
    $(this).css("background-color", "#ddd");
    $(this).css("border", "1px solid #ddd");
  })

  $(".navbar-toggle").on('click', function() {
    $(this).css("background-color", "#ddd");
  })

  $(".navbar-brand").on('mouseenter', function() {
    $(this).css("color", '#e77500');
  })

})
