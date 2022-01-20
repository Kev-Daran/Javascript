const country = "India";
const continent = "Asia";
let population = 1400;

const isIsland = false;
let language;

language = 'Hindi';

console.log(population / 2, population + 1);

console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
}

else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}