// Setup audio
const audio = new Audio('song.mp3');
audio.loop = true;
audio.volume = 0; // start muted to allow autoplay
audio.play().catch(()=>{}); // autoplay muted

// On first user interaction, unmute audio
let firstClick = true;
document.addEventListener('click', () => {
  if(firstClick){
    audio.volume = 1;
    firstClick = false;
  }
});

// Falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  const size = 20 + Math.random() * 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Generate hearts continuously
setInterval(createHeart, 300);
