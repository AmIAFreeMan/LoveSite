import { gsap } from 'gsap';

export function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  gsap.to(heart, {
    y: -200,
    x: gsap.utils.random(-50, 50),
    opacity: 0,
    duration: 1.5,
    onComplete: () => heart.remove()
  });
}