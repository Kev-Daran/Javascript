const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    population: 1400,
    neighbours: ['China', 'Pakistan', 'Nepal'],
    checkIsland: function () {
        return this.isIsland = false;
    },
    describe: function () {
        return `${this.country} has ${this.neighbours.length} neighbours and the most biggest neighbour is ${this.neighbours[0]} and it is ${this.isIsland ? '' : 'not'} an island`;
    }
};

myCountry.checkIsland();
console.log(myCountry.describe());

