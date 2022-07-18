console.log('ASYNC');
const coctailsPath = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

async function getData(){
  try {
    const response = await fetch(coctailsPath);
    console.log('response:', response);
    const {drinks} = await response.json()
    console.log('data:', drinks);
  } catch (err) {
    console.log(err);
  }
}
getData()