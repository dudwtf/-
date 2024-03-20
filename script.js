let rt = document.querySelector('.r');
let gt = document.querySelector('.g');
let bt = document.querySelector('.b');
let at = document.querySelector('.a');
let bod = document.body;

function getlold() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  let opacity = document.getElementById('opacity').value;
  bod.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

function update() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  let opacity = document.getElementById('opacity').value;
  rt.textContent = 'red: ' + red;
  gt.textContent = 'green: ' + green;
  bt.textContent = 'blue: ' + blue;
  at.textContent = 'opacity: ' + opacity;
}

setInterval(update, 10);

document.getElementById('red').addEventListener('input', function() {
  getlold();
  update();
});

document.getElementById('green').addEventListener('input', function() {
  getlold();
  update();
});

document.getElementById('blue').addEventListener('input', function() {
  getlold();
  update();
});

document.getElementById('opacity').addEventListener('input', function() {
  getlold();
  update();
});
