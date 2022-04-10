//Codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " +ladoCuadrado + " m");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " +perimetroCuadrado + " m");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " +areaCuadrado + " m^2");
console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5.5;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " m," + ladoTriangulo2 + " m," +baseTriangulo + " m," );
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " m");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + " m^2");
console.groupEnd();