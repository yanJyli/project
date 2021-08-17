let c = 1000; // сумма займа
let m = 60;   // срок займа (месяцы)
let p = 12;   // процент займа
let pl;

  // ежемес. платёж
pl = c * ( p/100/p +  (p/100/p / (( 1 + p/100/p )**m - 1 )));
console.log(Math.floor( pl * 100) / 100);

//mainCredit(pl);
   // переплата

let perpl = m * pl - c;
console.log(Math.floor( perpl * 100) / 100);

// общая сумма выплат

let allpl = c + perpl;
console.log(Math.floor( allpl * 100) / 100);

//  Math.floor(num * 100) / 100 

function main (pl) {
    console.log(Math.floor( pl * 100) / 100); 
};
export { main };
main();
