/**
 * Created by LI on 2017/8/29.
 */
var primaryWindow = document.getElementById("primaryWindow");
var primaryBG = document.getElementById("primaryBG");
var liveBTN = document.getElementById("liveBTN");

var secondaryWindow = document.getElementById("secondaryWindow");
var Lbtn = document.getElementById("Lbtn");
var Rbtn = document.getElementById("Rbtn");
var liveLIST = secondaryWindow.getElementsByTagName("img");

primaryWindow.addEventListener("mouseenter",function () {
    liveBTN.style.transform = "scale(1.2)";
    setTimeout(function () {
        liveBTN.style.transform = "scale(1)";
    },200)
});
Rbtn.addEventListener("click",function () {
    secondaryWindow.style.animation = "leftmove linear 0.5s";
    secondaryWindow.style.animationFillMode = "forwards";
    Rbtn.style.display = "none";
    Lbtn.style.display = "block";
});

Lbtn.addEventListener("click",function () {
    secondaryWindow.style.animation = "rightmove linear 0.5s";
    secondaryWindow.style.animationFillMode = "forwards";
    Rbtn.style.display = "block";
    Lbtn.style.display = "none";
});
for(let i=0;i<liveLIST.length;i++){
    liveLIST[i].addEventListener("mouseenter",function () {
        primaryBG.src = liveLIST[i].src;
    })
}
