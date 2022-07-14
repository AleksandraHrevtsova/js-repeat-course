console.log('CLOSURE');
// LEXICAL ENVIRONMENT setClosure
let globalValue = 'global value';
function setClosure(){
  // LEXICAL ENVIRONMENT getValue
  let initValue = 'inner value';
  function getValue(value){
    // console.log(value);
    return initValue
  }
  return { getValue }
  // LEXICAL ENVIRONMENT getValue
}
// LEXICAL ENVIRONMENT setClosure

// console.log('initValue:', initValue); // ERROR
const closure = setClosure()
// console.log('closure:',closure);

const initValue = closure.getValue('Oh my value')
// console.log('initValue:', initValue); 

// Example - Counter

const counter = function(){
  let countValue = 0;
  function decrementValue(){
    // document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${countValue}</h1>`)
    return countValue -= 1;
  }
  function incrementValue(){
    // document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${countValue}</h1>`)
    return countValue += 1;
  }

  return {decrementValue, incrementValue}
}

const newCounter = counter()
console.log('newCounter:', newCounter);
let result = newCounter.decrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.decrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.decrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.incrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.incrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.incrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)

result = newCounter.incrementValue()
console.log('result:', result);
document.querySelector('body').insertAdjacentHTML('beforeend', `<h1>${result}</h1>`)


