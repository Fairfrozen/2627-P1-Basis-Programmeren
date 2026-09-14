let car1X = -150;
let car2X = -400;
let car3X = -700;

let carY = 455;

let car1Speed = 3;
let car2Speed = 2;
let car3Speed = 4;

let cloudX = 850;
let cloudSpeed = 1;

let sunX = -80;
let sunSpeed = 1;

let trafficLight = 0;

const RED = 0;
const GREEN = 1;
const ORANGE = 2;

let groundY = 450;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);

  drawSun();
  drawCloud();
  drawMountains();
  drawTrees();
  drawGround();
  drawTrafficLight();

  drawCar(car1X, carY, 200, 30, 30);
  drawCar(car2X, carY, 30, 100, 220);
  drawCar(car3X, carY, 240, 170, 20);

  moveSun();
  moveCloud();
  moveCars();
}

function drawSun() {
  fill(255, 220, 0);
  noStroke();
  circle(sunX, 100, 80);
}

function moveSun() {
  sunX += sunSpeed;

  if (sunX > width + 80) {
    sunX = -80;
  }
}

function drawCloud() {
  fill(255);
  noStroke();

  circle(cloudX, 140, 45);
  circle(cloudX + 25, 125, 55);
  circle(cloudX + 55, 130, 65);
  circle(cloudX + 85, 145, 50);
  circle(cloudX + 55, 150, 60);
  rect(cloudX + 15, 135, 75, 30);
}

function moveCloud() {
  cloudX -= cloudSpeed;

  if (cloudX < -120) {
    cloudX = width + 50;
  }
}

function drawMountains() {
  noStroke();

  fill(110, 110, 110);
  triangle(50, groundY, 250, 200, 450, groundY);

  fill(90, 90, 90);
  triangle(300, groundY, 520, 180, 750, groundY);
}

function drawTrees() {
  drawTree(120, 350, 0.8);
  drawTree(650, 420, 1.5);
  drawTree(300, 380, 0.9);
}

function drawTree(x, y, size) {
  push();

  translate(x, y);
  scale(size);

  fill(120, 70, 30);
  rect(-15, 40, 30, 100);

  fill(40, 140, 60);
  circle(0, 30, 100);
  circle(-35, 55, 75);
  circle(35, 55, 75);
  circle(0, 70, 90);

  pop();
}

function drawGround() {
  fill(80, 180, 80);
  noStroke();

  rect(0, groundY, width, height - groundY);

  fill(80);
  rect(0, 470, width, 100);

  fill(255);

  for (let x = 0; x < width; x += 100) {
    rect(x, 515, 50, 8);
  }
}

function drawTrafficLight() {
  fill(60);
  rect(735, 250, 10, 200);

  fill(40);
  rect(700, 180, 80, 170);

  fill(255, 0, 0);
  circle(740, 215, 40);

  fill(80);
  circle(740, 265, 40);

  fill(80);
  circle(740, 315, 40);
}

function drawCar(x, y, r, g, b) {
  push();

  translate(x, y);

  fill(r, g, b);
  rect(0, 20, 140, 45, 10);

  fill(r * 0.8, g * 0.8, b * 0.8);
  rect(30, -5, 80, 35, 8);

  fill(150, 220, 240);
  rect(75, 0, 30, 25);
  rect(40, 0, 30, 25);

  fill(30);
  circle(35, 70, 35);
  circle(110, 70, 35);

  fill(180);
  circle(35, 70, 15);
  circle(110, 70, 15);

  pop();
}

function moveCars() {
  car1X += car1Speed;
  car2X += car2Speed;
  car3X += car3Speed;

  if (car1X > width + 150) {
    car1X = -150;
  }

  if (car2X > width + 150) {
    car2X = -300;
  }

  if (car3X > width + 150) {
    car3X = -500;
  }
}

function keyPressed() {
}