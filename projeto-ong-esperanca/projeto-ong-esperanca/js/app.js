import { paginas } from "./paginas.js";

import {
    configurarFormulario,
    preencherCadastro
} from "./formulario.js";

const app = document.getElementById("app");

function renderizarPagina(pagina) {
    if (paginas[pagina]) {
        app.innerHTML = paginas[pagina];
    }

    if (pagina === "cadastro") {
        configurarFormulario();
        preencherCadastro();
    }
}

function navegar(pagina) {
    history.pushState(null, "", "#" + pagina);
    renderizarPagina(pagina);
}

/* Controla links do menu e links criados dentro do conteúdo */
document.addEventListener("click", function (evento) {
    const link = evento.target.closest("a[href^='#']");

    if (!link) {
        return;
    }

    const pagina = link.getAttribute("href").substring(1);

    if (paginas[pagina]) {
        evento.preventDefault();
        navegar(pagina);
    }
});

document.addEventListener("input", function (evento) {
    const campo = evento.target;

    if (campo.matches("input, select")) {
        if (campo.value.trim() !== "") {
            console.log("Campo preenchido:", campo.name);
        }
    }
});

window.addEventListener("popstate", function () {
    const pagina = location.hash.substring(1) || "inicio";
    renderizarPagina(pagina);
});

const paginaInicial =
    location.hash.substring(1) || "inicio";

renderizarPagina(paginaInicial);