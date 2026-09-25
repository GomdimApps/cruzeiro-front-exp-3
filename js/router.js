const appEl = document.getElementById("app");

export function createRouter(routes, notFoundPath = "/") {
  async function render() {
    const path = window.location.hash.replace("#", "") || "/";
    const route = routes[path] || routes[notFoundPath];

    const response = await fetch(route.template);
    appEl.innerHTML = await response.text();

    document.querySelectorAll(".app-nav__link").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.route === path);
    });

    route.init?.();
  }

  function start() {
    window.addEventListener("hashchange", render);
    render();
  }

  return { start };
}
