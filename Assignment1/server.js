const express = require('express');
const app = express();

const qs = require('querystring');
const products = require(__dirname + '/products.json');

// Monitor all requests regardless of their method (GET, POST, PUT, etc) and their path (URL)
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(express.static(__dirname + '/public'));

app.get("/products.js", function(request, response, next) {
    response.type('.js');
    var products_str = `var products = ${JSON.stringify(products)};`;
    response.send(products_str);
});

// Process purchase request
app.post('/purchase', function (request, response, next) {
    // Receive data from textboxes and log
    console.log(request.body);

    // Rest of your purchase processing code

    if (Object.keys(errors).length == 0) {
        // If the selected quantities are valid, it will take the quantity purchased out of the quantity available.
        for (let i in products) {
            products[i].qty_ava -= Number(request.body['quantity' + i]);
        }
        response.redirect("./invoice.html?" + qs.stringify(request.body));
    } else {
        response.redirect("./products_display.html?" + qs.stringify(request.body) + '&' + qs.stringify(errors));
    }
});

// Start the server; listen on port 8080 for incoming HTTP requests
app.listen(8080, () => console.log(`listening on port 8080`));
