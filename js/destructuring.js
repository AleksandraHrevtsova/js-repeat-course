console.log('DESTRUCTURING');

const arr = ['Sandra', 'Dima', "Tania"];
//              0        1        2
//              1        2        3
const [ , , she] = arr;
// console.log('me:', me);
// console.log('he:', he);
console.log('she:', she);

const name = 'Sandra';

const user = {
  name: 'Tania',
  age: 18,
  isOnline: true
};

const { isOnline, name: userName } = user;
console.log('isOnline:', isOnline);
console.log('name => userName:', userName);