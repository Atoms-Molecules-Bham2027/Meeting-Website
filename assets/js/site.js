const menuButton = document.querySelector(".menu-toggle");
const navList = document.querySelector(".site-nav__list");

if (menuButton && navList) {
  menuButton.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const page = document.body.dataset.page;

if (page) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.setAttribute("aria-current", "page");
    }
  });
}
