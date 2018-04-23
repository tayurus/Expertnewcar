$(document).ready(function () {
  $(".popup__close,.popup__background").click(function () {
    $(".popup").fadeOut(300);
    $(".popup__background").fadeOut(300);
  })
  $(".button:not(.button_offer)").click(function () {
    $(".popup").fadeIn(300);
    $(".popup__background").fadeIn(300);
  })
})
