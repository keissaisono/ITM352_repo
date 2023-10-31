//Defining quantity array
let quantity = [2, "cat", 1.5, -1.5, 0];

//Defining the item object with brand,price, and quantity attributes
let itemData = [
    {
        brand: 'HTC',
        price: 40,
        quantityIndex: 0,
    },
    {
        brand: 'Apple',
        price: 75,
        quantityIndex: 1,
    },
    {
        brand: 'Nokia',
        price: 40,
        quantityIndex: 2,
    },
    {
        brand: 'Samsung',
        price: 50,
        quantityIndex: 3,
    },
    {
        brand: 'Blackberry',
        price: 35,
        quantityIndex: 4,
    },
];

export { itemData, quantity };


/*let products = [product1, product2, product3, product4, product5];

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
export { itemData, quantity, products };*/






