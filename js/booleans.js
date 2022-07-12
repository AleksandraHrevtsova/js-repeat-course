console.log('BOOLEANS');
// Constructor Boolean()
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(Boolean('1')); // true
console.log(Boolean('1scdscs')); // true
console.log(Boolean(1)); // true
console.log(Boolean(10000000000)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(true)); // true

// 6 FALSY VALUES
console.log(Boolean('')); // false

console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(false)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean(null)); // false