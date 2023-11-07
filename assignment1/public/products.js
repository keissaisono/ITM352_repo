//declare and push to the DOM the store name at top and bottom
const store_name="Second Best Coffee";
top_title.innerHTML=(store_name + "Shop");


//convert variables into product information objects
const product1 = {
    name: "Latte",
    price: 5.75,
    image: "/images/latte.jpeg"
};

const product2 = {
    name: "Cappucino",
    price: 4.50,
    image: "/images/cappucino.jpeg"
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

//create an array called products to hold the five product objects
const products = [product1, product2, product3, product4, product5];