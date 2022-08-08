const cores = document.querySelectorAll('.color');

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

function pintar(e) {
  const pixelSelect = e.target;
  const colorSelect = document.querySelector('.selected');
  const cor = getComputedStyle(colorSelect).backgroundColor;
  pixelSelect.style.backgroundColor = cor;
}

const selectColor = document.querySelector('#pixel-board');
selectColor.addEventListener('click', pintar);
