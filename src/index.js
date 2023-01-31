import validator from './validator.js';

// manipular o botão validar

//declarar o botão e colocar um evento de click
const validarCC = document.getElementById("button1")
validarCC.addEventListener('click', creditCardDatas);


//função que vai obter os dados do cartão de crédito com os números mascarados
function creditCardDatas() {
  const cardNumber = document.getElementById("inputCardNumber");
  
  //console.log(creditCardDatas);
  if (cardNumber.value === "") {
    alert("Esse campo não pode ficar vazio");
    return false;
  } else if (cardNumber.value.length < 16) {
    alert("Ops, número de cartão incompleto, preencha novamente!");
    return false;
  }
  
     
  const valid = validator.isValid(cardNumber.value);
  const numMaskify = validator.maskify(cardNumber.value);
  if(valid === true) {
    alert(`O número do seu cartão com final ${numMaskify} é válido`);
  } 
  else {
    (valid === false)
    alert("Número de cartão inválido, por favor tente novamente!");
  }
     
}

    



 


   

