// Audio setup
let audio;
function playAudio() {
  if(!audio) {
    audio = new Audio('song.mp3');
    audio.loop = true;
    audio.play().catch(() => {}); // ignores errors
  } else {
    audio.play();
  }
}

// Create falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.width = 20 + Math.random() * 20 + 'px';
  heart.style.height = heart.style.width;
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Generate hearts continuously
setInterval(createHeart, 300);
