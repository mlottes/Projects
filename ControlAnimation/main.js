/**
 * Created by Mark for N221 on 2/5/2015.
 */

// creates the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//define variables that will exist across function calls
//x and y will define the location of our circle

var x = 400;
var y = 100;


animate();
function animate(){
    //clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);


    //draw a red circle
    if (x < 400){
        ctx.fillStyle = "#000000";
    } else if(x > 400){
        ctx.fillStyle = "#00ff00";
    }


    fillCircle(x, y, 35);

    requestAnimationFrame(animate);
}

//called when the user clicks ' go left '
function goLeft(){
    x -= 25;
}

//called when the user clicks  'go right'
function goRight(){
    x += 25;
}


//utility circle function
function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}
