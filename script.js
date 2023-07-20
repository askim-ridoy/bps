// Function to create a firework particle
function createFireworkParticle() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  firework.style.backgroundColor = randomColor;

  const animationDuration = (Math.random() * 0.7 + 0.5).toFixed(2);
  firework.style.animationDuration = `${animationDuration}s`;

  document.body.appendChild(firework);

  // Remove the firework element after animation is completed
  firework.addEventListener('animationend', () => {
    firework.remove();
  });
}

// Function to generate continuous fireworks
function generateFireworks() {
  setInterval(() => {
    createFireworkParticle();
  }, 150); // Adjust the interval to control the frequency of fireworks
}

// Start generating fireworks when the page is loaded
window.addEventListener('load', () => {
  generateFireworks();
});
