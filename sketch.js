var c1, c2, c3;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  c1 = color(242, 150, 51);
  c2 = color(237, 82, 31);
  canvas.position(0,0);
  setGradient(c1, c2);
  canvas.style('z-index','-1')
}

function draw() {
  stroke(9, 93, 189,50);
 ellipse(mouseX, mouseY, 40, 40);
  
}





function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}