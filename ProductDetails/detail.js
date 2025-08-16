function displayDetail() {
  var product = JSON.parse(xhr.responseText);

  // console.log('Product Data:', product);
  // console.log('Product Images:', product.image);

  document.getElementById("productImage").src = product.image;

  document.getElementById("productImage").alt =
    product.title || "Product Image";

  document.getElementById("productTitle").textContent =
    product.title || "No title available";
  document.getElementById("productDescription").textContent =
    product.description || "No description available";
  document.getElementById("productCategory").textContent =
    product.category || "N/A";
  document.getElementById("productPrice").textContent = product.price
    ? product.price.toFixed(2)
    : "N/A";

  const addToCartBtn = document.getElementById("addToCartBtn");

  addToCartBtn.onclick = function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Store minimal but complete product data
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.title} has been added to your cart`);
  };
}

const productId = new URLSearchParams(window.location.search).get("id");
const apiUrl = `https://fakestoreapi.com/products/${productId}`;
var xhr = new XMLHttpRequest();
xhr.open("Get", `https://fakestoreapi.com/products/${productId}`);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
    console.log(JSON.parse(xhr.responseText));
    displayDetail();
  }
};
xhr.send();
