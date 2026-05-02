let ballX = 120;
let baseY = 240;
let ballSpeed = 3;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(40, 130, 70);

  let x = 100;
  let y = 80;
  let w = 600;
  let h = 320;
  let netX = x + w / 2;

  // fusha
  noStroke();
  fill(45, 110, 180);
  rect(x, y, w, h);

  // vijat
  stroke(255);
  strokeWeight(4);
  noFill();

  rect(x, y, w, h);

  line(x, y + 45, x + w, y + 45);
  line(x, y + h - 45, x + w, y + h - 45);

  line(x + 180, y + 45, x + 180, y + h - 45);
  line(x + w - 180, y + 45, x + w - 180, y + h - 45);

  // vija e mesit (nuk kalon mbi rrjetë)
  line(x + 180, y + h / 2, netX - 2, y + h / 2);
  line(netX + 2, y + h / 2, x + w - 180, y + h / 2);

  // rrjeta
  drawNet(netX, y, h);

  // 🔥 LËVIZJA E TOPIT
  ballX += ballSpeed;

  // kthehet në skaje
  if (ballX > x + w - 20 || ballX < x + 20) {
    ballSpeed *= -1;
  }

  // 🔥 KËRCIMI TE RRJETA (formë harku)
  let d = abs(ballX - netX);
  let jump = 0;

  if (d < 120) {
    // sa më afër rrjetës, aq më lart
    jump = map(d, 120, 0, 0, 80);
  }

  let ballY = baseY - jump;

  drawBall(ballX, ballY);
}

function drawNet(netX, y, h) {
  stroke(255);
  strokeWeight(5);
  line(netX, y, netX, y + h);

  strokeWeight(1);
  for (let j = y; j <= y + h; j += 10) {
    line(netX - 12, j, netX + 12, j);
  }

  for (let i = netX - 12; i <= netX + 12; i += 6) {
    line(i, y, i, y + h);
  }

  // shtyllat të bardha
  strokeWeight(6);
  line(netX, y - 20, netX, y);
  line(netX, y + h, netX, y + h + 20);
}

function drawBall(x, y) {
  noStroke();
  fill(220, 255, 70);
  circle(x, y, 24);

  stroke(255);
  strokeWeight(2);
  noFill();
  arc(x - 3, y, 16, 22, HALF_PI, PI + HALF_PI);
  arc(x + 3, y, 16, 22, -HALF_PI, HALF_PI);
}