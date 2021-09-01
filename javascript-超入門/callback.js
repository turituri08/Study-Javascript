function setCanvasSize(size, num, callback) {
  width = size;
  height = size;
  callback(size);
}

setCanvasSize(500, 300, (num) => {
  console.log(num);
});