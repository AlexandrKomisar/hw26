let fraction = {
    numerator: 1,
    denominator: 2
};

let frac1 = {};
let frac2 = {};
let res = {};
for (let key in fraction) {
    frac1[key] = fraction[key];
    frac2[key] = fraction[key];
    res[key] = fraction[key];
}

frac1.numerator = +prompt("Enter a first numerator", 0);
frac1.denominator = +prompt("Enter a first denumerator", 0);

frac2.numerator = +prompt("Enter a second numerator", 0);
frac2.denominator = +prompt("Enter a second denumerator", 0);
console.log(frac1.numerator);
console.log(frac1.denominator);
console.log(frac2.numerator);
console.log(frac2.denominator);

let addFractions = (frac1, frac2) => {
    let temp1 = 0;
    let temp2 = 0;
    res.denominator = frac1.denominator;
    res.denominator = frac1.denominator * frac2.denominator;
    temp1 = frac1.numerator * frac2.denominator;
    temp2 = frac2.numerator * frac1.denominator;
    res.numerator = temp1 + temp2;
    return `${res.numerator} / ${res.denominator}`;
};

let minusFractions = (frac1, frac2) => {
    let temp1 = 0;
    let temp2 = 0;
    res.denominator = frac1.denominator;
    res.denominator = frac1.denominator * frac2.denominator;
    temp1 = frac1.numerator * frac2.denominator;
    temp2 = frac2.numerator * frac1.denominator;
    res.numerator = temp1 - temp2;
    return `${res.numerator} / ${res.denominator}`;
};

let multiplyFractions = (frac1, frac2) => {
    res.denominator = frac1.denominator * frac2.denominator;
    res.numerator = frac1.numerator * frac2.numerator;
    return `${res.numerator} / ${res.denominator}`;
};
let divFractions = (frac1, frac2) => {
    res.denominator = frac1.denominator * frac2.numerator;
    res.numerator = frac1.numerator * frac2.denominator;
    return `${res.numerator} / ${res.denominator}`;
};
let reductionFraction = res => {
    let resNum;
    let resDen;
    for (let i = Math.max(res.denominator, res.numerator); i > 1; i--) {
        if (res.denominator % i == 0 && res.numerator % i == 0) {
            resNum = res.numerator / i;
            resDen = res.denominator / i;
        }
    }
    return `${resNum} / ${resDen}`;
};

console.log(addFractions(frac1, frac2));

console.log(minusFractions(frac1, frac2));

console.log(multiplyFractions(frac1, frac2));

console.log(divFractions(frac1, frac2));
console.log(reductionFraction(res));
