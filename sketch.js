// 回転速度の初期値を設定
let rotationSpeedX = 0.0002;
let rotationSpeedY = 0.0002;

// 初期形状をボックスに設定
let shapeType = 'box';

// スフィアの横方向と縦方向のセグメント数を設定
let sphereDetailX = 10;
let sphereDetailY = 10;

function setup() {
  // キャンバスを作成し、親要素を設定
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('p5-canvas');
}

function draw() {
  // 背景色を設定
  background(27, 27, 27);

  // マウスの位置に基づいて回転速度を更新
  rotationSpeedX = map(mouseX, 0, width, 0.0002, 0.0004);
  rotationSpeedY = map(mouseY, 0, height, 0.0002, 0.0004);

  // 形状を描画
  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 500) {
      noFill(); // 塗りつぶしなし
      stroke(0, 255, 255); // 線の色を設定
      rotateX(frameCount * rotationSpeedX); // X軸回転
      rotateY(frameCount * rotationSpeedY); // Y軸回転

      // 形状を切り替えて描画
      if (shapeType === 'box') {
        box(200, 200, 200); // ボックスを描画
      } else if (shapeType === 'sphere') {
        sphere(300, sphereDetailX, sphereDetailY); // スフィアを描画
      }
    }
  }
}

function mousePressed() {
  // クリックされたときに回転速度をランダムに変更
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
  // ウィンドウサイズが変更されたときにキャンバスをリサイズ
  resizeCanvas(windowWidth, windowHeight);
}
