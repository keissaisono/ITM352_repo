//svr.6.js

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

// Load products data
const products = require(__dirname + '/products.json');
products.forEach((prod) => {
  prod.total_sold = 0;
});

// Use body-parser to parse form data
app.use(express.urlencoded({ extended: true }));

let receipt = '';
    let qtys = request.body[`quantity_textbox`];
    for (i in qtys) {
        let q = qtys[i];
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];
        if (validateQuantity(q)==="") {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>Thank you for purchasing: ${q} ${brand}. Your total is \$${q * brand_price}!</h3>`; // render template string
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!</font></h3>`;
        }
    }
    response.send(receipt);
    response.end();

app.all('*', function (request, response, next) {
  console.log(request.method + ' to path ' + request.path);
  next(); // Make sure to call next() to continue processing the request
});

app.listen(8080, () => console.log(`listening on port 8080`));

function validateQuantity(quantity) {
  let errorMessage = '';

  switch (true) {
    case isNaN(quantity):
      errorMessage = 'Not a number. Please enter a non-negative quantity to order.';
      break;
    case quantity < 0 && !Number.isInteger(quantity):
      errorMessage = 'Negative inventory and not an integer. Please enter a non-negative quantity to order.';
      break;
    case quantity < 0:
      errorMessage = 'Negative inventory. Please enter a non-negative quantity to order.';
      break;
    case !Number.isInteger(quantity):
      errorMessage = 'Not an integer, Please enter a non-negative quantity to order.';
      break;
    default:
      errorMessage = '';
      break;
  }

  return errorMessage;
}
