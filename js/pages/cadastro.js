import { salvarRegistro } from "../storage.js";

function setErrorVisible(field, visible) {
  const small = document.querySelector(`[data-error-for="${field}"]`);
  if (small) small.style.display = visible ? "block" : "none";
}

function validar({ nome, email, mensagem }) {
  const erros = {};
  if (!nome.trim()) erros.nome = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.email = true;
  if (!mensagem.trim()) erros.mensagem = true;
  return erros;
}

export function initCadastro() {
  const form = document.getElementById("cadastro-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = {
      nome: form.nome.value,
      email: form.email.value,
      mensagem: form.mensagem.value,
    };

    const erros = validar(dados);
    ["nome", "email", "mensagem"].forEach((campo) => setErrorVisible(campo, Boolean(erros[campo])));

    if (Object.keys(erros).length > 0) return;

    salvarRegistro(dados);
    form.reset();
    window.location.hash = "#/lista";
  });
}
