"use strict";

/* PENGATURAN WEBSITE */
const siteSettings = {
  brandName: "WELDAS",
  tagline: "Nikmati Setiap Gigitan, Hangatkan Setiap Momen",
  address:
    "Jl. Ring Road Barat, Winongo, Kec. Manguharjo, Kota Madiun, Jawa Timur",
  whatsapp: "6289518904367",
  whatsappMessage: "Halo WELDAS, saya ingin bertanya.",
  instagram: "https://www.instagram.com/dell0vies?srtk=Y2R6aWxuaWFlOXpq",
  tiktok: "tiktok.com/@adwweelll",
  operatingHours: {
    weekdays: "Senin – Jumat: 09.00 – 20.00 WIB",
    weekends: "Sabtu – Minggu: 08.00 – 20.00 WIB",
  },
  rating: "4.5/5",
  copyright: "© 2026 WELDAS. All Rights Reserved.",
};

/* DATA 23 PRODUK
   Ubah available menjadi false jika produk sedang habis. */
/* DATA 23 PRODUK */



const products = [
  {
    id: 1,
    name: "Wonton Chili Oil",
    price: 10000,
    category: "Makanan Basah",
    wet: true,
    available: true,
    image: "images/images/Makanan Basah/Wonton Chili Oil.jpeg",
  },
  {
    id: 2,
    name: "Mie Jebew",
    price: 10000,
    category: "Makanan Basah",
    wet: true,
    available: true,
    image: "images/images/Makanan Basah/Mie Jebew.jpeg",
  },
  {
    id: 3,
    name: "Tahu Gejrot",
    price: 7000,
    category: "Makanan Basah",
    wet: true,
    available: true,
    image: "images/images/Makanan Basah/Tahu Gejrot.jpeg",
  },
  {
    id: 4,
    name: "Dimsum",
    price: 12000,
    category: "Makanan Basah",
    wet: true,
    available: true,
    image: "images/images/Makanan Basah/Dimsum.jpeg",
  },
  {
    id: 5,
    name: "Cireng Kuah",
    price: 10000,
    category: "Makanan Basah",
    wet: true,
    available: true,
    image: "images/images/Makanan Basah/Cireng Kuah.jpeg",
  },
  {
    id: 6,
    name: "Makaroni",
    price: 5000,
    category: "Makanan Kering",
    available: true,
    image: "images/images/Makanan Kering/Makaroni.jpeg",
  },
  {
    id: 7,
    name: "Kripik Usus",
    price: 10000,
    category: "Makanan Kering",
    available: true,
    image: "images/images/Makanan Kering/Kripik Usus.jpeg",
  },
  {
    id: 8,
    name: "Basreng",
    price: 5000,
    category: "Makanan Kering",
    available: true,
    image: "images/images/Makanan Kering/Basreng.jpeg",
  },
  {
    id: 9,
    name: "Krupuk Seblak",
    price: 5000,
    category: "Makanan Kering",
    available: true,
    image: "images/images/Makanan Kering/Krupuk Seblak.jpeg",
  },
  {
    id: 10,
    name: "Kripik Kaca",
    price: 5000,
    category: "Makanan Kering",
    available: true,
    image: "images/images/Makanan Kering/Kripik Kaca.jpeg",
  },
  {
    id: 11,
    name: "Kripik Tempe",
    price: 5000,
    category: "MAKANAN KERING",
    available: true,
    image: "images/images/Makanan Kering/Kripik Tempe.jpeg",
  },
  {
    id: 12,
    name: "Es Teh",
    price: 3000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Teh.jpeg",
  },
  {
    id: 13,
    name: "Es Jeruk",
    price: 4000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Jeruk.jpeg",
  },
  {
    id: 14,
    name: "Es Buah",
    price: 8000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Buah.jpeg",
  },
  {
    id: 15,
    name: "Capcin",
    price: 6000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Capcin.jpeg",
  },
  {
    id: 16,
    name: "Es Soda Gembira",
    price: 8000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Soda Gembira.jpeg",
  },
  {
    id: 17,
    name: "Es Susu Coklat",
    price: 5000,
    category: "Minuman Dingin",
    available: true,
    image: "images/images/Minuman Dingin/Es Susu Coklat.jpeg",
  },
  {
    id: 18,
    name: "Hot Cappuccino",
    price: 6000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Hot Cappucino.jpg",
  },
  {
    id: 19,
    name: "Hot Coklat",
    price: 6000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Hot Coklat.jpg",
  },
  {
    id: 20,
    name: "Hot Teh",
    price: 3000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Hot Teh.jpg",
  },
  {
    id: 21,
    name: "Jeruk Hangat",
    price: 4000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Jeruk Hangat.jpeg",
  },
  {
    id: 22,
    name: "Kopi",
    price: 4000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Kopi.jpeg",
  },
  {
    id: 23,
    name: "Kopi Susu",
    price: 5000,
    category: "Minuman Hangat",
    available: true,
    image: "images/images/Minuman Hangat/Kopi Susu.jpeg",
  },
  
  
];

const SPICES = [
  "Level 1 - Ringan",
  "Level 2 - Sedang",
  "Level 3 - Pedas",
  "Level 4 - Sangat Pedas",
  "Level 5 - Ekstra Pedas",
];

const STAGES = [
  "Pesanan diterima",
  "Pesanan sedang diproses",
  "Pesanan sedang dibuat",
  "Pesanan selesai",
];

/* Waktu simulasi dari pesanan dibuat: 0, 30, 90, 180 detik. */
const STAGE_SECONDS = [0, 30, 90, 180];

const $ = (id) => document.getElementById(id);
const rupiah = (n) => "Rp" + Number(n).toLocaleString("id-ID");

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

let cart = [];
try {
  cart = JSON.parse(sessionStorage.getItem("weldas_cart")) || [];
} catch {
  cart = [];
}

let activeFilter = "Semua";
let pendingProduct = null;
let currentOrderId = null;
let selectedRating = 5;
let toastTimer;

/* UTILITAS */
function saveCart() {
  try {
    sessionStorage.setItem("weldas_cart", JSON.stringify(cart));
  } catch {}
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function showToast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("toast").classList.remove("show"), 2400);
}

function openModal(id) {
  $(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  $(id).classList.remove("open");
  if (!document.querySelector(".modal.open")) {
    document.body.style.overflow = "";
  }
}

/* MENU */
function renderProducts() {
  const query = $("searchInput").value.trim().toLowerCase();

  const list = products.filter(
    (product) =>
      (activeFilter === "Semua" || product.category === activeFilter) &&
      product.name.toLowerCase().includes(query),
  );

  $("productGrid").innerHTML = list
    .map(
      (product) => `
    <article class="product-card">
      <img class="product-image"
        src="${product.image}"
        alt="${escapeHTML(product.name)}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/FFF0F0/2B2B2B?text=${encodeURIComponent(product.name)}'">

      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="price">${rupiah(product.price)}</p>
        ${
          product.available
            ? `<button class="add-button" data-add="${product.id}">+ Tambah</button>`
            : `<span class="stock">Stok sedang habis</span>
             <button class="add-button" disabled>Habis</button>`
        }
      </div>
    </article>
  `,
    )
    .join("");

  $("emptyMessage").hidden = list.length > 0;
}

function addToCart(product, spice = "") {
  const key = `${product.id}|${spice}`;
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      spice,
      qty: 1,
      note: "",
    });
  }

  saveCart();
  renderCartSummary();
  showToast(`${product.name} ditambahkan ke keranjang.`);
}

/* KERANJANG */
function renderCartSummary() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  $("stickyCount").textContent = `${count} item`;
  $("stickyTotal").textContent = rupiah(total);
  $("headerCount").textContent = count;
}

function renderCart() {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  $("cartLines").innerHTML = cart.length
    ? cart
        .map(
          (item) => `
      <div class="cart-line">
        <div class="cart-top">
          <div>
            <b>${escapeHTML(item.name)}</b>
            <small>${item.spice || "Tanpa pilihan pedas"}</small>
          </div>
          <b>${rupiah(item.price * item.qty)}</b>
        </div>

        <textarea
          data-note="${encodeURIComponent(item.key)}"
          rows="2"
          placeholder="Catatan untuk menu ini...">${escapeHTML(item.note || "")}</textarea>

        <div class="cart-controls">
          <button class="qty" data-qty="-1" data-key="${encodeURIComponent(item.key)}">−</button>
          <b>${item.qty}</b>
          <button class="qty" data-qty="1" data-key="${encodeURIComponent(item.key)}">+</button>
          <button class="remove" data-remove="${encodeURIComponent(item.key)}">Hapus</button>
        </div>
      </div>
    `,
        )
        .join("")
    : "<p>Keranjang masih kosong. Yuk pilih menu favoritmu!</p>";

  $("cartTotal").textContent = rupiah(total);
  renderCartSummary();
}

function updateQuantity(key, change) {
  const item = cart.find((entry) => entry.key === key);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter((entry) => entry.key !== key);
  }

  saveCart();
  renderCart();
}

/* CHECKOUT */
function getTableNumber() {
  const params = new URLSearchParams(location.search);
  return params.get("meja") || params.get("table") || "";
}

function updateTableInfo() {
  const table = getTableNumber();

  if ($("orderType").value === "Dine-in") {
    $("tableInfo").textContent = table
      ? `Nomor meja dari tautan: ${table}`
      : "Nomor meja belum ditentukan.";
  } else {
    $("tableInfo").textContent =
      "Pesanan takeaway — tidak menggunakan nomor meja.";
  }
}

function openCheckout() {
  if (!cart.length) {
    showToast("Keranjang masih kosong.");
    return;
  }

  closeModal("cartModal");
  updateTableInfo();

  $("checkoutSummary").innerHTML =
    cart
      .map(
        (item) =>
          `${escapeHTML(item.name)} ${item.spice ? "(" + escapeHTML(item.spice) + ")" : ""} × ${item.qty} — ${rupiah(item.price * item.qty)}`,
      )
      .join("<br>") +
    `<hr><b>Total: ${rupiah(cart.reduce((sum, item) => sum + item.qty * item.price, 0))}</b>`;

  $("consent").checked = false;
  openModal("checkoutModal");
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function createOrder() {
  if (!cart.length) {
    showToast("Keranjang masih kosong.");
    return;
  }

  if (!$("consent").checked) {
    showToast("Centang persetujuan sebelum membuat pesanan.");
    return;
  }

  const now = Date.now();
  const type = $("orderType").value;
  const table = getTableNumber();
  const id =
    "WLD-" +
    now.toString(36).toUpperCase() +
    "-" +
    Math.random().toString(36).slice(2, 6).toUpperCase();

  const order = {
    id,
    createdAt: now,
    type,
    table: type === "Dine-in" ? table : "",
    payment: document.querySelector('input[name="payment"]:checked').value,
    items: cart.map((item) => ({ ...item })),
    total: cart.reduce((sum, item) => sum + item.qty * item.price, 0),
    stage: 0,
    stageTimes: [now, null, null, null],
    notifiedStage: 0,
  };

  const orders = readStore("weldas_orders", []);
  orders.unshift(order);
  localStorage.setItem("weldas_orders", JSON.stringify(orders));

  currentOrderId = id;
  cart = [];
  saveCart();
  renderCartSummary();
  closeModal("checkoutModal");

  $("receipt").innerHTML = `
    <div class="receipt">
      <b>ID Pesanan: ${id}</b><br>
      Waktu: ${formatDate(now)}<br>
      Jenis: ${type} ${order.table ? "(Meja " + escapeHTML(order.table) + ")" : ""}<br>
      Pembayaran: ${order.payment}
      <hr>
      ${order.items
        .map(
          (item) =>
            `${escapeHTML(item.name)} × ${item.qty}
        ${item.spice ? " — " + escapeHTML(item.spice) : ""}
        ${item.note ? " — Catatan: " + escapeHTML(item.note) : ""}`,
        )
        .join("<br>")}
      <hr><b>Total: ${rupiah(order.total)}</b>
    </div>
  `;

  openModal("successModal");
  launchConfetti();
  scheduleOrderProgress(id);
}

/* STATUS PESANAN */
function getOrders() {
  return readStore("weldas_orders", []);
}

function findOrder(id) {
  return getOrders().find((order) => order.id === id);
}

function updateOrder(id, callback) {
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === id);
  if (index < 0) return;

  callback(orders[index]);
  localStorage.setItem("weldas_orders", JSON.stringify(orders));
}

function advanceOrder(id) {
  const order = findOrder(id);
  if (!order || order.stage >= 3) return;

  const nextStage = order.stage + 1;
  const now = Date.now();

  updateOrder(id, (current) => {
    current.stage = nextStage;
    current.stageTimes[nextStage] = now;
  });

  const updated = findOrder(id);

  if (
    "Notification" in window &&
    Notification.permission === "granted" &&
    nextStage > (updated.notifiedStage || 0)
  ) {
    try {
      new Notification("Pembaruan Pesanan WELDAS", {
        body: `${id}: ${STAGES[nextStage]}`,
      });
    } catch {}

    updateOrder(id, (current) => {
      current.notifiedStage = nextStage;
    });
  }

  if (currentOrderId === id) {
    renderTimeline(findOrder(id));
  }

  scheduleOrderProgress(id);
}

function scheduleOrderProgress(id) {
  const order = findOrder(id);
  if (!order || order.stage >= 3) return;

  const nextStage = order.stage + 1;
  const dueTime = order.createdAt + STAGE_SECONDS[nextStage] * 1000;
  const delay = Math.max(500, dueTime - Date.now());

  setTimeout(() => {
    const freshOrder = findOrder(id);
    if (freshOrder && freshOrder.stage < nextStage) {
      advanceOrder(id);
    }
  }, delay);
}

function renderTimeline(order) {
  if (!order) return;

  $("trackingId").textContent = `ID Pesanan: ${order.id}`;

  $("timeline").innerHTML = STAGES.map((stage, index) => {
    const done = index < order.stage;
    const active = index === order.stage;
    const time = order.stageTimes[index]
      ? formatDate(order.stageTimes[index])
      : "Menunggu";

    return `
      <li class="${done ? "done" : ""} ${active ? "active" : ""}">
        <span class="dot">${done ? "✓" : index + 1}</span>
        <strong>${stage}</strong>
        <time>${time}</time>
      </li>
    `;
  }).join("");
}

function showTracking() {
  const order = findOrder(currentOrderId);
  if (!order) return;

  closeModal("successModal");
  renderTimeline(order);
  $("tracking").hidden = false;
  scheduleOrderProgress(order.id);
  window.scrollTo(0, 0);
}

/* EFEK CONFETTI */
function launchConfetti() {
  const colors = ["#D62828", "#F77F00", "#FCBF49", "#ffffff"];

  for (let i = 0; i < 55; i++) {
    const piece = document.createElement("i");
    piece.style.cssText = `
      position:fixed;z-index:120;top:-15px;left:${Math.random() * 100}vw;
      width:8px;height:12px;background:${colors[i % colors.length]};
      pointer-events:none;transition:top 2.5s ease-out,transform 2.5s linear;
    `;

    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.top = "105vh";
      piece.style.transform = `translateX(${Math.random() * 180 - 90}px) rotate(${Math.random() * 900}deg)`;
    });

    setTimeout(() => piece.remove(), 2700);
  }
}

/* ULASAN */
function updateStars() {
  document.querySelectorAll("[data-rating]").forEach((button) => {
    button.classList.toggle(
      "selected",
      Number(button.dataset.rating) <= selectedRating,
    );
  });
}

function openReviewModal() {
  selectedRating = 5;
  updateStars();
  $("reviewText").value = "";
  $("reviewInfo").textContent = "";
  openModal("reviewModal");
}

function saveReview() {
  const comment = $("reviewText").value.trim();

  if (!comment) {
    $("reviewInfo").textContent = "Tulis komentar terlebih dahulu.";
    return;
  }

  const reviews = readStore("weldas_reviews", []);
  reviews.push({
    rating: selectedRating,
    comment,
    createdAt: Date.now(),
  });

  localStorage.setItem("weldas_reviews", JSON.stringify(reviews));
  $("reviewInfo").textContent = "Terima kasih! Ulasanmu berhasil disimpan.";
  showToast("Terima kasih atas ulasanmu!");

  setTimeout(() => closeModal("reviewModal"), 1200);
}

/* EVENT DAN INISIALISASI */
function init() {
  renderProducts();
  renderCartSummary();

  // Tutup modal melalui tombol X atau latar belakang.
  document.querySelectorAll("[data-close]").forEach((element) => {
    element.addEventListener("click", () => closeModal(element.dataset.close));
  });

  // Filter kategori.
  $("filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderProducts();
  });

  // Pencarian produk.
  $("searchInput").addEventListener("input", renderProducts);

  // Tambah produk dan pilihan level pedas.
  $("productGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const product = products.find(
      (item) => item.id === Number(button.dataset.add),
    );
    if (!product || !product.available) return;

    if (product.wet) {
      pendingProduct = product;
      $("spiceName").textContent = product.name;

      $("spiceChoices").innerHTML = SPICES.map(
        (spice, index) => `
        <label class="spice-choice">
          <input type="radio" name="spice" value="${spice}" ${index === 0 ? "checked" : ""}>
          ${spice}
        </label>
      `,
      ).join("");

      openModal("spiceModal");
    } else {
      addToCart(product);
    }
  });

  $("confirmSpice").addEventListener("click", () => {
    if (!pendingProduct) return;

    const selected = document.querySelector('input[name="spice"]:checked');
    if (!selected) return;

    addToCart(pendingProduct, selected.value);
    pendingProduct = null;
    closeModal("spiceModal");
  });

  // Buka keranjang.
  $("viewCart").addEventListener("click", () => {
    renderCart();
    openModal("cartModal");
  });

  $("headerCart").addEventListener("click", (event) => {
    event.preventDefault();
    renderCart();
    openModal("cartModal");
  });

  // Ubah jumlah atau hapus item.
  $("cartLines").addEventListener("click", (event) => {
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");

    if (quantityButton) {
      updateQuantity(
        decodeURIComponent(quantityButton.dataset.key),
        Number(quantityButton.dataset.qty),
      );
    }

    if (removeButton) {
      const key = decodeURIComponent(removeButton.dataset.remove);
      cart = cart.filter((item) => item.key !== key);
      saveCart();
      renderCart();
    }
  });

  // Simpan catatan setiap item.
  $("cartLines").addEventListener("input", (event) => {
    if (!event.target.matches("[data-note]")) return;

    const key = decodeURIComponent(event.target.dataset.note);
    const item = cart.find((entry) => entry.key === key);

    if (item) {
      item.note = event.target.value;
      saveCart();
    }
  });

  $("checkoutBtn").addEventListener("click", openCheckout);
  $("orderType").addEventListener("change", updateTableInfo);
  $("placeOrder").addEventListener("click", createOrder);
  $("trackBtn").addEventListener("click", showTracking);

const qrisRadio = document.getElementById("qrisRadio");
const cashRadio = document.getElementById("cashRadio");
const qrisContainer = document.getElementById("qrisContainer");

function toggleQris() {
  if (qrisContainer) {
    if (qrisRadio && qrisRadio.checked) {
      qrisContainer.style.display = "block";
    } else {
      qrisContainer.style.display = "none";
    }
  }
}

if (qrisRadio && cashRadio) {
  qrisRadio.addEventListener("change", toggleQris);
  cashRadio.addEventListener("change", toggleQris);
}
  $("closeTracking").addEventListener("click", () => {
    $("tracking").hidden = true;
  });

  // Notifikasi hanya diminta setelah pelanggan menekan tombol.
  $("enableNotifications").addEventListener("click", async () => {
    if (!("Notification" in window)) {
      $("notificationInfo").textContent =
        "Browser ini tidak mendukung notifikasi.";
      return;
    }

    try {
      const permission = await Notification.requestPermission();

      $("notificationInfo").textContent =
        permission === "granted"
          ? "Notifikasi aktif selama website tetap terbuka."
          : "Izin notifikasi belum diberikan.";
    } catch {
      $("notificationInfo").textContent =
        "Tidak dapat meminta izin notifikasi.";
    }
  });

  // Ulasan pelanggan.
  $("openReview").addEventListener("click", openReviewModal);

  $("stars").addEventListener("click", (event) => {
    const button = event.target.closest("[data-rating]");
    if (!button) return;

    selectedRating = Number(button.dataset.rating);
    updateStars();
  });

  $("sendReview").addEventListener("click", saveReview);

  // Pulihkan simulasi pesanan yang belum selesai.
  // Waktu tahap dihitung dari waktu pesanan dibuat, tidak dimulai ulang.
  getOrders()
    .filter((order) => order.stage < 3)
    .forEach((order) => scheduleOrderProgress(order.id));

  updateStars();
}

document.addEventListener("DOMContentLoaded", init);
