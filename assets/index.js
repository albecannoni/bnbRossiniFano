//variabili globali
let pool = document.querySelector('#pool');
let arrayRichieste = [];
let arrayStanze = [];

//classi
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

    constructor(id, nome, descrizione, immagine) {

        this.id = id++;
        this.nome = nome;
        this.descrizione = descrizione;
        this.immagine = immagine;
    }
}

//innesco init
window.addEventListener('load', init);

function init() {
    homePageGen();

    //chiamataStanze();
    // roomPageGen();
    //contactPageGen();
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
    //svuota tutto
    resetPool();
    //generazione blocchi
    welcomeBox();
    slideBox();
    galleryGen();
    teaserBox();
    //formGen();

    //buttonGen();

    console.log('Home Page generata');
}

function welcomeBox() {
    let quoteBox = document.createElement("div");
    quoteBox.setAttribute('id', 'quoteBox');
    quoteBox.classList.add('d-flex', 'justify-content-center', 'pt-2', 'align-items-center', 'my-3', 'py-1', 'boldText');
    pool.append(quoteBox);
    quoteBox.innerHTML = `La nostra magica città ti sta aspettando!`;
}

function slideBox() {
    let slideBox = document.createElement("div");
    slideBox.setAttribute('id', 'slideBox');
    slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');
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
}

function teaserBox() {

    let teaserBox = document.createElement('div');
    teaserBox.setAttribute('id', 'teaserBox');
    teaserBox.classList.add('d-flex', 'justify-content-center', 'pt-2', 'align-items-center', 'my-3', 'py-1');
    pool.appendChild(teaserBox);

    let textBox2 = document.createElement("div");
    textBox2.setAttribute('id', 'textBox2');
    textBox2.classList.add('text-center', 'w-100', 'corsivo', 'd-flex', 'justify-content-center', 'align-items-center',);
    teaserBox.append(textBox2);

    let textP2 = document.createElement("p");
    textP2.classList.add('corsivo', 'm-sm-0', 'panna', 'w-75');
    textBox2.append(textP2);
    textP2.innerHTML = `&quot; Cristina è stata una persona disponibile e solare, accogliente e sempre disponibile.
                        Camera pulita e confortevole Estremamente disponibile nell&apos; accogliere anche il mio cane.
                        Consiglio senza riserve questa possibilità. Davvero ottima esperienza! &quot;                        
                        <span class="firma">Francesca</span>`;

}

function buttonGen() {
    let buttonBox = document.createElement('div');
    buttonBox.setAttribute('id', 'buttonBox');
    buttonBox.classList.add('row', 'pt-4');


    pool.appendChild(buttonBox);

    buttonBox.innerHTML = `<div class="col p-0 m-0">
                            <div class="d-flex justify-content-end align-content-center ">
                                <button type="button" class="btn3D text-black verdeLime ">
                                <a class="text-black" href="tel:+393890172024">
                                    <div class="d-flex justify-content-end align-items-center"></div>
                                    <div class="d-flex  justify-content-center">
                                        <div class="d-flex justify-content-center align-items-center">
                                            
                                            <div class="col justify-content-center align-items-center h-100">
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
                                    </a>
                                </button>
                            </div>
                        </div>
<!--div di impaginazione-->
            <div class="col-2"></div>

                        <div class="col p-0 m-0">
                            <div class="d-flex justify-content-start align-content-center ">
                                <button type="button" class="btn3D text-white bluMail ">
                                <a class="text-white" href="mailto:a.cannoni@hotmail.com">
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
                                    </a>
                                </button>
                            </div>
                        </div> `



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
            galleryBox.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-center', 'w-100', 'py-1', 'bRadius', 'panna');
            pool.appendChild(galleryBox);

            //attesa gallery completata
            if (galleryBox != '') {
                buttonGen();
            }

            /*popolamento pagina */
            arrayStanze.forEach(element => {

                let roomBox = document.createElement('div');
                roomBox.setAttribute('id', 'roomBox');
                roomBox.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-center', 'w-100', 'py-1', 'bRadius', 'panna');
                galleryBox.append(roomBox);
                this.element = new RoomCard;
                roomBox.innerHTML = `<div class="d-grid">
                                            <div class="d-flex justify-content-center flex-wrap">
                                                <figure class="col-md-8 ">
                                                <div class="d-flex gap-3">
                                                    <img onclick="expandRoom(${element.id})" class="ombra" style="width: 100%;" src="${element.cover}" alt="" >
                                                    <img onclick="expandRoom()" class="ombra" style="width: 100%;" src="${element.immagine2}" alt="" >
                                                    
                                                </div>    
                                                </figure>
                                            </div>
                                        </div>`;
            });
        }
    }

}
//generazione Form(da rendere sicuro)
function formGen() {
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






    console.log('pagina stanze generata');
}
function expandRoom(id) {
    element = new RoomCard
    element.id = id
    console.log(id)
    arrayLocale=[]
    resetPool();


    /*chiamata ajax*/
    let urlAPI = 'assets/json/stanze.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arrayStanze = JSON.parse(xhr.responseText);
            console.log(arrayStanze);

            //generazione blocchi 
            let descriptionBox = document.createElement("div");
            descriptionBox.setAttribute('id', 'descriptionBox');
            descriptionBox.classList.add('d-flex', 'justify-content-center', 'text-center', 'align-items-center', 'panna');

            let textBox = document.createElement("p");
            textBox.setAttribute('id', 'textBox');
            textBox.classList.add('d-flex', 'justify-content-center', 'boldText', 'm-2', 'w-100');

            //generazione blocco slideshow
            let slideBox = document.createElement("div");
            slideBox.setAttribute('id', 'slideBox');
            slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'panna');
            pool.appendChild(slideBox);
            
                
           
            arrayStanze.forEach(element=>{
                let div = document.createElement('div');
                slideBox.appendChild(div)
                this.element = new RoomCard;
                
                div.innerHTML=`<div class="col-md-8 justify-content-center align-items-center">
                <div class="container-fluid row justify-content-center align-items-center  h-100 w-100" id="banner">
                    <div class=" justify-content-center align-content-center col-sm-11">
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
                                      console.log(arrayStanze)

            }) 
            


        };

    }}
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
        else if (email.value === '') {
            alert('inserisci un indirizzo mail valido');
        }
        else if (telefono.value == '') {
            alert('inserisci un numero valido');
        }
        else if (testo.value == '') {
            alert('compila tutti i campi 4');
        }
        else {
            arrayRichieste.push(richiesta);
            console.log(arrayRichieste);
            btn.setAttribute("type", "submit")
            return (arrayRichieste);
        }
    }
    function contraiMenu() {
        menu = document.querySelector('#ulMenu');
        menu.classList.toggle('nascondi');
        console.log('test onclick')
    }
    function espandiMenu() {
        box = document.querySelector('#box')
        menu = document.querySelector('#ulMenu');
        menu.classList.add('mostra');
        box.classList.add('mostra');
        menu.classList.remove('nascondi');
        menu.classList.remove('mostra');
        console.log('test espandi')
    }


