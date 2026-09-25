# cruzeiro-front-exp-3

SPA construída com HTML, CSS e JavaScript puro (sem frameworks), como parte da Experiência Prática 3.

## Estrutura

```
/html      -> fragmentos de página (home, cadastro, lista, sobre) carregados dinamicamente
/css       -> reset.css e styles.css
/js        -> router.js (SPA), templates.js (componentes reaproveitáveis), storage.js (localStorage)
/js/pages  -> lógica de inicialização de cada rota
/imagens   -> assets estáticos (ícones, imagens)
index.html -> ponto de entrada da aplicação
```

## Como rodar

Como o roteador usa `fetch()` para carregar os fragmentos HTML, é necessário servir os arquivos via HTTP (abrir `index.html` direto com `file://` não funciona).

```bash
# usando Python
python3 -m http.server 8080

# ou usando Node
npx serve .
```

Depois acesse `http://localhost:8080`.
