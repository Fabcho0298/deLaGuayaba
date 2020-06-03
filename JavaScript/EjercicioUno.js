// Fabián Torres Castro / Universidad de Costa Rica - Sede del Pacífico.

var arrayUno = [2, 3, 4, 6];
var arrayDos = [123, 67, 890, 4];
var arrayTres = [2, 3, 7, 9, 4, 5, 6, 9, 12];

function jsEjercicioUno(pArray){
  var auxArray = [];
    for (i = 0; i < pArray.length; i++){
      var vMulti = 1;
      for(j = 0; j < pArray.length; j++){
          if(i != j){
              vMulti = vMulti * pArray[j];
          } //fin del if
      }// fin del segundo for
      auxArray.push(vMulti);
    }//fin del primer for
    return auxArray;
}//fin del método jsEjercicioUno

console.log(jsEjercicioUno(arrayUno));
console.log(jsEjercicioUno(arrayDos));
console.log(jsEjercicioUno(arrayTres));