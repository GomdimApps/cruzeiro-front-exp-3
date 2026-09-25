import { getRegistros, removerRegistro } from "../storage.js";
import { registroCardTemplate, emptyStateTemplate } from "../templates.js";

function render(container) {
  const registros = getRegistros();
  container.innerHTML = registros.length
    ? registros.map(registroCardTemplate).join("")
    : emptyStateTemplate("Nenhum cadastro encontrado ainda.");
}

export function initLista() {
  const container = document.getElementById("lista-container");
  render(container);

  container.addEventListener("click", (event) => {
    const botao = event.target.closest('[data-action="remover"]');
    if (!botao) return;

    removerRegistro(Number(botao.dataset.id));
    render(container);
  });
}
