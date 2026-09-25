export function featureCardTemplate({ title, description }) {
  return `
    <article class="card">
      <h2>${title}</h2>
      <p>${description}</p>
    </article>
  `;
}

export function registroCardTemplate({ nome, email, mensagem, criadoEm }) {
  const data = new Date(criadoEm).toLocaleString("pt-BR");
  return `
    <article class="card">
      <h2>${nome}</h2>
      <p>${email}</p>
      <p>${mensagem}</p>
      <small>${data}</small>
    </article>
  `;
}

export function emptyStateTemplate(message) {
  return `<p class="empty-state">${message}</p>`;
}
