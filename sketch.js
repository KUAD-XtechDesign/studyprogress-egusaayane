let c = 0;
let points;
let bounds;
let txt = "yahho";
let textSize = 200;


function preload() {
  font = loadFont("MOCitrinePro-Regular.otf");
}

function setup() {

  points = font.textToPoints(txt, 0, 0, textSize, {
    sampleFactor: 0.09,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(txt, 0, 0, textSize);

  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  textFont(font);
  angleMode(DEGREES);


}

function draw() {

  if (c >= 70) {
    c = c % 70;
  }
  fill(150+c, 60, 80, 30);
  stroke(150+c, 60, 80, 50);
  strokeWeight(1);
  c += 10;
  frameRate(7);
  background(0, 0, 97);
  // beginShape();
  push();
  translate(width / 2, height / 2);
  translate(-bounds.x - bounds.w / 2, -bounds.y - bounds.h / 2);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    ellipse(x, y, random(5,8) % 60);
  }
  pop();

}
