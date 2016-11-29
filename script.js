var button = $("#btn");
var button2 = $("#btn2");

var btnpress = 0;

button.click(function() {
  dealWithIt()
  switchToReset()
})

button2.click(function() {
  
})

function switchToReset() {
  button.css({display: "none"});
  button2.css({display: "inline-block"});
}

function dealWithIt() {
    $("#glasses").animate({top: "283px" }, 1500)
}

function dontWithIt() {
  $("#glasses
}