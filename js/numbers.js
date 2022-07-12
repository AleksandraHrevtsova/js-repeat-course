console.log('NUMBERS');
// Constuctor Number()
console.log(Number('cvrdfv'));// NaN - Not A Number
console.log(Number('100'));// 100
console.log(Number('100ecfs'));// NaN
console.log(Number(''));// 0
console.log(Number(' '));// 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.dir(Number);

// Methods
let value = 3.14159;
console.log('length:', value.length); // undefined
console.log('value:', typeof value, value);
value = value.toFixed(2); // number => string
console.log('value:', typeof value, value);

let num = '5.567px';
console.log('parseFloat():', parseFloat(num)); // string => number
console.log('parseFloat():', parseInt(num)); // string => number

console.log('isNaN():', isNaN(num));// '5.567px' is Not A Number => true
console.log('isNaN():', isNaN(value));// 3.14159 is Not A Number => false

console.log('isNaN():', isNaN(undefined));// 3.14159 is Not A Number => true
console.log('isNaN():', isNaN(null));// 3.14159 is Not A Number => false

// console.log(+'122')