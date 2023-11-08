// Declare and push the store name to the DOM at the top and bottom
const storeName = "Second Best Coffee";
const topTitle = document.getElementById("top-title");
topTitle.innerHTML = storeName + " Shop";

// Convert variables into product information objects
const product1 = {
    name: "Latte",
    price: 5.75,
    image: "/images/latte.jpeg"
};

const product2 = {
    name: "Cappuccino",
    price: 4.50,
    image: "/images/cappuccino.jpeg"
};

const product3 = {
    name: "Macchiato",
    price: 4.00,
    image: "/images/macchiato.jpeg"
};

const product4 = {
    name: "Espresso",
    price: 3.50,
    image: "/images/espresso.jpeg"
};

const product5 = {
    name: "Americano",
    price: 5.00,
    image: "/images/americano.jpeg"
};

// Create an array called products to hold the five product objects
const products = [product1, product2, product3, product4, product5];
