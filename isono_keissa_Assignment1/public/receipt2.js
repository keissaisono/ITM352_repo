fetch('./products.js')
    .then(response => response.json()
        .then(productData => {
            //use productData as needed
            console.log(productData);
        }))
        .catch(error => console.error('Error fetching product data:',error));

//product data
const productDataElement = document.getElementById('productData');
const products = productDataElement ? productDataElement.products : [];

for (let i = 0; i < itemData.length; i++) {
    let quantityValue = params.get(`quantity${i}`);
    if (quantityValue !== null) {
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}

//variables for subtotal, tax, shipping, and total
let subtotal = 0;
let taxRate = (4.7/100);
let taxAmount = 0;
let shipping = 0;
let total = 0;

generateItemRows();

//calculate shipping
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

//calculate total with shipping
taxAmount = subtotal * taxRate;
total = subtotal + taxAmount + shipping;

//setting total cell
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;
//setting subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = shipping.toFixed(2);

//validate quantity
function validateQuantity(quantity) {
    if (isNaN(quantity)) {
        return "not a number";
    } else if (quantity < 0 && !Number.isInteger(quantity)) {
        return "negative inventory and not an integer";
    } else if (quantity < 0) {
        return "negative inventory";
    } else if (!Number.isInteger(quantity)) {
        return "not an integer";
    } else {
        return "";
    }
}

//function to generate table rows and apply quantity validation
function generateItemRows() {
    let table = document.getElementById('invoiceTable');
    table.innerHTML = '';
    let hasErrors = false;

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let itemQuantity = quantity[product.quantityIndex];

        let validationMessage = validateQuantity(itemQuantity);
        if (validationMessage !== "") {
            hasErrors = true;
            let row = table.insertRow();
            row.insertCell(0).innerHTML = product.name;
            row.insertCell(1).innerHTML = validationMessage;
        } else if (itemQuantity > 0) {
            let extendedPrice = product.price * itemQuantity;
            subtotal += extendedPrice;

            let row = table.insertRow();
            row.insertCell(0).innerHTML = product.name;
            row.insertCell(1).innerHTML = itemQuantity;
            row.insertCell(2).innerHTML = '$' + product.price.toFixed(2);
            row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
        }
    }


}

