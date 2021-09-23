let c = 1000; // сумма займа
let m = 60;   // срок займа (месяцы)
let p = 12;   // процент займа

  //Форма

const creDiv = document.body.querySelector("#Credit"); 
const creditInput = document.createElement("div");

function formCredit (m, p, c) {

  const nameLabelSelect = document.createElement("p");
  nameLabelSelect.innerHTML = "Выберите вид кредита:";
  nameLabelSelect.id = nameLabelSelect;
  creDiv.append(nameLabelSelect);

  const creditName = document.createElement("select");
  creditName.name="creditName"; 
  creditName.id="creditName";
  const creditNameValueA = document.createElement("option");
  creditNameValueA.id = "#selectA";
  creditNameValueA.innerHTML = "Аннуитетный кредит";
  const creditNameValueD = document.createElement("option");
  creditNameValueD.id = "#selectD";
  creditNameValueD.innerHTML = "Дифференцированный кредит";
  creditName.append(creditNameValueA);
  creditName.append(creditNameValueD);
  creDiv.append(creditName);

  const nameLabel1 = document.createElement("p");
  nameLabel1.innerHTML = "Сумма кредита, BYN:";
  creDiv.append(nameLabel1);

  const c1 = document.createElement("input");
  c1.type = "text";
  c1.name = "c";
  c1.id="c";
  c1.innerHTML = c;
  creDiv.append(c1);

  const nameLabel2 = document.createElement("p");
  nameLabel2.innerHTML = "Срок кредита (в месяцах):";
  creDiv.append(nameLabel2);

  const m1 = document.createElement("input");
  m1.type = "text";
  m1.name = "m";
  m1.id="m";
  m1.innerHTML = m;
  creDiv.append(m1);

  const nameLabel3 = document.createElement("p");
  nameLabel3.innerHTML = "Процент кредита, %:";
  creDiv.append(nameLabel3);

  const p1 = document.createElement("input");
  p1.type = "text";
  p1.name = "p";
  p1.id="p";
  p1.innerHTML = p;
  creDiv.append(p1);
}

creditInput.innerHTML = formCredit();

function createButton(id, title) {
  const controlInput = document.createElement("input");
  controlInput.id = id;
  controlInput.type = "button";
  controlInput.value = title;
  return controlInput;
}

const checkButton = createButton("check-button", "Рассчитать");
creDiv.append(checkButton);

  //ВВОД
c = document.getElementById('c').value;
c = parseInt(c);
m = document.getElementById('m').value;
m = parseInt(m);
p = document.getElementById('p').value;
p = parseInt(p);

  //Аннуитетный кредит

 // ежемес. платёж
const plA = Math.floor(( c * ( p/100/p +  (p/100/p / (( 1 + p/100/p )**m - 1 )))) * 100) / 100;

  // переплата
const perplA = Math.floor( (m * plA - c) * 100) / 100;

 // общая сумма выплат
const allplA = Math.floor( (c + perplA) * 100) / 100;

  //Дифференцированный кредит

const plArrey = [];

  //первый платеж
const plD1 = Math.floor((c/m+(c*(p/100)/12)) * 100) / 100;

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

  // общая сумма
let sum1 = 0;
for (let i = 0; i < plArrey.length; i++) {
  sum1 += plArrey[i]
}
const allplD = Math.floor(sum1*100)/100;

  //переплата 
const perplD = Math.floor((allplD-c)*100)/100;

//ВЫВОД

const getAnswerPhraseA = () => `Мы подобрали вам аннуитетный кредит на сумму: ${parseInt(c)} руб. под ${parseInt(p)} процентов годовых на срок ${parseInt(m)} месяцев. Ежемесячный платёж составляет: ${parseInt(plA)} руб, общая сумма выплат: ${parseInt(allplA)} руб, переплата: ${parseInt(perplA)} руб.`;

const getAnswerPhraseD = () => `Мы подобрали вам дифференцированный кредит на сумму: ${parseInt(c)} руб. под ${parseInt(p)} процентов годовых на срок ${parseInt(m)} месяцев. Первый платёж составляет: ${parseInt(plD1)} руб, общая сумма выплат: ${parseInt(allplD)} руб, переплата: ${parseInt(perplD)} руб.`;

  //Появление списка дифференцированного кредита
  
function getplArreyList () {
const plArreyList = document.querySelector('.plArrey__list');
plArreyList.innerHTML = " ";
plArrey.forEach((element, i) => {
  plArreyList.innerHTML += `<li class="plArrey__list">${i + 1} ${element}</li>`;
});   
return plArreyList;
}

//const selectElement = document.getElementById("select");
//const selectedValue = selectElement.options [selectElement.selectedIndex].value;
let setListener = (element, type, handler) => {
  if (!element){
    return;
  }
  element.addEventListener(type, handler);
  return () => {
    element.removeEventListener(type, handler);
  };
}

let selectElem = document.getElementById('select');
setListener(selectElem, 'change', function() {
  let index = selectElem.selectedIndex;
  pElem.innerHTML = 'selectedIndex: ' + index;    //   Добавить данные в <p>
  });
let pElem = document.getElementById('nameLabelSelect')


function getAnswerPhrase(selectedValue, getAnswerPhraseD, getAnswerPhraseA){
  selectedValue = 0 ? getAnswerPhraseA : getAnswerPhraseD;
  }

const appDiv = document.body.querySelector("#app"); 
const AnswerPhrase = document.createElement("div");
AnswerPhrase.id = "#app";
AnswerPhrase.innerHTML = getAnswerPhrase();  ///
appDiv.append(AnswerPhrase);

const checkMonthButton = createButton("check-month-button", "Показать расчет по месяцам");
appDiv.append(checkMonthButton);

function checkApp(AnswerPhrase){
  elem = document.getElementById('app'); //находим блок div по его id, который передали в функцию
  state = elem.style.display; //смотрим, включен ли сейчас элемент
  if (state =='') elem.style.display='none'; //если включен, то выключаем
  else elem.style.display=''; //иначе - включаем
  return checkApp;
}

setListener(checkButton, "click", getAnswerPhrase);
setListener(checkMonthButton, "click", getplArreyList);

function main () { 

  //proceessor();

};

export { main };