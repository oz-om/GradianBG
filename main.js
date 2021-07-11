let screen = document.querySelector('.screen'),
  colorA = document.getElementById('colorA'),
  colorB = document.getElementById('colorB'),
  dir = document.getElementById('direction'),
  selectors = document.getElementById('dir'),
  result = document.getElementById('result'),
  copy = document.querySelector('.copy');


function watch(el) {
  el.onchange = function() {
    result.value = `linear-gradient(${dir.value}deg, ${colorA.value}, ${colorB.value})`;
    document.documentElement.style.setProperty('--back-img', result.value)
  }
}
watch(colorA);
watch(colorB);
watch(dir);

selectors.onchange = function () {
  result.value = `linear-gradient(${selectors.value}, ${colorA.value}, ${colorB.value})`;
  document.documentElement.style.setProperty('--back-img', result.value)
}

copy.onclick = function () {
  result.select();
  document.execCommand('copy');
}
