const startBtn = document.getElementById('startBtn');
const texts = document.querySelectorAll('.text');
let current = 0;

function showNextText() {
  if(current > 0) {
    texts[current-1].style.opacity = 0; // desvanecer anterior
  }
  if(current < texts.length) {
    texts[current].style.opacity = 1; // mostrar siguiente
    current++;
    setTimeout(showNextText, 4000); // cada línea dura 4s
  }
}

startBtn.onclick = () => {
  startBtn.style.display = 'none';
  showNextText();
};