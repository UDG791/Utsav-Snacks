// -------------------- Landing Page Logic --------------------
window.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const mainSite = document.getElementById("mainSite");

  if (landing && mainSite) {
    mainSite.style.display = "none"; // hide main site initially

    // Function to show main site
    window.showMainSite = function() {
      landing.style.display = "none";
      mainSite.style.display = "block";
    };

    // Optional: auto show main site after 3 seconds
    // setTimeout(showMainSite, 3000);
  }
});

// -------------------- Snacks Shop Logic --------------------
const snacks = [
  { name: "Lays Chips", price: 50, img: "lays.png" },
  { name: "Kurkure", price: 50, img: "kurkure.png" },
  { name: "Oreo", price: 30, img: "oreo.png" },
  { name: "Hide & Seek", price: 150, img: "hideseek.png" },
  { name: "KitKat", price: 100, img: "kitkat.png" },
  { name: "Snickers", price: 100, img: "snickers.png" },
  { name: "Dairy Milk", price: 100, img: "dairymilk.png" },
  { name: "Maggi", price: 100, img: "maggi.png" },
  { name: "Wai Wai", price: 25, img: "waiwai.png" },
  { name: "Rara Noodles", price: 40, img: "rara.png" },
  { name: "Frooti", price: 50, img: "frooti.png" },
  { name: "Coke", price: 100, img: "coke.png" },
  { name: "Pepsi", price: 100, img: "pepsi.png" },
  { name: "Sprite", price: 100, img: "sprite.png" },
  { name: "Fanta", price: 100, img: "fanta.png" },
  { name: "Bingo Mad Angles", price: 50, img: "madangles.png" },
];

let cart = [];
let total = 0;

const productGrid = document.getElementById("productGrid");
if (productGrid) {
  snacks.forEach(snack => {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img src="${snack.img}" alt="${snack.name}">
      <h3>${snack.name}</h3>
      <p>Rs. ${snack.price}</p>
      <button onclick="addToCart('${snack.name}', ${snack.price})">Add to Cart</button>
      <button onclick="buyNow('${snack.name}', ${snack.price})">Buy Now</button>
    `;
    productGrid.appendChild(product);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function buyNow(name, price) {
  alert(`Thanks for your purchase! You bought ${name}.`);
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs. ${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

const checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thanks for your order! Snacks will be delivered soon.");
      cart = [];
      total = 0;
      updateCart();
    }
  });
}

// -------------------- Contact Form --------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  });
}
