
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

function calculateAverageScore(score) {
    var sum = 0;
    for (var i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum / score.length;
}

function determineWinner(dolphinsScore, koalasScore) {
    var dolphinsAverage = calculateAverageScore(dolphinsScore);
    var koalasAverage = calculateAverageScore(koalasScore);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        return "Dolphins win!";
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        return "Koalas win!";
    } else if (dolphinsAverage >= 100 && koalasAverage >= 100 && dolphinsAverage === koalasAverage) {
        return "It's a draw!";
    } else {
        return "No winner!";
    }
}

var dolphinsScore = [96, 108, 89];
var koalasScore = [88, 91, 110];

console.log(determineWinner(dolphinsScore, koalasScore));