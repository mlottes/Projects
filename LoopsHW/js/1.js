/**
 * Created by Mark Lottes for N221 on 2/17/2015.
 */

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

for(var i = 0; i < 800; i= i + 5) {
    //fill with a half-alpha white fill
    ctx.fillStyle = "rgb(255, 0, 0)";
    fillCircle(i * 20,80,25);
}

function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}