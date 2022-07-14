// 'use strict';

function getParams(...params){
  console.log('DECLARATION use strict', this); // undefined
  console.log('DECLARATION', this); // Window
}
getParams(1, 2, 3)

const getParamsExpression = function (...params){
  console.log('EXPRESSION use strict', this); // undefined
  console.log('EXPRESSION', this); // Window

}
getParamsExpression(1, 2, 3);

const getParamsArrow =  (...params) => {
  console.log('ARROW use strict', this); // Window
  console.log('ARROW', this); // Window

}
getParamsArrow(1, 2, 3);

console.log('GLOBAL use strict', this); // Window
console.log('GLOBAL', this); // Window
