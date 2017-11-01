/**
 * Created by LI on 2017/9/2.
 */
/*   有关页面滚动的js*/
var goTOP = document.getElementById("goTOP");
var goTOP2 = document.getElementById("goTOP2");
var goELECTRONICS = document.getElementById("goELECTRONICS");
var goHOME = document.getElementById("goHOME");
var goBEATY = document.getElementById("goBEATY");
var goGROCERY = document.getElementById("goGROCERY");
var goOUTDOORS = document.getElementById("goOUTDOORS");
var goKIDS = document.getElementById("goKIDS");
var goFAROURITE = document.getElementById("goFAROURITE");
var LEFTnav = document.getElementById("LEFT-nav");
var TOPnav = document.getElementById("TOP-nav");
var TOPTmall = document.getElementById("TOP-Tmall");
var TOPcombine = document.getElementById("TOP-combine");

window.onscroll = function () {
    if(document.documentElement.scrollTop>=400 || document.body.scrollTop>=400){
        TOPnav.style.display = "block";
    }else{
        TOPnav.style.display = "none";
    }
    if(document.documentElement.scrollTop>=700 || document.body.scrollTop>=700){
        TOPnav.style.height = "50px";
        TOPTmall.style.visibility = "visible";
        TOPcombine.style.visibility = "visible";
    }
    else{
        TOPnav.style.height = "0px";
        TOPTmall.style.visibility = "hidden";
        TOPcombine.style.visibility = "hidden";
    }
    if(document.documentElement.scrollTop>=600 || document.body.scrollTop>=600){
        LEFTnav.style.height = "323px";
        LEFTnav.style.width = "35px";
    }else{
        LEFTnav.style.height = "0";
        LEFTnav.style.width = "0";
    }
    if((document.documentElement.scrollTop>=1600 && document.documentElement.scrollTop <2200) ||
        (document.body.scrollTop>=1600 && document.body.scrollTop <2200)){
        goELECTRONICS.style.backgroundColor ="dodgerblue";
    }else{
        goELECTRONICS.style.backgroundColor ="#636363";
    }
    if((document.documentElement.scrollTop>=2200 && document.documentElement.scrollTop <2800) ||
        ((document.body.scrollTop>=2200 && document.body.scrollTop <2800))){
        goHOME.style.backgroundColor = "deeppink";
    }else{
        goHOME.style.backgroundColor ="#636363";
    }
    if((document.documentElement.scrollTop>=2800 && document.documentElement.scrollTop <3400) ||
        (document.body.scrollTop>=2800 && document.body.scrollTop <3400)){
        goBEATY.style.backgroundColor = "hotpink";
    }else{
        goBEATY.style.backgroundColor ="#636363";
    }
    if((document.documentElement.scrollTop>=3400 && document.documentElement.scrollTop <3900) ||
        (document.body.scrollTop>=3400 && document.body.scrollTop <3900)){
        goGROCERY.style.backgroundColor = "lawngreen";
    }else{
        goGROCERY.style.backgroundColor ="#636363";
    }
    if((document.documentElement.scrollTop>=3900 && document.documentElement.scrollTop <4500) ||
        (document.body.scrollTop>=3900 && document.body.scrollTop <4500)){
        goOUTDOORS.style.backgroundColor = "lightseagreen";
    }else{
        goOUTDOORS.style.backgroundColor ="#636363";
    }
    if((document.documentElement.scrollTop>=4500 && document.documentElement.scrollTop <5100) ||
        (document.body.scrollTop>=4500 && document.body.scrollTop <5100)){
        goKIDS.style.backgroundColor = "orange";
    }else{
        goKIDS.style.backgroundColor ="#636363";
    }
    if(document.documentElement.scrollTop>=5200 || document.body.scrollTop>=5200){
        goFAROURITE.style.backgroundColor = "deeppink";
    }else{
        goFAROURITE.style.backgroundColor ="#636363";
    }




}

var scroll = function (topvalue) {
    var i = 1;
    var UPscroll = function () {
        window.scrollBy(0, -50);
        if (document.documentElement.scrollTop <= topvalue && document.body.scrollTop <= topvalue) {

            clearInterval(scrollmove);
            window.scrollTo(0,topvalue);
        }

    }
    var DOWNscroll = function () {
        window.scrollBy(0, 50);
        if (document.documentElement.scrollTop >= topvalue || document.body.scrollTop >= topvalue) {

            clearInterval(scrollmove);
            window.scrollTo(0,topvalue);
        }

    }
    if (document.documentElement.scrollTop> topvalue || document.body.scrollTop> topvalue) {
        var scrollmove = setInterval(UPscroll, 1);
    } else {
        if(document.documentElement.scrollTop < topvalue || document.body.scrollTop < topvalue){
            var scrollmove = setInterval(DOWNscroll, 1);
        }

    }
}

goTOP.addEventListener("click", function () {
    scroll(0);
})
goTOP2.addEventListener("click", function () {
    scroll(0);
})
goELECTRONICS.addEventListener("click", function () {
    scroll(1900);
})
goHOME.addEventListener("click",function () {
    scroll(2450);
})
goBEATY.addEventListener("click",function () {
    scroll(3000);
})
goGROCERY.addEventListener("click",function () {
    scroll(3500)
})
goOUTDOORS.addEventListener("click",function () {
    scroll(4100);
})
goKIDS.addEventListener("click",function () {
    scroll(4650);
})
goFAROURITE.addEventListener("click",function () {
    scroll(5200);
})