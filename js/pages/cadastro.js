import { salvarRegistro } from "../storage.js";

const REGRAS = {
  nome: (valor) => valor.trim().length > 0,
  email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
  mensagem: (valor) => valor.trim().length > 0,
};

function setErrorVisible(campo, visivel) {
  const small = document.querySelector(`[data-error-for="${campo}"]`);
  if (small) small.style.display = visivel ? "block" : "none";
}

function validarCampo(form, campo) {
  const valido = REGRAS[campo](form[campo].value);
  setErrorVisible(campo, !valido);
  return valido;
}

function validarForm(form) {
  return Object.keys(REGRAS)
    .map((campo) => validarCampo(form, campo))
    .every(Boolean);
}

export function initCadastro() {
  const form = document.getElementById("cadastro-form");

  Object.keys(REGRAS).forEach((campo) => {
    form[campo].addEventListener("input", () => validarCampo(form, campo));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validarForm(form)) return;

    salvarRegistro({
      nome: form.nome.value,
      email: form.email.value,
      mensagem: form.mensagem.value,
    });

    form.reset();
    window.location.hash = "#/lista";
  });
}
