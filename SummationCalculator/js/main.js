/**
 * Created by Mark Lottes on 3/25/2015 for N221.
 */
function input(){

    //gets the user's input and puts it into an array split on the comma
    var input = document.getElementById("nums").value;
    var split = input.split(",");

    // takes the input, stores it in two variables,
    // one with the two numbers added together, the other with them divided
    var sum = parseInt(split[0]) + parseInt(split[1]);
    var average = (parseInt(split[0]) + parseInt(split[1])) / 2;

    // writes the answers on the DOM
    var WriteSum = document.getElementById("div2").innerHTML = "Addition Answer: " + sum;
    var WriteAverage = document.getElementById("div3").innerHTML = "Average Answer: " + average;


}

//reset-er
function reset() {

    var TextBoxReset = document.getElementById("div1").innerHTML = "Put two numbers here separated by a comma: <input type='text' id='nums'"+" "+">";

    var AdditionReset = document.getElementById("div2").innerHTML = "Addition Answer: ";

    var AverageReset = document.getElementById("div3").innerHTML = "Average Answer: ";

}
