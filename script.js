var button = $("#btn");

button.click(function() {
  dealWithIt()
})



function dealWithIt() {
    $("#glasses").animate({top: "275px" }, 1500)
}