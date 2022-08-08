const cores = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('#pixel-board');

function removeSelect() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
}

function addSelect(e) {
  e.target.classList.add('selected');
}

function addEvento() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', removeSelect);
    cores[i].addEventListener('click', addSelect);
  }
}
addEvento();