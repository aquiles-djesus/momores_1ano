// =============================================
//  CONTADOR DE NAMORO
//  Início: 18/04/2025 às 18:50
// =============================================

const START_DATE = new Date('2025-04-18T18:50:00');

function pad(n, digits = 2) {
  return String(n).padStart(digits, '0');
}

function updateCounter() {
  const now = new Date();
  const diff = now - START_DATE;

  if (diff < 0) {
    document.getElementById('days').textContent    = '000';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const totalSeconds  = Math.floor(diff / 1000);
  const seconds       = totalSeconds % 60;
  const totalMinutes  = Math.floor(totalSeconds / 60);
  const minutes       = totalMinutes % 60;
  const totalHours    = Math.floor(totalMinutes / 60);
  const hours         = totalHours % 24;
  const days          = Math.floor(totalHours / 24);

  document.getElementById('days').textContent    = pad(days, 3);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

// Atualiza a cada segundo
updateCounter();
setInterval(updateCounter, 1000);


// =============================================
//  ANIMAÇÕES AO ROLAR (Intersection Observer)
// =============================================

const animateOnScroll = (selector, animClass = 'visible') => {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animClass);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
};

// Injeta estilos de animação dinamicamente
const style = document.createElement('style');
style.textContent = `
  .gallery-item,
  .timeline-card,
  .celebration-inner,
  .counter-section {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .gallery-item.visible,
  .timeline-card.visible,
  .celebration-inner.visible,
  .counter-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .gallery-item:nth-child(2) { transition-delay: 0.1s; }
  .gallery-item:nth-child(3) { transition-delay: 0.2s; }
  .gallery-item:nth-child(4) { transition-delay: 0.3s; }
  .gallery-item:nth-child(5) { transition-delay: 0.4s; }
  .gallery-item:nth-child(6) { transition-delay: 0.5s; }

  .timeline-item:nth-child(2) .timeline-card { transition-delay: 0.1s; }
  .timeline-item:nth-child(3) .timeline-card { transition-delay: 0.2s; }
  .timeline-item:nth-child(4) .timeline-card { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Aplica observers
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll('.gallery-item');
  animateOnScroll('.timeline-card');
  animateOnScroll('.celebration-inner');
  animateOnScroll('.counter-section');
});


