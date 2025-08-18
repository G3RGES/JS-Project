const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    renderProducts(products);
  } else {
    console.error("Error fetching products");
  }
};

xhr.send();

function renderProducts(products) {
  const container = document.getElementById("productsContainer");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <div class="card-buttons">
        <button class="add-btn">Add to Cart</button>
        <button class="details-btn">View Details</button>
      </div>
    `;

    card.querySelector(".add-btn").onclick = function () {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

    card.querySelector(".details-btn").onclick = function () {
      window.location.href = `../ProductDetails/index.html?id=${product.id}`;
    };

    container.appendChild(card);
  });
}
