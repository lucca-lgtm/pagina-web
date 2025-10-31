// Navegación responsive y manejo simple del formulario
document.addEventListener('DOMContentLoaded', function(){
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', ()=>{
mainNav.classList.toggle('open');
});

// Cerrar menú al clicar fuera (en móvil)
document.addEventListener('click', (e)=>{
if(!mainNav.contains(e.target) && !navToggle.contains(e.target)){
mainNav.classList.remove('open');
}
});

// Manejo básico de formulario (simulación)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', function(e){
e.preventDefault();
const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();
if(!name || !email || !message){
msg.textContent = 'Por favor completá todos los campos.';
return;
}
// Aquí se podría enviar con fetch a una API / servidor.
msg.textContent = 'Gracias, tu mensaje fue enviado (simulado). Nos comunicaremos pronto.';
form.reset();
});
});