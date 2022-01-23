const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;



const checkWinner = function (dolphinsAverage, koalasAverage) {
    return (dolphinsAverage > koalasAverage) ? `Dolphins win (${dolphinsAverage} vs ${koalasAverage})` : `Koalas win (${koalasAverage} vs ${dolphinsAverage})`;
}

const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

const dolphinsAverage = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(checkWinner(dolphinsAverage, koalasAverage));
