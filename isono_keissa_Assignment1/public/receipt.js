[{
    "name": "Latte",
    "price": 5.75,
    "image": "/images/latte.jpeg",
    "alt": "Latte image",
    "qty_available": 0,
    "qty_sold": 100
}, {
    "name": "Cappucino",
    "price": 4.50,
    "image": "/images/cappucino.jpeg",
    "alt": "Cappucino image",
    "qty_available": 1,
    "qty_sold": 75
}, {
    "name": "Macchiato",
    "price": 4.00,
    "image": "/images/macchiato.jpeg",
    "alt": "Macchiato image",
    "qty_available": 0,
    "qty_sold": 27
}, {
    "name": "Espresso",
    "price": 3.50,
    "image": "/images/espresso.jpeg",
    "alt": "Espresso image",
    "qty_available": 0,
    "qty_sold": 110
}, {
    "name": "Americano",
    "price": 5.00,
    "image": "./images/StarWars.jpg",
    "alt": "/images/americano.jpeg",
    "qty_available": 0,
    "qty_sold": 80
}];

    let purchaseData = [
        { productId: 0, quantity: 2 },
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 3 },
        { productId: 3, quantity: 1 },
        { productId: 4, quantity: 1 },

        // Add more purchase data as needed
    ];

        //Initialize subtotal before the loop
    let subtotal = 0;
    
    // Iterate over the purchase data
    purchaseData.forEach((purchase) => {
        let product = products[purchase.productId];
    
        // Check if the product and quantity are valid
        if (product && purchase.quantity > 0 && purchase.quantity <= product.qty_available) {
            let extendedPrice = (purchase.quantity * product.price).toFixed(2);
            subtotal += parseFloat(extendedPrice);
        }
    });
    
    // Now you can use the subtotal variable as needed
    console.log(subtotal);
    
       // Append a row to the table
    document.querySelector('#invoice_table').innerHTML += `
    <tr style="border: none;">
        <td>${product && product.name ? product.name : ''}</td>
        <td>${purchase.quantity}</td>
        <td>${product && product.qty_available ? product.qty_available - purchase.quantity : ''}</td>
        <td>${product && product.price ? `$${product.price.toFixed(2)}` : ''}</td>
        <td>${extendedPrice ? `$${extendedPrice}` : ''}</td>
    </tr>
    `;
    
    
    
    // Get the URL
    let params = (new URL(document.location)).searchParams;
    console.log(params);
    
    
    
    // On load, if there is no 'valid' key, redirect the user back to the Home page
    window.onload = function() {
        if (!params.has('valid')) {
            document.write(`
                <head>
                    <link rel="stylesheet" href="syle.css">
                </head>
                <body style="text-align: center; margin-top: 10%;">
                    <h2>ERROR: No form submission detected.</h2>
                    <h4>Return to <a href="index.html">Home</a></h4> 
                </body>
            `)
        }
    }
    
    
    let qty = [];
    for (let i in products) {
        qty.push(params.get(`qty${i}`));
    }
    
    for (let i in qty) {
        if (qty[i] == 0 || qty[i] == '') continue;
    
        extended_price = (params.get(`qty${i}`) * products[i].price).toFixed(2);
        subtotal += Number(extended_price);
    
        document.querySelector('#invoice_table').innerHTML += `
            <tr style="border: none;">
                <td width="10%"><img src="${products[i].image}" alt="${products[i].alt}" style="border-radius: 5px;"></td>
                <td>${products[i].name}</td>
                <td>${qty[i]}</td>
                <td>${products[i].qty_available}</td>
                <td>$${products[i].price.toFixed(2)}</td>
                <td>$${extended_price}</td>
            </tr>
        `;
    }
    
    // Sales tax
    let tax_rate = (4.7/100);
    let tax_amt = subtotal * tax_rate;
    
    // Shipping
    if (subtotal < 10) {
        shipping = 5;
        shipping_display = `$${shipping.toFixed(2)}`;
        total = Number(tax_amt + subtotal + shipping);
    }
    else if (subtotal >= 10 && subtotal < 20) {
        shipping = 3;
        shipping_display = `$${shipping.toFixed(2)}`;
        total = Number(tax_amt + subtotal + shipping);
    }
    else {
        shipping = 0;
        shipping_display = 'FREE';
        total = Number(tax_amt + subtotal + shipping);
    }
    

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


