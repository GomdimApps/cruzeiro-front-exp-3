import { featureCardTemplate } from "../templates.js";

const FEATURES = [
  { title: "SPA", description: "Navegação sem recarregar a página, via roteador em hash." },
  { title: "Templates dinâmicos", description: "Componentes reaproveitáveis gerados por JavaScript." },
  { title: "Persistência local", description: "Dados de formulário armazenados no localStorage." },
];

export function initHome() {
  const container = document.getElementById("home-features");
  container.innerHTML = FEATURES.map(featureCardTemplate).join("");
}
