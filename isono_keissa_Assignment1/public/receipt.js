let purchaseData = [
    { productId: 0, quantity: 2 },
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 3 },
    { productId: 3, quantity: 1 },
    { productId: 4, quantity: 1 },
    // Add more purchase data as needed
];

// Initialize subtotal before the loop
let subtotal = 0;

// Iterate over the purchase data
purchaseData.forEach((purchase) => {
    let product = products[purchase.productId];

    // Check if the product and quantity are valid
    if (product && purchase.quantity > 0 && purchase.quantity <= product.qty_available) {
        let extendedPrice = (purchase.quantity * product.price).toFixed(2);
        subtotal += parseFloat(extendedPrice);

        // Append a row to the table inside the loop
        document.querySelector('#invoice_table').innerHTML += `
            <tr style="border: none;">
                <td width="10%"><img src="${product.image}" alt="${product.alt}" style="border-radius: 5px;"></td>
                <td>${product.name}</td>
                <td>${purchase.quantity}</td>
                <td>${product.qty_available}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>$${extendedPrice}</td>
            </tr>
        `;
    }
});

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
