let params = new URLSearchParams(window.location.search);
let type = params.get("type");

let data = {
 "Silk Saree": { colors: ["Red", "Green", "Blue"], price: "₹8,999 - ₹18,999" },
 "Cotton Saree": { colors: ["White", "Yellow", "Pink"], price: "₹3,499 - ₹6,999" },
 "Designer Saree": { colors: ["Black", "Maroon", "Royal Blue"], price: "₹6,799 - ₹15,499" }
};

document.getElementById("title").innerText = type;

document.getElementById("info").innerHTML =
"<h3>Available Colors</h3>" + data[type].colors.join(", ") +
"<h3>Price Range</h3>" + data[type].price;

function buy(){
  let payment = document.getElementById("payment").value;

  if(!payment){
    alert("Please select a payment method");
    return;
  }

  let msg = "Hello Om Muruga Boutique,%0A" +
            "Saree Type: " + type + "%0A" +
            "Payment Method: " + payment + "%0A" +
            "Please send me UPI details.";

  window.open("https://wa.me/918682989374?text=" + msg);
}
