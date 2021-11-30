/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati. */

const nameGuest = ['manuel', 'francesco', 'elisabetta', 'chiara', 'luca'];

const lastNameGuest = ['rossi','linardi','coppola','valenti','de luca'];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function randomName() {
    const randomNameGuest = nameGuest[getRndInteger(0, nameGuest.length)];
    const randomLastName = lastNameGuest[getRndInteger(0, lastNameGuest.length)];
    const resultRandom = randomNameGuest + ' ' + randomLastName;
    return resultRandom;
}

const guests = randomName();

document.writeln(guests);
