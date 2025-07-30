document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('#ftRoupas');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const itemWidth = 300; // Largura do item + gap

  nextBtn.addEventListener('click', () => {
    carrossel.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carrossel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });
});