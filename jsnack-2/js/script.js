/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let sum = 0;

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (!(isEven(i))) {
        sum += numbers[i];
    }
}
console.log(sum); 

