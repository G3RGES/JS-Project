document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
      total += product.price;

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <p>${product.title}</p>
        <p>$${product.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }

  window.removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  checkoutBtn.addEventListener("click", () => {
    // if (cart.length === 0) {
    //   alert("Your cart is empty");
    //   return;
    // }
    window.location.href = "../Checkout/Checkout.html";
  });

  renderCart();
});
