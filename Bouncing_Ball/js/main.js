/**
 * Created by Mark Lottes for N221 on 2/21/2015.
 */


//basic canvas stuff
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');


//make the ball to draw
var balls = [];

//fill array with 4 different circles
for (var i = 0; i < 8; i++){
    var aBall = new Ball(Math.random() * 200, Math.random() * 200, 25, getRandomColor(), Math.random() * 7, Math.random() * 7);
    balls.push(aBall);

}

//ready to draw
update();
function update(){

    //clear the canvas
    ctx.fillStyle = "#000000";
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    for (var i = 0; i < balls.length; i++) {

        //draw the ball
        ctx.fillStyle = balls[i].color;
        fillCircle(balls[i].x, balls[i].y, balls[i].radius);

        //update ball location
        balls[i].x += balls[i].velocity.x;
        balls[i].y += balls[i].velocity.y;

        //bounce the ball off the walls
        if (balls[i].y > 400) {
            balls[i].y = 400;
            balls[i].velocity.y *= -1;
        }

        if (balls[i].x > 400) {
            balls[i].x = 400;
            balls[i].velocity.x *= -1;
        }

        if (balls[i].y < 1) {
            balls[i].y = 1;
            balls[i].velocity.y *= -1;
        }
        if (balls[i].x < 1) {
            balls[i].x = 1;
            balls[i].velocity.x *= -1;
        }
    }

    //to draw again
    requestAnimationFrame(update);
}


// -------class for ball------
function Ball(aX, aY, aRadius, aColor, aVelocityX, aVelocityY) {

    this.x = aX;
    this.y = aY;
    this.radius = aRadius;
    this.color = aColor;
    this.velocity = {
        x: aVelocityX,
        y: aVelocityY
    }


}


//---utility circle function
function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

//-------utility color randomizer------------
function getRandomColor(){
    var letters ='0123456789ABCDEF'.split('');
    var color ='#';
    for(var i =0; i <6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;}