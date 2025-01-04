const dugmePrijavaAdmin = document.getElementById('prijavaAdmin');
const dugmePitanjaOdgovori = document.getElementById('pitanjaOdgovori');
const dugmePocetnaStranica = document.getElementById('dugmePocetna');
const dugmePrijavaAutora = document.getElementById('prijavaAutor')
const dugmeKontakt = document.getElementById('contact');
const dugmeONama = document.getElementById('oNama');
const dugmeRegistracija= document.getElementById('registracija');

const dugmeTehnologija = document.getElementById('tehnologija');
const dugmeNauka = document.getElementById('nauka');
const dugmeEkonomija = document.getElementById('ekonomija');
const dugmeDruštvo = document.getElementById('društvo');
const dugmePolitika = document.getElementById('politika');



const changeHTML = document.getElementById('get-element');

function changeDugme1(){
    changeHTML.innerHTML = `<div class="things-to-change">
        <div class="izmedju">
            <form id="anketa" action="/prijavaAdmin" method="post">
              <div class="to-center">
                <label id="label" for="email">Prijava admina:</label>
                <input id="email" type="email" name="email" placeholder="e-mail adresa" required>
                <input id="lozinka" type="password" name="lozinka" placeholder="Vaša lozinka" required>
                <button id="dugme" type="submit" class="btn">Submit</button>
                <a id="zaborav" href="#">Zaboravili ste šifru?</a>
              </div>
            </form>
        </div>
    </div>`;
    const styleElement = document.createElement('style');

    styleElement.innerHTML =`/*things to change*/
.izmedju{
    
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

#anketa{
    box-shadow: 10px 10px 60px  gray;
    border:2px solid gray;
    width:30%;
    height:30vh;
}

.to-center{
    
    display: grid;
    
}

#label{
    text-align: center;
    color: rgba(19, 132, 173, 0.778);
    margin-bottom: 3vh;
    font-size: xx-large;
}

#email,#lozinka{
    margin-bottom: 3vh;
    width:90%;
    margin-right: auto;
    margin-left:auto;
}



#dugme{
    width:90%;
    margin-right: auto;
    margin-left:auto;
    background-color: rgba(19, 132, 173, 0.778);
}

#zaborav{
    margin-right: auto;
    margin-left:auto;
    width:90%;
    margin-top:1vh;
    color: rgba(19, 132, 173, 0.778);
}
`;

document.head.appendChild(styleElement);
}

function changeDugme2(){
    changeHTML.innerHTML = ``;

    const styleElement = document.createElement('style');

    styleElement.innerHTML =``;

    document.head.appendChild(styleElement);
}

async function changeDugme3(){
    const response = await fetch('/getObjava');

    const data = await response.json();

    

    changeHTML.innerHTML = `<div class="things-to-change">
            <div class="first-image">
                <h1 id="someData1">${data.data[2].title}</h1>      
                <img class="slika1" src="data:image/jpeg;base64,${data.picture[0]}" alt="something is not loading">
                <p id="someData2">${data.data[2].content}</p>
            </div>

            <div class="display-block">
              <div class="second-image">
                <h1 id="someData1">${data.data[1].title}</h1>
                <img class="slika2" src="data:image/jpeg;base64,${data.picture[1]}" alt="something is not loading">
                <p id="someData2">${data.data[1].content}</p>
              </div>

              <div class="third-image">
                <h1 id="someData1">${data.data[0].title}</h1>
                <img class="slika3" src="data:image/jpeg;base64,${data.picture[2]}" alt="something is not loading">
                <p id="someData2">${data.data[0].content}</p>
              </div>
            </div>
          </div>

          `;
          const styleElement = document.createElement('style');

          styleElement.innerHTML = `.first-image{
    width:60%;
    position: relative;
    z-index: 0;
}



#someData1{
    color:white;
    position: absolute;
    z-index: 2;
    margin-left: 3vh;
}

#someData2{
    color:white;
    position: absolute;
    z-index: 2;
    bottom:0;
    margin-left: 3vh;
}
    
.third-image{
    height: 47.5vh;
    width:100%;
    position: relative;
}

.second-image{
    width:100%;
    height: 47.5vh;
    position:relative;
`;


      
          document.head.appendChild(styleElement);
}


function changeDugme4(){
    changeHTML.innerHTML = `<div class="things-to-change">
        <div class="izmedju">
            <form id="anketa" action="/prijavaAutor" method="post">
              <div class="to-center">
                <label id="label" for="email">Prijava autora:</label>
                <input id="email" type="email" name="email" placeholder="e-mail adresa" required>
                <input id="lozinka" type="password" name="lozinka" placeholder="Vaša lozinka" required>
                <button id="dugme" type="submit" class="btn">Submit</button>
                <a id="zaborav" href="#">Zaboravili ste šifru?</a>
              </div>
            </form>
        </div>
    </div>`;

    const styleElement = document.createElement('style')

    styleElement.innerHTML = `/*things to change*/
.izmedju{
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center
}

#anketa{
    box-shadow: 10px 10px 60px  gray;
    border:2px solid grey;
    width:30%;
    height:30vh;
}

.to-center{
    
    display: grid;
    
}

#label{
    text-align: center;
    color: rgba(19, 132, 173, 0.778);
    margin-bottom: 3vh;
    font-size: xx-large;
}

#email,#lozinka{
    margin-bottom: 3vh;
    width:90%;
    margin-right: auto;
    margin-left:auto;
}



#dugme{
    width:90%;
    margin-right: auto;
    margin-left:auto;
    background-color: rgba(19, 132, 173, 0.778);
}

#zaborav{
    margin-right: auto;
    margin-left:auto;
    width:90%;
    margin-top:1vh;
    color: rgba(19, 132, 173, 0.778);
}`;

    document.head.appendChild(styleElement);
};


function changeDugme5(){
    changeHTML.innerHTML = `<div class="things-to-change">
            <div class="kontakt">
              <h1 id="header">Kontaktirajte nas</h1>

              <form id="anketa-poruka" action="#" action="post">
                <label for="ime">Ime</label>
                <input id="ime" type="text" name="ime"   required>
                <label for="prezime">Prezime</label>
                <input id="prezime" type="text" name="prezime"  required>
                <label for="textarea">Poruka</label>
                <textarea id="poruka" name="textarea" value="poruka" required></textarea>

                <button id="button" type="submit" class="btn">Submit</button>
              </form>
            </div>

            <div class="lokacija">
              <a id="centrirati" href="https://www.google.com/maps/place/Biha%C4%87/@44.8155938,15.822521,13z/data=!3m1!4b1!4m6!3m5!1s0x4761406e6160d0e9:0x3cd88bdb0f9b8206!8m2!3d44.8119628!4d15.8685645!16zL20vMDJuNG1r?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank"><img src="images/ŠTRBAČKI_BUK_2.JPG" id="mapa"></a>
              
            </div>
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `#header{
    text-align: center;
}

.kontakt{
    margin-top: 10vh;
    width:50%;
    
    color: rgba(19, 132, 173, 0.778);
    
}

.lokacija{
    display:flex;
    justify-content: center;
    
    margin-top: 10vh;
    width:50%;
    
    color: rgba(19, 132, 173, 0.778);
}

#anketa-poruka{
    display: grid;
    width:90%;
    margin-right:auto;
    margin-left:auto;
    
}

#poruka{
    height:30vh;
    width:100%;
    resize: none;
}

#centrirati{
    
    width:90%;
    height:65%

}

#mapa{
    margin-left: auto;
    margin-right:auto;
    height: 100%;
    width:100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.8;
    
}

#button{
    background-color: rgba(19, 132, 173, 0.778);
}`;

document.head.appendChild(styleElement);
};



function changeDugme6(){

    changeHTML.innerHTML = `<div class="things-to-change">
            <div class="onama">
              <h1>O nama</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga labore magni, corporis nesciunt ratione sed aperiam perferendis autem animi deleniti! Nostrum, quaerat quasi? Quam iusto ducimus fugiat optio dolores.</p>
            </div>
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.onama{
    border: 2px solid gray;
    height:50%;
    }
    
    .onama>h1{
    text-align: center;
    color: rgba(19, 132, 173, 0.778);
    text-decoration: underline;
    margin-top:10vh;
}

.onama>p{
    margin-top: 5vh;
    font-style: italic;
    margin-left: 2vh;
    margin-right: 2vh;
}`;

    document.head.appendChild(styleElement);
};


function changeDugme7(){
    changeHTML.innerHTML = `<div class="things-to-change">
            <div class="izmedju">
                <form id="anketa" action="/registracija" method="post">
                  <div class="to-center">
                    <label id="label" for="email">Registracija autora:</label>

                    <input id="korisnicko_ime" type="text" name="korisnicko_ime" placeholder="Korisnicko ime" required>
                    <input id="email" type="email" name="email" placeholder="e-mail adresa" required>
                    <input id="lozinka" type="password" name="lozinka" placeholder="Vaša lozinka" required>
                    <input id="lozinka" type="password" name="potvrdaLozinke" placeholder="Ponovite lozinku" required>
                    <button id="dugme" type="submit" class="btn">Submit</button>
                  </div>
                </form>
            </div>
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `/*things to change*/
.izmedju{
    
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

#anketa{
    box-shadow: 10px 10px 60px  gray;
    border:2px solid gray;
    width:30%;
    height:40%;
}

.to-center{
    display: grid;

}

#label{
    text-align: center;
    color: rgba(19, 132, 173, 0.778);
    margin-bottom: 3vh;
    font-size: xx-large;
}

#email,#korisnicko_ime,#lozinka{
    margin-bottom: 3vh;
    width:90%;
    margin-right: auto;
    margin-left:auto;
    
}


#dugme{
    
    width:90%;
    margin-right: auto;
    margin-left:auto;
    background-color: rgba(19, 132, 173, 0.778);
}`;

    document.head.appendChild(styleElement);
};


async function changeDugme8(){

    const response = await fetch('/forSubcategories/1');

    const data = await response.json();
    
    console.log(data);

    changeHTML.innerHTML = `<div class="things-to-change">

            <div class="news-grid">
              <div class="sl-1">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[0]}" alt="not loading">
                <p id = "news-paragraph">${data.data[0].title}</p>
              </div>


              <div class="sl-2">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[1]}" alt="not loading">
                <p id="news-paragraph">${data.data[1].title}</p>
              </div>

            </div>
            
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.kontainer{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.things-to-change{
    margin-top:5vh;
    width:80%;
    height: 95vh;
    display:flex;
    
}
    
    .news-grid{
    width:100%;
    height:100%;
    display:flex;
    
}

.sl-1,.sl-2{
    width:50%;
    margin-right:10px;

}



#news-image{
    width:100%;
    height:70%;
    object-fit: cover;
    object-position: center;
}

#news-paragraph{
    
    height:30%;
    width:100%;
    
}`;

    document.head.appendChild(styleElement);
}

async function changeDugme9(){

    const response = await fetch('/forSubcategories/2');

    const data = await response.json();
    
    console.log(data);

    changeHTML.innerHTML = `<div class="things-to-change">

            <div class="news-grid">
              <div class="sl-1">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[0]}" alt="not loading">
                <p id = "news-paragraph">${data.data[0].title}</p>
              </div>


              <div class="sl-2">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[1]}" alt="not loading">
                <p id="news-paragraph">${data.data[1].title}</p>
              </div>

            </div>
            
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.kontainer{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.things-to-change{
    margin-top:5vh;
    width:80%;
    height: 95vh;
    display:flex;
    
}
    
    .news-grid{
    width:100%;
    height:100%;
    display:flex;
    
}

.sl-1,.sl-2{
    width:50%;
    margin-right:10px;

}



#news-image{
    width:100%;
    height:70%;
    object-fit: cover;
    object-position: center;
}

#news-paragraph{
    
    height:30%;
    width:100%;
    
}`;

    document.head.appendChild(styleElement);
}

async function changeDugme10(){

    const response = await fetch('/forSubcategories/3');

    const data = await response.json();
    
    console.log(data);

    changeHTML.innerHTML = `<div class="things-to-change">

            <div class="news-grid">
              <div class="sl-1">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[0]}" alt="not loading">
                <p id = "news-paragraph">${data.data[0].title}</p>
              </div>


              <div class="sl-2">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[1]}" alt="not loading">
                <p id="news-paragraph">${data.data[1].title}</p>
              </div>

            </div>
            
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.kontainer{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.things-to-change{
    margin-top:5vh;
    width:80%;
    height: 95vh;
    display:flex;
    
}
    
    .news-grid{
    width:100%;
    height:100%;
    display:flex;
    
}

.sl-1,.sl-2{
    width:50%;
    margin-right:10px;

}



#news-image{
    width:100%;
    height:70%;
    object-fit: cover;
    object-position: center;
}

#news-paragraph{
    
    height:30%;
    width:100%;
    
}`;

    document.head.appendChild(styleElement);
}

async function changeDugme11(){

    const response = await fetch('/forSubcategories/4');

    const data = await response.json();
    
    console.log(data);

    changeHTML.innerHTML = `<div class="things-to-change">

            <div class="news-grid">
              <div class="sl-1">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[0]}" alt="not loading">
                <p id = "news-paragraph">${data.data[0].title}</p>
              </div>


              <div class="sl-2">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[1]}" alt="not loading">
                <p id="news-paragraph">${data.data[1].title}</p>
              </div>

            </div>
            
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.kontainer{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.things-to-change{
    margin-top:5vh;
    width:80%;
    height: 95vh;
    display:flex;
    
}
    
    .news-grid{
    width:100%;
    height:100%;
    display:flex;
    
}

.sl-1,.sl-2{
    width:50%;
    margin-right:10px;

}



#news-image{
    width:100%;
    height:70%;
    object-fit: cover;
    object-position: center;
}

#news-paragraph{
    
    height:30%;
    width:100%;
    
}`;

    document.head.appendChild(styleElement);
}

async function changeDugme12(){

    const response = await fetch('/forSubcategories/5');

    const data = await response.json();
    
    console.log(data);

    changeHTML.innerHTML = `<div class="things-to-change">

            <div class="news-grid">
              <div class="sl-1">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[0]}" alt="not loading">
                <p id = "news-paragraph">${data.data[0].title}</p>
              </div>


              <div class="sl-2">
                <img id="news-image" src="data:image/jpeg;base64, ${data.picture[1]}" alt="not loading">
                <p id="news-paragraph">${data.data[1].title}</p>
              </div>

            </div>
            
          </div>`;

    const styleElement = document.createElement('style');

    styleElement.innerHTML = `.kontainer{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.things-to-change{
    margin-top:5vh;
    width:80%;
    height: 95vh;
    display:flex;
    
}
    
    .news-grid{
    width:100%;
    height:100%;
    display:flex;
    
}

.sl-1,.sl-2{
    width:50%;
    margin-right:10px;

}



#news-image{
    width:100%;
    height:70%;
    object-fit: cover;
    object-position: center;
}

#news-paragraph{
    
    height:30%;
    width:100%;
    
}`;

    document.head.appendChild(styleElement);
}

dugmePrijavaAdmin.addEventListener('click', changeDugme1);
dugmePitanjaOdgovori.addEventListener('click', changeDugme2);
dugmePocetnaStranica.addEventListener('click', changeDugme3);
document.addEventListener('DOMContentLoaded', changeDugme3);

dugmePrijavaAutora.addEventListener('click', changeDugme4);
dugmeKontakt.addEventListener('click', changeDugme5);
dugmeONama.addEventListener('click', changeDugme6);
dugmeRegistracija.addEventListener('click', changeDugme7);

//dugmad unutar vijesti dugmeta 
dugmeTehnologija.addEventListener('click', changeDugme8);
dugmeNauka.addEventListener('click', changeDugme9);
dugmeDruštvo.addEventListener('click', changeDugme10);
dugmeEkonomija.addEventListener('click', changeDugme11);
dugmePolitika.addEventListener('click', changeDugme12);


