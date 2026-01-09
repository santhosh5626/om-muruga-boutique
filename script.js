// Show product details dynamically
function openDetails(type) {
  const detailsPage = document.getElementById("detailsPage");
  const detailsTitle = document.getElementById("detailsTitle");
  const detailsContent = document.getElementById("detailsContent");

  detailsTitle.textContent = type;
  detailsContent.innerHTML = "";

  // Example saree variations
  const variations = {
    "Silk Saree": ["Red Silk", "Blue Silk", "Green Silk"],
    "Cotton Saree": ["White Cotton", "Yellow Cotton", "Pink Cotton"],
    "Designer Saree": ["Black Designer", "Gold Designer", "Purple Designer"]
  };

  variations[type].forEach(color => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${color}</h3><p class="price">₹${Math.floor(Math.random()*2000+5000)}</p>`;
    detailsContent.appendChild(card);
  });

  document.getElementById("collection").style.display = "none";
  detailsPage.style.display = "block";
}

function goBack() {
  document.getElementById("detailsPage").style.display = "none";
  document.getElementById("collection").style.display = "block";
}

// WhatsApp order logic
function updateColors() {
  const type = document.getElementById("orderType").value;
  const colorSelect = document.getElementById("orderColor");
  const priceSelect = document.getElementById("orderPrice");

  colorSelect.innerHTML = "<option value=''>Select Color</option>";
  priceSelect.innerHTML = "<option value=''>Select Price</option>";

  const options = {
    "Silk Saree": { colors: ["Red", "Blue", "Green"], prices: ["8999", "9999", "10999"] },
    "Cotton Saree": { colors: ["White", "Yellow", "Pink"], prices: ["3499", "3999", "4499"] },
    "Designer Saree": { colors: ["Black", "Gold", "Purple"], prices: ["6799", "7299", "7999"] }
  };

  if (options[type]) {
    options[type].colors.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      colorSelect.appendChild(opt);
    });

    options[type].prices.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = "₹" + p;
      priceSelect.appendChild(opt);
    });
  }
}

function orderWhatsApp() {
  const type = document.getElementById("orderType").value;
  const color = document.getElementById("orderColor").value;
  const price = document.getElementById("orderPrice").value;

  if (!type || !color || !price) {
    alert("⚠️ Please select saree type, color, and price before ordering.");
    return;
  }

  const message = `Hello Om Muruga Boutique, I would like to order a ${color} ${type} for ₹${price}.`;
  const whatsappURL = `https://wa.me/918682989374?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
