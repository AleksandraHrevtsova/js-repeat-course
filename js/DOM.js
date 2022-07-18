console.log('DOM');// Document object Model
// console.log(window);
// alert('Hello!')
// addEventListener()

// GET HTML tags
// console.log(document); // === window.document

// to 1 tags
const body = document.querySelector('body')
// console.log('body:', body);
// console.dir(body);

const x = document.querySelector('body li')
// console.log(x);

// const item = document.querySelector('.currentItem'); // by class
// const item = document.querySelector('[data-atrr="currentItem"]'); // by attr
// const item = document.querySelector('#currentItem'); // by Id
const item = document.getElementById('currentItem');
// console.log('item:', item);

// to group of tags
const items = document.querySelectorAll('li'); 
// console.log('items:', items);

const titles = document.querySelectorAll('.sectionTitle'); // NodeList
titles.forEach(element => {
  // console.log(element);
});
// const titles = document.getElementsByClassName('sectionTitle'); // HTMLCollection
// [...titles].forEach(element => {
//   console.log(element);
// });

// console.log('titles:', titles);

// Properties
console.dir(body);
console.log('attributes:', body.attributes);
console.log('children:', body.children);

console.log('classList:', body.classList);
// .add(className)
// .remove(className)
// .contains(className)
// .replace(oldClass, newClass)
// .toggle(className)

console.log('dataset:', body.dataset);// data-attr_name

console.log('style:', body.style);
body.style.backgroundColor = 'yellow';


