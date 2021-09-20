const c = 1000; // сумма займа
const m = 10;   // срок займа (месяцы)
const p = 12;   // процент займа

//Дифференцированный кредит

const plArrey = [];
//первый платеж
const plD1 = Math.floor((c/m+(c*(p/100)/12)) * 100) / 100;
//console.log(cn);

plArrey.push(plD1);

//расчет по месяцам
for (let i = 0; plArrey.length <= m; i++) {
    let pln = plArrey[i];

        let sum = 0;
        for (let i = 0; i < plArrey.length; i++) {
        sum += plArrey[i]
        }
            
    pln = Math.floor((c/m+((c-sum)*p/100/12)) * 100) / 100;
    
    plArrey.push(pln);
    }
console.log(plArrey);

// общая сумма
let sum1 = 0;
for (let i = 0; i < plArrey.length; i++) {
sum1 += plArrey[i]
}
const allplD = Math.floor(sum1*100)/100;
//console.log(allplD);

//переплата 
const perplD=Math.floor((allplD-c)*100)/100;
//console.log(perplD);

//ВЫВОД
const getAnswerPhraseD = () => `Мы подобрали вам дифференцированный кредит на сумму: ${c} руб. под ${p} процентов годовых на срок ${m} месяцев. Первый платёж составляет: ${plD1} руб, общая сумма выплат: ${allplD} руб, переплата: ${perplD} руб.`;
console.log(getAnswerPhraseD ());

plArrey.forEach(element => {
  console.log(`платеж составляет ${element}`)
});