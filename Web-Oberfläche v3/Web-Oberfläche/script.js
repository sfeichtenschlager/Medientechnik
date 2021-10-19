function zFunctionOne() {
    document.getElementsById("jsPartOne").style.zIndex = "-2";
    document.getElementById("audio").style.zIndex = "2";
}

function zFunctionTwo() {
    document.getElementsById("jsPartTwo").style.zIndex = "-2";
    document.getElementsByClassName("text").style.zIndex = "2";
}

function zFunctionThree() {
    document.getElementsById("jsPartThree").style.zIndex = "-2";
    document.getElementsByClassName("video").style.zIndex = "2";
}

function zFunctionFour() {
    document.getElementsById("jsPartFour").style.zIndex = "-2";
    document.getElementsByClassName("image").style.zIndex = "2";
}