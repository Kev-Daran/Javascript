const percentageOfWorld3 = population => population / 79;

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world`

const country1 = 'China';
const population1 = 1440;

const country2 = 'India';
const population2 = 1400;

const country3 = 'Finland';
const population3 = 5;

console.log(describePopulation(country1, population1));

