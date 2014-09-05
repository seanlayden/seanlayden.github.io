$(document).ready(function() {

  $(".box").on('click', 'button', function() {
    $(this).closest(".box").find('.seemore').slideToggle("fast");
  })


})
