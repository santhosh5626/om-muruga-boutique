// ===== WELCOME & GOODBYE ALERTS =====
window.onload = () => alert("Welcome to om murugaboutiques 🛍️");

window.addEventListener("beforeunload", e => {
    e.preventDefault();
    e.returnValue = "Thank you for visiting om murugaboutiques!";
});

// ===== WHATSAPP PHONE NUMBER =====
const phone = "919876543210"; // CHANGE TO YOUR NUMBER

// ===== SAREE DATA =====
const sareeData = {
    "Silk Saree": [
        { color: "Red & Gold", price: "₹8,999" },
        { color: "Maroon", price: "₹9,499" },
        { color: "Royal Blue", price: "₹10,999" }
    ],
    "Cotton Saree": [
        { color: "White & Blue", price: "₹3,499" },
        { color: "Green", price: "₹3,999" },
        { color: "Grey", price: "₹4,299" }
    ],
    "Designer Saree": [
        { color: "Black", price: "₹6,799" },
        { color: "Pink", price: "₹7,499" },
        { color: "Beige", price: "₹8,199" }
    ]
};

// ===== COLLECTION → DETAILS PAGE LOGIC =====
function openDetails(type) {
    document.getElementById("collection").style.display = "none";
    document.getElementById("detailsPage").style.display = "block";
    document.getElementById("detailsTitle").innerText = type + " Collection";

    const box = document.getElementById("detailsContent");
    box.innerHTML = "";

    sareeData[type].forEach(item => {
        box.innerHTML += `
        <div class="details-card">
            <h3>${type}</h3>
            <div class="color-tag">${item.color}</div>
            <p class="price">${item.price}</p>
            <button class="buy-btn"
                onclick="buyNow('${type}','${item.price}','${item.color}')">
                Buy on WhatsApp
            </button>
        </div>`;
    });
}

function goBack() {
    document.getElementById("detailsPage").style.display = "none";
    document.getElementById("collection").style.display = "block";
}

// ===== WHATSAPP BUY BUTTON FOR DETAILS PAGE =====
function buyNow(type, price, color) {
    const msg = `Hello om murugaboutiques,%0A
Order Details:%0A
Saree: ${type}%0A
Color: ${color}%0A
Price: ${price}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

// ===== ONLINE BUY SECTION LOGIC =====
function updateColors() {
    const type = document.getElementById("orderType").value;
    const colorSel = document.getElementById("orderColor");
    const priceSel = document.getElementById("orderPrice");

    // Reset options
    colorSel.innerHTML = "<option value=''>Select Color</option>";
    priceSel.innerHTML = "<option value=''>Select Price</option>";

    if (!type) return;

    sareeData[type].forEach(item => {
        colorSel.innerHTML += `<option value="${item.color}">${item.color}</option>`;
        priceSel.innerHTML += `<option value="${item.price}">${item.price}</option>`;
    });
}

function orderWhatsApp() {
    const type = document.getElementById("orderType").value;
    const color = document.getElementById("orderColor").value;
    const price = document.getElementById("orderPrice").value;

    if (!type || !color || !price) {
        alert("Please select Saree Type, Color, and Price");
        return;
    }

    const msg = `Hello om murugaboutiques,%0A
I want to order:%0A
Saree: ${type}%0A
Color: ${color}%0A
Price: ${price}`;

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
