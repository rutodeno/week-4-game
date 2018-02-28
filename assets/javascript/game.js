// pseudo code

$(document).ready(function(){
// we create a variable gameTotal. This takes in  random number generated by the game .

function randomNumber(max, min){

    return Math.floor(Math.random()*(max-min)) + min;

} ;

var gameTotal =  randomNumber(121,19);
$("#randomNumber").text(gameTotal);

console.log("var gameTotal "+gameTotal)

// random number generation for the four crystals

var crystalNum1 = randomNumber (13,1);
var crystalNum2 = randomNumber (13,1);
var crystalNum3 = randomNumber (13,1);
var crystalNum4 = randomNumber (13,1);


console.log("crystalNum1 "+ crystalNum1);
console.log("crystalNum2 "+ crystalNum2);
console.log("crystalNum3 "+ crystalNum3);
console.log("crystalNum4 "+ crystalNum4);

// var totalSum keeps track of our additions

var totalSum = 0;
$("#counter").text(totalSum);

var wins = 0;

var losses = 0;

// with each click, we add the total

var alpha = $("#image1");
var bravo = $("#image2");
var charlie = $("#image3");
var delta = $("#image4");

function myFunc (imageId, crystalVal) {
    imageId.on("click", function() {

        totalSum += crystalVal;
        $("#counter").text(totalSum);
        

        console.log(totalSum + " totalsum");
        if (totalSum === gameTotal){

            wins++;
            $("#wins").text("Wins: "+wins);
           
            reset();
    
        } else if (totalSum > gameTotal) {

            losses++;
            $("#losses").text("Losses: "+losses);
            
            reset();
    
        }

        
    });
};

myFunc (alpha, crystalNum1);
myFunc (bravo, crystalNum2);
myFunc (charlie, crystalNum3);
myFunc (delta, crystalNum4);

function reset() {

    totalSum = 0;
    $("#counter").text(totalSum);
    gameTotal =  randomNumber(121,19);
    $("#randomNumber").text(gameTotal);

    crystalNum1 = randomNumber (13,1);

    crystalNum2 = randomNumber (13,1);
    crystalNum3 = randomNumber (13,1);
    crystalNum4 = randomNumber (13,1);

    console.log("round2 "+ crystalNum1);
    console.log("round2 "+ crystalNum2);
    console.log("round2 "+ crystalNum3);
    console.log("round2 "+ crystalNum4);

}


});