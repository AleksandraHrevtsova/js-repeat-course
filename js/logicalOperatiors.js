console.log('LOGICAL OPERATORS'); // && || ! !!
// && - logical AND - 
// вернет последнее трушное значение, если все тру
// иначе первое ложное
// console.log(true && 1); // 1
// console.log(true && 1 && 'user'); // 'user'
// console.log(true && 0 && 'user'); // 0
// console.log(true && 1 && ''); // ''
// console.log(false && 1 && 'user'); // false

// || - logical OR - 
// вернет последнее ложное значение, если все ложны
// иначе первое трушное
// console.log(true || 1); // true
// console.log(true || 1 || 'user'); // true
// console.log(true || 1 || ' '); // true
// console.log(true || 1 || ''); // true

// console.log(false || 1); // 1
// console.log(false || 1 || 'user'); // 1
// console.log(false || 1 || ' '); // 1
// console.log(false || 1 || '' || 'user'); // 1

// console.log(false || 0 || 'user'); // user
// console.log(false || 0 || ' ' || NaN); // ' '
// console.log(false || 0 || '' || NaN); // NaN

// && (last TRUE if all TRUE or 1st false)
// || (last false if all false or 1st TRUE)

// && for diapasones 18-65 years
// || for diferent values / one of some values

// ! - logical NOT
// console.log(!' '); // false
// console.log(!'user'); // false

// console.log(!1); // false
// console.log(!Infinity); // false

// console.log(!true); // false

// console.log(!''); // true
// console.log(!0); // true
// console.log(!NaN); // true
// console.log(!false); // true
// console.log(!undefined); // true
// console.log(!null); // true

// 2nd way to trasfer value to boolean type
// console.log(!!' '); // true
// console.log(!!'user'); // true
// console.log(!!1); // true
// console.log(!!Infinity); // true
// console.log(!!true); // true

// console.log(!!''); // false
// console.log(!!0); // false
// console.log(!!NaN); // false
// console.log(!!false); // false
// console.log(!!undefined); // false
// console.log(!!null); // false

// ?? - оператор нулевого слияния (null || undefined)
console.log('user' ?? '');
console.log('' ?? 'user');

console.log('user' ?? 0);
console.log(0 ?? 'user');

console.log('user' ?? NaN);
console.log(NaN ?? 'user');

console.log('user' ?? false);
console.log(false ?? 'user');

// ===========!!!================
console.log('user' ?? undefined);
console.log(undefined ?? 'user');

console.log('user' ?? null);
console.log(null ?? 'user');
// ===========!!!================