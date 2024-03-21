$(document).ready(function() {
    $(window).resize(function() {
        //Recoge el ancho de la pantalla y lo asigna a la variable width
        var width = $(window).width();

        // Elimina todas las clases
        $('.servicios').removeClass('background-sm-servicios');
        $('.cabecera').removeClass('background-sm-cabecera');
        $('.textocabecera').removeClass('texto-cabecera-sm');
        $('h1').removeClass('h1-sm');
        $('h2').removeClass('h2-sm');
        $('h3').removeClass('h3-sm');
        $('text').removeClass('text-sm');
        $('p').removeClass('p-sm');
        $('.p-1').removeClass('p-1-sm');
        $('.p-2').removeClass('p-2-sm');
        $('.button_index').removeClass('button_index-sm');
        $('.button_login').removeClass('button_login-sm');
        $('.texto_url').removeClass('texto_url-sm');
        $('.texto_url').removeClass('texto_url-sm');
        $('.logo').removeClass('logo-sm');
        $('.cuadro_texto_servicios').removeClass('cuadro_texto_servicios-sm');
        $('.clock').removeClass('clock-sm');
        $('.login').removeClass('login-sm');
        $('.socialContainer').removeClass('socialContainer-sm');
        $('.socialContainer').removeClass('socialContainer-md');
        $('.quien_somos').removeClass('background-sm-quien_somos');
        $('.quien_somos_contenido').removeClass('quien_somos_contenido-sm');
        $('.cuadro_texto_quien_somos').removeClass('cuadro_texto_quien_somos-sm');
        $('.cuadro_texto_quien_somos2').removeClass('cuadro_texto_quien_somos2-sm');
        $('.imagen_quien_somos1').removeClass('imagen_quien_somos1-sm');
        $('.imagen_quien_somos2').removeClass('imagen_quien_somos2-sm');
        $('.texto_quien_somos').removeClass('texto_quien_somos-sm');
        

        // Aplica la clase correspondiente al tamaño de la pantalla
        if (width < 991) {
            $('.servicios').addClass('background-sm-servicios'); //Añade el contenido de "background-sm-servicios" a servicios cuando el tamaño de la ventana sea menor a 991
            $('.textocabecera').addClass('texto-cabecera-sm');
            $('.cabecera').addClass('background-sm-cabecera');
            $('h1').addClass('h1-sm');
            $('h2').addClass('h2-sm');
            $('h3').addClass('h3-sm');
            $('p').addClass('p-sm');
            $('.p-1').addClass('p-1-sm');
            $('.p-2').addClass('p-2-sm');
            $('text').addClass('text-sm');
            $('.button_index').addClass('button_index-sm');
            $('.button_login').addClass('button_login-sm');
            $('.texto_url').addClass('texto_url-sm');
            $('.texto_url').addClass('texto_url-sm');
            $('.logo').addClass('logo-sm');
            $('.cuadro_texto_servicios').addClass('cuadro_texto_servicios-sm');
            $('.clock').addClass('clock-sm');
            $('.login').addClass('login-sm');
            $('.socialContainer').addClass('socialContainer-sm');
            $('.quien_somos').addClass('background-sm-quien_somos');
            $('.quien_somos_contenido').addClass('quien_somos_contenido-sm');
            $('.cuadro_texto_quien_somos').addClass('cuadro_texto_quien_somos-sm');
            $('.cuadro_texto_quien_somos2').addClass('cuadro_texto_quien_somos2-sm');
            $('.imagen_quien_somos1').addClass('imagen_quien_somos1-sm');
            $('.imagen_quien_somos2').addClass('imagen_quien_somos2-sm');
            $('.texto_quien_somos').addClass('texto_quien_somos-sm');
        }
    }).resize();

});

//________________________Clock___________________________

//Éste código actualiza los elementos hrs, min y sec con la hora, los minutos y los segundos actuales cada segundo, creando un reloj digital

//Declaración de variables
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{       //ejecuta el código dentro de la función cada 1 segundo
    let currentTime = new Date();       // obtiene la hora actual 
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();        // obtiene las horas de currentTime y añade un cero al principio si es menor que 10
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();    // obtiene los min de currentTime y                 ''
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();    // obtiene los sec de currentTime y                 ''
},1000)



//_________________________Menu___________________________

//Éste codigo contiene animaciones y acciones específicas del menú responsivo 

var header = document.getElementById('Header')      /* var -> declaración de variables
                                                    devuelve el elemento que coincida con el id especificado (Header)
                                                    Si no hubiera valor sería null */
window.addEventListener('scroll', ()=>{             // 'window' es un objeto global en js -> represent laentna del navegador
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#ffffff00'
        header.style.backdropFilter = "blur(40px)"

    }else{
        header.style.backgroundColor = 'transparent'
    }
})

//________________________Servicios_________________________

// En éste código se declaran las animaciones y acciones de la sección de servicios, slide de imágenes no automatizado

let prev = document.querySelector('.prev');         //let -> también se usa para declaración de variables
let next = document.querySelector('.next');         //devuelve el primer elemento que coincide con el selector (.prev, .next, .slider)
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){              //next -> botón de siguiente. cuando se clica se dispara un evento llamado 'click'
    let slides = document.querySelectorAll('.slides');  //selecciona todos los elementos con la clase '.slides' y los almacena en la variable slides.
    slider.appendChild(slides[0]);                      //mueve el primer elemento a la posicion final de slides
})
prev.addEventListener('click', function(){              //Hace lo mismo que next, pero con el botón prev
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);          //mueve el ultimo elemento a la posicion inicial del slides
})

//________________________Galeria_________________________

//En éste código encontramos las acciones y animaciones de la galería de imagenes o carroussel, automatizado (cada 3 segundos) y manual (botones)

//Declaración de variables
let cslider = document.querySelector('.cslider .clist');
let citems = document.querySelectorAll('.cslider .clist .citem');
let cnext = document.getElementById('cnext');
let cprev = document.getElementById('cprev');
let cdots = document.querySelectorAll('.cslider .cdots li');

let lengthcitems = citems.length - 1;   //Variabe con la longitud de citems pero -1
let active = 0;                         //Variable active declarada a 0

cnext.onclick = function(){
    active = active + 1 <= lengthcitems ? active + 1 : 0;  /* Incrementa la variable active en uno si active + 1 es menor o igual a lengthcitems. 
                                                              Si no, active se establece en 0. Esto permite que el carrusel vuelva al principio después de llegar al final. */
    reloadcslider();  //función que actualiza el carrusel para mostrar el elemento activo
}

cprev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthcitems;
    reloadcslider();
}

let refreshInterval = setInterval(()=> {cnext.click()}, 3000); /* Declara una variable llamada refreshInterval y le asigna un intervalo de tiempo
                                                                  ejecuta el código cada 3000 milisegundos (o 3 segundos). 
                                                                  cnext.click() simula un clic en el elemento cnext y avanza el carrusel al siguiente elemento.
                                                                  Se declara un intervalo que simula un clic en cnext cada 3 segundos. */

function reloadcslider(){
    cslider.style.left = -citems[active].offsetLeft + 'px'; //cambia la posición del cslider para que el elemento activo esté alineado con el lado izquierdo del cslider
    // 
    let last_active_dot = document.querySelector('.cslider .cdots li.active');  //selecciona el punto activo actual en el carrusel
    last_active_dot.classList.remove('active');                                 //elimina la clase ‘active’ del punto activo actual
    cdots[active].classList.add('active');                                      //añade la clase ‘active’ al punto que corresponde al elemento activo

    clearInterval(refreshInterval);                             //detiene el intervalo de tiempo actual que simula un clic en cnext cada 3 segundos.
    refreshInterval = setInterval(()=> {cnext.click()}, 3000);  //reinicia el intervalo de tiempo para que simule un clic en cnext cada 3 segundos
}


window.onresize = function(event) { /* Cuando el usuario redimensiona la ventana del navegador, se dispara 'resize' y actualiza el carrousel para mostrar el elemento activo. */
    reloadcslider();
};



