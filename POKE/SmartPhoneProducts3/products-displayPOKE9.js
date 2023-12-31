//declare and push to the DOM the store name at top and bottom
const store_name="Keissa Isono";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
//send store name infor to the footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");

let hits = 0;
let spins = 0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//convert variables into product information objects
const product1 = {
    name: "HTC",
    price: 40.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg"
};

const product2 = {
    name: "Apple",
    price: 75.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg"
};

const product3 = {
    name: "Nokia",
    price: 35.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg"
};

const product4 = {
    name: "Samsung",
    price: 45.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg"
};

const product5 = {
    name: "Blackberry",
    price: 10.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg"
};

//create an array called products to hold the five product objects
const products = [product1, product2, product3, product4, product5];

/*let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";
*/

/*let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";
*/

/*let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";
*/

/*let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";
*/

/*let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";
*/

// change the eval to const
for (let i=0; i < products.length; i++) {
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);"
    onclick="resetClassName(this);">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" />
    </section>`;
}

//create variables to push to the DOM for current year and time in the footer
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});
footer.innerHTML = `Copyright ${currentYear} ${store_name} - ${currentTime}`;

function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1; 
        element.className = 'item rotate';
    } 

    //spins=spins+1; 
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
    let hits_spins_ratio = hits/spins;
    let progress;

// -- Winning progress depends on hits/spins

/*if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}*/

/*if ( hits_spins_ratio >= 0.5 && hits<spins ) {
    progress = 'You win!';
}else if (hits_spins_ratio >= 0.25) {
        progress = 'Almost there!';
}else if ( hits_spins_ratio > 0 ) {
            progress='On your way!';
}
else {
    progress = 'Get going!' ;
    */
//ChatGPT Part 4 of 6
if (hits_spins_ratio >= 0.5 && hits < spins) {
    progress = 'You win!';
} else if (hits_spins_ratio >= 0.25) {
    progress = 'Almost there!';
} else if (hits_spins_ratio > 0) {
    progress = 'On your way!';
} else {
    progress = 'Get going!';

win_span.innerHTML = progress;
}
}



function resetClassName(element) {
    if(element.className=='item rotate'){
    hits=hits+=2;
    element.className = 'item';
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    win_span.innerHTML = over_half;
    //win_span.innerHTML = wins
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

// -- Winning progress depends on hits/spins
let hits_spins_ratio = hits/spins;
let progress;
/*if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}*/

/*if ( hits_spins_ratio >= 0.5 && hits < spins ) {
    progress = 'You win!';
} else if (hits_spins_ratio >= 0.25) {
        progress = 'Almost there!';
} else if ( hits_spins_ratio > 0 ) {
            progress='On your way!';
} else {
    progress = 'Get going!' ;
}*/
//ChatGPT Part 5 of 6
if (hits_spins_ratio >= 0.5 && hits < spins) {
    progress = 'You win!';
} else if (hits_spins_ratio >= 0.25) {
    progress = 'Almost there!';
} else if (hits_spins_ratio > 0) {
    progress = 'On your way!';
} else {
    progress = 'Get going!';
}
win_span.innerHTML = progress;
}