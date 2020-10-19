// database cognomi
var database = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// console.log(database);
var avaliable = 0;
// richiesta cognome utente
var cognome = 0;
do {
    var cognome = prompt('Inserisci il tuo cognome').trim();

    // if (isNaN(cognome)) {
    //     var avaliable = 1;
    // } else {
    //     var avaliable = 0;
    // }

// } while (avaliable = 0);
} while (typeof cognome != 'string');

database.push(cognome);

console.log(database);