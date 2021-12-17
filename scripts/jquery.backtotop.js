var coverHeight = $("#cover-video").height();
$(window).scroll(function() {
  if ($(window).scrollTop() > coverHeight) $("#backtotop").addClass("visible");
  else $("#backtotop").removeClass("visible");
});
