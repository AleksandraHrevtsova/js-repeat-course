console.log('BRANCHES');

// if(condition){
//   statemnts
// }

// if(condition_1){
//   statements_1
// } else if(condition_2){
//   statements_2
// } else if(condition_3){
//   statements_3
// } else {
//   statements
// }

// if(condition){
//   statements_if
// } else {
//   statements_else
// }

// (condition) ? statements_if : statements_else

let cond = 1;
let result;
if(cond){
  result = 'Hello!';
}
console.log('result:', result);

let value = null;

if(value || typeof value === 'number'){
  console.log('Ok');
} else {
  console.log('ne Ok');
}

value || typeof value === 'number' ? console.log('Ok') : console.log('ne Ok');

let age = 18;
// if(age >= 18 && age <= 65){
//   console.log('age ok');
// }else {
//   console.log('age ne ok');
// }
(age >= 18 && age <= 65) ? console.log('age ok') : console.log('age ne ok');

let user = {};
console.log(typeof user); // {} => object
console.log(Boolean(user)); // {} => true
if(typeof user === 'object' && !user){
  console.log('user Ok');
} else {
  console.log('user ne Ok');
}

let data = null;
if(data === null) {
  console.log('data null');
} else {
  console.log('data available');
}

// const arr = [1, 2, 3, 4, 5];
const arr = null;
// if(arr && arr.length > 0) {
if(arr?.length > 0) {
  console.log('I have numbers');
} else {
  console.log('ERROR');
}

let num = ' ';
if(!isNaN(num) && Number(num) !== 0){
  if(num >= 0 && num < 3){
    console.log('num >= 0 && num < 3');
  }
  if(num >= 3){
    console.log('num >= 3');
  }
} else {
  console.log('who knows');
}
let number = '1';
switch(number){
  case '1':
    console.log('num === 1');
    break;
    default:
      console.log('Default message');
}