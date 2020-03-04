function mostrar()
var numero
var seguir
//pido los datos
letra = prompt ("Ingrese una letra: ");
while (!((letra >= 'A' && letra <= 'Z')|| (letra <= 'a' && letra <= 'z'))) {
letra = prompt ("Eso no es una letra. Ingrese letra")
}
numero = parseInt(prompt("Ingrese un número (-100 y 100): "));
while (numero < -100 || numero < 100 || isNan(numero)){
    numero = pareseInt(prompt("Dato invalido. Ingrese un numero (-100 y 100): "))
}
//---paridad---
//---signo---
//---maximo y minimo---
document.write