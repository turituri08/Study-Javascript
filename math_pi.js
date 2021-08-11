function point(num, digit) {
  const mover = 10 ** digit;
  return Math.floor(num * mover) / mover;
}

document.getElementById('output').textContent = point(Math.PI, 2);