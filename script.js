var button = $("#btn");
var button2 = $("#btn2");

var btnpress = 0;

button.click(function() {
  dealWithIt()
  switchToReset()
})

button2.click(function() {
  dontWithIt()
})

function switchToReset() {
  button.css({display: "none"});
  button2.css({display: "inline-block"});
}

function switchToReset() {
  button.css({display: "inline-block"});
  button2.css({display: "none"});
}

function dealWithIt() {
    $("#glasses").animate({top: "283px" }, 1500);
}

function dontWithIt() {
    $("#glasses").animate({top: "0px"}, 1500);
}