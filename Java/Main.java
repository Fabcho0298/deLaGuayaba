//Universidad de Costa Rica - Sede del Pacífico / Fabián Torres Castro
import java.util.Vector;

class Main {
  public static void main(String[] args) {
    int[] vecNum = {1,2,2,5,4,6,7,8,8,8};
    System.out.println(jEjercicio5(vecNum));
  }

  public static String jEjercicio5(int pVecNum[]){
    int ocurrenciaMax = 0, numero = 0;
    int contador = 1;
    int ultimaPos = pVecNum.length-1;
    
      for(int i = 0; i < pVecNum.length-1; i++){
        if(pVecNum[i] == pVecNum[i+1]){
          contador = contador + 1;
        }//fin del if
        else{
          if(contador > ocurrenciaMax){
            ocurrenciaMax = contador;
            numero = pVecNum[i];
          }//fin del if
          contador = 1;
        }//fin del else
      }//fin del for

      if(contador > ocurrenciaMax){
        ocurrenciaMax = contador;
        numero = pVecNum[ultimaPos]; 
      }//fin del if

  return "Ocurrencias: "+ocurrenciaMax+"\n Número: "+numero;

  }//fin del método

}//fin de la clase