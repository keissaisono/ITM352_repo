//define store name and push it to the DOM 
const first_name = "Keissa";
const last_name = "Isono's";
const store_name="Keissa";

//manipulate the header to display your name with formatting
const firstNameSpan = document.getElementById('first_name_span');
const lastNameSpan = document.getElementById('last_name_span');
firstNameSpan.textContent = first_name;
lastNameSpan.textContent = last_name;
top_title.innerHTML=("Used Smart Phone Store");


//initialize hits and spins and send to the DOM
let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

// this is the code for POKE 8. start by defining the items, prices, images
let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

/*
use a for loop to dynamically create the web page output. what else do you need to do?
1. in the html, cut out all sections from main. leave main since we have css to format the page
2. how do you put html generated by the loop into the correct location under main? you need to use document.querySelector('.main'); is is used to select and reference the HTML element with the class name main. in this case, it's selecting the <main> element with the class="main" attribute from your HTML document.
-- the purpose of this line of code is to target the specific HTML element where you want to add the dynamically generated content. In your code, you are dynamically creating HTML sections for the items in a loop, and you want to insert these sections into the <main> element with the class main so that they appear on your webpage
-- once you have a reference to this <main> element using document.querySelector('.main'), you can use it to manipulate its innerHTML property by appending or inserting HTML content dynamically. this allows you to add the generated item sections to your webpage within the specified <main> element.
-- document.querySelector('.main').innerHTML += `
--- selects the innerHTML of main and then the ` allows you to execute the string template
3. replicate the <section ...> information from the original html in the loop so your onclick and on mouseovers still work
4. use string templates to send name to the DOM: ${eval("name"+i)}; same goes for the price and image
*/
for (let i=1; eval("typeof name"+i) != "undefined"; i++) {
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
        <h2>${eval("name"+i)}</h2>
        <p>$${eval("price"+i)}</p>
        <img src="${eval("image"+i)}" />
    </section>`;
}
// create variables to push to the DOM for current year and time in the 
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const footerTable = `
<table>
    <tr>
        <td></td>
        <td class="table-header">Your One Stop For Used Phones - ${first_name.charAt(0).toUpperCase() + first_name.slice(1)}</td>
    </tr>
</table>
`;

//send store name info to the footer title
bottom_title.innerHTML= footerTable;

function changeClassName(element) {
    if (element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
    
}
function resetClassName(element) {
    if(element.className== 'item rotate'){
        hits=hits+=2;
        element.className='item';
    } else {
        changeClassName(element);
    }
    
    if(spins<2*hits&&hits<spins){
        over_half=true;
    
    }

    

    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

}
    
