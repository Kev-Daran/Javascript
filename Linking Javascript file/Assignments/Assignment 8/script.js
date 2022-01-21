const speaksEnglish = true;
const populationLessThan50mil = true;
const isIsland = true;
const country = 'India'


if (speaksEnglish && populationLessThan50mil && !isIsland) {
    console.log(`You should live in ${country}`);
}

else {
    console.log(`${country} does not meet your criteria`);
}
