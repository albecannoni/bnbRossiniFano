//*variabili globali
let pool = document.querySelector('#pool');
let arrayRichieste = [];
let arrayStanze = [];
let menu = document.querySelector('#ulMenu');
let scrollToTop = () => window.scroll(0, 0);

//*classi
class InfoRequest {

    constructor(id, nome, cognome, email, telefono, richiesta) {

        this.id = id++;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.telefono = telefono;
        this.richiesta = richiesta;
    }
}
class RoomCard {

    constructor(id, nome, descrizione, immagine, caratteristiche) {

        caratteristiche = new Caratteristiche;
        this.id = id++;
        this.nome = nome;
        this.descrizione = descrizione;
        this.immagine = immagine;
        this.caratteristiche = caratteristiche;
    }
}
class Caratteristiche {
    constructor(bagno, terrazzo, armadio, connessione, postazione, frigorifero) {
        this.bagno = bagno;
        this.terrazzo = terrazzo;
        this.armadio = armadio;
        this.connessione = connessione;
        this.postazione = postazione;
        this.frigorifero = frigorifero;
    }
}

class Servizi {
    constructor(titolo, descrizione, icona) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.icona = icona;
    }
}

//*innesco init
window.addEventListener('load', init);

function init() {
    resetPool();
    homePageGen();
    eventHandler()
}
function eventHandler() {
    homePage.addEventListener('click', homePageGen);
    contactPage.addEventListener('click', contactPageGen);
    roomPage.addEventListener('click', roomPageGen);
    servicesPage.addEventListener('click', servicesPageGen);
}
//*========= manipolazione DOM ========== 
function resetPool() {
    pool.innerHTML = ``;
}
function homePageGen() {

    resetPool();
    //?generazione blocchi
    welcomeBox();
    teaserBox();
    slideBox();
    slideHomeBox();
    galleryGen();
    //formGen();
    //buttonGen();
    console.log('Home Page generata');
}

function welcomeBox() {
    let quoteBox = document.createElement("div");
    quoteBox.setAttribute('id', 'quoteBox');
    quoteBox.classList.add('d-flex', 'justify-content-center', 'pt-2', 'align-items-center', 'my-3', 'py-1', 'w-100', 'text-center');
    pool.append(quoteBox);
    quoteBox.innerHTML = `<div class="d-flex justify-content-center align-items-center w-80">
    <h3 class="bolderText text-border">La nostra <span id="spanApi" style=" font-size: xx-large;;" class="text-viola">magica</span> città ti sta aspettando!</h3>
    </div>`;
}

function slideBox() {
    let slideBox = document.createElement("div");
    slideBox.setAttribute('id', 'slideBox');
    slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'py-2');
    pool.appendChild(slideBox);
    slideBox.innerHTML = `<div class="d-flex col-md-8 justify-content-center align-items-center">
    <div class="container-fluid row justify-content-center align-items-center  h-100 w-100 bRadius" id="banner">
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
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner bRadius">
                    <div class="carousel-item active">
                        <img src="assets/images/caruosel1.png" class="d-block w-100" alt="piazza 20 settembre Fano">
                    </div>
                    <div class="carousel-item ">
                        <img src="assets/images/mare1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/caruosel2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="assets/images/mare2.png" class="d-block w-100" alt="...">
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
}

function slideHomeBox() {
    let slideHomeBox = document.createElement("div");
    slideHomeBox.setAttribute('id', 'slideHomeBox');
    slideHomeBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'pt-2');
    pool.appendChild(slideHomeBox);
    slideHomeBox.innerHTML = `<div class="d-flex col-md-8 justify-content-center align-items-center">
    <div class="container-fluid row justify-content-center align-items-center  h-100 w-100" id="banner2">
        <div class="d-flex justify-content-center align-content-center col-sm-11">
            <div id="carouselExampleIndicators1" class="carousel slide carousel-fade ombra bRadius"
                data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2"
                        aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3"
                        aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner bRadius">
                    <div class="carousel-item active">
                        <img src="assets/images/casa1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/casa2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://doodleipsum.com/1098x700/avatar-5?bg=63C8D9&i=5d6e087e768084f18e994a0820732439" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://doodleipsum.com/1098x700/avatar-2?bg=63C8D9&i=cccf78a48198cc758c48aff0d56b1ff6" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </div>`;
}

function teaserBox() {

    let teaserBox = document.createElement('div');
    teaserBox.setAttribute('id', 'teaserBox');
    teaserBox.classList.add('d-flex', 'justify-content-center', 'pt-2', 'align-items-center', 'my-3', 'py-1');
    pool.appendChild(teaserBox);

    let textBox2 = document.createElement("div");
    textBox2.setAttribute('id', 'textBox2');
    textBox2.classList.add('text-center', 'w-80', 'corsivo', 'd-flex', 'justify-content-center', 'align-items-center', 'ombra', 'bRadius');
    teaserBox.append(textBox2);

    let textP2 = document.createElement("p");
    textP2.setAttribute('id', 'textP2');
    textP2.classList.add('corsivo', 'm-sm-0', 'bg-light', 'w-md-70', 'bRadius', 'p-2', 'text-dark');
    textBox2.append(textP2);
    textP2.innerHTML = `&quot; Cristina è stata una persona disponibile e solare, accogliente e sempre disponibile.
                        Camera pulita e confortevole Estremamente disponibile nell&apos; accogliere anche il mio cane.
                        Consiglio senza riserve questa possibilità. Davvero ottima esperienza! &quot;                        
                        <span class="firma">Francesca</span>`;
}

function buttonGen() {

    let buttonBox = document.createElement('div');
    buttonBox.setAttribute('id', 'buttonBox');
    buttonBox.classList.add('container', 'py-2', 'col-8');
    pool.appendChild(buttonBox);
    buttonBox.innerHTML = `<div class="d-flex align-items-center w-100 justify-content-center gap-5">                            
                                <div id="btnTel" class="mt-3 ">
                                    <a id="btnHrefTel" class="text-white " href="">
                                    <div class="col-6 p-0 m-0 align-items-center">
                                        <button onclick="fillAdr()" type="button" class="btn3D text-white bg-viola my-1 callTo">                                        
                                            <div class="d-flex justify-content-end align-items-center"></div>
                                            <div class="d-flex justify-content-center">
                                                <div class="d-flex justify-content-center align-items-center">                                                    
                                                    <div class="justify-content-center align-items-center h-100">
                                                        <p class="h-100 px-1 m-0 ">chiamaci!</p>
                                                    </div>
                                                    <div style="margin-top: 5px; margin-right: 5px;"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                        </button>
                                    </div>
                                    </a>
                                </div>

                                <div id="btnMail" class="mt-3"> 
                                    <a  id="btnHrefMail" class="text-white" href="">  
                                    <div class="col  p-0 m-0">
                                        <div class="col-6 p-0 m-0 align-items-center">
                                            <button onclick="fillAdr()"  type="button" class="btn3D text-white bg-granata callTo">
                                                
                                                    <div class="d-flex justify-content-center align-items-center">                                        
                                                        <div class="col justify-content-center align-items-center h-100">
                                                            <p class="h-100 px-1 m-0 ">scrivici!</p>
                                                        </div>
                                                    <div style="margin-top: 6px; margin-right: 5px;">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="white" class="bi bi-send" viewBox="0 0 16 16">
                                                            <path
                                                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                        </svg>
                                                    </div>
                                                </div>                                                
                                            </button>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div> `;

}

function galleryGen() {

    /*chiamata ajax*/
    let urlAPI = 'assets/json/stanze.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arrayStanze = JSON.parse(xhr.responseText);
            console.log(arrayStanze);
            //creazione blocco gallery
            let galleryBox = document.createElement('div');
            galleryBox.setAttribute('id', 'galleryBox');
            galleryBox.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-center',
                'w-100', 'py-3', 'pt-4', 'bRadius', 'bg-pesca');
            pool.appendChild(galleryBox);

            //attesa gallery completata
            if (galleryBox != '') { buttonGen(); }

            /*popolamento pagina */
            arrayStanze.forEach(element => {
                let roomBox = document.createElement('div');
                roomBox.setAttribute('id', 'roomBox');
                roomBox.classList.add('container', 'd-flex', 'flex-sm-column', 'flex-wrap', 'justify-content-center',
                    'align-items-center', 'w-100', 'py-1', 'bRadius', 'bg-pesca');
                galleryBox.append(roomBox);
                this.element = new RoomCard;
                roomBox.innerHTML = `<div class="d-flex wideScreen">
                                        <div class="">
                                            <h5 class="col text-center boldText " id="titleBox">${element.titolo}</h5>
                                            <div>                                            
                                                <figure class="w-100">
                                                <div class="d-flex gap-3 ">
                                                
                                                    <div>
                                                        <img onclick="expandRoom(${element.id})" class="ombra " style="width: 100%;" src="${element.cover}" alt="" >
                                                    </div>                                                
                                                    <div>
                                                        <img onclick="expandRoom(${element.id})" class="ombra" style="width: 100%;" src="${element.immagine2}" alt="" >
                                                    </div>

                                                </div>    
                                                </figure>
                                            </div>
                                        </div>
                                    </div>`;
            });
        }
    }

}
function formGen() {
    let formBox = document.createElement('div');
    formBox.setAttribute('id', 'formBox');
    formBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'pt-1');

    pool.appendChild(formBox);
    formBox.innerHTML = ` <div class="container justify-content-center align-content-center col-sm-8 col-md-6  pb-5 pt-2 m-sm-2 m-md-0">
                            <form id="formPrenotazioni" action="" method="post" enctype="multipart/form-data"
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
                                            <textarea type="text" name="info" id="info" cols="..." rows="4"
                                                placeholder="scrivi la tua richiesta" required autocomplete="off"></textarea>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="d-flex justify-content-center align-items-center py-2">
                                    <button type="button" class="bg-viola bRadius text-white " id="infoBtn">
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
    //*listener bottone form
    let btn = document.querySelector('#infoBtn');
    btn.addEventListener('click', check);
}
function roomPageGen() {
    resetPool();
    welcomeBox();
    galleryGen();
    quoteBox = document.querySelector('#quoteBox');
    quoteBox.innerHTML = '<h5 class="boldText wResponsive">La nostra <span class="text-viola h3">casa</span> ha a disposizione per voi ospiti due stanze dotate di ogni comfort:</h5>';
    console.log('pagina stanze generata');

}
function expandRoom(id) {
    resetPool();
    element = new RoomCard;
    element.id = id;
    arrayLocale = [];
    arrayservizi = [];

    /*chiamata ajax*/
    let urlAPI = 'assets/json/stanze.json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arrayStanze = JSON.parse(xhr.responseText);


            //generazione blocchi 
            let descriptionBox = document.createElement("div");
            descriptionBox.setAttribute('id', 'descriptionBox');
            descriptionBox.classList.add('d-flex', 'justify-content-center', 'text-center', 'align-items-center', 'bg-pesca');

            let textBox = document.createElement("p");
            textBox.setAttribute('id', 'textBox');
            textBox.classList.add('d-flex', 'justify-content-center', 'boldText', 'm-2', 'w-100', 'bg-pesca');

            //generazione blocco slideshow
            let slideBox = document.createElement("div");
            slideBox.setAttribute('id', 'slideBox');
            pool.appendChild(descriptionBox);
            pool.appendChild(slideBox);

            descriptionBox.append(textBox);

            arrayStanze.forEach(ele => {
                if (ele.id == id) {
                    arrayLocale.push(ele);
                    console.log(ele);
                }
            });

            arrayLocale.forEach(element => {
                let div = document.createElement('div');
                div.classList.add('d-flex', 'flex-md-row', 'flex-column', 'justify-content-center', 'align-items-center', 'bg-pesca', 'p-2');
                slideBox.appendChild(div);
                this.element = new RoomCard;
                buttonGen();
                textBox.innerHTML = `
                <div class="text-center wResponsive">
                <h4 class="boldText pt-3">${element.titolo}</h4>
                    <p>${element.descrizione}</p>
                </div>`
                div.innerHTML = `<div class="d-flex col-md-6 justify-content-center align-items-center ">                           
                                    <div class="container-fluid md-col d-flex justify-content-center align-items-center  h-100 w-100" id="banner">
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
                                                        <img src="${element.cover}" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${element.immagine2}" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${element.cover}" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="${element.immagine2}" class="d-block w-100" alt="...">
                                                    </div>
                                                </div>

                                                <button class="carousel-control-prev " type="button"
                                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon btn-dark bRadius" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next " type="button"
                                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon btn-dark bRadius" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="col-md-2 my-3 p-0 bg-light text-dark bRadius p-3 ombra">
                            <h5 style="margin-left: 1.6em;" class="text-dark ">In questa stanza:</h5>
                                    <ul  id="listaServizi" class="w-100 text-dark">                                        
                                    </ul>
                                    </div>`;
                console.log(arrayStanze);

            })

            arrayLocale.forEach(element => {

                // console.log(element.caratteristiche);
                servizi = element.caratteristiche;
                arrayservizi.push(servizi);
                console.log(element.caratteristiche)
                let ul = document.querySelector('#listaServizi')
                arrayservizi.forEach(element => {
                    // let li = document.createElement('li');
                    // ul.appendChild(li);
                    ul.innerHTML = `<li class="semiBoldText">${element.bagno}</li>
                                    <li class="semiBoldText"> ${element.terrazzo}</li>
                                    <li class="semiBoldText">${element.connessione}</li>
                                    <li class="semiBoldText">${element.postazione}</li>
                                    <li class="semiBoldText">${element.frigorifero}</li>`;
                });
            })


        };
    };
}
function contactPageGen() {
    resetPool();
    welcomeBox();
    teaserBox();
    let textP2 = document.querySelector('#textP2')
    console.log(textP2);
    textP2.innerHTML = `La nostra casa si trova nel quartiere S. Orso: un luogo tranquillo e silenzioso da cui
                        si può raggiungere il centro in pochi minuti, ma anche vicino al ingresso della
                        autostrada A14 e della superstrada Fano-Grosseto, perfetta per raggiungere Urbino e tutti
                        i meravigliosi paesi del nostro entroterra`
    formGen();
    buttonGen();
    gMapsGen();
    console.log('pagina contatti generata');
}
function servicesPageGen() {
    arrayLocale = [];
    let urlAPI = 'assets/json/servizi.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arrayLocale = JSON.parse(xhr.responseText);
            console.log(arrayLocale);

            resetPool();
            welcomeBox();

            let serviceGrid = document.createElement('div');
            serviceGrid.setAttribute('id', 'serviceGrid');
            serviceGrid.classList.add('w-80', 'h-100', 'gridSystem');
            pool.appendChild(serviceGrid);

            arrayLocale.forEach(element => {
                let gridCard = document.createElement('div')
                gridCard.setAttribute('id', 'gridCard');
                gridCard.classList.add('gridCard');
                serviceGrid.appendChild(gridCard);
                this.element = new Servizi;
                gridCard.innerHTML = `<img class="serviceIcon" src="${element.icona}">
                                        <h6 class="upperCase">${element.titolo}</h6>
                                        <p>${element.descrizione}</p>`;
            })

            quoteBox.innerHTML = `<div class="d-flex justify-content-center align-items-center w-80">
                                    <h3 class="bolderText text-border">I nostri
                                    <span id="spanApi" style=" font-size: xx-large;;" class="text-viola"> servizi </span>aggiuntivi</h3>`
        }
    }
    console.log('pagina servizi generata');
}
function gMapsGen() {
    let gMaps = document.createElement("div");
    gMaps.setAttribute('id', 'gMaps')
    gMaps.classList.add('w-100', 'd-flex', 'justify-content-center', 'align-items-center')
    pool.append(gMaps);
    gMaps.innerHTML = `<div class="mapouter d-flex justify-content-center align-items-center">
    <div class="gmap_canvas">
    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=via%20guido%20guiducci%2010&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    <a href="https://2piratebay.org">pirate bay</a><br>
    <style>.mapouter{position:relative;text-align:right;height:60vh;width:600vw;}</style>
    <a href="https://www.embedgooglemap.net">how to add map to website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:50vh;width:60vw;}</style></div></div>`;
    gMaps.classList.add('m-2', 'pt-5', 'd-flex', 'justify-content-start', 'align-items-center');
}

//!SBAGLIATA
function contraiMenu() {
    menu.classList.add('nascondi');
    console.log(menu)
}
function espandiMenu() {
    menu.classList.remove('nascondi');

}
//*controllo form
function check() {

    let richiesta = new InfoRequest
    let nome = document.querySelector('#fname');
    let cognome = document.querySelector('#lname');
    let email = document.querySelector('#posta');
    let telefono = document.querySelector('#telephone');
    let testo = document.querySelector('#info');
    let btn = document.querySelector('#infoBtn');
    let adrMail = document.querySelector('#formPrenotazioni');

    richiesta.id = arrayRichieste.length + 1;
    richiesta.nome = nome.value;
    richiesta.cognome = cognome.value;
    richiesta.email = email.value;
    richiesta.telefono = telefono.value;
    richiesta.richiesta = testo.value;

    if (nome.value == '') {
        alert('inserisci un nome valido');
    }
    else if (cognome.value == '') {
        alert('inserisci un cognome valido');
    }
    else if (email.value == '@') {
        alert('inserisci un indirizzo mail valido');
    }
    else if (telefono.value == '') {
        alert('inserisci un numero valido');
    }
    else if (testo.value == '') {
        alert('inserisci un testo');
    }
    else {
        arrayRichieste.push(richiesta);
        adrMail.setAttribute("action", `mailto:alberto.cannoni@outlook.it?subject=Richiesta di informazioni, ${nome.value} ${cognome.value}.
        &body=Salve sono ${nome.value} ${cognome.value}%0A %0A ${testo.value}%0A %0A i miei recapiti sono:%0A Telefono: ${telefono.value}
        %0A Email: ${email.value}&cc=a.cannoni@hotmail.com`);
        console.log(arrayRichieste);
        btn.setAttribute("type", "submit");
        adrMail.setAttribute('href', 'mailto:a.cannoni@hotmail.com')
    }

}
function fillAdr() {
    //?variabili non dichiarate
    //?sui viene istanziata direttamente una variabile mentre si assegna l'attributo
    //?probabilmente funziona sulo sui tag </a>    
    btnHrefTel.setAttribute("href", "tel:+393890172024");
    btnHrefMail.setAttribute("href", "mailto:a.cannoni@hotmail.com");
}