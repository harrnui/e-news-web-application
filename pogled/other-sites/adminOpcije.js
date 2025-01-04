const dugme1 = document.getElementById('adjust-collapse-kategorije');
const dugme2 = document.getElementById('adjust-collapse-podkategorije');
const dugme3 = document.getElementById('adjust-collapse-objave');

const changeHTML = document.getElementById('promijena');


//kategorije
async function changeDugme1(){

    changeHTML.innerHTML = `<div class="main-container">

                        <table>
                            <tr id="table-row">
                                <th id="table-header-1">Broj</th>
                                <th id="table-header">Naziv</th>
                                <th id="table-header">Status</th>
                                <th id="table-header">Redoslijed</th>
                                <th id="table-header">Opcije</th>
                            </tr>
                            <tbody id="table-body">
                                
                            </tbody>
                            
                        </table>

                    </div>`;



    const styleElement = document.createElement('style');


    const table = document.getElementById('table-body');

    try{
        const response =  await fetch('/adminOpcije/getData');
        
        const data = await response.json();

        
        data.forEach( row => { 
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td id ="table-data">${row.id}</td>
                                <td id ="table-data">${row.name}</td>
                                <td id ="table-data">Something</td>
                                <td id ="table-data">Something</td>
                                <td id ="table-data">Something</td>`; 
            table.appendChild(newRow);
        });

    }catch(err){
        console.log(err);
    }

    styleElement.innerHTML = `#promijena{
    width: 95%;
    height: 95%;
    border: 2px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container{
    width: 95%;
    height: 95%;


    
}

table{
    width:100%;
    height:100%;
}

#table-header{
    height: 5vh;
    text-align: center;
    border: 2px solid black;
}

#table-header-1{
    border: 2px solid black;
    width: 8vh;
}

#table-data{
    border: 2px solid black;
    text-align: center;
}`;

    document.head.appendChild(styleElement);
};



//Podkategorije
async function changeDugme2(){
    changeHTML.innerHTML = `<div class="main-container">

                        <table>
                            <tr id="table-row">
                                <th id="table-header-1">Broj</th>
                                <th id="table-header">Naziv</th>
                                <th id="table-header">Katgorija ID</th>
                                <th id="table-header">Redoslijed</th>
                                <th id="table-header">Opcije</th>
                            </tr>
                            <tbody id="table-body">
                                
                            </tbody>
                            
                        </table>

                    </div>`;



    const styleElement = document.createElement('style');


    const table = document.getElementById('table-body');

    try{
        const response =  await fetch('/adminOpcije/getDataPodkategorije');
        
        const data = await response.json();

        
        data.forEach( row => { 
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td id ="table-data">${row.id}</td>
                                <td id ="table-data">${row.name}</td>
                                <td id ="table-data">${row.category_id}</td>
                                <td id ="table-data">Something</td>
                                <td id ="table-data">Something</td>`; 
            table.appendChild(newRow);
        });

    }catch(err){
        console.log(err);
    }

    styleElement.innerHTML = `#promijena{
    width: 95%;
    height: 95%;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container{
    width: 95%;
    height: 95%;


    
}

table{
    width:100%;
    height:100%;
}

#table-header{
    height: 5vh;
    text-align: center;
    border: 2px solid black;
}

#table-header-1{
    border: 2px solid black;
    width: 8vh;
}

#table-data{
    border: 2px solid black;
    text-align: center;
}`;

    document.head.appendChild(styleElement);
};

//objave
async function changeDugme3(){

    changeHTML.innerHTML = `<div id="promijena" >
                    <div class="main-container">
                        <form action="/postObjava" method="POST" enctype="multipart/form-data">
                            <label for="naslov">Naslov*</label>
                            <input type="text" id="naslov" name="naslov"  required>

                            <label for="opis">Opis*</label>
                            <textarea id="opis" name="opis"></textarea required>

                            <label for="slika">Upload slike*</label>
                            <input type="file" id="slika" name="slika"  required>

                            <label for="kategorija">Kategorija*</label>
                            <input type="text" id="kategorija" name="kategorija"  required>

                            <label for="podkategorija">Podkategorija*</label>
                            <input type="text" id="podkategorija" name="podkategorija" required>

                            <input id="objavi" type="submit" value="Objavi">
                        </form>
                    </div>                   
                </div>`;



    const styleElement = document.createElement('style');


    const table = document.getElementById('table-body');

    /*try{
        const response =  await fetch('/adminOpcije/getDataPodkategorije');
        
        const data = await response.json();

        
        data.forEach( row => { 
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td id ="table-data">${row.id}</td>
                                <td id ="table-data">${row.name}</td>
                                <td id ="table-data">${row.category_id}</td>
                                <td id ="table-data">Something</td>
                                <td id ="table-data">Something</td>`; 
            table.appendChild(newRow);
        });

    }catch(err){
        console.log(err);
    }*/

    styleElement.innerHTML = `.prikaz{
    width:80%;
    height:100vh;
    background-color: white;
    
}

.display-flex-prikaz{
    border: 2px solid black;
    width:100%;
    height:95vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


/*promijena*/
#promijena{
    background-color: whitesmoke;
    width: 95%;
    height: 95%;
    border: 2px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-container{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
}

form{
    width:95%;
    height: 95%;
    display:block;
    
    
}

#opis,#naslov,#slika,#kategorija,#podkategorija{
    width:100%;
    height: 5vh;
    margin:0;
    padding:0;
    
}

#opis{
    resize: none;
}

label{
    
    margin-top: 2vh;
    margin-bottom: 0;
    padding-top: 1.2vh;
    padding-bottom:0;
    height: 5vh;
    width:100%;
}
`;

    document.head.appendChild(styleElement);
};

dugme1.addEventListener('click', changeDugme1);
dugme2.addEventListener('click', changeDugme2);
dugme3.addEventListener('click', changeDugme3);