const startBtn = document.getElementById('startBtn');
const texts = document.querySelectorAll('.text');
let current = 0;

function showNextText() {
  if(current > 0) texts[current-1].style.opacity = 0; // fade out anterior
  if(current < texts.length) {
    texts[current].style.opacity = 1; // fade in siguiente
    current++;
    setTimeout(showNextText, 4000); // duración de cada línea
  }
}

startBtn.onclick = () => {
  startBtn.style.display = 'none'; // ocultar botón
  showNextText();
};
