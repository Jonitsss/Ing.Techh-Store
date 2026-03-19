// Actualiza el año del copyright automáticamente
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const copy = document.querySelector('footer span');
  if (copy) {
    copy.textContent = `© ${year} Ing.Techh — Todos los derechos reservados`;
  }
});
