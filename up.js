document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form');
    var upButton = document.getElementById('up');
    
    upButton.style.display = 'none'; // Oculta el botón inicialmente
    
    window.addEventListener('scroll', function() {
        if (isScrolledPastForm(form)) {
            upButton.style.display = 'block'; // Muestra el botón cuando se hace scroll desde el formulario
        } else {
            upButton.style.display = 'none'; // Oculta el botón si no se ha hecho scroll desde el formulario
        }
    });
    
    function isScrolledPastForm(elem) {
        var formBottom = elem.getBoundingClientRect().bottom;
        var pageBottom = document.body.getBoundingClientRect().bottom;
        var formTop = elem.getBoundingClientRect().top;
        return formBottom < pageBottom && formTop < 0; // Solo muestra el botón cuando el formulario está visible y no se ha llegado al final del documento
    }
});
