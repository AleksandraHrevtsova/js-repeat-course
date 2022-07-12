console.log('STRINGS');
// length     123456
const name = 'Sandra';
// index      012345
const lastName = 'Hrevtsova';

// const fullName = name + ' ' + lastName; // ES5
const fullName = `${name} ${lastName}`; // ES6
console.log(fullName);

// Constructor String()
let num = 12;
console.log(typeof num, num);
num = String(num);
console.log(typeof num, num);

// PROPERTIES
console.log('length name:', name.length);
console.log('length fullName:', fullName.length);

// METHODS for string only
console.dir(String);
let str = 'VaLuE';
console.log('loLowerCase():', str.toLowerCase());
console.log('ValuE'.toLowerCase());
console.log('loLowerCase():', str.toUpperCase());
console.log('ValuE'.toUpperCase());
let inputValue = '      value     ';
console.log('value length:', inputValue.length);
inputValue = inputValue.trim();
console.log('inputValue.trim():', inputValue.length);
console.log('fullName.trim():', fullName.length);


// METHODS for string and array
console.log('concat:', name.concat(' ', lastName)); 
console.log('indexOf:', name.indexOf('sa')); // -1
console.log('indexOf:', name.indexOf('so')); // -1
console.log('indexOf:', name.indexOf('Sa')); // 0
console.log('indexOf:', name.indexOf('an')); // 1

console.log('includes:', name.includes('sa')); // -1
console.log('includes:', name.includes('so')); // -1
console.log('includes:', name.includes('Sa')); // 0
console.log('includes:', name.includes('an')); // 1


