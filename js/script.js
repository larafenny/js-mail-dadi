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
    
}


/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/