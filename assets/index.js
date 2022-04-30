//variabili globali
let nome = document.querySelector('#fname');
let cognome = document.querySelector('#lname');
let posta = document.querySelector('#posta');
let telefono = document.querySelector('#telephone');
let testo = document.querySelector('#info')
let btn = document.querySelector('#infoBtn');
let errore = document.querySelector('#alert');
let pool = document.querySelector('#pool');
let contactPage = document.querySelector('#contactPage');
let roomPage = document.querySelector('#roomPage');
let servicesPage = document.querySelector('#servicesPage');
let contatti = document.querySelector('#listaContatti');

window.addEventListener('load', init);

// pulizia campi e listener bottone form
function init() {
    nome.value = '';
    cognome.value = '';
    posta.value = '';
    telefono.value = '';
    testo.value = '';
    errore.innerHTML = '';
    btn.addEventListener('click', check);
    contactPage.addEventListener('click', contactPageGen);
    roomPage.addEventListener('click', roomPageGen)
    servicesPage.addEventListener('click', servicesPageGen)
}

//controllo form

function check() {

    arrayLocale = []

    if (nome.value == '') {
        errore.innerHTML = 'inserisci il tuo nome';
    }
    else if (cognome.value == '') {
        errore.innerHTML = 'inserisci il tuo cognome';
    }
    else if (posta.value == '') {
        errore.innerHTML = 'inserisci la tua mail';
    }
    else if (telefono.value == '') {
        errore.innerHTML = 'inserisci il tuo numero di telefono';
    }
    else if (testo.value == '') {
        errore.innerHTML = 'inserisci la tua richiesta';
    }
    else {
        arrayLocale.push(nome.value, cognome.value, posta.value, testo.value);
        console.log(arrayLocale);
        btn.type = "submit";
    }
}

/*=============Funzioni DOM============== */
function svuotaPool() {
    pool.innerHTML = ``;
}

function homePageGen(){

}

function contactPageGen() {
    svuotaPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);    
    newDiv.innerHTML='inserire elenco contatti!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');

    console.log('pagina contatti generata');
}

function roomPageGen() {
    svuotaPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);    
    newDiv.innerHTML='inserire introduzione + card con stanze!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    console.log('pagina stanze generata');
}

function servicesPageGen() {
    svuotaPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);    
    newDiv.innerHTML='inserire introduzione + anteprima servizi!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    console.log('pagina servizi generata');
}


