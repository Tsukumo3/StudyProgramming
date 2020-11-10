// array

// 配列を作る
function makeArray(){
  let shopping = ['bread', 'milk', 'cheese', 'ham', 'noodle'];
}

function displayProduct(){
  const list = document.getElementById('Product');
  const totalBox = document.getElementById('total');

  let products = [ 'パンツ:6.99',
                  '靴下:5.99',
                  'T シャツ:14.99',
                  'ズボン:31.99',
                  '靴:23.99'];

  let sum = 0.0;

  for (let i = 0; i < products.length; i++){
    //靴 — $23.99
    let product = products[i];
    let listItem  = document.createElement('li');

    let indexOfColon = product.indexOf(':');

    listItem.textContent = product.slice(0,indexOfColon) + ' - $' + product.slice(indexOfColon+1, product.length);
    list.appendChild(listItem);

    sum += Number(product.slice(indexOfColon+1, product.length ))
  }

  totalBox.textContent = '合計: $' + sum.toFixed(2);

}

displayProduct();

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchLog);

const list = document.getElementById('searchList');
const searchInput = document.getElementById("searchInput");
const saerchButton = document.getElementById("searchButton");

let myHistory = [];

function searchLog(){
  if (searchInput.value !== ""){
    myHistory.unshift(searchInput.value);

    list.innerHTML = "";

    for (let i = 0; i < myHistory.length; i++){
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    if (myHistory.length >= 5){
      myHistory.pop();
    }

    searchInput.value = "";
    searchInput.focus();
  }
}