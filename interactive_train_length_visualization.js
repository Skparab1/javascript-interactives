// Shubham Parab

// Interactive visualization


function setup() {
  createCanvas(2000,2000);
  rect(100,100,1800,750);
  fill(255,0,0);
}

var lengths_array = [240,425,600,700,1700];

var pressed_area = 0;

function draw() {
  
  clear();
  
  text('Hover hover a train track for more information. click on it for fun facts',100,100);
  
  if (mouseX > 110 && mouseX < 240 && mouseY > 190 && mouseY < 240){
    
    if (pressed_area == 1){
      stroke(0,0,0);
      text('The system transported 223 million passengers in 2018. ',200,750);
      text('Average daily riders are 611,036. ',200,770);
      text('Has 3 lines. ',200,790);
      text('Has 65 trains ',200,810);
    
    }
    
    stroke(255,255,0);
    text('Opened on August 22, 1975.      Has 30 stations',460,215);
    
  } else {
    
    stroke(0,0,0);
    
  }
  
  line(100,200,lengths_array[0]+10,200);
  line(100,230,lengths_array[0]+10,230);
    
  let xpos = 110;
    
  while(xpos <= lengths_array[0]){
  setTimeout(100000);
  line(xpos,190,xpos,lengths_array[0]);
  xpos = xpos + 10;
  }
  
  text('Kharkiv, Ukraine: 38.1 km',260,215);
  
  if (mouseX > 110 && mouseX < 425 && mouseY > 290 && mouseY < 340){
    
    if (pressed_area == 2){
      stroke(0,0,0);
      text('The system transported 589.2 million passengers in 2012. ',200,750);
      text('System transports 1.6 million passengers daily ',200,770);
      text('Has 4 lines. ',200,790);
      text('Has 730 trains ',200,810); 
    }
    
    stroke(255,255,0);
    text('Opened in 1974.      Has 61 stations',630,315);
    
  } else {
    
    stroke(0,0,0);
    
  }
 
  fill(0,255,0);
  line(100,300,lengths_array[1],300);
  line(100,330,lengths_array[1],330);
  
  let xpos1 = 110;
  
  while(xpos1 <= lengths_array[1]){
    line(xpos1,290,xpos1,340);
    xpos1 = xpos1 + 10;
  }
  
  text('Prague, Czech Republic: 65.2 km',430,315);
  
  if (mouseX > 110 && mouseX < 600 && mouseY > 390 && mouseY < 440){
    
    if (pressed_area == 3){
      stroke(0,0,0);
      text('The system transported 1.494 billion passengers in 2019. ',200,750);
      text('System transports 5.3 million passengers daily ',200,770);
      text('Has 8 lines. ',200,790);
    }
    
    stroke(225,225,0); 
    text('Opened on April 24, 1968.      Has 89 stations',820,415);
    
  } else {
    
    stroke(0,0,0);
    
  }
  
  fill(0,0,255);
  line(100,400,lengths_array[2],400);
  line(100,430,lengths_array[2],430);
  
  let xpos2 = 110;
  
  while(xpos2 <= lengths_array[2]){
    line(xpos2,390,xpos2,440);
    xpos2 = xpos2 + 10;
  }
  
  text('S o Paulo, Brazil: 101.1 km',620,415);
  
  if (mouseX > 110 && mouseX < lengths_array[3] && mouseY > 490 && mouseY < 540){
    
    if (pressed_area == 4){
      stroke(0,0,0);
      text('The system transports 685 million passengers per year. ',200,750);
      text('System transports 2.5 million passengers daily ',200,770);
      text('Has 7 lines. ',200,790);
    }
    
    stroke(255,255,0);
    text('Opened on September 15, 1975.      Has 136 stations',920,515);
    
  } else {
    
    stroke(0,0,0);
    
  }  
  
  fill(255,0,255);
  line(100,500,lengths_array[3],500);
  line(100,530,lengths_array[3],530);
  
  let xpos3 = 110;
  
  while(xpos3 <= lengths_array[3]){
    line(xpos3,490,xpos3,540);
    xpos3 = xpos3 + 10;
  }
  
  text('Santiago, Chile: 140 km',720,515);
  
  if (mouseX > 110 && mouseX < lengths_array[4] && mouseY > 590 && mouseY < 640){
    
    if (pressed_area == 5){
      stroke(0,0,0);
      text('The system transported 1.91 billion passengers in 2017. ',200,750);
      text('Has 22 lines. ',200,790);
    }
    
    stroke(255,255,0);
    text('Opened in 1974.      Has 728 stations',1920,615);
    
  } else {
    
    stroke(0,0,0);
    
  } 
  
  fill(0,0,0);
  line(100,600,lengths_array[4],600);
  line(100,630,lengths_array[4],630);
  
  let xpos4 = 110;
  
  while(xpos4 <= lengths_array[4]){
    line(xpos4,590,xpos4,640);
    xpos4 = xpos4 + 10;
  }
  
  text('Seoul, South Korea: 364.9 km',1720,615);
 
}

function mousePressed(){
  if (mouseX > 110 && mouseX < 240 && mouseY > 190 && mouseY < 240){
   
    pressed_area = 1;
  }
  
  if (mouseX > 110 && mouseX < 425 && mouseY > 290 && mouseY < 340){
    
    pressed_area = 2;
    
  } 
  
  if (mouseX > 110 && mouseX < 600 && mouseY > 390 && mouseY < 440){
    
    pressed_area = 3;
    
  } 
  if (mouseX > 110 && mouseX < lengths_array[3] && mouseY > 490 && mouseY < 540){
    
    pressed_area = 4;
    
  } 
  if (mouseX > 110 && mouseX < lengths_array[4] && mouseY > 590 && mouseY < 640){
    
    pressed_area = 5;
    
  } 
}
