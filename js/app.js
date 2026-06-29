document.addEventListener("DOMContentLoaded", function () {
    console.log("Sitio cargado correctamente");
    const headers = document.querySelectorAll(".card-header");
    console.log("Tarjetas encontradas:", headers.length);
    headers.forEach(function(header){
        header.addEventListener("click", function(){
            console.log("CLICK");
            this.closest(".card").classList.toggle("active");
        });
    });
});

const abrirFaq = document.getElementById('abrirFaq');
const cerrarFaq = document.getElementById('cerrarFaq');
const modalFaq = document.getElementById('modalFaq');

abrirFaq.addEventListener('click', (e) => {
    e.preventDefault();
    modalFaq.classList.add('active');
});

cerrarFaq.addEventListener('click', () => {
    modalFaq.classList.remove('active');
});

modalFaq.addEventListener('click', (e) => {
    if(e.target === modalFaq){
        modalFaq.classList.remove('active');
    }
});

const preguntas = document.querySelectorAll('.faq-pregunta');
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        const item = pregunta.parentElement;
        item.classList.toggle('active');
    });
});

/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* CERRAR MENU AL HACER CLICK */

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

/* HEADER SCROLL */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// Bloquear clic derecho
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// No permitir arrastrar imágenes
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
});

// Desactivar atajos
document.addEventListener("keydown", function(e){

    if(e.key==="F12"){
        e.preventDefault();
    }

    if(e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())){
        e.preventDefault();
    }

    if(e.ctrlKey && e.key.toUpperCase()=="U"){
        e.preventDefault();
    }

});
