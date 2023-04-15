$(function () {
    
    $(".menu-btn").click(function () {
     $(".mini-menu").slideToggle(500);
    });
    

    $(".body").click(function () {
    $(".mini-menu").hide(200);
    });

    
   
    
    /*
    var cross = -30;
    function move() {
        $(".motor img").css({"transform": "scale(1.1)"});
     if (cross != 120) {
         cross += 0.5;
         $(".motor img").css({"left": cross + "%"});
     }
     else{
         
         cross = -30;
         $(".motor img").css({"left": cross + "%"});
     }
    }
    setInterval(move, 10);

    var ns = 1;
    function move_scale() {
        
     if (ns != 2) {
         ns += 1;
         $(".motor img").css({"transform": "scale"+"(" + ns + ")" });
     }
     else{
         
         ns = 1;
         $(".motor img").css({"transform": "scale"+"(" + ns + ")" });
     }
    }
    setInterval(move_scale, 100);
    */
     
    
    /*$(".infinite-col img").attr("src", "images/carlogo2.png");*/
    window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    
    
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop > 30) {
        $("nav").css({"background-color":"white", "box-shadow": "0px 0px 5px black"});
    }
    else{
        $("nav").css({"background-color":"transparent", "box-shadow": "unset"});
    }  
}

$(".menu ul li").on("mouseover", function () {
    $(this).children().fadeIn(700);
});
$(".menu ul li").on("mouseleave", function () {
    $(this).children().hide();
});
$(".mini-menu .academics").click(function () {
    $(".mini-academics").slideToggle(700);
});
$(".mini-menu .about").click(function () {
    $(".mini-about").slideToggle(700);
});
$(".mini-menu .research").click(function () {
    $(".mini-research").slideToggle(700);
});
var sln = -25;
function slide() {
    if (sln < 75) {
        sln +=25;
        $(".slider div img").css({"right":sln + "%"});
    }
    else{
        sln =0;
        $(".slider div img").css({"right":sln + "%"});
    }
}
setInterval(slide, 2000);
 });