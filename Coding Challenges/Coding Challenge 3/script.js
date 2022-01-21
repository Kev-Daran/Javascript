// const speaksEnglish = true;
// const populationLessThan50mil = true;
// const isIsland = true;
// const country = 'India'


// if (speaksEnglish && populationLessThan50mil && !isIsland) {
//     console.log(`You should live in ${country}`);
// }

// else {
//     console.log(`${country} does not meet your criteria`);
// }


const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 10;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 130;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(`Dolphins score: ${dolphinsAverageScore}
Koalas score: ${koalasAverageScore}`);

if (dolphinsAverageScore < 100 && koalasAverageScore < 100) {
    console.log(`Nobody won the trophy...`);
}

else if (dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphins win!`);
}

else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`It's a draw!`);
}

else {
    console.log(`Koalas win!`);
}