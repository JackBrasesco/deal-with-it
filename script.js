var button = $("#btn");

var btnpress = 0;

button.click(function() {
  dealWithIt()
  switchToReset()
})


function switchToReset() {
  button.attr("value", "Reset")
}

function dealWithIt() {
    $("#glasses").animate({top: "283px" }, 1500)
}