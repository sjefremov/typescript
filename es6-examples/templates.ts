let [firstName, lastName, age] = ["Stojancho", "Jefremov", 24];

// let display = "Hello, my name is " + firstName
//             + "and my last name is " + lastName
//             "I am " + age + "years old";

let display = `Hello, my name is ${firstName}, and my last name is ${lastName} I am ${age} years old`;

let [divColor, spanColor] = ['red', 'blue'];
let html = `<div style="color:${divColor}">Hello <span style="color:${spanColor}">World</span></div>`;

let first = [1, 2];
let second = [3, 4];
let third = [7, ...first, ...second];