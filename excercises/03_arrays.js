/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('The result of the exercise 3 A is: ' + months[5-1] + ' y ' + months[11-1]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('The result of the exercise 3 B is: ' + months.sort());

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.push('finalMonth');
months.unshift('beginningMonth');

console.log('The result of the exercise 3 C is: ' + months);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.pop();
months.shift();

console.log('The result of the exercise 3 D is: ' + months);

/*Invertir el orden del array (utilizar reverse).*/
var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.sort();
months.reverse();

console.log('The result of the exercise 3 E is: ' + months);

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var joinArrey= months.join('-');

console.log('The result of the exercise 3 F is: ' + joinArrey);

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var monthsMayToNovember= months.slice(4,11);

console.log('The result of the exercise 3 F is: ' + monthsMayToNovember);