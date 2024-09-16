function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('p5-canvas');
}

function draw() {
  background(27, 27, 27); // 背景色を設定
  let rotationSpeedX = map(mouseX, 0, width, 0.0002, 0.0004);
  let rotationSpeedY = map(mouseY, 0, height, 0.0002, 0.0004);

  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 500) {
      noFill();
      stroke(0, 255, 255);
      rotateX(frameCount * rotationSpeedX);
      rotateY(frameCount * rotationSpeedY);
      box(200, 200, 200);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
