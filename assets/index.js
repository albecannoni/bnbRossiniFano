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
function resetPool() {
    pool.innerHTML = ``;
}
function homePageGen() {

}

function contactPageGen() {
    resetPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);
    newDiv.innerHTML = 'inserire elenco contatti!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');

    console.log('pagina contatti generata');
}

function roomPageGen() {
    resetPool();
    //generazione blocco feedback
    let newDiv = document.createElement("div");
    let gridBox = document.createElement("div");
    let textBox = document.createElement("div");
    let textP = document.createElement("p");
    let slideBox = document.createElement("div");
    pool.append(newDiv);
    newDiv.append(gridBox);
    gridBox.append(textBox);
    textBox.append(textP);
    newDiv.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');
    gridBox.classList.add('d-grid', 'col-sm-10', 'col-md-6');
    textBox.classList.add('text-center', 'mt-4', 'mt-md-5', 'mb-3', 'mb-md-4', 'py-2');
    textP.classList.add('corsivo', 'm-2', 'm-sm-0');
    textP.innerHTML = '&quot; Cristina è stata una persona disponibile e solare, accogliente e sempre disponibile. Camera pulita e confortevole Estremamente disponibile nell&apos; accogliere anche il mio cane. Consiglio senza riserve questa possibilità. Davvero ottima esperienza! &quot;';
    //generazione blocco slideshow
    pool.appendChild(slideBox);
    slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');
    slideBox.innerHTML = `<div class="d-flex col-md-8 justify-content-center align-items-center">
    <div class="container-fluid row justify-content-center align-items-center  h-100 w-100" id="banner">
        <div class="d-flex justify-content-center align-content-center col-sm-10">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade ombra bRadius"
                data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/images/caruosel1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/caruosel2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/caruosel3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/caruosel4.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
                          </div>`
    //generazione blocco teaser
    console.log('pagina stanze generata');
}

function servicesPageGen() {
    resetPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);
    newDiv.innerHTML = 'inserire introduzione + anteprima servizi!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    console.log('pagina servizi generata');
}


