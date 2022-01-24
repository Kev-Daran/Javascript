markInfo = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        return this.BMI = this.weight / (this.height ** 2);
    }
};

johnInfo = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        return this.BMI = this.weight / (this.height ** 2);
    }
};

if (johnInfo.calcBMI() > markInfo.calcBMI()) {
    console.log(`John Smith's BMI (${johnInfo.BMI}) is higher than Mark Miller's(${markInfo.BMI})!`);
}

else {
    console.log(`Mark Miller's BMI (${markInfo.BMI}) is higher than John Smith's(${johnInfo.BMI})!`);
}