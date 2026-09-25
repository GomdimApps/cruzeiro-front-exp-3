import { getRegistros } from "../storage.js";
import { registroCardTemplate, emptyStateTemplate } from "../templates.js";

export function initLista() {
  const container = document.getElementById("lista-container");
  const registros = getRegistros();

  container.innerHTML = registros.length
    ? registros.map(registroCardTemplate).join("")
    : emptyStateTemplate("Nenhum cadastro encontrado ainda.");
}
