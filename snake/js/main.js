/**
 * Created by Mark Lottes for N221 on 2/17/2015.
 */

//canvas stuff
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

//arrays to store the last few positions of the mouse
var positionsX = [];
var positionsY = [];

//initialize the arrays to have 3 zeroes in them
for(var i = 0; i < 40; i = i + 2){
    positionsX[i] = 0;
    positionsY[i] = 0;
}



function mouseMoved(event){

    //clear the canvas
    ctx.clearRect(0, 0, 800,600);

    //push our current position into the array
    positionsX.push(event.offsetX);
    positionsY.push(event.offsetY);

    //remove oldest element from the array
    positionsX.shift();
    positionsY.shift();

    //parallel arrays, each should have the same length
    //loop through all of our positions and draw circles for each
    for(var i = 0; i < positionsX.length; i++) {
        ctx.fillStyle = "rgba(0, " + i * 3 + ", 255," + i / 20 + ")";
        fillCircle(positionsX[i], positionsY[i], i * 2);
    }

}


//utility circle function
function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}