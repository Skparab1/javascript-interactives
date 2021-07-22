function setup() {
  
  createCanvas(1000,700);
  
  
  
  
  
}


function draw() {
  
  rect(400,300,50,100);
  rect(600,300,50,100);
  rect(800,300,50,100);

  if (mouseY > 300 && mouseY < 300 + 100 && mouseX < 400 + 50 && mouseX > 400){
    fill(200,0,0)
  }
  else {
    fill(255)
  }
    
}

function mousePressed(){
  
    if (mouseY > 300 && mouseY < 300 + 100 && mouseX < 400 + 50 && mouseX > 400){
    fill(0,200,0)
  }
  else {
    fill(255)
  }
   
}
