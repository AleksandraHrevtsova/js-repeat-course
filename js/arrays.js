console.log('ARRAYS');

// PUSH | UNSHIFT | POP | SHIFT
const array = [];
// console.log('array:', array);

const newArray = array;
// console.log('array:', array);
// console.log('newArray:', newArray);

// console.log('array === newArray:', array === newArray);

array.push('elem-1', 'elem-4');
// console.log('array === newArray:', array === newArray);
// console.log('array:', array);
// console.log('newArray:', newArray);

array.unshift('elem-2', 'elem-3');
// console.log('array:', array);

array.pop()
// console.log('array:', array);
array.pop()
// console.log('array:', array);

array.shift();
// console.log('array:', array);
array.shift();
// console.log('array:', array);
// console.log('newArray:', newArray);

// COPY ARRAYS
const initialArray = ['1', '2', '3'];
// console.log('initialArray:', initialArray);
// 1
const nextArray = [...initialArray];
// console.log('nextArray:', nextArray);
// console.log('initialArray === nextArray:', initialArray === nextArray); // false

const slicedArray = initialArray.slice();
// console.log('slicedArray:', slicedArray);
// console.log('initialArray === slicedArray:', initialArray === slicedArray); // false

const shortArray = initialArray.slice(1, 2);
// console.log('shortArray:', shortArray);
// console.log('initialArray === shortArray:', initialArray === shortArray); // false

// CONCAT array
const concatedArray = nextArray.concat(slicedArray, shortArray);
// console.log('concatedArray:', concatedArray);

// SLICE - НЕ мутирует исходный массив, он его копирует нормально по значению
const fullArray = [...initialArray, ...nextArray.slice(1, 2)];
// console.log('fullArray:', fullArray);

// SPLICE - мутирует исходный массив
const splicedDeleteArray = fullArray.splice(-1, 1);
// console.log('splicedDeleteArray:', splicedDeleteArray);
// console.log('fullArray:', fullArray);

const splicedReplaceArray = fullArray.splice(1, 2, 2, 10);
// console.log('splicedReplaceArray:', splicedReplaceArray);
// console.log('fullArray:', fullArray);

const splicedAddArray = fullArray.splice(2, 0, 3, 4, 5, 6, 7, 8, 9);
// console.log('splicedAddArray:', splicedAddArray);
// console.log('fullArray:', fullArray);

const resultArray = fullArray.splice(0, 1, 1);
// console.log('resultArray:', resultArray);
// console.log('fullArray:', fullArray);

// SPLIT & JOIN
// split: string => array
const str = 'I love JavaScript';
// console.log('str:', str);

const stringToArray = str.split(' ');
// console.log('stringToArray:', stringToArray);

// join: array => string
const names = ['Tania', 'Dima', 'Sasha'];
const arrayToString = names.join(', ');
// console.log('arrayToString:', arrayToString);

const data = [1, 35, 24, 17, 199, 65];
// CICLE for
for(let i = 0; i < data.length; i+=2){
  // console.log('for elem:', data[i]);
}

// FUNCTIONAL METHODS

for(let elem of data){
  // console.log('elem:', elem);
}
const forEachArray = data.forEach((element, index, array)=>{
  // console.log('element:', element, index, array);
});
// console.log('forEachArray:', forEachArray); // undefined

const mapArray = data.map((item)=>{
  // console.log('item:', item);
  return item + ''
})

// console.log('mapArray:', mapArray);
// console.log('data === mapArray:', data === mapArray);

const filterArray = data.filter((elem)=>{
  return elem % 2 !== 0 
});
// console.log('filterArray', filterArray);

const findElem = data.find((elem)=>{
  return elem % 2 !== 0
});
// console.log('findElem:', findElem);

const reducedArray = data.reduce((memo, elem) => {
  // console.log('memo:', memo);
  // console.log('elem:', elem);
  // console.log(data);
  return memo + elem;
  //      0 + 1
  //      1 + 35
  //      36 + 24
  //      69 + 17 
  //      ....
}, 0);
// console.log('reducedArray:', reducedArray);

const reducedNewArray = data.reduce((memo, elem)=>{
  // console.log(elem);
  if(elem <= 50){
    memo.push(elem)
  }
  return memo
}, []);

// console.log('reducedNewArray:', reducedNewArray);

const obj = data.reduce((memo, elem)=>{
  if (!memo.hasOwnProperty('even') || !memo.hasOwnProperty('odd')) {
    memo['even'] = [];
    memo['odd'] = [];
  }
  if(elem % 2 == 0){
    memo['even'].push(elem);
  } else {
    memo['odd'].push(elem);
  }
  return memo;
}, {});
// console.log('obj:', obj);

const reducedString = data.reduce((memo, elem)=>{
  // console.log(memo);
  return memo + elem
}, '');
// console.log('reducedString:', reducedString);

// SORT - mutatad initial array
console.log(data);
const x = data.sort((min, max)=>{
  // return min - max;
  return max - min
});
// console.log(x === data); // copy by reference

const fruits = ['apple', 'peach', 'melon', 'pineapple']
// console.log(fruits.sort());

// some & every
// some ||
// every &&
const someValue = data.some((elem)=>{
  return elem % 2 === 0
});
// console.log('someValue:', someValue);

const everyValue = data.every((elem)=>{
  return elem % 2 === 0
})
// console.log('everyValue:', everyValue);
