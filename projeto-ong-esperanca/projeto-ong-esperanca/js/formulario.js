import {
    salvarCadastro,
    carregarCadastro
} from "./armazenamento.js";

export function configurarFormulario() {
    const formulario = document.querySelector("#app form");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const campos = formulario.querySelectorAll("input, select");

        campos.forEach(function (campo) {
            validarCampo(campo);
        });

        if (!formulario.checkValidity()) {
            return;
        }

        const dados = {
            nome: formulario.querySelector("#nome").value,
            email: formulario.querySelector("#email").value,
            nascimento: formulario.querySelector("#nascimento").value,
            cpf: formulario.querySelector("#cpf").value,
            telefone: formulario.querySelector("#telefone").value,
            cep: formulario.querySelector("#cep").value,
            rua: formulario.querySelector("#rua").value,
            numero: formulario.querySelector("#numero").value,
            cidade: formulario.querySelector("#cidade").value,
            estado: formulario.querySelector("#estado").value,
            participacao: formulario.querySelector("#participacao").value
        };

        salvarCadastro(dados);

        Swal.fire({
            title: "Cadastro realizado!",
            text: "Seus dados foram salvos com sucesso.",
            icon: "success",
            confirmButtonText: "OK"
        });
    });

    formulario.addEventListener("input", function (evento) {
        const campo = evento.target;

        if (campo.matches("input, select")) {
            validarCampo(campo);
        }
    });
}

export function validarCampo(campo) {
    let mensagem = campo.nextElementSibling;

    if (!mensagem || !mensagem.classList.contains("mensagem-erro")) {
        mensagem = document.createElement("span");
        mensagem.className = "mensagem-erro";
        campo.insertAdjacentElement("afterend", mensagem);
    }

    if (campo.validity.valid) {
    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");
    campo.setAttribute("aria-invalid", "false");
    mensagem.textContent = "";
    } else {
        campo.classList.remove("campo-valido");
        campo.classList.add("campo-invalido");
        campo.setAttribute("aria-invalid", "true");

        if (campo.validity.valueMissing) {
            mensagem.textContent = "Este campo é obrigatório.";
        } else if (campo.validity.typeMismatch) {
            mensagem.textContent = "Digite uma informação válida.";
        } else if (campo.validity.patternMismatch) {
            mensagem.textContent = "Preencha no formato indicado.";
        } else if (campo.validity.rangeUnderflow) {
            mensagem.textContent = "Digite um número maior que zero.";
        }
    }
}

export function preencherCadastro() {
    const dados = carregarCadastro();

    if (!dados) {
        return;
    }

    const formulario = document.querySelector("#app form");

    if (!formulario) {
        return;
    }

    formulario.querySelector("#nome").value = dados.nome || "";
    formulario.querySelector("#email").value = dados.email || "";
    formulario.querySelector("#nascimento").value =
        dados.nascimento || "";
    formulario.querySelector("#cpf").value = dados.cpf || "";
    formulario.querySelector("#telefone").value =
        dados.telefone || "";
    formulario.querySelector("#cep").value = dados.cep || "";
    formulario.querySelector("#rua").value = dados.rua || "";
    formulario.querySelector("#numero").value =
        dados.numero || "";
    formulario.querySelector("#cidade").value =
        dados.cidade || "";
    formulario.querySelector("#estado").value =
        dados.estado || "";
    formulario.querySelector("#participacao").value =
        dados.participacao || "";
}