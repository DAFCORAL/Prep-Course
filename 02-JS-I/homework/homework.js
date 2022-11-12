// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'soyHenry';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 39;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  const devolver = (str);
  return devolver;
}

function suma(x, y) {
  var sumar = (x + y);
  return sumar;  
}

function resta(x, y) {
  var restar = (x - y);
  return restar  
}

function multiplica(x, y) {
  var multiplicar = (x * y);
  return multiplicar;
}  

function divide(x, y) {
  var dividir = (x / y);
  return dividir;  
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  }
    return false;  
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
     return true;
   }
     return false;   
}

function menosQueNoventa(x, y) {
  if (x < 90); {
    return true;}
    return false;
} 

function mayorQueCincuenta(num) {
  if (x > 50);{
    return true;}
    return false;
}

function obtenerResto(x, y) {
 var restante = ( x % y)
 return restante  
}

function esPar(num) {
  if (num % 2 === 0){
    return true;}
    return false;
  }

function esImpar(num) {
  if (num % 2 === 1); {
    return true;}
    return false;
  }
  

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);  
}

function elevarAlCubo(num) {
  return Math.pow(num, 3);  
}

function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);  
}

function numeroRandom() {
  return console.log(Math.random()); 
}


function esPositivo(numero) {
  if (numero > 0) {
      return 'Es Positivo';}
      return 'Es Falso';
}

function agregarSimboloExclamacion(str) {
  var frase = str + '!'
  return frase
}

function combinarNombres(nombre, apellido) {
  var completo = nombre + ' ' + apellido
  return completo
}
function obtenerSaludo(nombre) {
  const saludo = 'Hola '
  return saludo + nombre + '!';
}   
function obtenerAreaRectangulo(alto, ancho) {
    const rectangulo = (alto * ancho);
    return rectangulo;
}

function retornarPerimetro(lado){
  const info = lado
  const perimetro = Math.pow(info, 2)
  return perimetro
}

function areaDelTriangulo(base, altura){
  const triangulo = (base * altura) / 2
  return triangulo
}

function deEuroAdolar(euro){
  var dolar = 1.20
  return (euro * dolar)  
}

function esVocal(letra) {
  if (letra.length === 1)
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es Vocal';}
    return 'Dato incorrecto';
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
