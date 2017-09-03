/**
 * Created by LI on 2017/8/18.
 */
var navlist = document.getElementsByClassName("navlist");
var nav3 = document.getElementById("nav3");
var middlenav = document.getElementsByClassName("middlenav");
var middlediv = document.getElementById("middlediv");
var mouseINsub = false;
var timer;
var delay = false;
var mouseTrack = [];
var moveHanlder = function (e) {
    mouseTrack.push({
        x:e.pageX,
        y:e.pageY
    })
    if(mouseTrack.length>3){
        mouseTrack.shift();
    }
};

function sameSign(a,b) {
    return (a ^ b) >=0;
}
function vector(a,b) {
    return {
        x:b.x - a.x,
        y:b.y - a.y
    };
}

function vectorProduct(v1,v2) {
    return v1.x * v2.y - v2.x * v1.y;
}

function isPointInTrangle(p,a,b,c) {
    var pa = vector(p,a);
    var pb = vector(p,b);
    var pc = vector(p,c);

    var t1 = vectorProduct(pa,pb);
    var t2 = vectorProduct(pb,pc);
    var t3 = vectorProduct(pc,pa);

    return sameSign(t1,t2) && sameSign(t2,t3);
}
function needDelay(elem,leftCorner,currMousePos) {

    var topLeft = {
        x:elem.offsetLeft + 200,
        y:elem.offsetTop
    };
    var bottomLeft = {
        x:elem.offsetLeft + 200,
        y:elem.offsetTop + elem.offsetHeight
    };
    return isPointInTrangle(currMousePos,leftCorner,topLeft,bottomLeft);
}

for (let i = 0; i < navlist.length; i++) {

    middlenav[i].addEventListener("mouseenter", function () {
        middlediv.style.display = "block";
        middlenav[i].style.display = "block";

    });
    middlenav[i].addEventListener("mouseleave", function () {
        middlediv.style.display = "none";


    });
    navlist[i].addEventListener("mousemove",function (event) {
        moveHanlder(event);
      
    });
    navlist[i].addEventListener("mouseenter", function () {
        var currMousePos = mouseTrack[1];
        var leftCorner = mouseTrack[0];
        var elem = nav3.offsetParent;
        if(currMousePos && leftCorner){
            delay = needDelay(elem,leftCorner,currMousePos);
        }
        if(delay == false) {

            middlediv.style.display = "block"
            middlenav[i].style.display = "block";

            for (let j = 0; j < navlist.length; j++) {
                if (j != i) {
                    middlenav[j].style.display = "none";
                }
            }
        }else{
            if(timer){
                clearTimeout(timer);
            }
           timer = setTimeout(function () {
               if(mouseINsub){
                   return
               }
               middlediv.style.display = "block"
               middlenav[i].style.display = "block";

               for (let j = 0; j < navlist.length; j++) {
                   if (j != i) {
                       middlenav[j].style.display = "none";
                   }
               }
               timer = null;

           },300);
        }


    });
    nav3.addEventListener("mouseleave", function () {
        if(timer){
            clearTimeout(timer);
        }
        mouseTrack = [];
        delay = false;
        middlediv.style.display = "none";

    });
    nav3.addEventListener("mouseenter", function () {
        if(timer){
            clearTimeout(timer);
        }
        middlediv.style.display = "block"
    });

}