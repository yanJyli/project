//АННУИТЕНТНЫЙ КРЕДИТ
function getAnswerPhraseA () {
  const creditMoney = parseInt(document.querySelector('#c').value);
  const months = parseInt(document.querySelector('#m').value);
  const persent = parseInt(document.querySelector('#p').value);
    
    // ежемес. платёж
  const monthPayA = Math.floor(( (creditMoney * ( persent /100/ persent+( persent /100/ persent /(( 1 + persent /100/persent )** months - 1))))* 100))/100;
    // переплата
  const overpaymentA = Math.floor((parseInt( months * monthPayA - creditMoney)* 100))/100;
    // общая сумма выплат
  const allPaymentA = Math.floor((parseInt(creditMoney + overpaymentA))* 100)/100;
    
    //ВЫВОД
  const appDiv = document.body.querySelector('#app').innerHTML = `Мы подобрали вам аннуитетный кредит на сумму: <b>${creditMoney} руб.</b> под <b>${persent} процентов</b> годовых на срок <b>${months} месяцев</b>. Ежемесячный платёж составляет: <b>${monthPayA} руб.</b>, общая сумма выплат: <b>${allPaymentA} руб.</b>, переплата: <b>${overpaymentA} руб.</b>`;
    
  return appDiv;
}

//ДИФФЕРЕНЦИРОВАННЫЙ КРЕДИТ
function getAnswerPhraseD () {
  const creditMoney = parseInt(document.querySelector('#c').value);
  const months = parseInt(document.querySelector('#m').value);
  const persent = parseInt(document.querySelector('#p').value);
  const allPaymentArr = [];

    //первый платеж
  const firstPay = Math.floor((creditMoney/months+(creditMoney*(persent/100)/12)) * 100) / 100;
  allPaymentArr.push(firstPay);
    //расчет по месяцам
  for (let i = 0; allPaymentArr.length < months; i++) {
    let pay = allPaymentArr[i];
    let sum = 0;
      for (let i = 0; i < allPaymentArr.length; i++) {
        sum += allPaymentArr[i]
      }
      pay = Math.floor((creditMoney/months+((creditMoney-sum)*persent/100/12)) * 100) / 100;
      
      allPaymentArr.push(pay);
  }

    // общая сумма
  let sum1 = 0;
  for (let i = 0; i < allPaymentArr.length; i++) {
    sum1 += allPaymentArr[i]
  }
  const allPaymentD = Math.floor(sum1*100)/100;
    //переплата 
  const overpaymentD = Math.floor((allPaymentD-creditMoney)*100)/100;
    
    //ВЫВОД
  const appDiv = document.body.querySelector('#app').innerHTML = `Мы подобрали вам дифференцированный кредит на сумму: <b>${creditMoney} руб.</b> под <b>${persent} процентов</b> годовых на срок <b>${months} месяцев</b>. Первый платёж составляет: <b>${firstPay} руб.</b>, общая сумма выплат: <b>${allPaymentD} руб.</b>, переплата: <b>${overpaymentD} руб.</b>`;
  
  return appDiv;
}

  // создание списка
function createPayArrList () {
  const creditMoney = parseInt(document.querySelector('#c').value);
  const months = parseInt(document.querySelector('#m').value);
  const persent = parseInt(document.querySelector('#p').value);
  const allPaymentArr = [];

    //первый платеж
  const firstPay = Math.floor((creditMoney/months+(creditMoney*(persent/100)/12)) * 100) / 100;
  allPaymentArr.push(firstPay);
    //расчет по месяцам
  for (let i = 0; allPaymentArr.length < months; i++) {
    let pay = allPaymentArr[i];
    let sum = 0;
      for (let i = 0; i < allPaymentArr.length; i++) {
        sum += allPaymentArr[i]
      }
      pay = Math.floor((creditMoney/months+((creditMoney-sum)*persent/100/12)) * 100) / 100;
      
      allPaymentArr.push(pay);
  }
// создание списка
  let payArrList = document.querySelector('#payArrList');
  payArrList =`<p><b>Расчет по месяцам (без учета даты кредита):</b></p>`;
  allPaymentArr.forEach((pay, i) => { 
    payArrList += `<ul id="plArreyList">${i + 1} месяц - ${pay} руб.</ul>`;
    });
  const appDivList = document.body.querySelector('#app').innerHTML = payArrList;
  return appDivList;
}

export {getAnswerPhraseA}
export {getAnswerPhraseD}
export {createPayArrList}