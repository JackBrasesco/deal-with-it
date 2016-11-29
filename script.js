var button = $("#btn");

var btnpress = 0;

button.click(function() {
  dealWithIt()
  switchToReset()
})


function switchToReset() {
  console.log("hi")
}

function dealWithIt() {
    $("#glasses").animate({top: "283px" }, 1500)
}