

//traemos datos desde el front:  DOM

let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

console.log(email);
console.log(password);


let administrador = {
    user: 'admin@gmail.com',
    pass: '123456'
}

console.log(`El usuario es ${administrador.user} y la contraseña es ${administrador.pass}`);


//Funciones en JS
function saludar() {
    console.log('Hola, soy una Función de JS');
    alert('Hola, soy una Función de JS')
}

//saludar();
//ES5
function login() {

    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    //alert(`El usuario es ${user} y la contraseña es ${password}`);

    console.log(`El usuario es ${user} y la contraseña es ${password}`);

    if(user == "" || password == ""){
        //alert('Por favor ingrese un usuario y contraseña');
        location.href = 'error.html'
    }

    if(administrador.user == user && administrador.pass == password){
        //alert('Bienvenido Administrador');
        //console.log(__dirname);
        location.href = 'administrador.html'
    }else{
        //alert('Usuario o contraseña incorrecta');
        //window.location.href = 'error.html'
        console.log(location.pathname)
    }

    //tomamos los inputs y le asignamos un valor vacío
    let inputUser = document.getElementById('email');
    inputUser.value = "";

    let inputPass = document.getElementById('password');
    inputPass.value = "";

    

}