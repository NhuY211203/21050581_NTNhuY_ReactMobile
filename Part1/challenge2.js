
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

var dolphinScore1 = 96;
var dolphinScore2 = 108;
var dolphinScore3 = 89;

var koalaScore1 = 88;
var koalaScore2 = 91;
var koalaScore3 = 110;


var avgDolphins = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
var avgKoalas = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log("Average score of Dolphins:", avgDolphins);
console.log("Average score of Koalas:", avgKoalas);


if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Dolphins win the trophy!");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("Koalas win the trophy!");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("It's a draw, and both teams win the trophy!");
} else {
    console.log("No team wins the trophy.");
}