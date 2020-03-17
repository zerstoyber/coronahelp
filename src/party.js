var canvas;
//var mic;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var elmnt = document.getElementById("idbody");
  var x = elmnt.scrollWidth;
  var y = elmnt.scrollHeight;

  canvas = createCanvas(windowWidth, y);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
