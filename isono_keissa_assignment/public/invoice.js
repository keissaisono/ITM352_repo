//initialize variables
let extendedPrices = [];
let extendedPrice = 0;
let subtotal = 0;
let taxAmount = 0;
let shipping = 0;

//opens the url params and creates an array of the values
let params = (new URL(document.location)).searchParams;
    //initializes empty order array
    let order = [];
    //for each prod, push the value to the array
    params.forEach((value,key) => {
        if (key.startsWith('prod')) {
            order.push(parseInt(value));
            }
});

        //console.log(order);
        
//generate all the item rows from the order array
generateItemRows();



//calculate subtotal and extended price

//calculate tax amount
 let tax = (subtotal*0.0575);



//checks the shipping price based on subtotal
if(subtotal <= 50)
{
    shipping = 2;
}else if(subtotal <=100)
{
    shipping = 5;
}
else{
    shipping = subtotal*.05;
}

//calculates total price
let total = tax+subtotal+shipping;


//insert footer row values into the table
document.getElementById("subtotal_cell").innerHTML = "$" + subtotal.toFixed(2);
document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
document.getElementById("shipping_cell").innerHTML = "$"+shipping.toFixed(2);
document.getElementById("total_cell").innerHTML = "$"+total.toFixed(2);


//function to validate the quantity, returns a string if not a number, negative, not an integer, or a combination of both
//if no errors in quantity, returns empty string
function validateQuantity(quantity){
    if(isNaN(quantity)){
        return "Please Enter a Number";
    }else if (quantity<0 && !Number.isInteger(quantity)){
        return "Please Enter a Positive Integer";
    }else if (quantity <0){
        return "Please Enter a Positive Number";
    }else if(!Number.isInteger(quantity)){
        return "Please Enter an Integer";
    }else{
        return"";
    }

}
//generate all the item rows
function generateItemRows(){

    //sets table to the invoice table on the html
    let table = document.getElementById("invoiceTable");

    //checks if it has errors, set it to no for now
    let hasErrors = false; 

    //for each member of the array
    for(let i=0;i<products.length;i++){
        
        //sets item and itemQuantity from the products array, and the array gotten from the url
        let item = products[i];
        let itemQuantity = order[i];
        
        //validate the quantity, we are just kinda looking for if its negative so we dont show it
        let validationMessage = validateQuantity(itemQuantity);
        
        
        //if there is an error, just ignore this 
        if(validationMessage !== ""){
            hasErrors = true;
            let row =table.insertRow();
            row.insertCell(0).insertHTML = item.name;
            row.insertCell(1).innerHTML = validationMessage;
        } 
        //otherwise, lets create the row in the invoice and update the extended price and subtotal
        else if(itemQuantity >0){
            //update the variables
            extendedPrice = item.price * itemQuantity;
            subtotal += extendedPrice;

            //create a new row and insert the info. referenced POKE invoice3 assignment for previous code.
            let row = table.insertRow();
            row.insertCell(0).innerHTML = `<img src="${item.image}" class="img-small" name = "img">`;
            row.insertCell(1).innerHTML = item.name;
            row.insertCell(2).innerHTML = itemQuantity;
            row.insertCell(3).innerHTML = "$" + item.price.toFixed(2);
            row.insertCell(4).innerHTML = "$"+extendedPrice.toFixed(2);

        }

    }

}