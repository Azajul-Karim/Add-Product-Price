const product = document.querySelector("#product");
const price = document.querySelector("#price");
const btn = document.querySelector(".btn");
const productList = document.querySelector("#product-list");

let totalPrice = 0

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const newRow = document.createElement("tr");
  console.log(newRow);

  const newProductList = document.createElement("th");
  newProductList.innerHTML = product.value;
  newRow.appendChild(newProductList)

  
  const newPriceList = document.createElement("th");
  newPriceList.innerHTML = price.value;
  newRow.appendChild(newPriceList);

  productList.appendChild(newRow)

  totalPrice = totalPrice + parseInt(price.value)


  setTotal()

  
})

function setTotal(){
  const total = document.querySelector('.total')
  total.classList.add('use-active')
  total.innerHTML = 'Total'

  const totalP = document.querySelector('.totalP')
  totalP.classList.add('use-active')
  totalP.innerHTML = totalPrice
}