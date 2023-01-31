const validator = {
  isValid: function (cardNumber) {
    // converter o número do cartão em uma array e inverter
    const cardArray = cardNumber.split("");     //o split divide uma string em um array de strings;
    const newArray = []; //declarar uma variável vazia que armazenará os dígitos de acordo com as condições que eles atendem
    let totalSum = 0;
    for(let i = 0; i < cardArray.length; i++){
      newArray.push(parseInt(cardArray[i])) // o push adiciona valores a um array
    }
    newArray.reverse(); //reverse para inverter o número do cartão de crédito
    //console.log(newArray);

    for(let i = 0; i < newArray.length; i++){
      if (i % 2 === 1){
        newArray[i] = newArray[i]*2;
        if (newArray[i] >=10){
          newArray[i] = newArray[i]-9; //quando o valor for maior que 10 ele diminui 9
        
        }
      }

      totalSum += newArray[i];
      //console.log(totalSum);
    } 

    if (totalSum % 10 === 0){
      return true;
    } 
    else{
      return false;
    }
  },
  
  maskify: (cardNumber) => {
    return cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4)
  }

   
}
   


export default validator;
