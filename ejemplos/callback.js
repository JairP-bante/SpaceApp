

//callback hell
function uno (dos) {
    console.log("uno");
    setTimeout(dos, 2000);
};


function dos () {
    console.log("dos")

};


//funcion asincrona - callback
setTimeout(() => uno(dos), 5000);













/*
//funcion anonima.
const nombre = function(){
    console.log('NOMBRE');
}

nombre();


//arrowfunction
const persona = () => {
    console.log('Jair');
};

persona();
*/




