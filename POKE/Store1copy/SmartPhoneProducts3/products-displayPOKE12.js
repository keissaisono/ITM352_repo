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

//Product information
/*let product1 = {
name:  "HTC",
price:  40.00,
image:  "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg"
};

let product2 = {
name:  "Apple",
price:  75.00,
image:  "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg"
};

let product3 = {
name:  "Nokia",
price:  35.00,
image:  "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg"
};

let product4 = {
name:  "Samsung",
price:  45.00,
image:  "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg"
};

let product5 = {
name:  "Blackberry",
price:  10.00,
image:  "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg"
};
*/
//Array for products
products = [product1,product2,product3,product4,product5];


for (i = 0; i < products.length; i++){
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);"
    onclick="resetClassName(this);">
        <h2>${products[i].name}</h2>
        <p>$${products [i].price}</p>
        <img src="${products [i].image}" />
    
    </section>`;
}












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