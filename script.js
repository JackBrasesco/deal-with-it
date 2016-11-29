var button = $("#btn");
var button2 = $("#btn2");

var btnpress = 0;

button.click(function() {
  dealWithIt()
  switchToReset()
})


function switchToReset() {
  button.css({display: "none"});
  
}

function dealWithIt() {
    $("#glasses").animate({top: "283px" }, 1500)
}