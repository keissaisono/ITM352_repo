let purchaseData = [
    { productId: 0, quantity: 0 },
    { productId: 1, quantity: 0 },
    { productId: 2, quantity: 0 },
    { productId: 3, quantity: 0 },
    { productId: 4, quantity: 0 },
    // Add more purchase data as needed
];

function addToCart(productId) {
    // Get the quantity input value
    let quantityInput = document.getElementById(`quantity_input_${productId}`);

    // Check if the quantityInput is found
    if (!quantityInput) {
        console.error(`Quantity input not found for product with ID ${productId}.`);
        return;
    }

    let quantity = parseInt(quantityInput.value);

    // Update the purchaseData array with the entered quantity
    purchaseData[productId].quantity = quantity;

    // Optionally, log the updated purchaseData for debugging
    console.log('Updated purchaseData:', purchaseData);
}
// Assume purchaseData is already defined and populated

// Initialize subtotal before the loop
let subtotal = 0;
let tableRows = ''; // Variable to accumulate HTML content for table rows

// Iterate over the purchase data
purchaseData.forEach((purchase) => {
    let product = products[purchase.productId];

    // Check if the product and quantity are valid
    if (product && purchase.quantity > 0 && purchase.quantity <= product.qty_available) {
        // Repeat the product entry based on the quantity
        let extendedPrice = (product.price * purchase.quantity).toFixed(2);
        subtotal += parseFloat(extendedPrice);

        // Accumulate HTML content for the table rows
        tableRows += `
            <tr style="border: none;">
                <td width="10%"><img src="${product.image}" alt="${product.alt}" style="border-radius: 5px;"></td>
                <td>${product.name}</td>
                <td>${purchase.quantity}</td>
                <td>${product.qty_available}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${extendedPrice}</td>
            </tr>
        `;
    } else {
        console.log(`Invalid quantity (${purchase.quantity}) for product with ID ${purchase.productId}.`);
    }
});


// Set the innerHTML for the table
document.querySelector('#invoice_table').innerHTML = tableRows;



// Sales tax
let tax_rate = (4.7 / 100);
let tax_amt = subtotal * tax_rate;

// Shipping
let shipping = 0;
let shipping_display = 'FREE';

if (subtotal < 10) {
    shipping = 5;
    shipping_display = `$${shipping.toFixed(2)}`;
}

let total = Number(tax_amt + subtotal + shipping);

document.querySelector('#total_display').innerHTML += `
    <tr style="border-top: 2px solid black;">
        <td colspan="5" style="text-align:center;">Sub-total</td>
        <td>$${subtotal.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;">Tax @ ${Number(tax_rate) * 100}%</td>
        <td>$${tax_amt.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;">Shipping</td>
        <td>${shipping_display}</td>
    </tr>
    <tr>
        <td colspan="5" style="text-align:center;"><b>Total</td>
        <td><b>$${total.toFixed(2)}</td>
    </tr>
`;
