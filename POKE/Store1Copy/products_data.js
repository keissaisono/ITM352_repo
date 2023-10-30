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

export { itemData, quantity };