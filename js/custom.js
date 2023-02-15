$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() < 768) {
    if ($(this).next("ul").fadeToggle()) $(this).toggleClass("expanded");
  }
  $(window).on("resize", function () {
    location.reload();
  });
});
