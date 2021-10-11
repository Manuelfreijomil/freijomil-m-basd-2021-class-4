/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function sum(a,b) {
    return a + b
}

var sumOfTwoNumbers= sum(6,4);
console.log('The result of exercise 6 A is: ' + sumOfTwoNumbers);

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sumNew(a,b){
    if (typeof a !== 'number'){
        alert( 'The result of exercise 6 B is: a is not a number');
        return ;
    }else if (typeof b !== 'number'){
        alert( 'The result of exercise 6 B is: b is not a number');
        return ;
    }else 
    return a + b;
};
var sumValidated= sumNew(5,'n');
console.log('The result of exercise 6 B is: ' + sumValidated)

/*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validateInteger (a){
    if (a % 1 == 0){
        return true;
    }else 
        return false;
};

var notInteger= validateInteger(1.5);
var integer1= validateInteger (5);

console.log ('The result of exercise 6 C is: ' + integer1)

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function sumNewValidate(a1,b1){
    if (typeof a1 !== 'number'){
        alert( 'The result of exercise 6 D is: a is not a number');
        return ;        
    }else if (typeof b1 !== 'number'){
        alert( 'The result of exercise 6 D is: b is not a number');
        return ;
    }else if (( a1 % 1 != 0) || (b1 % 1 != 0)){
        alert('The result of exercise 6 D is: one or both of the two is not an integer. The result will be rounded.')
        return Math.round( a1 + b1);
    }else{
        return a1+b1;
    }
};

console.log('The result of the exercise 6 D is: ' + sumNewValidate(25,4.85));

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

function sumNewValidateSeparated(a2){
    if (typeof a2 !== 'number'){
        alert('The result of exercise 6 E is: a2 is not a number');
        return ;        
    }else{
        return a2;
    }
};

function sumLast(a,b) {
    return sumNewValidateSeparated(a) + sumNewValidateSeparated(b);
};

console.log('The result of exercise 6 E is: ' + sumLast(50.2,'manuel'));