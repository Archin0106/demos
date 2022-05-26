// Declaring Arrays in JavaScript
let arr = ['Apple', 'Mango', 'Cherry', 'Banana', 'Grapes', 'Orange'];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);
arr.push('Lichi');
console.log(arr);
arr.splice(2, 1);
console.log(arr);
console.log(arr.indexOf('Mango'));
arr.shift();
console.log(arr);
arr.unshift('Guava');
console.log(arr);

// Declaring Object in JavaScript
let person = {
    fname: 'Peter',
    lname: 'Parker',
    age: 25,
    show: function () {
        // console.log('Your name is ' + this.fname + '. You are ' + this.age + ' years old.');
        console.log(`Your name is ${this.fname}. You are ${this.age} years old.`);
    }
};

console.log(person.fname);
console.log(person.lname);
person.show();

let products = [
    {
        name: 'Laptop',
        brand: 'Dell',
        quantity: 5,
        price: 35000
    },
    {
        name: 'Tablet',
        brand: 'Lenovo',
        quantity: 8,
        price: 15000
    },
    {
        name: 'Camera',
        brand: 'Canon',
        quantity: 3,
        price: 27000
    },
    {
        name: 'Desktop',
        brand: 'HP',
        quantity: 9,
        price: 92000
    }
];

// Iterating in array using simple for loop
for (i = 0; i < products.length; i++) {
    console.log(products[i].name);
}

// Iterating in array using foreach function
products.forEach(function (value, index) {
    console.log(`${index} ${value.name}`);
});

// Iterating in array using map function
products.map(function (item) {
    console.log(item.brand);
});

// Iterating using for of loop
for (const item of products) {
    console.log(item.name);
}

// Filter function
let result = products.filter(item => item.price > 30000);
console.log(result);

// Functions in JavaScript

// Function Declaration
// Method 1 -- Old declaration method
// function sayHello() {
//     console.log('Welcome to JavaScript');
// }

// Method 2 -- Latest declaration method (ES6 Syntax)
const sayWelcome = () => {
    console.log('Welcome to JavaScript');
}

const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

const factorial = (num) => {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

// Function Calling Statement
sayWelcome();
sayHello('John');

let res = factorial(5);
console.log(res);