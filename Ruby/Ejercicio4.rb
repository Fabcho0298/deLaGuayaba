#Universidad de Costa Rica - Sede del Pacífico / Fabián Torres Castro

class Main

  def rEjercicio4(pArray)
   mensaje = String.new
      (1..5).each do |num1|
        mensaje += " "+num1.to_s+": "
        pArray.each do |num2|
          if num1 == num2
            mensaje += "*"
          end
        end
        mensaje += "\n"
      end
   print mensaje
  end
end

ejecutar = Main.new
myArray = [1,2,1,3,3,1,2,1,5,1]
ejecutar.rEjercicio4(myArray)
gets()