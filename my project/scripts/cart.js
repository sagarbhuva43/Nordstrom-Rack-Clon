var cart = JSON.parse(localStorage.getItem("CartArray")) || [];

populate(cart);

function populate(cart){

  document.querySelector("#container2").innerHTML = "";


cart.map(function (elem, i) {
  var div1 = document.createElement("div");
  div1.setAttribute("class", "card2");

  var image = document.createElement("img");
  image.setAttribute("src", elem.imageURL);

  var cartItem = document.createElement("div");
  cartItem.setAttribute("class", "cartItem")

  var name = document.createElement("p");
  name.setAttribute("class", "nameCart");
  name.textContent = elem.productName;

  var div2 = document.createElement("div");
  div2.setAttribute("class", "flex");

  var p1 = document.createElement("p");
  p1.setAttribute("class", "priceCart");
  p1.textContent = "$" + elem.price;

  var p2 = document.createElement("h4");
  p2.setAttribute("class", "cashBackCart");
  p2.textContent ="Sale :" + elem.sale;

  var sizeCart = document.createElement("h4");
  sizeCart.setAttribute("class", "sizeCart");
  sizeCart.textContent = "Brand: "+ elem.Brand;

  var colorCart = document.createElement("h4");
  colorCart.setAttribute("class", "colorCart");
  colorCart.textContent = "Color: Black";


  var quantDiv = document.createElement("div");
  quantDiv.setAttribute("class", "quantDiv");


  var quantity = document.createElement("p");
  quantity.setAttribute("class", "quantity");
  quantity.textContent = ("Quantity:");

  var quantityCounter = document.createElement("input");
  quantityCounter.setAttribute("class", "quantityInput");
  quantityCounter.value = 1;

  quantDiv.append(quantity,quantityCounter);

  var remove = document.createElement("button");
  remove.setAttribute("class", "removeBtn");
  remove.textContent = "Remove";
  remove.addEventListener("click", function(){
    removeElement(i);
  })

  // div2.append(p1, p2);

  cartItem.append(name, div2, p2, sizeCart, colorCart,remove);
  div1.append(image, cartItem,quantDiv,p1);
  document.querySelector("#container2").append(div1);
});
}

function removeElement(i){
  cart.splice(i,1);
  console.log(i)
  populate(cart);
  localStorage.setItem("CartArray", JSON.stringify(cart));
  location.reload();
}

var total = cart.reduce(function (acc, cv) {
  return Number((acc + Number(cv.price)).toFixed(2));
}, 0);

document.querySelector(
  ".totalprice"
).textContent = `Subtotal: $${total}`;

