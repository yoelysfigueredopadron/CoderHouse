// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-datos');

// Variables para campos
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const dni = document.querySelector('#dni');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');

// expresion regular
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    // Cuando la App arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    nombre.addEventListener('blur', validarFormulario);
    apellido.addEventListener('blur', validarFormulario);
    dni.addEventListener('blur', validarFormulario);
    telefono.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);

    // Reiniciar el formulario
    btnReset.addEventListener('click', resetearFormulario);
}

// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e) {

    if(e.target.value.length > 0) {

        const error = document.querySelector('p.error');
        if(error) {
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email') {
        
        if(er.test(e.target.value)) {

            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
        }
    }
    
    if(nombre.value !== '' && apellido.value !== '' && dni.value !== '' &&  telefono.value !== '' && er.test(email.value)) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }  
}

// Envia el email
function enviarEmail(e) {
    e.preventDefault();

    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Después de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout( () => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); // Eliminar el mensaje de éxito
            resetearFormulario();
        }, 5000);
    }, 3000 );
}

// Función que resetea el formulario
function resetearFormulario(e) {
    formulario.reset();
    nombre.classList.remove('border', 'border-green-500');
    apellido.classList.remove('border', 'border-green-500');
    dni.classList.remove('border', 'border-green-500');
    telefono.classList.remove('border', 'border-green-500');
    email.classList.remove('border', 'border-green-500');
    iniciarApp();
}

$(document).ready(function(){

    $("#nombre").hover(function(){
        $("#nombre").attr({
            "title" : "Introduzca su nombre"
        });
        $("#nombre").css("background-color", "#e6e9eaa6");
    },
    function(){
        $("#nombre").css("background-color", "white");
    }); 
    
    $("#apellido").hover(function(){
        $("#apellido").attr({
            "title" : "Introduzca su apellido"
        });
        $("#apellido").css("background-color", "#e6e9eaa6");
    },
    function(){
        $("#apellido").css("background-color", "white");
    });

    $("#dni").hover(function(){
        $("#dni").attr({
            "title" : "Introduzca su DNI"
        });
        $("#dni").css("background-color", "#e6e9eaa6");
    },
    function(){
        $("#dni").css("background-color", "white");
    });

    $("#telefono").hover(function(){
        $("#telefono").attr({
            "title" : "Introduzca su telefono"
        });
        $("#telefono").css("background-color", "#e6e9eaa6");
    },
    function(){
        $("#telefono").css("background-color", "white");
    });

    $("#email").hover(function(){
        $("#email").attr({
            "title" : "Introduzca su email"
        });
        $("#email").css("background-color", "#e6e9eaa6");
    },
    function(){
        $("#email").css("background-color", "white");
    });
});