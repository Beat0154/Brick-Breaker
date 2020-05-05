var user = document.getElementById("user");
var ball = document.getElementById("ball");
var balldiv = document.getElementById("balldiv");
var px = "px";
var mousedownID = -1; 
function mousedownLeft(event) {
  if(mousedownID==-1)mousedownID = setInterval(whilemousedownLeft, 2);
}
function mouseupLeft(event) {
   if(mousedownID!=-1) {
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}
function whilemousedownLeft() {
   var left = parseFloat(window.getComputedStyle(user).getPropertyValue("left"));
    if(left > 0){
        var newleft = left - 3;
        var px = "px";
        var newnewleft = newleft + px;
        user.style.left = newnewleft;
    }
}
document.getElementById("left").addEventListener("mousedown", mousedownLeft);
document.getElementById("left").addEventListener("mouseup", mouseupLeft);
document.getElementById("left").addEventListener("touchstart", mousedownLeft);
document.getElementById("left").addEventListener("touchend", mouseupLeft);

function mousedownRight(event) {
  if(mousedownID==-1)mousedownID = setInterval(whilemousedownRight, 2);
}
function mouseupRight(event) {
   if(mousedownID!=-1) {
     clearInterval(mousedownID);
     mousedownID=-1;
   }
}
function whilemousedownRight() {
   var left = parseFloat(window.getComputedStyle(user).getPropertyValue("left"));
    if(left < 300){
        var newleft = left + 3;
        var newnewleft = newleft + px;
        user.style.left = newnewleft;
    }
}
document.getElementById("right").addEventListener("mousedown", mousedownRight);
document.getElementById("right").addEventListener("mouseup", mouseupRight);
document.getElementById("right").addEventListener("touchstart", mousedownRight);
document.getElementById("right").addEventListener("touchend", mouseupRight);

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if(event.key==="ArrowLeft"||event.key==="a"){mousedownLeft();}
  if(event.key==="ArrowRight"||event.key==="d"){mousedownRight();}
  
});

document.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if(event.key==="ArrowLeft"||event.key==="a"){mouseupLeft();}
  if(event.key==="ArrowRight"||event.key==="d"){mouseupRight();}
  
});

var counter = 0;
var checkHit = setInterval(function() {
    var top = parseFloat(window.getComputedStyle(ball).getPropertyValue("top"));
    var ballleft = parseFloat(window.getComputedStyle(balldiv).getPropertyValue("left"));
    var userleft = parseFloat(window.getComputedStyle(user).getPropertyValue("left"));
    if(userleft-10<ballleft&&userleft+110>ballleft){
        var shawn = true;
        counter++;
    }else{
        alert("you missed, score: " + counter);
        ball.classList.remove("animation");
        var left = ballleft + px;
        ball.style.left = left;
        balldiv.style.animation = "none";
        clearInterval(checkHit);
        restart.style.display = "block";
    }
}, 5000);

if(window.innerWidth<400){
    var fourhundred = window.innerWidth;
    var fourhundredminustwenty = window.innerWidth - 20;
    var fourhundredhalf = window.innerWidth / 2;
    
    root.style.setProperty('--fourhundred', fourhundred + "px");
    root.style.setProperty('--fourhundredminustwenty', fourhundredminustwenty + "px");
    root.style.setProperty('--fourhundred', fourhundredhalf + "px");
}