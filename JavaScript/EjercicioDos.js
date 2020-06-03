// Fabián Torres Castro / Universidad de Costa Rica - Sede del Pacífico.

function jsEjercicio2(num){
  var mensaje = "!0 = 1 \n";
  for(i = 1; i <= num; i++){
      var multi = 1;
      for(j = i; j >= 1; j--){
        multi = multi * j;
      }//fin del segundo for
      mensaje = mensaje + "!"+i+" = "+multi+"\n";
  }//fin del primer for
  return mensaje;
}//fin de jsEjercicio2

var numeroSoli = parseInt(prompt("Digite el número para calcularle el factorial"));
console.log(jsEjercicio2(numeroSoli));