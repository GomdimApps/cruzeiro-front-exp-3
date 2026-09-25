const STORAGE_KEY = "cruzeiro-front:cadastros";

export function getRegistros() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function salvarRegistro(registro) {
  const registros = getRegistros();
  registros.push({ ...registro, criadoEm: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
}

export function removerRegistro(criadoEm) {
  const registros = getRegistros().filter((registro) => registro.criadoEm !== criadoEm);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
}
