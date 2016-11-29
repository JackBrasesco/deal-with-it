var button = $("#btn");

button.click(function() {
  dealWithIt()
})



function dealWithIt() {
    $("#glasses").animate({top: "250px" }, 1500)
}