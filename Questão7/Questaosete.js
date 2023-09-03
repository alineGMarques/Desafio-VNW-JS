//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

 
 function triploDaSoma(num1,num2, num3){
    let soma = num1+num2;
 
    function triplo(){
    
      return soma*num3
    }
    
    return triplo();
  }
  
  console.log(triploDaSoma(3,2, 3));