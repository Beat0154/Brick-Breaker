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
//document.getElementById("left").addEventListener("mousedown", mousedownLeft);
//document.getElementById("left").addEventListener("mouseup", mouseupLeft);
document.getElementById("left").addEventListener("onpointerdown", mousedownLeft);
document.getElementById("left").addEventListener("onpointerup", mouseupLeft);

var mousedownID = -1; 
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
        var px = "px";
        var newnewleft = newleft + px;
        user.style.left = newnewleft;
    }
}
//document.getElementById("right").addEventListener("mousedown", mousedownRight);
//document.getElementById("right").addEventListener("mouseup", mouseupRight);
document.getElementById("right").addEventListener("onpointerdown", mousedownRight);
document.getElementById("right").addEventListener("onpointerup", mouseupRight);

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