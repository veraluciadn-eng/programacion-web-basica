// ===== Utilidades =====
function seccion(texto) {
   console.log("%c" + texto, "background:#3f5122; color:white; padding:2px 8px;");
}

const intereses = document.querySelectorAll("ul li");


// ===== Clase 12 - 1.2 Modificar contenido =====
seccion("Clase 12 - 1.2 Modificar contenido");

const badge = document.querySelector(".badge-jas");
badge.textContent = "⚡ JavaScript activo - la página ya reacciona a tus clics";

const saludo = document.querySelector("#saludo");
saludo.innerHTML = "👋 ¡Hola! Esta página ya <strong>reacciona</strong>: " +
                   "prueba el modo oscuro, marca tus intereses favoritos y envía el formulario.";

console.log("Saludo (solo texto):", saludo.textContent);


// ===== Clase 12 - 1.2 Modificar estilos =====
seccion("Clase 12 - 1.2 Modificar estilos");


// ===== Clase 12 - 1.3 Evento click: modo oscuro =====
seccion("Clase 12 - 1.3 Evento click: modo oscuro");

const botonTema = document.querySelector("#btn-tema");

botonTema.addEventListener("click", function () {
   document.body.classList.toggle("modo-oscuro");

   if (document.body.classList.contains("modo-oscuro")) {
      botonTema.textContent = "☀️ Modo claro";
   } else {
      botonTema.textContent = "🌙 Modo oscuro";
   }

   console.log("Modo oscuro activo:", document.body.classList.contains("modo-oscuro"));
});


// ===== Clase 12 - 1.3 Evento click: intereses favoritos =====
seccion("Clase 12 - 1.3 Evento click: intereses favoritos");

const contadorFavoritos = document.querySelector("#contador-favoritos");

function actualizarContador() {
   const favoritos = document.querySelectorAll("ul li.favorito");
   if (favoritos.length === 0) {
      contadorFavoritos.textContent = "";
   } else {
      contadorFavoritos.textContent = "★ " + favoritos.length + " favorito(s)";
   }
}

for (let i = 0; i < intereses.length; i++) {
   intereses[i].addEventListener("click", function () {
      intereses[i].classList.toggle("favorito");
      actualizarContador();
      console.log("Clic en: " + intereses[i].textContent);
   });
}


// ===== Clase 12 - 2.1 Validación del formulario =====
seccion("Clase 12 - 2.1 Validación del formulario");

const formulario = document.querySelector("form");
const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#correo");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", function (event) {
   event.preventDefault();

   mensajeError.classList.remove("error", "exito");
   nombreInput.classList.remove("campo-error");
   correoInput.classList.remove("campo-error");

   if (nombreInput.value.trim() === "") {
      mensajeError.textContent = "✖ El nombre es obligatorio.";
      mensajeError.classList.add("error");
      nombreInput.classList.add("campo-error");
      nombreInput.focus();

   } else if (!correoInput.value.includes("@")) {
      mensajeError.textContent = "✖ El correo debe incluir una @ (ejemplo: nombre@correo.com).";
      mensajeError.classList.add("error");
      correoInput.classList.add("campo-error");
      correoInput.focus();

   } else {
      mensajeError.textContent = "✔ ¡Gracias, " + nombreInput.value + "! Tu mensaje fue enviado correctamente.";
      mensajeError.classList.add("exito");
   }

   console.log("Formulario revisado - nombre:", nombreInput.value, "· correo:", correoInput.value);
});


// ===== Clase 12 - Evento input (contador de caracteres) =====
seccion("Clase 12 - Evento Input");

const mensajeTexto = document.querySelector("#mensaje");
const contadorMensaje = document.querySelector("#contador-mensaje");

mensajeTexto.addEventListener("input", function () {
   contadorMensaje.textContent = mensajeTexto.value.length + " caracteres";
});

formulario.addEventListener("reset", function () {
   mensajeError.textContent = "";
   mensajeError.classList.remove("error", "exito");
   nombreInput.classList.remove("campo-error");
   correoInput.classList.remove("campo-error");
   contadorMensaje.textContent = "0 caracteres";
});

console.log("%c ¡Clase 12 completa! La página ya cambia, escucha eventos y valida el formulario.",
   "color:#3fb8af; font-weight:bold;");


























































































   