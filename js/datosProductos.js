


const URL = 'https://fakestoreapi.com/products';


fetch(URL) //busca datos fuera de mi aplicación
.then(response => response.json())
//.then(data => console.log(data))
.then(data => console.log(data))

console.log('===============================================');

//1. Obtenemos el contenedor
let contenedorTarjetas = document.getElementById('contenedorTarjetas');

//2. Obtenemos los datos mediante el fetch
fetch(URL) 
.then(response => response.json())
.then(data => {

    //3. Guardar los datos en una variable
    const productos = data;
    const compras = [];

    //console.log(personajes);

    //4. Recorremos un bucle foreach para crear la card
    productos.forEach(producto => {

        //5. Creamos la card padre
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.style.margin = '10px';

        //6. Creamos la imagen
        let imagen = document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src = producto.image;

        card.appendChild(imagen);

        //Creamos el contenedor para el título, descripción y botón
        let contenedorTitulo = document.createElement('div');
        contenedorTitulo.classList = 'card-body';

        //7. Creamos el titulo de la card
        let titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.style.textAlign = 'center';
        titulo.textContent = producto.title;

        contenedorTitulo.appendChild(titulo);

        //creamos el botón
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-primary');
        boton.textContent = 'Comprar'
        boton.onclick = function(){
            alert(`Compraste el Producto ${producto.title}`);
            compras.push(producto);
            localStorage.setItem('Compra', JSON.stringify(compras));
        }

        //subimos el contenedot del titulo a la card
        card.appendChild(contenedorTitulo);

        card.appendChild(boton);

        contenedorTarjetas.appendChild(card);

        
    });
})

let borrarCarrito = document.getElementById('borrarCarrito');

borrarCarrito.addEventListener('click', (e) => {

    alert('Quiere borrar las compras?')
    e.preventDefault();
    localStorage.removeItem('Compra');
    location.reload();
    
})