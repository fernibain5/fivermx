const slider = document.querySelector(".slider");
let isDragging = false;
let startX, scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing"; // Cambia el cursor al arrastrar
  slider.style.scrollBehavior = "auto"; // Desactiva el desplazamiento suave
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.style.cursor = "grab"; // Restaura el cursor al salir
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.style.cursor = "grab"; // Restaura el cursor al soltar
  slider.style.scrollBehavior = "smooth"; // Reactiva el desplazamiento suave
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del arrastre
  slider.scrollLeft = scrollLeft - walk;
});

// Soporte para dispositivos táctiles
slider.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.scrollBehavior = "auto"; // Desactiva el desplazamiento suave
});

slider.addEventListener("touchend", () => {
  isDragging = false;
  slider.style.scrollBehavior = "smooth"; // Reactiva el desplazamiento suave
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del arrastre
  slider.scrollLeft = scrollLeft - walk;
});
