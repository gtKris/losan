console.log("Página LOSAN cargada correctamente");

// Selecciona todas las tarjetas de servicios
const serviceCards = document.querySelectorAll('.service-card');

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85; // punto de activación

  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}


// Fade-in secuencial al cargar
window.addEventListener('load', () => {
    const herramientas = document.querySelectorAll('.herramienta');
    herramientas.forEach((herramienta, index) => {
      setTimeout(() => {
        herramienta.classList.add('show');
      }, index * 200);
    });
  });
  

// Detectar scroll y cargar al inicio
window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);
