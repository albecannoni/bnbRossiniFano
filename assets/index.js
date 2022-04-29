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

/*============================================= */
function svuotaPool() {
    pool.innerHTML = ``;

}
function contactPageGen() {
    svuotaPool();
    pool.innerHTML = `<div id="elencocontatti" class="pt-5 d-flex justify-content-center align-items-center"></div>
                      <div id="listacontatti" class=""></div>`;    
    boxContatti = document.querySelector('#elencocontatti');
    boxContatti.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    boxContatti.innerHTML = `<div class="d-grid col-sm-10 col-md-6">
                                <p>La nostra casa ha due magiche stanze: accoglienti e dotate di tutto ciò che può servire!
                                per maggiori dettagli clicca sulle anteprime qua sotto!</p>
                            </div>`;

    boxCard = document.querySelector('#listacontatti');
    boxCard.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    boxCard.innerHTML = '<p>testo di prova</p>';

    //fare tutto sopra come sotto!! (sei una bestia!!)
    let divGenerato = document.createElement("div");
    pool.append(divGenerato);
    divGenerato.innerHTML='FESTAGROSSA!!';
    divGenerato.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');

    console.log('pagina contatti generata');
}

function roomPageGen() {
    console.log('pagina stanze generata');
}

function servicesPageGen() {
    console.log('pagina servizi generata');
}


