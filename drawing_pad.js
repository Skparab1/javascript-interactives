// Shubham Parab      Free write using variables

// This program is like a drawing pad, but you can change the colors by clicking the colored boxes on the side

var color_r = 0;
var color_g = 0;
var color_b = 0;

function setup() {
  createCanvas(2000,1000);
}


function draw() {
  
  fill(255,0,0);
  rect(1500,100,150,120);
  
  fill(0,255,0);
  rect(1500,250,150,120);
  
  fill(0,0,255);
  rect(1500,400,150,120);
  
  fill(255,255,0);
  rect(1500,550,150,120);
  
  fill(0,0,0);
  rect(1500,700,150,120);
  
  fill(color_r,color_g,color_b);
  stroke(color_r,color_g,color_b);
  ellipse(mouseX,mouseY,100,100);
  rect(150,100,150,120);
  text('current color',150,75);
}

function mousePressed() {
  if (mouseY > 100 && mouseY < 100 + 120 && mouseX < 1500 + 150 && mouseX > 1500){
    color_r = 255;
    color_g = 0;
    color_b = 0;
  }
  
  if (mouseY > 250 && mouseY < 250 + 120 && mouseX < 1500 + 150 && mouseX > 1500){
    color_r = 0;
    color_g = 255;
    color_b = 0;
  }
  
  if (mouseY > 400 && mouseY < 400 + 120 && mouseX < 1500 + 150 && mouseX > 1500){
    color_r = 0;
    color_g = 0;
    color_b = 255;
  }
  
  if (mouseY > 550 && mouseY < 550 + 120 && mouseX < 1500 + 150 && mouseX > 1500){
    color_r = 255;
    color_g = 255;
    color_b = 0;
  }
  
  if (mouseY > 700 && mouseY < 700 + 120 && mouseX < 1500 + 150 && mouseX > 1500){
    color_r = 0;
    color_g = 0;
    color_b = 0;
  }
}
