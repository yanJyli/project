import { formCredit } from "./form.js"
import { getAnswerPhraseA } from "./calculation.js"
import { getAnswerPhraseD } from "./calculation.js"
import { createPayArrList } from "./calculation.js"


function getCheckMonthButton() {
  const checkMonthButton= document.createElement("button");
  checkMonthButton.id="check-month-button";
  checkMonthButton.innerHTML = "Показать расчет по месяцам";
  document.body.querySelector('#Credit').append(checkMonthButton);
  return checkMonthButton;
}

function getAnswerPhrase () {
  const selectElement = document.getElementById("creditName");
  const checkMonthButtonRemove = document.body.querySelector('#check-month-button');
  if ( selectElement.selectedIndex == 0 ) {
    getAnswerPhraseA();
    checkMonthButtonRemove.remove();
    } else {
    getAnswerPhraseD();
    !checkMonthButtonRemove ? getCheckMonthButton().addEventListener("click", getPayArrList) : getCheckMonthButton().remove();
    } 
    
  return getAnswerPhrase;
}

function getPayArrList () {
  const selectElement = document.getElementById("creditName");
  if ( selectElement.selectedIndex == 1 ) {
    createPayArrList(); 
  }
return getPayArrList;
}

function processor () {
  const checkButton = document.body.querySelector('#check-button').addEventListener("click", getAnswerPhrase);
  return processor;
}

function main () { 
  processor ()
};

export { main };
