const markHeight = 1.88;
const markWeight = 95;

const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

let markHigherBMI;

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);