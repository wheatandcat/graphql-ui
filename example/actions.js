$(document).ready(() => {
  $(".head").click(function () {
    $(this)
      .next(".row")
      .stop(true, true)
      .slideToggle()
  })

   var clipboard = new Clipboard('.copyButton');
});

$( document ).tooltip({
  tooltipClass:"ui-tooltip1"
});
