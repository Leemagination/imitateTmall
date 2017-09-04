/**
 * Created by LI on 2017/8/17.
 */
/*页面顶部导航栏的下拉菜单js*/
    var  myTB = document.getElementById("myTB");
    var mytaobao = document.getElementById("mytaobao");
    myTB.addEventListener("mouseover",function () {
        mytaobao.style.display = "block";
        myTB.style.borderBottom = "1px solid white";
        myTB.style.backgroundColor = "white";
        myTB.style.borderLeft = "1px solid #E5E5E5";
        myTB.style.borderRight = "1px solid #E5E5E5";
    });
    mytaobao.addEventListener("mouseleave",function () {
        mytaobao.style.display = "none";
        myTB.style.borderBottom = "1px solid #E5E5E5";
        myTB.style.backgroundColor = "rgb(242, 242, 242)";
        myTB.style.borderLeft = "1px solid rgb(242, 242, 242)";
        myTB.style.borderRight = "1px solid rgb(242, 242, 242)";
    });
    myTB.addEventListener("mouseleave",function () {
        mytaobao.style.display = "none";
        myTB.style.borderBottom = "1px solid #E5E5E5";
        myTB.style.backgroundColor = "rgb(242, 242, 242)";
        myTB.style.borderLeft = "1px solid rgb(242, 242, 242)";
        myTB.style.borderRight = "1px solid rgb(242, 242, 242)";
    });

    var  mySC = document.getElementById("mySC");
    var  mycollection = document.getElementById("mycollection");
    mySC.addEventListener("mouseover",function () {
        mycollection.style.display = "block";
        mySC.style.borderBottom = "1px solid white";
        mySC.style.backgroundColor = "white";
        mySC.style.borderLeft = "1px solid #E5E5E5";
        mySC.style.borderRight = "1px solid #E5E5E5";
    });
    mycollection.addEventListener("mouseleave",function () {
        mycollection.style.display = "none";
        mySC.style.borderBottom = "1px solid #E5E5E5";
        mySC.style.backgroundColor = "rgb(242, 242, 242)";
        mySC.style.borderLeft = "none";
        mySC.style.borderRight = "none";
    });
    mySC.addEventListener("mouseleave",function () {
        mycollection.style.display = "none";
        mySC.style.borderBottom = "1px solid #E5E5E5";
        mySC.style.backgroundColor = "rgb(242, 242, 242)";
        mySC.style.borderLeft = "1px solid rgb(242, 242, 242)";
        mySC.style.borderRight = "1px solid rgb(242, 242, 242)";
    });

    var myMB = document.getElementById("myMB");
    var mobile = document.getElementById("mobile");
    myMB.addEventListener("mouseover",function () {
       mobile.style.display = "block";
    });
    myMB.addEventListener("mouseleave",function () {
       mobile.style.display = "none";
    });
    mobile.addEventListener("mouseleave",function () {
       mobile.style.display = "none";
    });

    var  cpSP = document.getElementById("cpSP");
    var  support = document.getElementById("support");
    cpSP.addEventListener("mouseover",function () {
        support.style.display = "block";
        cpSP.style.borderBottom = "1px solid white";
        cpSP.style.backgroundColor = "white";
        cpSP.style.borderLeft = "1px solid #E5E5E5";
        cpSP.style.borderRight = "1px solid #E5E5E5";
    });
    support.addEventListener("mouseleave",function () {
        support.style.display = "none";
        cpSP.style.borderBottom = "1px solid #E5E5E5";
        cpSP.style.backgroundColor = "rgb(242, 242, 242)";
        cpSP.style.borderLeft = "1px solid rgb(242, 242, 242)";
        cpSP.style.borderRight = "1px solid rgb(242, 242, 242)";
    });
    cpSP.addEventListener("mouseleave",function () {
        support.style.display = "none";
        cpSP.style.borderBottom = "1px solid #E5E5E5";
        cpSP.style.backgroundColor = "rgb(242, 242, 242)";
        cpSP.style.borderLeft = "1px solid rgb(242, 242, 242)";
        cpSP.style.borderRight = "1px solid rgb(242, 242, 242)";
    });

    var weblink = document.getElementById("weblink");
    var webcontent = document.getElementById("webcontent");
    weblink.addEventListener("mouseover",function () {
        webcontent.style.display = "block";
        weblink.style.borderBottom = "1px solid white"
        weblink.style.backgroundColor = "white";
        weblink.style.borderLeft = "1px solid #E5E5E5";
        weblink.style.borderRight = "1px solid #E5E5E5";
    });
    webcontent.addEventListener("mouseleave",function () {
        webcontent.style.display = "none";
        weblink.style.borderBottom = "1px solid #E5E5E5"
        weblink.style.backgroundColor = "rgb(242, 242, 242)";
        weblink.style.borderLeft = "1px solid rgb(242, 242, 242)";
        weblink.style.borderRight = "1px solid rgb(242, 242, 242)";
    });
    weblink.addEventListener("mouseleave",function () {
        webcontent.style.display = "none";
        weblink.style.borderBottom = "1px solid #E5E5E5"
        weblink.style.backgroundColor = "rgb(242, 242, 242)";
        weblink.style.borderLeft = "1px solid rgb(242, 242, 242)";
        weblink.style.borderRight = "1px solid rgb(242, 242, 242)";
    });
