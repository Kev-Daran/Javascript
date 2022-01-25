const percentageOfWorld = population => population / 79;

populations = [
    1400,
    1440,
    6,
    9
];

for (let i = 0; i < populations.length; i++) {
    console.log(percentageOfWorld(populations[i]));
}