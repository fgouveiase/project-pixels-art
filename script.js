const pixels = document.querySelectorAll('.pixel');
const cores = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('#pixel-board');

function removeSelect() {
  for (i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
}

function addSelect(e) {
  e.target.classList.add('selected');
}

for (i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', removeSelect);
  cores[i].addEventListener('click', addSelect);
}

function corSelecionada(event) {
  const corSelecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

function aplicaCor() {
  pixelBoard.addEventListener('click', corSelecionada);
}

aplicaCor();
