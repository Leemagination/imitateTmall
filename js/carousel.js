/**
 * Created by LI on 2017/8/18.
 */
/*轮播图js*/
var Lnumber = 2;
var photo = document.getElementsByClassName("photo");
var picturelist = document.getElementsByClassName("picturelist");
var bgcolor1 = document.getElementById("mainnav");
var bgcolor2 = document.getElementById("carousel");
var photechange = setInterval(carousel, 4000);
var colorL = ["#ededed","rgb(232, 232, 232)","rgb(255, 44, 226)","rgb(150, 2, 12)","rgb(130, 55, 206)","rgb(232, 232, 232)"];
function carousel() {
    photo[Lnumber - 1].style.display = "block";
    picturelist[Lnumber - 1].style.backgroundColor = "rgba(255, 255, 255, 0.44)";
    picturelist[Lnumber - 1].style.border = "1px solid rgba(0, 0, 0, 0.24)"
    bgcolor1.style.backgroundColor = colorL[Lnumber-1];
    bgcolor2.style.backgroundColor = colorL[Lnumber-1];
    for (let j = 0; j < 6; j++) {
        if (j != Lnumber - 1) {
            photo[j].style.display = "none";
            picturelist[j].style.backgroundColor = "rgba(0, 0, 0, 0.24)";
            picturelist[j].style.border = "none";
        }
    }
    Lnumber++;
    if (Lnumber > 6) {
        Lnumber = 1;
    }
}
for (let i = 0; i < 6; i++) {
    picturelist[i].addEventListener("mouseover", function () {
        photo[i].style.display = "block";
        Lnumber = i + 1;
        picturelist[i].style.backgroundColor = "rgba(255, 255, 255, 0.44)";
        picturelist[i].style.border = "1px solid rgba(0, 0, 0, 0.24)";
        bgcolor1.style.backgroundColor = colorL[Lnumber-1];
        bgcolor2.style.backgroundColor = colorL[Lnumber-1];
        for (let j = 0; j < 6; j++) {
            if (j != i) {
                photo[j].style.display = "none";
                picturelist[j].style.backgroundColor = "rgba(0, 0, 0, 0.24)";
                picturelist[j].style.border = "none";
            }
        }
    });

}
