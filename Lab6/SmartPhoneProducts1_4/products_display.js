
let first_name = "Keissa";
let last_name = "Isono";
let initials = `${first_name[0]}. ${last_name[0]}.`;
let formattedName = "<span style='font-size: 60px;'><strong>" + first_name + "</strong> <em>" + last_name + "</em></span>";

function changeClassName(element) {
            element.className = 'item rotate';
            spins=spins+1; 
            spins_span.innerHTML = spins; hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
        }
        function resetClassName(element) {
            element.className = 'item';
            hits=hits+=2; 
            hits_span.innerHTML = hits; hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
        }
        let hits= 0;
        let spins=0;
        hits_span.innerHTML = hits;
        spins_span.innerHTML = spins;

let line = 1;
let now = new Date();
let hours = now.getHours();

document.write(`
    <table style="margin-left: auto; margin-right: auto; text-align: center; border-collapse: collapse;">
        <tr>
            <th colspan="2">
                <h1>Your One Stop For Used Phones - ${initials}'s</h1>
            </th>
        </tr>
        <tr>
            <td>${line++}.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>${line++}.</td>
            <td>${now.getFullYear()}</td>
        </tr>
        <tr>
            <td>${line++}.</td>
            <td>${(hours + 11) % 12 + 1}:${now.getMinutes()} ${(hours < 12) ? 'AM' : 'PM'}</td>
        </tr>        
    </table> `);       
  
src="products_display.js"