//declare variables per lab 5.1 instructions
let age=21;
let fav_num=7;
let day_of_birth=11;
let month_of_birth=7;

// define calculations
let calc1 = age + fav_num / day_of_birth * month_of_birth;
let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

// output calc 1 & 2 to the DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;



