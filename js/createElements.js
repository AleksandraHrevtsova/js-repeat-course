console.log('Create Elements');
const body = document.querySelector('body');

// 1 element - Object
const newElement = document.createElement('a');
console.dir(newElement);
console.log('newElement:', newElement);
newElement.href = '#';
newElement.textContent = 'link';
newElement.style.fontSize = '30px';
newElement.style.color = 'red';
newElement.classList.add('link');
console.log(newElement.href);

body.insertAdjacentElement('afterbegin', newElement); // render 1 element
//                         'beforeend'
//                         'beforebegin'
//                         'afterend'

const data = [{text: 'Hello'}, {text: 'World'}]

function createMarkup(array){
  return array.map(elem => {
    console.log('elem:', elem);
    const item = document.createElement('p');
    item.textContent = elem.text;
    return item
  })
}

const markup = createMarkup(data);
console.log('markup:', markup);

// 'afterend' => after
newElement.after(...markup); // render many elements
const title = document.createElement('h1');
title.textContent = 'create DOM elements';

// 'beforebegin' => before
newElement.before(title)

// 2 - create markup
const path = 'https://images.pexels.com/photos/11769686/pexels-photo-11769686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

const image = `<img src=${path} alt='image' width='200'/>`;
console.log('image:', image);

title.insertAdjacentHTML('afterend', image)

const images = [{path}, {path}, {path}, {path}]
function createImages(array){
  return array.map((item)=>{
    return `<img src=${item.path} alt='image' width='200'/>`;
  }).join('')
}
const imagesMarkup = createImages(images);
console.log('imagesMarkup:', imagesMarkup);

title.insertAdjacentHTML('beforebegin', imagesMarkup);

const sections = document.getElementsByClassName('section');
console.log('sections:', sections);
[...sections].forEach(section => section.innerHTML = ''); // revove markup in sections