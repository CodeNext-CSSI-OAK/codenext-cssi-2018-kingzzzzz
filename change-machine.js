// Author: Hamzah Saleh

console.log("Beep ching kapoop, Im a change maker man");
console.log("$$$$$$$$$$&$$$$$ $$ $  $  $$$ $")

let readline = require("readline-sync")

let cents = Number(readline.question("Please enter cents as a positve integer "));



let quarters = Math.floor(cents / 25);
let q = ( cents%25);
console.log("quarters " + quarters);

let dime = Math.floor(q / 10);
let d = ( q % 10);
console.log("dimes " + dime );

let nickel = Math.floor(d / 5)
let n = ( d % 5)
console.log("nickels " +  nickel);

let penny = Math.floor(n /1);
let p = (n % 1)
console.log("pennies " + penny );

console.log("******@@@###%^^^&&&&^%$####")
console.log("please enjoy your change")
