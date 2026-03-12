
document.getElementById('guardarNombre').onclick = function() {
    const nombre = document.getElementById('nombreUsuario').value;
    if(nombre) {
        localStorage.setItem('nombre', nombre);
        alert('Nombre guardado correctamente!');
        document.getElementById('nombreUsuario').value = '';
    } else {
        alert('Por favor, escribe un nombre.');
    }
};


document.getElementById('mostrarNombre').onclick = function() {
    const nombre = localStorage.getItem('nombre');
    if(nombre) {
        document.getElementById('saludo').innerText = 'Hola, ' + nombre + '!';
    } else {
        document.getElementById('saludo').innerText = 'No hay nombre guardado.';
    }
};

document.getElementById('eliminarNombre').onclick = function() {
    localStorage.removeItem('nombre');
    document.getElementById('saludo').innerText = '';
    alert('Nombre eliminado.');
};