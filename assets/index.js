//variabili globali
let pool = document.querySelector('#pool');
let contactPage = document.querySelector('#contactPage');
let roomPage = document.querySelector('#roomPage');
let servicesPage = document.querySelector('#servicesPage');
let contatti = document.querySelector('#listaContatti');
let arrayRichieste = []

//classi
class InfoRequest {
    
    constructor(id, nome, cognome, email, telefono, richiesta) {
        id = 1
        this.id = id++
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.telefono = telefono;
        this.richiesta = richiesta;
    }
}

class RoomCard {
    
    constructor(id, titolo, immagine, descrizione) {        
        this.id = id++;
        this.titolo = titolo;
        this.immagine = immagine;
        this.descrizione = descrizione;
    }
}


//innesco init
window.addEventListener('load', init);

function init() {
    homePageGen();
    // roomPageGen();
    homePage.addEventListener('click', homePageGen);
    contactPage.addEventListener('click', contactPageGen);
    roomPage.addEventListener('click', roomPageGen);
    servicesPage.addEventListener('click', servicesPageGen);
}

/*========= manipolazione DOM ========== */
function resetPool() {
    pool.innerHTML = ``;
}

function homePageGen() {
    resetPool();

    //generazione blocchi
    let quoteBox = document.createElement("div");
    quoteBox.setAttribute('id', 'quoteBox');
    quoteBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');

    let gridBox = document.createElement("div");
    gridBox.setAttribute('id', 'gridBox');
    gridBox.classList.add('d-grid', 'col-sm-10', 'col-md-6');

    let textBox = document.createElement("div");
    textBox.setAttribute('id', 'textBox');
    textBox.classList.add('text-center', 'mb-3', 'mb-md-4', 'py-2');

    let textP = document.createElement("p");
    textP.classList.add('corsivo', 'm-2', 'm-sm-0');

    let slideBox = document.createElement("div");
    slideBox.setAttribute('id', 'slideBox');
    slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');

    let teaserBox = document.createElement('div');
    teaserBox.setAttribute('id', 'teaserBox');
    teaserBox.classList.add('d-flex', 'justify-content-center', 'pt-2', 'align-items-center', 'panna');

    let textBox2 = document.createElement("div");
    textBox2.setAttribute('id', 'textBox2');
    textBox2.classList.add('text-center', 'my-3', 'w-75', 'corsivo');

    let textP2 = document.createElement("p");
    textP2.classList.add('corsivo', 'm-sm-0');

    let alertBox = document.createElement('div');
    alertBox.setAttribute('id', 'alertBox');
    alertBox.classList.add('d-flex', 'justify-content-center', 'align-items-center');

    let alertInnerBox = document.createElement('div');
    alertInnerBox.setAttribute('id', 'alertInnerBox');
    alertInnerBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna', 'w-50', 'testoAlert', 'bRadius');


    // let formBox = document.createElement('div');
    // formBox.setAttribute('id', 'formBox');
    // formBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna', 'pt-1');

    //posizionamento
    pool.append(quoteBox);
    quoteBox.append(gridBox);
    gridBox.append(textBox);
    textBox.append(textP);
    teaserBox.append(textBox2);
    textBox2.append(textP2);
    textP2.innerHTML = 'Compila i campi per ricevere informazioni riguardo il tuo soggiorno! '
    textP.innerHTML = '&quot; Cristina è stata una persona disponibile e solare, accogliente e sempre disponibile. Camera pulita e confortevole Estremamente disponibile nell&apos; accogliere anche il mio cane. Consiglio senza riserve questa possibilità. Davvero ottima esperienza! &quot;';

    //generazione blocco slideshow
    pool.appendChild(slideBox);
    slideBox.innerHTML = `<div class="d-flex col-md-8 justify-content-center align-items-center">
    <div class="container-fluid row justify-content-center align-items-center  h-100 w-100" id="banner">
        <div class="d-flex justify-content-center align-content-center col-sm-11">
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
                          </div>`;

    //generazione blocco teaser
    pool.appendChild(teaserBox);

    //generazione blocco alert
    pool.appendChild(alertBox);
    alertBox.append(alertInnerBox);

    
    console.log('Home Page generata');
}
 
//generazione Form(da rendere sicuro)
function formGen(){
    let formBox = document.createElement('div');
    formBox.setAttribute('id', 'formBox');
    formBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna', 'pt-1');
   
    pool.appendChild(formBox);
    formBox.innerHTML = ` <div class="container justify-content-center align-content-center  col-sm-8 col-md-6  pb-5 pt-2 m-sm-2 m-md-0">
                            <form action="mailto:alberto.cannoni@outlook.it" method="post" enctype="text/plain"
                                class="w-100 d-grid py-md-2 px-md-2" data-netlify="true">
                                <fieldset>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col m-1">
                                                <div class="row m-1">
                                                    <label for="fname">Nome:</label>
                                                    <input type="text" id="fname" name="fname" placeholder="..." class="">
                                                </div>
                                                <div class="row"></div>
                                                <div class="row m-1">
                                                    <label for="lname">Cognome:</label>
                                                    <input type="text" id="lname" name="lname" placeholder="..." class="" required autocomplete="off">
                                                </div>
                                            </div>
                                            <div class="col m-1">
                                                <div class="row m-1">
                                                    <label for="email">Email:</label>
                                                    <input type="text" id="posta" name="email" placeholder="..." class="" required autocomplete="off">
                                                </div>
                                                <div class="row"></div>
                                                <div class="row m-1">
                                                    <label for="telephone">Telefono:</label>
                                                    <input type="tel" id="telephone" name="telephone" placeholder="..." class="" required autocomplete="off">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col d-grid m-2">
                                            <label for="info">Richiesta:</label>
                                            <textarea name="richiesta" id="info" cols="..." rows="4"
                                                placeholder="scrivi la tua richiesta" required autocomplete="off"></textarea>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="d-flex justify-content-center align-items-center py-2">
                                    <button type="button" value="send" class="bRadius" id="infoBtn">
                                        <div class="svg-wrapper-1">
                                            <div class="svg-wrapper">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Invia</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>`;

    //listener bottone form
    let btn = document.querySelector('#infoBtn');
    btn.addEventListener('click', check);
}

function roomPageGen() {
    resetPool();
    //generazione blocchi
    let descriptionBox = document.createElement("div");
    descriptionBox.setAttribute('id', 'descriptionBox');
    descriptionBox.classList.add('d-flex', 'justify-content-center', 'text-center', 'align-items-center', 'panna');

    let textBox = document.createElement("p");
    textBox.setAttribute('id', 'textBox');
    textBox.classList.add('d-flex', 'justify-content-center', 'boldText', 'm-2', 'm-sm-0', 'w-75');

    let cardAlign = document.createElement("div");
    cardAlign.setAttribute('id', 'cardAlign');
    cardAlign.classList.add('d-flex', 'justify-content-center', 'h-70');

    let cardBox = document.createElement("div");
    cardBox.setAttribute('id', 'cardBox');
    cardBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'm-sm-0', 'w-80');

    let card1 = document.createElement("div");
    card1.setAttribute('id', 'card1');
    card1.classList.add('myCard', 'd-flex', 'justify-content-center', 'mx-md-5', 'm-sm-0');


    let card2 = document.createElement("div");
    card2.setAttribute('id', 'card2');
    card2.classList.add('myCard', 'd-flex', 'justify-content-center', 'mx-md-5', 'm-sm-0');

    let formBox = document.createElement('div');
    formBox.setAttribute('id', 'formBox');
    formBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna', 'pt-1', 'w-100');

    pool.append(descriptionBox);
    descriptionBox.append(textBox);
    textBox.innerHTML = `descrizione generica delle stanzedescrizione generica delle stanze 
                            descrizione generica delle stanze descrizione generica delle stanze`;

    pool.appendChild(cardAlign);
    cardAlign.append(cardBox);
    cardBox.append(card1);

    card1Content = new RoomCard;
    card1Content.titolo = 'Stanza Bruschino';
    card1Content.immagine = 'assets/images/bruschino1.png';
    card1Content.descrizione = `Questa stanze può ospitare da 1 a 4 persone, clicca sull'imagine per ulteriori dettagli!`;

    card1.innerHTML = `<div class=" bRadius bg-mio my-3 mx-3 ombra2" style="max-width: 100%;
    height: auto;">
        <div class="card-header m-1 boldText">${card1Content.titolo}</div>
        <div class=" m-3">
            <div class="">
                <img onclick="expandRoom()" src="${card1Content.immagine}" class="d-block w-100 cardImg" alt="...">
            </div>
            
            <p class="card-header m-sm-0 p-sm-1 bRadius">${card1Content.descrizione}</p>
        </div>
    </div>`;

    cardBox.appendChild(card2)
    card2.innerHTML = ` <div class=" bRadius bg-mio my-3 mx-3 ombra2" style="max-width: 100%;
    height: auto;">
        <div class="card-header m-1 boldText bRadius">Stanza Armida</div>
        <div class="h-70 m-3">
            <div class="">
                <img onclick="expandRoom()" src="assets/images/armida1.png" class="d-block w-100 cardImg" alt="...">
            </div>
            
            <p class="card-header m-sm-0 p-sm-1 bRadius">Questa stanze può ospitare da 1 a 2 persone, clicca sull'iimagine per ulteriori dettagli!
                </p>
        </div>
    </div>`

    //generazione Form(da rendere sicuro)
    pool.appendChild(formBox);
    formBox.innerHTML = ` <div class="d-flex justify-content-center align-items-center w-70">
                            <div class="container justify-content-center align-content-center  w-100  pb-5 pt-2 m-sm-2 m-md-0">
                            <form action="mailto:alberto.cannoni@outlook.it" method="post" enctype="text/plain"
                                class="w-100 d-grid py-md-2 px-md-2" data-netlify="true">
                                <fieldset>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col m-1">
                                                <div class="row m-1">
                                                    <label for="fname">Nome:</label>
                                                    <input type="text" id="fname" name="fname" placeholder="..." class="">
                                                </div>
                                                <div class="row"></div>
                                                <div class="row m-1">
                                                    <label for="lname">Cognome:</label>
                                                    <input type="text" id="lname" name="lname" placeholder="..." class="" required autocomplete="on">
                                                </div>
                                            </div>
                                            <div class="col m-1">
                                                <div class="row m-1">
                                                    <label for="email">Email:</label>
                                                    <input type="text" id="posta" name="email" placeholder="..." class="" required autocomplete="off">
                                                </div>
                                                <div class="row"></div>
                                                <div class="row m-1">
                                                    <label for="telephone">Telefono:</label>
                                                    <input type="tel" id="telephone" name="telephone" placeholder="..." class="" required autocomplete="off">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col d-grid m-2">
                                            <label for="info">Richiesta:</label>
                                            <textarea name="richiesta" id="info" cols="..." rows="4"
                                                placeholder="scrivi la tua richiesta" required autocomplete="off"></textarea>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="d-flex justify-content-center align-items-center py-2">
                                    <button type="button" value="send" class="bRadius" id="infoBtn">
                                        <div class="svg-wrapper-1">
                                            <div class="svg-wrapper">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Invia</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div></div>`;

    //listener bottone form
    let btn = document.querySelector('#infoBtn');
    btn.addEventListener('click', check);




    console.log('pagina stanze generata');
}

function expandRoom() {
    resetPool();

    //generazione blocchi 
    let descriptionBox = document.createElement("div");
    descriptionBox.setAttribute('id', 'descriptionBox');
    descriptionBox.classList.add('d-flex', 'justify-content-center', 'text-center', 'align-items-center', 'panna');

    let textBox = document.createElement("p");
    textBox.setAttribute('id', 'textBox');
    textBox.classList.add('d-flex', 'justify-content-center', 'boldText', 'm-2',  'w-100');

    let slideBox = document.createElement("div");
    slideBox.setAttribute('id', 'slideBox');
    slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');

    //generazione blocco slideshow

    pool.append(descriptionBox);
    descriptionBox.append(textBox);
    textBox.innerHTML = `descrizione generica delle stanzedescrizione generica delle stanze 
                            descrizione generica delle stanze descrizione generica delle stanze`;

    pool.appendChild(slideBox);
    slideBox.innerHTML = `<div  class="d-flex col-md-8 justify-content-center p-4 align-items-center">
    <div class="container-fluid row justify-content-center align-items-center  h-100 w-100  " id="banner">
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
                        <img src="assets/images/bruschino1.png" class="d-block w-100" alt="...">
                    </div>
                    <div  class="carousel-item">
                        <img src="assets/images/bruschino2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/bruschino1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/bruschino2.png" class="d-block w-100" alt="...">
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
                          </div>`;

}

function contactPageGen() {
    resetPool();
    //(sei una bestia!!)
    let newDiv = document.createElement("div");
    pool.append(newDiv);
    newDiv.innerHTML = 'inserire elenco contatti!!';
    newDiv.classList.add('corsivo', 'm-2', 'm-sm-0', 'pt-5', 'd-flex', 'justify-content-center', 'align-items-center');
    console.log('pagina contatti generata');
    formGen();
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

//controllo form
function check() {
    let richiesta = new InfoRequest
    let nome = document.querySelector('#fname');
    let cognome = document.querySelector('#lname');
    let email = document.querySelector('#posta');
    let telefono = document.querySelector('#telephone');
    let testo = document.querySelector('#info');
    let btn = document.querySelector('#infoBtn');

    //listener bottone form
    // btn.addEventListener('click', check);

    

    richiesta.nome = nome.value;
    richiesta.cognome = cognome.value;
    richiesta.email = email.value;
    richiesta.telefono = telefono.value;
    richiesta.richiesta = testo.value;

    if (nome.value == '') {
        alert('compila tutti i campi');
    }
    else if (cognome.value == '') {
        alert('compila tutti i campi');
    }
    else if (email.value == '') {
        alert('compila tutti i campi');
    }
    else if (telefono.value == '') {
        alert('compila tutti i campi');
    }
    else if (testo.value == '') {
        alert('compila tutti i campi');
    }
    else {
        arrayRichieste.push(richiesta);
        console.log(arrayRichieste);
        btn.type = "submit";
    }
}

function chiamataStanze(){

}
// /*chiamata ajax*/
// let urlAPI = 'assets/json/catalogo.json'
// let xhr = new XMLHttpRequest();
// xhr.open('GET', urlAPI);
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let items = JSON.parse(xhr.responseText);
//         /*popolamento pagina */
//         catalogo = document.querySelector('#aside');
//         lista.innerHTML = '';
//         items.forEach(ele => {
//             let div = document.createElement('div');
//             this.ele = new Prodotto;
//             div.innerHTML = `<div id="miaCard" class="card text-center m-2">
//                         <img style= "display: block" src="https://doodleipsum.com/160x160?bg=2f5694&i=fdd9dc261e18ddc044aab7240951e98f" class="card-img-top h-50 p-2 bg-light" alt="...">
//                         <div class="card-body ">
//                         <h5 class="card-text">${ele.nome}</h5>
//                         <p class="card-text lh-sm">${ele.descrizione}</p>
//                         <p class="card-text">${ele.prezzo}</p></div>
//                         <div><button onclick="addCarrello(${ele.id})" type="button" class="btn btn-danger btn-rounded btn-floating m-2 shadow-5-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
//                         <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
//                         </svg></button></div></div>`
//             catalogo.appendChild(div);
//             popolamento(ele);

//             //./assets/images/prodotto${ele.id}.png 
//         });
//     }

// }
