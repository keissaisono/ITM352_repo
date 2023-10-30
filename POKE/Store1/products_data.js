//Defining quantity array
let quantity = [2, "cat", 1.5, -1.5, 0];
//let quantity = [2, 1, 1, 2, 1];

//Defining the item object with brand,price, and quantity attributes
let itemData = [
    {
        brand: 'HTC',
        price: 40,
        quantityIndex: 0, //use index position to reference the quantity
    },
    {
        brand: 'Apple',
        price: 75,
        quantityIndex: 1, //use index position to reference the quantity
    },
    {
        brand: 'Nokia',
        price: 35,
        quantityIndex: 2, //use index position to reference the quantity
    },
    {
        brand: 'Samsung',
        price: 45,
        quantityIndex: 3, //use index position to reference the quantity
    },
    {
        brand: 'Blackberry',
        price: 10,
        quantityIndex: 4, //use index position to reference the quantity
    },
];


let products = [product1, product2, product3, product4, product5];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.querySelector('.main').innerHTML += `
        <section class="item" onmouseover="changeClassName(this);"
        onclick="resetClassName(this);">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <img src="${product.image}" />
            <label id="quantity${i}_label" for="quantity${i}"> Quantity Desired: </label>
            <input type="text" name="quantity${i}" id="quantity${i}" >
        </section>`;
}





