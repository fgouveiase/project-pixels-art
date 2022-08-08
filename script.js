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

function aplicaCor(event) {
  if (event.target.classList.contains.pixels) {
    const cor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = cor;
  }
}

window.onload = function () {
  for (i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', addSelect);
    pixelBoard.addEventListener('click', aplicaCor);
  }
};
