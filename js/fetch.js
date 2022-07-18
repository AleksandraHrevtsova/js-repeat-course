console.log('FETCH');
const body = document.querySelector('body');
body.innerHTML = '';
// console.log(window);
// GET
// POST
// PUT | PATCH
// DELETE

// fetch(url, options)
// url - string https://www.pexels.com/
const options = {
  method: 'GET', // POST || PUT || PATCH || DELETE
  headers: {
    'x-token': 'dckdaslchenaouvheaousvndkjsnv',
    'Content-Type': 'Application/Json',
    "Authorization": 'api-key'
  },
  body: JSON.stringify({}) // POST || PUT || PATCH
}

const coctailsPath = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const response = fetch(coctailsPath).then((result)=>{
  // console.log("result:", result);
  return result.json();
}).then((data)=>{
  // console.log('data:', data);
  const drinks = data.drinks;
  console.log('drinks:', drinks);
  const drinksMarkup = createCoctailsMarkup(drinks, createCoctail);
  // console.log('drinksMarkup:', drinksMarkup);
  const list = createCoctailsListMarkup(drinksMarkup);
  console.log(list);
  body.insertAdjacentElement('afterbegin', list)
}).catch(err=>console.log(err));
// console.log('response:', response);

function createCoctail(coctail){
  return `<li id=${coctail.idDrink} class='coctailItem'>
            <h3>${coctail.strDrink}</h3>
            <div>
              <img src=${coctail.strDrinkThumb} alt=${coctail.strDrink} width='200'/>
            </div>
          </li>`
};

function createCoctailsMarkup(array, callback){
  return array.map((item)=>callback((item))).join('')
}

function createCoctailsListMarkup(elements){
  const ul = document.createElement('ul');
  ul.insertAdjacentHTML('afterbegin', elements);
  return ul
}