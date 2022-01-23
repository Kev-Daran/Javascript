const neighbours = ['Pakistan', 'China', 'Nepal', 'Bhutan',];

neighbours.push('Utopia');

neighbours.pop();

console.log(neighbours.includes('Germany') ? `European country!` : `Probably not a European country :D`);

const index = neighbours.indexOf('Bhutan');
neighbours[index] = 'Bangladesh';

console.log(neighbours);