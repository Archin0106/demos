// Print statement
console.log('You can do amazing things in JavaScript');

// Data Types
// Data Type Categories
// 1. Primitive
// String, Number, Boolean, Undefined, Null

// 2. Non-primitive Data Type 
// Object, Array

// Decalre variable in JavaScript
// let, var, const - Keywords used for declaring variable

let fname = 'John';
console.log(fname);
// let age = 20;

const num = 10;
// num=20; //Error
console.log(num);

console.log(typeof (fname));

// Decision Making Blocks - If...else, Switch...Case
let x = 8;
if (x % 2 == 0) {
    console.log('Number is Even');
} else {
    console.log('Number is Odd');
}

let a = 10, b = 10;
if (a > b) {
    console.log('A is Greater');
} else if (b > a) {
    console.log('B is Greater');
} else {
    console.log('Both are equal');
}

// Logical Operators - && (and), || (or), ! (not)
let qual = 10, age = 18;
if (qual >= 10 && age >= 18) {
    console.log('You are eligible');
} else {
    console.log('You are not eligible');
}

let day = 2;
switch (day) {
    case 1: {
        console.log('Sunday');
        break;
    }
    case 2: {
        console.log('Monday');
        break;
    }
    case 3: {
        console.log('Tuesday');
        break;
    }
    case 4: {
        console.log('Wednesday');
        break;
    }
    case 5: {
        console.log('Thursday');
        break;
    }
    default: {
        console.log('Invalid Choice');
        break;
    }
}

// Iterative Statements - for, while, do...while
for (i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('Output with While loop');
let j = 1;
while (j <= 10) {
    j++;
    console.log(j);
}
console.log('Output with do while');
let k = 11;
do {
    console.log(k);
    k++;
} while (k <= 10);