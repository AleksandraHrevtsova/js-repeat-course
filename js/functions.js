console.log('FUNCTIONS');
// getData('argument-1', 'argument-2');
// getData('argument-10', 'argument-20');
// getData('argument-100', 'argument-200');

// Function Declaration
function getData(param1 = 'default-1', param2= 'default-2', param3 = 'default-3'){
  // console.log('param1:', param1);
  // console.log('param2:', param2);
  // console.log('param3:', param3);
}
// REST
function getParams(...params){
  console.log('DECLARATION module', this); // undefined

  // console.log('params:', params);
  // params.forEach(param => console.log('param:', param));
}
getParams(1, 2, 3)

// Function Expression
// getParamsExpression(1, 2, 3); // ERROR

const getParamsExpression = function (...params){
  console.log('EXPRESSION module', this); // undefined

  // console.log('params:', params);
  // params.forEach(param => console.log('param:', param));
}
getParamsExpression(1, 2, 3);

// Arrow Function
// getParamsArrow(1, 2, 3); // Error
const getParamsArrow =  (...params) => {
  console.log('ARROW module', this); // undefined

  // console.log('params:', params);
  // params.forEach(param => console.log('param:', param));
}
getParamsArrow(1, 2, 3);

// =======
// This in functions
console.log('GLOBAL module', this); // undefined