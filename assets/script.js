let nome = document.querySelector('#fname');
let cognome = document.querySelector('#lname');
let email = document.querySelector('#email');
let telefono = document.querySelector('#telephone');
let testo = document.querySelector('#info')
let btn = document.querySelector('#infoBtn');
let errore = document.querySelector('#alert');
let totInfo = []


window.addEventListener('load', init);

/* pulizia campi e listener bottone form*/
function init() {
    nome.value = '';
    cognome.value = '';
    email.value = '';
    telefono.value = '';
    testo.value = '';
    errore.innerHTML = '';
    btn.addEventListener('click', check);
}

/*controllo form*/

function check() {

    arrayLocale = []

    if (nome.value == '') {
        errore.innerHTML = 'inserisci il tuo nome';
    }
    else if (cognome.value == '') {
        errore.innerHTML = 'inserisci il tuo cognome';
    }
    else if (email.value = '') {
        errore.innerHTML = 'inserisci la tua mail';
    }
    else if (telefono.value == '') {
        errore.innerHTML = 'inserisci il tuo numero di telefono';
    }
    else if (testo.value == '') {
        errore.innerHTML = 'inserisci la tua richiesta';
    }
    else {
        arrayLocale.push(nome.value, cognome.value, email.value, testo.value);
        console.log(arrayLocale);
    }
}

/*============================================= */



