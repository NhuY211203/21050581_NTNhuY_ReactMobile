const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);

console.log(`Dolphins' điểm trung bình (Data 1): ${dolphinsAvg1}`);
console.log(`Koalas' điểm trung bình (Data 1): ${koalasAvg1}`);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Không đội nào thắng.');
    }
};

checkWinner(dolphinsAvg1, koalasAvg1);

const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

console.log(`\nDolphins' điểm trung bình (Data 2): ${dolphinsAvg2}`);
console.log(`Koalas' điểm trung bình (Data 2): ${koalasAvg2}`);

checkWinner(dolphinsAvg2, koalasAvg2);