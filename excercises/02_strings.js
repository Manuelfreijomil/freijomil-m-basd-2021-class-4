/* Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase). */
var string21, mayuString1

string21='I´m the fucking beast.';
mayuString1= string21.toUpperCase();
console.log('The result of the exercise 2 A is: ' + mayuString1);

/* Crear una variable de tipo string con al menos 10 
caracteres y generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring). */

var string22, first5;

string22='I´m the fucking beast.';
first5= string22.substring(1,6);

console.log('The result of the exercise 2 B is: ' + first5);

/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando el 
resultado en una nueva variable (utilizar substring).*/

var string23, last3;

string23='I´m the fucking beast.';
last3= string23.substring(19,24);

console.log('The result of the exercise 2 C is: ' + last3);

/*Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y 
el operador +).*/

var string24,string241;

string24='I´m the fucking beast.';
string241= string24.substring(0,1).toUpperCase() + string24.substring(1).toLowerCase()

console.log('The result of the exercise 2 D is: ' + string241);





/*Crear una variable de tipo string con al menos 10 caracteres y algún 
espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).*/

var string25,string251;

string25='I´m the fucking beast.';
string251=string25.indexOf(" ");

console.log('The result of the exercise 2 E is: ' + string251)



/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo 
string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/


var string26,string261;
string26='optimistic impulsive';
string261=string26.substring(0,1).toUpperCase() + string26.substring(1,string26.indexOf(" ")+1).toLowerCase() +
string26.substring(string26.indexOf(" ")+1,string26.indexOf(" ")+2).toUpperCase() + string26.substring(string26.indexOf(" ")+2).toLowerCase();

console.log('The result of the exercise 2 F is: ' + string261);

