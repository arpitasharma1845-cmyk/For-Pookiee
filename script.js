const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));

const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});

document.addEventListener('click', (e) => {
  const bg = document.getElementById('bg-music');
  if (bg) {
    bg.play().catch(() => {});
  }

  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'absolute';
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  heart.style.fontSize = '24px';
  heart.style.pointerEvents = 'none';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
