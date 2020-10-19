// database cognomi
var database = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// console.log(database);
var avaliable = 0;
// richiesta cognome utente
var cognome = 0;
do {
    var cognome = prompt('Inserisci il tuo cognome').trim();

    // console.log(typeof cognome);
    // if (isNaN(cognome)) {
    //     var avaliable = 1;
    // } else {
    //     var avaliable = 0;
    // }

} while (typeof cognome !== 'string');


//  surname stamp
document.getElementById("surname").innerHTML = 'Buongiorno ' + cognome;

// push cognome in to database array
database.push(cognome);

// database alphabetical sort
database.sort();

document.getElementById("list-surname").innerHTML = database;

