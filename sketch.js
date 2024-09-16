let rotationSpeedX = 0.0002;
let rotationSpeedY = 0.0002;
let shapeType = 'box'; // 初期形状をボックスに設定
let sphereDetailX = 10; // スフィアの横方向のセグメント数
let sphereDetailY = 10; // スフィアの縦方向のセグメント数

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('p5-canvas');
}

function draw() {
  background(27, 27, 27); // 背景色を設定
  rotationSpeedX = map(mouseX, 0, width, 0.0002, 0.0004);
  rotationSpeedY = map(mouseY, 0, height, 0.0002, 0.0004);

  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 500) {
      noFill();
      stroke(0, 255, 255);
      rotateX(frameCount * rotationSpeedX);
      rotateY(frameCount * rotationSpeedY);
      if (shapeType === 'box') {
        box(200, 200, 200);
      } else if (shapeType === 'sphere') {
        sphere(300, sphereDetailX, sphereDetailY); // スフィアのセグメント数を設定
      }
    }
  }
}

function mousePressed() {
  // クリックされたときの動作をここに追加
  rotationSpeedX = random(0.0001, 0.001);
  rotationSpeedY = random(0.0001, 0.001);
  // 形状を切り替える
  if (shapeType === 'box') {
    shapeType = 'sphere';
  } else {
    shapeType = 'box';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
