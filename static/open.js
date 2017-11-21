$(document).ready(() => {
  $(".head").click(function () {
    $(this)
      .next(".row")
      .stop(true, true)
      .slideToggle()
  })
})
