document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
    },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name} - ${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to cart</button>
    `;

    productList.appendChild(productDiv);
  });

  //NOTE: This allows us to target only the button otherwise
  //NOTE: We will get the issue where we have Event progogation or the bubbling effect
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const selectedId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((prod) => prod.id === selectedId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    //NOTE: Setting "your cart is empty text" to an empty string when we have items in there
    cartItems.innerHTML = "";
    let totalPrice = 0;

    //NOTE: If the length is 0 it still counts as a false so we will never actually enter this code block
    if (cart.length > 0) {
      // or if(cart.length) -> It's exactly the same
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.id = item.id;
        console.log(cartItem);

        if (cartItem.id)
          cartItem.innerHTML = ` 
                ${item.name} - ${item.price.toFixed(2)}`;

        cartItems.append(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutButton.addEventListener("click", () => {
    cart.length = 0;
    alert("Checked out successfully");
    renderCart();
  });
});
