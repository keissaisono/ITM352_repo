//server.js

//importing the express.js framework
const express = require('express');
//create an instance of the Express application called "app"
//app will be used to define routes, handle requests, etc.
const app = express();

//route all other GET requests to server static files from a directory named "public"
app.use(express.static(__dirname + '/public'));

//server initialization
app.listen(8080, () => console.log('Server is running on port 8080'));

//app.get for test was executed
app.get('/test', function (req, res) {
    res.send('app get for test was executed');
    console.log('app.get for test was executed');
})

/*import data froma JSON file containing information about products
__dirname represents the directory of the current module (where server.js is located)
__dirname + "./products.json" specifies the location of products.json */

let products = require(__dirname + '/products.json');

//define a route for handling a GET request to a path that matches "./products.js"
app.get('/products.js', function (request, response, next) {
    //send the response as JS
    response.type('.js');

    //create a JS string (products_str) that contains data loaded from the products.json file
    //convert the JS string into a JSON string and embed it within variable products
    const products_str = `let products = ${JSON.stringify(products)};`;

    //send the string in response to the GET request
    response.send(products_str);
});

