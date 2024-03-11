
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";


async function listaImagenes() {
                                                                                                 //intentar hacer una cosa-- hacer una solicitud con try.
    try{
        let fetchImagen = await fetch(url);                                                      //se utiliza un await porque al hacer la solicitud con fetch se tiene que esperar por la respuesta
        let datosImagenes = await fetchImagen.json();                                            //todas las veces que tenemos que esperar hasta que algo ocurra utilizamos await

        const card = document.querySelector('[data-ul]');

        datosImagenes.forEach( elemento => {
            
            const contenido = ` <li class="card">
                                    <img class="card__image" src="${elemento.url}" alt="imagen">
                                    <h3 class="card__title">${elemento.title}</h3>
                                </li>`

            card.innerHTML =  card.innerHTML + contenido;

        });

    }
    catch(error){

        console.log(error);

    }//si la solicitud viene como rechazada--catch maneja ese estado.

};

listaImagenes();





/*

ESTRUCTURA DE MANEJO DE PROMESAS CON THEN() Y CATCH()

function listaImagenes () {
    
    fetch(url)
    .then( response => response.json())
    .then( datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector('[data-ul]');

        datosImagenes.forEach( elemento => {
            
            const contenido = ` <li class="card">
                                    <img class="card__image" src="${elemento.url}" alt="imagen">
                                    <h3 class="card__title">${elemento.title}</h3>
                                </li>`

            card.innerHTML =  card.innerHTML + contenido;

        });
    })

    .catch(error => console.log(error)); 

}

listaImagenes();

*/




