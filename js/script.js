
window.onload = function() {
    alert("¡Bienvenido a 'El Cerebro y el Placer'! Esperamos que disfrutes del contenido. Recuerda, ten mucho cuidado puede ser una adicción..");
};

const links = document.querySelectorAll('#indice a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
               this.classList.add('active');
    });
});


document.getElementById('toggle-indice').addEventListener('click', function() {
    const indice = document.getElementById('indice');
    indice.classList.toggle('d-none'); 

    if (!indice.classList.contains('d-none')) {
        setTimeout(() => {
            indice.classList.add('visible'); 
        }, 10); 
    } else {
        indice.classList.remove('visible'); 
    }
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('visible'); 
});


document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        #indice a.active {
            font-weight: bold; /* Hacer el texto en negrita */
            color: darkblue; /* Cambiar el color del enlace activo */
        }
    `;
    document.head.appendChild(style);
});