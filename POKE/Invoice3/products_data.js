//Defining quantity array
let quantity = [2, "cat", 1.5, -1.5, 0];
//let quantity = [2, 1, 1, 2, 1];

//Defining the item object with brand,price, and quantity attributes
let itemData = [
    {
        brand: 'Gillette Sensor 3 Razor',
        price: 1.23,
        quantityIndex: 0, //use index position to reference the quantity
    },
    {
        brand: 'Barbasol Shaving Cream',
        price: 2.64,
        quantityIndex: 1, //use index position to reference the quantity
    },
    {
        brand: 'Nautica Cologne',
        price: 6.17,
        quantityIndex: 2, //use index position to reference the quantity
    },
    {
        brand: 'Rubbing Alcohol',
        price: 0.98,
        quantityIndex: 3, //use index position to reference the quantity
    },
    {
        brand: 'Colgate Classic Toothbrush',
        price: 1.89,
        quantityIndex: 4, //use index position to reference the quantity
    },
];

export { itemData, quantity };