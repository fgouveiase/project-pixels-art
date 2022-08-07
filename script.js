const cores = document.querySelectorAll('.color');

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
