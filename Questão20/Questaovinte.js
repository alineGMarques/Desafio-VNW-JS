//20 - Mostre no console o nome de um amigo de cada lista.


let  cadastro  =  [
    {
      nome : "Keyla" ,
      idade : 30 ,
      telefone : 8823232322 ,
      amigos : [ "Aline" ,  "Luan" ,  "Ana" ,  "Sofia" ]
    } ,
    {
      nome : "Pablo" ,
      idade : 20 ,
      telefone : 8895216155 ,
      amigos : [ "Lucas" ,  "Bernardo" ,  "Miguel" ,  "Rafael" ]
    } ,
    {
      nome : "Luna" ,
      idade : 33 ,
      telefone : 8826554454 ,
      amigos : [ "Bruna" ,  "Cristiane" ,  "Luciana" ,  "Barbara" ]
    } ,
    {
      nome : "Antonio" ,
      idade : 56 ,
      telefone : 884555555 ,
      amigos : [ "Nicolas" ,  "Roberto" ,  "Paulo" ,  "Luana" ]
    } ,
    {
      nome : "Pedro" ,
      idade : 25 ,
      telefone : 882222333 ,
      amigos : [ "Alicia" ,  "Breno" ,  "Mateus" ,  "Paulo" ]
    }
  ]
  
  

for(let person of cadastro){
    for(let amigo of person.amigos){
        console.log(`${person.nome} é amigo de ${amigo}`)
    }
}