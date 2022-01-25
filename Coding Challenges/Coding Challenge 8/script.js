const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}

console.log(tips, total);

console.log(`Average of total amount = ${calcAvg(total)}`);

