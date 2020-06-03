#Universidad de Costa Rica - Sede del Pacífico / Fabián Torres Castro

class Main

  def rEjercicio3(pArray)
    mayor = pArray[0]
    for i in (1..pArray.length-1)
      if mayor < pArray [i]
        mayor = pArray[i]
      end
    end
    print mayor
  end
end

ejecutar = Main.new
myArray = [13,2,4,35,1]
ejecutar.rEjercicio3(myArray)
gets()