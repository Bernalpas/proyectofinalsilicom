

//función para ejecutar una función al cargar la página
window.onload = function() {
    completarTablaProductos();
}



//Obtener los datos guardados en el localstorage
let misProductos = localStorage.getItem('Productos');

console.log(misProductos);

console.log('====================================================');

//Convertir los datos de JSON a un array

misProductos = JSON.parse(misProductos);

console.log('====================================================');

let persona = {
    nombre: 'pepe',
    apellido: 'perez'
}

console.log(persona.nombre);
console.log(misProductos[1].nombreProducto);

console.log('====================================================');


for (let i = 0; i < misProductos.length; i++) {
    console.log(misProductos[i].nombreProducto);
    
}

console.log('====================================================');




//Mostrar los datos en la tabla del admin
//1. Creamos una Función para llenar la tabla
const completarTablaProductos = () => { 
        
    //2. Obtenemos el elemento de la tabla
    let miTabla = document.getElementById('miTabla');
    
    for (let i = 0; i < misProductos.length; i++) {
        
        //3. Creamos las filas para la tabla
        let fila = document.createElement('tr');


        //4. Creamos las celdas para cargar el nombre productos
        let celdaNombre = document.createElement('td');

        //4. Creamos las celdas para cargar el precio del productos
        let celdaPrecio = document.createElement('td');

        //4. Creamos las celdas para cargar el stock productos
        let celdaStock = document.createElement('td');

        //4. Creamos las celdas para cargar la imagen de productos
        let celdaImagen = document.createElement('td');
        celdaImagen.style.textAlign = 'center';

        let linkImagen = document.createElement('img');

        linkImagen.src = misProductos[i].imagenProducto;
        linkImagen.width = '250';
        linkImagen.height = '250';

        //5. Creamos el nodo de texto para cargar el nombre del producto
        celdaNombre.textContent = misProductos[i].nombreProducto;
        celdaPrecio.textContent = misProductos[i].precioProducto;
        celdaStock.textContent = misProductos[i].stockProducto;
        celdaImagen.appendChild(linkImagen)

        //6. Agregar las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);
        fila.appendChild(celdaImagen);

        //7. Agregamos la fila a la tabla
        miTabla.appendChild(fila);

        
    }

    console.log(misProductos.length);


    
}