

console.log('Hola, estamos administrando una empresa');

let uno = 1500;
let dos = 5000;


function Sumar(a, b) {
    let resultado = a + b;
    console.log(`El resultado de la suma es: ${resultado}`);
}

Sumar(10, 50);

console.log('=====================================================');

Sumar(uno, dos);

console.log('=====================================================');

function dameIdentidad(nombre, apellido, dni) {
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y mi DNI es ${dni}`	);
}

dameIdentidad('Pepe', 'Pérez', 123456789);

console.log('=====================================================');

//Funciones Callbacks
const jugarFutbol = (puesto, callback) => {
    
    console.log(`Mi puesto en la cancha es ${puesto}`);	
    
    callback();
    
}


const equipo = () =>{
    console.log('Soy el capitán del equipo');
}

console.log('=====================================================');

jugarFutbol('Delantero',equipo);

console.log('=====================================================');

//collback
const prepararAsado = (telefono, tarea) => {
    console.log(`Llamo al ${telefono} para que vengas al asado`);
    tarea();
}

const traerCarne = () =>{
    console.log('Te toca traer carne');
}

const traerBebidas = () =>{
    console.log(`Te toca traer bebidas`);
}

console.log('=====================================================');

prepararAsado(123456789, traerCarne);
prepararAsado(123456789, traerBebidas);

console.log('=====================================================');






