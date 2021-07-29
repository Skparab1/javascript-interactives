function setup() {
  createCanvas(2000,850);
}

var screen_to_display = 'main menu';

function draw() {
  
  if (screen_to_display == 'main menu'){
    
    clear();
  
    textSize(60);
    
    if (mouseX >= 200 && mouseX <= 900 && mouseY >= 100 && mouseY <= 400){
      
      fill(255,255,200);
      rect(200,100,700,300);
      fill(0,0,0);
      
    } else {
     
      fill(225,0,0);
      rect(200,100,700,300);
      fill(255,255,255);
    }
    
    text('Interactive map',330,280);
    
    if (mouseX >= 1000 && mouseX <= 1700 && mouseY >= 100 && mouseY <= 400){
      fill(255,255,200);
      rect(1000,100,700,300);
      fill(0,0,0);
      
    } else {
      fill(0,225,0);
      rect(1000,100,700,300);
      fill(255,255,255);
    }
    
    text('Interactive graph',1130,280);
    
    if (mouseX >= 200 && mouseX <= 900 && mouseY >= 500 && mouseY <= 800){
      fill(255,255,200);
      rect(200,500,700,300);
      fill(0,0,0);
      
    } else {
      fill(0,0,225);
      rect(200,500,700,300);
      fill(255,255,255);
    }
    
    textSize(40);
    text('Climate change simulator',270,680);
    
    if (mouseX >= 1000 && mouseX <= 1700 && mouseY >= 500 && mouseY <= 800){
      fill(255,255,200);
      rect(1000,500,700,300);
      fill(0,0,0);
      
    } else {
      fill(200,200,0);
      rect(1000,500,700,300);
      fill(255,255,255);
    }
    
    text('Wildfire and precipitation graph',1050,680);
    
    fill(0,0,0);
    textSize(60);
    
    text('Climate change data visualizations',500,75);
  } else {
    clear();
  }
  
  if (screen_to_display == 'interactive map'){
    
    clear();
    fill(0,0,0);
    textSize(60);
    text('Interactive climate change map',550,75);
    
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(50,50,200,100);
      fill(0,0,0);
    } else {
      fill(255,100,0);
      rect(50,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Back',100,120);
    
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(1750,50,200,100);
      fill(0,0,0);
    } else {
      fill(0,100,255);
      rect(1750,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Next',1800,120);
      
    
  }
  
  if (screen_to_display == 'interactive graph'){
    
    clear();
    fill(0,0,0);
    textSize(60);
    text('Interactive climate change graph',550,75);
    
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(50,50,200,100);
      fill(0,0,0);
    } else {
      fill(255,100,0);
      rect(50,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Back',100,120);
    
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(1750,50,200,100);
      fill(0,0,0);
    } else {
      fill(0,100,255);
      rect(1750,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Next',1800,120);
     
  }
  
  if (screen_to_display == 'climate change simulator'){
    
    clear();
    fill(0,0,0);
    textSize(60);
    text('Climate change simulator',550,75);
    
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(50,50,200,100);
      fill(0,0,0);
    } else {
      fill(255,100,0);
      rect(50,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Back',100,120);
    
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(1750,50,200,100);
      fill(0,0,0);
    } else {
      fill(0,100,255);
      rect(1750,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Next',1800,120);
     
  }
  
  if (screen_to_display == 'wildfire and precipitation graph'){
    
    clear();
    fill(0,0,0);
    textSize(60);
    text('Wildfire and precipitation graph',550,75);
    
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(50,50,200,100);
      fill(0,0,0);
    } else {
      fill(255,100,0);
      rect(50,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Back',100,120);
    
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      fill(255,255,200);
      rect(1750,50,200,100);
      fill(0,0,0);
    } else {
      fill(0,100,255);
      rect(1750,50,200,100);
      fill(255,255,255);
    }
    
    textSize(50);
    text('Next',1800,120);
     
  }

}

var loading_time = 1;

function loading(){
  
  //clear();
  
  for(i = 0;i <= loading_time; i ++){
  
    rect(300+(50*i),300,300,50);
    
  }
  
  loading_time = loading_time + 1;
  
}

function mousePressed(){
  if (screen_to_display == 'main menu'){
    
    if (mouseX >= 200 && mouseX <= 900 && mouseY >= 100 && mouseY <= 400){
      
      print('in one rectangle');
      setTimeout(loading, 1000);
      
      screen_to_display = 'interactive map';
    }
    
    if (mouseX >= 1000 && mouseX <= 1700 && mouseY >= 100 && mouseY <= 400){
      screen_to_display = 'interactive graph';
    }
    
    if (mouseX >= 200 && mouseX <= 900 && mouseY >= 500 && mouseY <= 800){
      screen_to_display = 'climate change simulator';
    }
    
    if (mouseX >= 1000 && mouseX <= 1700 && mouseY >= 500 && mouseY <= 800){
      screen_to_display = 'wildfire and precipitation graph';
    }
    
  }
  
  if (screen_to_display == 'interactive map'){
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'main menu';
    }
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'interactive graph';
    }
  } else if (screen_to_display == 'interactive graph'){
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'main menu';
    }
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'climate change simulator';
    }
  } else if (screen_to_display == 'climate change simulator'){
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'main menu';
    }
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'wildfire and precipitation graph';
    }
  } else if (screen_to_display == 'wildfire and precipitation graph'){
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'main menu';
    }
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'interactive map';
    }
  }
}
