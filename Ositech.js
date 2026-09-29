const PRODUCTS = [
  {
    id: 1,
    name: "Ositech Gaming Laptop Intel i9 14th Gen RTX 4090",
    category: "Laptops",
    price: 1899.99,
    oldPrice: 2899.99,
    discount: 34,
    rating: 4.9,
    sold: "3.1k",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { CPU: "Intel i9-14900HX", GPU: "RTX 4090 16GB", RAM: "64GB DDR5" },
    desc: "Desktop replacement workstation designed for high FPS ray-traced gaming.",
    reviews: [
      { name: "Kofi M.", rating: 5, text: "The performance is unreal, and the screen looks gorgeous for gaming and work." },
      { name: "Dina A.", rating: 4, text: "Strong build quality and fast enough for everything I throw at it." }
    ]
  },
  {
    id: 2,
    name: "Ultralight Carbon Pro Laptop M3 Chip",
    category: "Laptops",
    price: 949.0,
    oldPrice: 1399.0,
    discount: 32,
    rating: 4.8,
    sold: "5.8k",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { Display: "14.2 OLED", RAM: "16GB", Storage: "512GB SSD" },
    desc: "Super-sleek productivity laptop with 18-hour battery longevity.",
    reviews: [
      { name: "Owusu T.", rating: 5, text: "Lightweight and super smooth for travel and daily work." },
      { name: "Jesse V.", rating: 4, text: "Battery life is excellent, and the screen is sharp and vibrant." }
    ]
  },
  {
    id: 3,
    name: "RGB Mechanical Keyboard Hot-Swappable Switches",
    category: "Accessories",
    price: 49.99,
    oldPrice: 119.99,
    discount: 58,
    rating: 4.7,
    sold: "12.4k",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { Switch: "Linear Red", Connectivity: "Wireless / USB-C" },
    desc: "Custom tuned mechanical switch matrix with sound dampening foam.",
    reviews: [
      { name: "Leah R.", rating: 5, text: "The keys feel premium and the sound is clean without being too loud." },
      { name: "Tunde H.", rating: 4, text: "Great for both work and gaming; easy to customize." }
    ]
  },
  {
    id: 4,
    name: "Precision Ergonomic Wireless Gaming Mouse 26K DPI",
    category: "Accessories",
    price: 29.5,
    oldPrice: 69.99,
    discount: 57,
    rating: 4.9,
    sold: "8.9k",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { Sensor: "Optical 26K", Weight: "54g" },
    desc: "Ultra lightweight esport mouse engineered for zero latency tracking.",
    reviews: [
      { name: "Maya K.", rating: 5, text: "The sensor is incredibly accurate and the shape fits my hand perfectly." },
      { name: "Kevin B.", rating: 4, text: "Lightweight and responsive with smooth click feedback." }
    ]
  },
  {
    id: 5,
    name: "34-inch Curved OLED Gaming Monitor 240Hz",
    category: "Monitors",
    price: 699.0,
    oldPrice: 1199.0,
    discount: 41,
    rating: 4.9,
    sold: "1.2k",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { Res: "3440 x 1440", Hz: "240Hz OLED" },
    desc: "Deep blacks and ultra-low response times for simulator immersion.",
    reviews: [
      { name: "Sonia N.", rating: 5, text: "This monitor is gorgeous and makes games feel far more immersive." },
      { name: "Isaac P.", rating: 4, text: "Excellent response time and the curve is very comfortable for long sessions." }
    ]
  },
  {
    id: 6,
    name: "Ositech Liquid Cooled Rig Ryzen 9 + RTX 4080",
    category: "Desktops",
    price: 2199.0,
    oldPrice: 3200.0,
    discount: 31,
    rating: 5.0,
    sold: "750",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1591799264318-caebf4138068?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
    ],
    specs: { CPU: "Ryzen 9 7950X", RAM: "64GB DDR5" },
    desc: "Pre-assembled liquid-cooled powerhouse ready out of box.",
    reviews: [
      { name: "Ruth O.", rating: 5, text: "No setup issues, and it absolutely crushes gaming and editing workloads." },
      { name: "Evan C.", rating: 5, text: "Quiet, powerful, and built like a flagship workstation." }
    ]
  }
];

let currentFilter = "all";
let searchQuery = "";
let cart = readStorage("ositech_cart", []);
let wishlist = readStorage("ositech_wishlist", []);
let activePromoDiscount = 0;
let selectedModalProduct = null;
let darkMode = readStorage("ositech_dark_mode", false);
let selectedCountry = readStorage("ositech_country", "United States");
let selectedCurrency = readStorage("ositech_currency", "USD");

const COUNTRY_CURRENCY = {
  "United States": "USD",
  "United Kingdom": "GBP",
  "Nigeria": "NGN",
  "Germany": "EUR",
  "Canada": "CAD",
  "Japan": "JPY"
};

const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  NGN: 1500,
  CAD: 1.36,
  JPY: 157
};

function formatCurrency(amount, currency = selectedCurrency) {
  const value = Number(amount) * (CURRENCY_RATES[currency] || 1);
  const symbolMap = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    NGN: "₦",
    CAD: "C$",
    JPY: "¥"
  };

  const digits = currency === "JPY" ? 0 : 2;
  return `${symbolMap[currency] || "$"}${value.toFixed(digits)}`;
}

function convertPrice(amount, currency = selectedCurrency) {
  const base = Number(amount) || 0;
  return base * (CURRENCY_RATES[currency] || 1);
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applySavedPreferences();
  renderProducts();
  renderWishlistItems();
  updateBadges();
  renderCategoryCounts();
  startTimer();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  const countrySelect = document.getElementById("countrySelect");
  const currencySelect = document.getElementById("currencySelect");

  if (countrySelect) {
    countrySelect.value = selectedCountry;
    countrySelect.addEventListener("change", (event) => {
      selectedCountry = event.target.value;
      selectedCurrency = COUNTRY_CURRENCY[selectedCountry] || selectedCurrency;
      localStorage.setItem("ositech_country", JSON.stringify(selectedCountry));
      localStorage.setItem("ositech_currency", JSON.stringify(selectedCurrency));
      applySavedPreferences();
      renderProducts();
      renderCartItems();
      renderWishlistItems();
      showToast(`Country set to ${selectedCountry}`);
    });
  }

  if (currencySelect) {
    currencySelect.value = selectedCurrency;
    currencySelect.addEventListener("change", (event) => {
      selectedCurrency = event.target.value;
      localStorage.setItem("ositech_currency", JSON.stringify(selectedCurrency));
      applySavedPreferences();
      renderProducts();
      renderCartItems();
      renderWishlistItems();
      showToast(`Currency set to ${selectedCurrency}`);
    });
  }

  const cardNumber = document.getElementById("cardNumber");
  if (cardNumber) {
    cardNumber.addEventListener("input", formatCardNumber);
  }

  const cardExpiry = document.getElementById("cardExpiry");
  if (cardExpiry) {
    cardExpiry.addEventListener("input", formatExpiry);
  }

  const cardCvv = document.getElementById("cardCvv");
  if (cardCvv) {
    cardCvv.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
    });
  }
});

function applySavedPreferences() {
  const countrySelect = document.getElementById("countrySelect");
  const currencySelect = document.getElementById("currencySelect");

  if (countrySelect) {
    countrySelect.value = selectedCountry;
  }

  if (currencySelect) {
    currencySelect.value = selectedCurrency;
  }
}

function toggleTheme() {
  darkMode = !darkMode;
  localStorage.setItem("ositech_dark_mode", JSON.stringify(darkMode));
  applyTheme();
}

function applyTheme() {
  const root = document.body;
  root.classList.toggle("dark-mode", darkMode);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }
}

function renderCategoryCounts() {
  const counts = PRODUCTS.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  document.querySelectorAll(".cat-btn").forEach((button) => {
    const category = button.dataset.category;
    const countEl = button.querySelector(".cat-count");
    const total = category === "all" ? PRODUCTS.length : counts[category] || 0;
    if (countEl) countEl.innerText = total;
  });
}

function startTimer() {
  let seconds = 4 * 3600 + 22 * 60 + 15;
  setInterval(() => {
    seconds = seconds > 0 ? seconds - 1 : 12 * 3600;
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    const timer = document.getElementById("headerTimer");
    if (timer) timer.innerText = `${h}:${m}:${s}`;
  }, 1000);
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = PRODUCTS.filter((product) => {
    const catMatch = currentFilter === "all" || product.category === currentFilter;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const itemCount = document.getElementById("itemCountBadge");
  if (itemCount) itemCount.innerText = `${filtered.length} Deals`;

  filtered.forEach((product) => {
    const isWish = wishlist.some((item) => item.id === product.id);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div>
        <button onclick="toggleWishlist(${product.id}, event)" class="wish-btn">
          <i class="${isWish ? "fa-solid fa-heart text-brand" : "fa-regular fa-heart"}"></i>
        </button>
        <div class="discount-badge">-${product.discount}%</div>
        <div onclick="openProductModal(${product.id})" class="product-img">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-info">
          <span class="product-cat">${product.category}</span>
          <h3 onclick="openProductModal(${product.id})" class="product-name">${product.name}</h3>
          <div>
            <span class="price-current">${formatCurrency(product.price)}</span>
            <span class="price-old">${formatCurrency(product.oldPrice)}</span>
          </div>
        </div>
      </div>
      <div class="product-actions">
        <button onclick="addToCart(${product.id}, event)" class="btn-secondary"><i class="fa-solid fa-cart-plus"></i> Add</button>
        <button onclick="quickBuy(${product.id})" class="btn-primary"><i class="fa-solid fa-bolt"></i> Buy</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterByCategory(cat, event) {
  currentFilter = cat;
  document.querySelectorAll(".cat-btn").forEach((button) => button.classList.remove("active-cat"));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active-cat");
  }

  const title = document.getElementById("currentCategoryTitle");
  if (title) title.innerText = cat === "all" ? "All Products" : cat;

  renderProducts();
}

function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  searchQuery = searchInput ? searchInput.value.trim() : "";
  renderProducts();
}

function addToCart(id, event, qty = 1) {
  if (event) event.stopPropagation();

  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });

  saveCart();
  updateBadges();
  renderCartItems();
  showToast(`Added "${product.name.substring(0, 15)}..." to Cart!`);
}

function saveCart() {
  localStorage.setItem("ositech_cart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("ositech_wishlist", JSON.stringify(wishlist));
}

function updateBadges() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cartBadge");
  if (badge) badge.innerText = count;
}

function toggleCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  drawer.classList.toggle("hidden");
  if (!drawer.classList.contains("hidden")) renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById("cartItemsList");
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-sub text-center py-6">Your shopping cart is empty.</p>';
    calculateTotals();
    return;
  }

  cart.forEach((item) => {
    container.innerHTML += `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:0.75rem;">
        <div>
          <strong>${item.name}</strong>
          <div class="text-brand font-bold">${formatCurrency(item.price)} x ${item.quantity}</div>
        </div>
        <button onclick="removeCartItem(${item.id})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  });
  calculateTotals();
}

function removeCartItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateBadges();
  renderCartItems();
}

function calculateTotals() {
  const sub = cart.reduce((sum, item) => sum + convertPrice(item.price) * item.quantity, 0);
  const disc = sub * activePromoDiscount;
  const total = sub - disc;

  const subtotal = document.getElementById("cartSubtotal");
  const discount = document.getElementById("cartDiscount");
  const totalEl = document.getElementById("cartTotal");

  if (subtotal) subtotal.innerText = formatCurrency(sub);
  if (discount) discount.innerText = `-${formatCurrency(disc)}`;
  if (totalEl) totalEl.innerText = formatCurrency(total);

  const checkout = document.getElementById("checkoutTotalDisplay");
  if (checkout) checkout.innerText = formatCurrency(total);
}

function applyPromoCode() {
  const input = document.getElementById("promoCodeInput");
  const code = input ? input.value.trim().toUpperCase() : "";

  if (code === "OSITECH10") {
    activePromoDiscount = 0.1;
    showToast("10% Coupon Discount Applied!");
  } else {
    activePromoDiscount = 0;
    showToast("Invalid code! Try OSITECH10");
  }
  calculateTotals();
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast("Cart is empty!");
    return;
  }

  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.add("hidden");

  const transfer = document.getElementById("transferRefCode");
  if (transfer) transfer.value = "OSI-REF-" + Math.floor(100000 + Math.random() * 900000);

  const sub = cart.reduce((sum, item) => sum + convertPrice(item.price) * item.quantity, 0);
  const total = sub * (1 - activePromoDiscount);
  const checkoutDisplay = document.getElementById("checkoutTotalDisplay");
  if (checkoutDisplay) checkoutDisplay.innerText = formatCurrency(total);

  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("hidden");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("hidden");
}

function selectPaymentTab(method) {
  const bankPanel = document.getElementById("bankDetailsPanel");
  const cardPanel = document.getElementById("cardDetailsPanel");
  const labelBank = document.getElementById("labelBank");
  const labelCard = document.getElementById("labelCard");

  if (bankPanel) bankPanel.classList.add("hidden");
  if (cardPanel) cardPanel.classList.add("hidden");
  if (labelBank) labelBank.classList.remove("active");
  if (labelCard) labelCard.classList.remove("active");

  if (method === "bank") {
    if (bankPanel) bankPanel.classList.remove("hidden");
    if (labelBank) labelBank.classList.add("active");
  } else {
    if (cardPanel) cardPanel.classList.remove("hidden");
    if (labelCard) labelCard.classList.add("active");
  }
}

function confirmOrderPayment() {
  const name = document.getElementById("custName");
  if (!name || !name.value.trim()) {
    showToast("Please enter your name!");
    return;
  }

  const paymentMethod = document.getElementById("labelCard").classList.contains("active") ? "card" : "bank";
  if (paymentMethod === "card") {
    const cardNumber = document.getElementById("cardNumber");
    const expiry = document.getElementById("cardExpiry");
    const cvv = document.getElementById("cardCvv");

    if (!cardNumber || !cardNumber.value.replace(/\s/g, "").length || cardNumber.value.replace(/\s/g, "").length < 15) {
      showToast("Please enter a valid card number!");
      return;
    }
    if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry.value)) {
      showToast("Please enter a valid expiry date MM/YY");
      return;
    }
    if (!cvv || cvv.value.length < 3) {
      showToast("Please enter a valid CVV");
      return;
    }
  }

  const sub = cart.reduce((sum, item) => sum + convertPrice(item.price) * item.quantity, 0);
  const total = sub * (1 - activePromoDiscount);

  const receiptOrderNum = document.getElementById("receiptOrderNum");
  const receiptTotal = document.getElementById("receiptTotal");
  const receiptRefCode = document.getElementById("receiptRefCode");

  if (receiptOrderNum) receiptOrderNum.innerText = "#OSI-" + Math.floor(10000 + Math.random() * 90000);
  if (receiptTotal) receiptTotal.innerText = formatCurrency(total);
  if (receiptRefCode) receiptRefCode.innerText = document.getElementById("transferRefCode")?.value || "OSI-REF-000000";

  cart = [];
  saveCart();
  updateBadges();
  renderCartItems();

  closeCheckoutModal();
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.remove("hidden");
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.add("hidden");
}

function showToast(msg) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text);
  showToast(`${label} copied to clipboard!`);
}

function formatCardNumber(event) {
  const value = event.target.value.replace(/\D/g, "").slice(0, 16);
  const formatted = value.replace(/(.{4})/g, "$1 ").trim();
  event.target.value = formatted;
}

function formatExpiry(event) {
  const value = event.target.value.replace(/\D/g, "").slice(0, 4);
  if (value.length > 2) {
    event.target.value = `${value.slice(0, 2)}/${value.slice(2)}`;
  } else {
    event.target.value = value;
  }
}

function openProductDetailPage(id) {
  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) return;

  selectedModalProduct = product;
  const container = document.getElementById("detailPageContent");
  const overlay = document.getElementById("productDetailPage");

  if (!container || !overlay) return;

  const related = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4);
  const reviewMarkup = product.reviews
    .map(
      (review) => `
        <div class="review-item">
          <div class="review-top">
            <strong>${review.name}</strong>
            <span class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
          </div>
          <p>${review.text}</p>
        </div>
      `
    )
    .join("");

  const gallery = product.images
    .map(
      (image, index) => `
        <button class="detail-thumb ${index === 0 ? "active" : ""}" type="button" onclick="changeDetailImage('${image}', this)">
          <img src="${image}" alt="${product.name} view ${index + 1}" />
        </button>
      `
    )
    .join("");

  const relatedMarkup = related
    .map(
      (item) => `
        <div class="related-card" onclick="openProductDetailPage(${item.id})">
          <img src="${item.image}" alt="${item.name}" />
          <div class="related-card-body">
            <span class="product-cat">${item.category}</span>
            <h4>${item.name}</h4>
            <div class="price-row">
              <span class="price-current">${formatCurrency(item.price)}</span>
              <span class="price-old">${formatCurrency(item.oldPrice)}</span>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  container.innerHTML = `
    <div class="detail-page-header">
      <div class="detail-breadcrumb">
        <button class="back-link" type="button" onclick="closeProductDetailPage()">Back to products</button>
        <span>/</span>
        <span>${product.category}</span>
      </div>
      <button class="cta-btn" type="button" onclick="addToCart(${product.id})">Add to cart</button>
    </div>

    <div class="detail-hero">
      <div class="detail-gallery">
        <img id="detailMainImage" class="detail-main-image" src="${product.images[0]}" alt="${product.name}" />
        <div class="detail-thumb-row">${gallery}</div>
      </div>

      <div class="detail-info">
        <span class="product-cat">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="meta-row">
          <span class="rating-pill"><i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)}</span>
          <span class="sold-pill"><i class="fa-solid fa-fire"></i> ${product.sold} sold</span>
        </div>
        <div class="price-row">
          <span class="price-current">${formatCurrency(product.price)}</span>
          <span class="price-old">${formatCurrency(product.oldPrice)}</span>
          <span class="discount-badge detail-discount">-${product.discount}%</span>
        </div>
        <p class="detail-description">${product.desc}</p>
        <ul class="spec-list">${Object.entries(product.specs)
          .map(([key, value]) => `<li class="spec-item"><span>${key}</span><strong>${value}</strong></li>`)
          .join("")}</ul>
        <div class="product-modal-actions">
          <button class="cta-btn" type="button" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn-secondary" type="button" onclick="quickBuy(${product.id})">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="detail-lower-grid">
      <section class="detail-panel review-panel">
        <h3>Customer reviews</h3>
        <div class="review-list">${reviewMarkup}</div>
      </section>

      <section class="detail-panel related-panel">
        <h3>Related products</h3>
        <div class="related-grid">${relatedMarkup}</div>
      </section>
    </div>
  `;

  overlay.classList.remove("hidden");
  document.body.classList.add("detail-open");
}

function changeDetailImage(imageUrl, thumb) {
  const main = document.getElementById("detailMainImage");
  if (!main) return;

  main.src = imageUrl;
  document.querySelectorAll(".detail-thumb").forEach((item) => item.classList.remove("active"));
  if (thumb) thumb.classList.add("active");
}

function closeProductDetailPage() {
  const overlay = document.getElementById("productDetailPage");
  if (overlay) overlay.classList.add("hidden");
  document.body.classList.remove("detail-open");
}

function openProductModal(id) {
  openProductDetailPage(id);
}

function closeProductModal() {
  closeProductDetailPage();
}

function quickBuy(id) {
  addToCart(id);
  proceedToCheckout();
}

function quickAddBannerItem() {
  addToCart(1);
  showToast("Added Banner Deal!");
}

function scrollToProducts() {
  const section = document.getElementById("productSection");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function renderWishlistItems() {
  const container = document.getElementById("wishlistItemsList");
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = '<p class="text-sub">No favorites yet.</p>';
    return;
  }

  container.innerHTML = wishlist
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return "";
      return `
        <div class="wishlist-item">
          <div>
            <strong>${product.name}</strong>
            <div class="text-brand">${formatCurrency(product.price)}</div>
          </div>
          <button class="mini-btn" onclick="toggleWishlist(${product.id}, event)">Remove</button>
        </div>
      `;
    })
    .join("");
}

function toggleWishlist(id, event) {
  if (event) event.stopPropagation();

  const existing = wishlist.findIndex((item) => item.id === id);
  if (existing >= 0) {
    wishlist.splice(existing, 1);
  } else {
    const product = PRODUCTS.find((item) => item.id === id);
    if (product) wishlist.push({ id: product.id, name: product.name });
  }

  saveWishlist();
  renderProducts();
  renderWishlistItems();
}

function openWishlistModal() {
  const modal = document.getElementById("wishlistModal");
  if (modal) modal.classList.remove("hidden");
}

function closeWishlistModal() {
  const modal = document.getElementById("wishlistModal");
  if (modal) modal.classList.add("hidden");
}

function toggleUserModal() {
  const modal = document.getElementById("userModal");
  if (modal) modal.classList.toggle("hidden");
}

function simulatedLogin() {
  showToast("Signed In!");
  toggleUserModal();
}
