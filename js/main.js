// database cognomi
var database = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// console.log(database);
var cycle = 0;
// richiesta cognome utente
var cognome = '';

    var cognome = prompt('Inserisci il tuo cognome').trim();

    function allLetter(inputtxt) { 
        var cognome = /^[A-Za-z]+$/;

        if(inputtxt.value.match(cognome)) {
        alert('Your name have accepted : you can try another');
        return true;
        }
        else {
        alert('Please input alphabet characters only');
        return false;
        }
    }

// } while (typeof cognome !== 'string');

// uppercase first letter if not 
cognome = cognome.substring(0,1).toUpperCase() + cognome.substring(1).toLowerCase();

// push cognome in to database array
database.push(cognome);

// database alphabetical sort
database.sort();

// cycle while to create UL
var surnames = '';
for (var i = 0; i < database.length; i++) {
    var surname = database[i];

    surnames += '<li>' + surname + '</li>';
}


// show UL
document.getElementById('list').innerHTML = surnames;

// surname stamp
document.getElementById("surname").innerHTML = 'Buongiorno ' + cognome;

// position surname
position = database.indexOf(cognome) + 1; 
document.getElementById("position").innerHTML = 'Occupi la posizione numero ' + position;
