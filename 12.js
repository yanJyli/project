const c = 1000; // сумма займа
const m = 60;   // срок займа (месяцы)
const p = 12;   // процент займа

const cArr = [];

const cn = Math.floor((c/m+(c*(p/100)/12)) * 100) / 100;
//console.log(cn);

cArr.push(cn);


for (cArr[cn]; cArr.length <= m; cn++) {

    function sum (cArr){
        let s = 0;
        for (let i = 0; i < cArr.length; i++) {
        s += cArr[i]
        }
        return s
        }
    
    cn1 = Math.floor((c/m+((c-s)*p/12)) * 100) / 100;
    
    cArr.push(cn1);
    }
console.log(cArr);