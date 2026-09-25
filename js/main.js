import { createRouter } from "./router.js";
import { initHome } from "./pages/home.js";
import { initCadastro } from "./pages/cadastro.js";
import { initLista } from "./pages/lista.js";

const routes = {
  "/": { template: "html/home.html", init: initHome },
  "/cadastro": { template: "html/cadastro.html", init: initCadastro },
  "/lista": { template: "html/lista.html", init: initLista },
  "/sobre": { template: "html/sobre.html" },
};

const router = createRouter(routes);
router.start();
