/**
 * Created by LI on 2017/8/29.
 */
var changeBTN = document.getElementById("changeG");
var group = 1;
var AVTlist = document.getElementsByClassName("AVT-list");
changeBTN.addEventListener("click", function () {
    var j = 0;
    for (let i = 0; i < AVTlist.length; i++) {
        var valueX = (i + 1) % 6;
        var time;
        if (valueX == 0) {
            j++;
            time = 5 + j;
        } else {
            time = valueX + j;
        }
        if (group > 2) {
            group = 1;
        }
        if (group == 1) {

            setTimeout(function () {
                AVTlist[i].style.transform = "rotateY(90deg)";
            }, time * 100)
            setTimeout(function () {
                AVTlist[i].firstElementChild.src = "img/advertisement/secondG/" + (i + 1) + ".webp";
                AVTlist[i].style.transform = "rotateY(0deg)";
            }, 200 + time * 100)
        }
        if (group == 2) {
            setTimeout(function () {
                AVTlist[i].style.transform = "rotateY(90deg)";
            }, time * 100)
            setTimeout(function () {
                AVTlist[i].firstElementChild.src = "img/advertisement/firstG/" + (i + 1) + ".webp";
                AVTlist[i].style.transform = "rotateY(0deg)";
            }, 200 + time * 100)
        }
    }
    group++;
});