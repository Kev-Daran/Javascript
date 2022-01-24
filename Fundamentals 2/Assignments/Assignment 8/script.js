const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: 1400,
    neighbours: ['China', 'Pakistan', 'Nepal']
};

console.log(`${myCountry.country} has ${myCountry.neighbours.length} neighbours and the most biggest neighbour is ${myCountry.neighbours[0]}`);

myCountry.population += 2;

console.log(myCountry.population);