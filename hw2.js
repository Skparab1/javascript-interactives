function setup() {
createCanvas(1575,1020);
}


function draw() {
  stroke(mouseX/6,mouseXx/4,mouseY/4);
  fill(mouseX/6,mouseX/4,mouseY/4);
  ellipse(mouseX,mouseY,100,100);
}
