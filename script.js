const cores = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('#pixel-board');

function removeSelect() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
}

function addSelect() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.add('selected');
  }
}

function addEvento() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', removeSelect);
    cores[i].addEventListener('click', addSelect);
  }
}

function aplicaCor(e) {
  if (e.target.classList === 'pixel') {
    const cor = document.querySelector('.selected').style.backgroundColor;
    e.target.style.backgroundColor = cor;
  }
}

window.onload = function janela() {
  addEvento();
  pixelBoard.addEventListener('click', aplicaCor);
};
