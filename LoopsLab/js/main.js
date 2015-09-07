/**
 * Created by Mark Lottes on 3/25/2015 for N221.
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "#FFFFFF";


for(var i = 0; i < 15; i++) {
   for (var j = 0; j < i; j++) {
       ctx.fillRect(j * 40, i * 40, 30, 30);

    }

}
