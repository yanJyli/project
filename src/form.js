//Форма
const creDiv = document.body.querySelector('#Credit'); 
const creditInput = document.createElement("div");

function formCredit () {
  const nameLabelSelect = document.createElement("p");
  nameLabelSelect.innerHTML = "Выберите вид кредита:";
  nameLabelSelect.id = nameLabelSelect;
  creDiv.append(nameLabelSelect);

  const creditName = document.createElement("select");
  creditName.id="creditName";
  const creditNameValueA = document.createElement("option");
  creditNameValueA.innerHTML = "Аннуитетный кредит";
  const creditNameValueD = document.createElement("option");
  creditNameValueD.innerHTML = "Дифференцированный кредит";
  creditName.append(creditNameValueA);
  creditName.append(creditNameValueD);
  creDiv.append(creditName);

  const nameLabel1 = document.createElement("p");
  nameLabel1.innerHTML = "Сумма кредита, BYN:";
  creDiv.append(nameLabel1);

  const creditMoneyInput = document.createElement("input");
  creditMoneyInput.type = "text";
  creditMoneyInput.id="c";
  creDiv.append(creditMoneyInput);

  const nameLabel2 = document.createElement("p");
  nameLabel2.innerHTML = "Срок кредита (в месяцах):";
  creDiv.append(nameLabel2);

  const monthsInput = document.createElement("input");
  monthsInput.type = "text";
  monthsInput.id="m";
  creDiv.append(monthsInput);

  const nameLabel3 = document.createElement("p");
  nameLabel3.innerHTML = "Процент кредита, %:";
  creDiv.append(nameLabel3);

  const persentInput = document.createElement("input");
  persentInput.type = "text";
  persentInput.id="p";
  creDiv.append(persentInput);

  const checkButton = document.body.querySelector('#check-button');
  creDiv.append(checkButton);

  return formCredit;
}

creditInput.innerHTML = formCredit();

export {formCredit}