name1 = "HTC";
 price1 = 40.00;
 image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

 name2 = "Apple";
 price2 = 75.00;
 image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

 name3 = "Nokia";
 price3 = 35.00;
 image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

 name4 = "Samsung";
 price4 = 45.00;
 image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

 name5 = "Blackberry";
 price5 = 10.00;
 image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

console.log("Product variables loaded...");

//exercise 1.1
console.log("exercise 1.1");
let num_products=5;
let productCount=1;
while (productCount <=num_products){
    console.log(productCount);
    productCount++;
}

//exercise 1.2
console.log();
console.log("execrise 1.2");
while (productCount <=num_products){
    console.log(productCount+'. '+eval('name'+productCount));
    productCount++;
}

//exercise 1.3
console.log();
console.log("exercise 1.3");

