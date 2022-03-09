/* GIOCO 1 - Mail
1. Chiedo all’utente la sua email
2. Controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

console.log('js OK');

// Chiedo all’utente la sua email
let email=prompt('la tua email');

// Creo array contenente email
let mailArray=['a@mail.com', 'b@mail.com', 'c@mail.com', 'd@mail.com', 'e@mail.com','f@mail.com',];

//verifiico che la mail inserita dall'utente sia presente nell'array
for (let i=0; i<5; i++){
    if (email === mailArray[i]){
        console.log('evvai, la tua mail è nel nostro archivio');
    }
    else{
        console.log('no');
    }
}

console.log('***************** FINE ES 1 *************************');


/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

console.log('***************** INIZIO ES 2 *************************');

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
let randomHuman = Math.floor(Math.random() * 7);
let randomPc = Math.floor(Math.random() * 7);

let randomHumanArray = [Math.floor(Math.random() * 7)];
let randomPcArray = [Math.floor(Math.random() * 7)];

if (randomHumanArray > randomPcArray){
    console.log('vince giocatore');
}
else{
    console.log('vince pc');
}

console.log('numero giocatore è ' + randomHumanArray);
console.log('numero PC è ' + randomPcArray);
