function setup() {
  createCanvas(2000,850);
}

var screen_to_display = 'main menu';

var slidery = 500;

var yearin = ((800-slidery)/7.5)+2000;

var averagetemp = round(58.12 + (0.018*(yearin-2000)));

var iceberg1 = 150-((yearin-2000)*2);
var iceberg2 = 150-((yearin-2020)*2);
var iceberg3 = 150-((yearin-2040)*2);

var waterlevel = (yearin-2000);

var avgdepth = 12100;

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
    
    fill(100,0,200);
    rect(50,400,100,100);
    rect(50,500,100,100);
    fill(255,255,255);
    textSize(20);
    fill(0,0,0);
    text('Use control',25,325);
    text('buttons',25,350);
    text('or slider',25,375);
    fill(255,255,255);
    textSize(100);
    text('^',75,500);
    textSize(60);
    text('V',75,575);
    fill(0,0,0);
    textSize(25);
    text('2000',175,800);
    text('2010',175,725);
    text('2020',175,650);
    text('2030',175,575);
    text('2040',175,500);
    text('2050',175,425);
    text('2060',175,350);
    text('2070',175,275);
    text('2080',175,200);
    textSize(45);
    yearin = round(((800-slidery)/7.5)+2000-3);
    let year = 'Year: '+yearin;
    text(year,400,150);
    
    textSize(30);
    
    if (yearin <= 2015){
      averagetemp = round(58.12 + (0.018*(yearin-2000)));
    } else {
      averagetemp = round(58.12 + (0.018*(yearin-2000) +(0.13*(yearin-2015))),2);
    }
    let temp = 'Average global temp (estimated): '+averagetemp+' degrees F';
    text(temp,700,150);
    
    stroke(0,50,175);
    fill(0,50,175);
    
    iceberg1 = -1*(150-((yearin-2000)*2));
    iceberg2 = -1*(150-((yearin-2020)*2));
    iceberg3 = -1*(150-((yearin-2040)*2));
   
    if (iceberg1 <= -150){
      iceberg1 = -150;
    } else if (iceberg1 >= 0){
      iceberg1 = 0;
    }
    
    if (iceberg2 <= -150){
      iceberg2 = -150;
    } else if (iceberg2 >= 0){
      iceberg2 = 0;
    }
    
    if (iceberg3 <= -150){
      iceberg3 = -150;
    } else if (iceberg3 >= 0){
      iceberg3 = 0;
    }
    
    
    print(iceberg1,iceberg2,iceberg3);
    rect(800,400,100,iceberg3);
    rect(900,400,100,iceberg2);
    rect(1000,400,100,iceberg1);
    
    waterlevel = (yearin-2000);
    
    textSize(40);
    text('Iceberg mass',500,350);
    
    fill(0,100,200);
    
    text('Water level',500,800);
    
    stroke(0,0,0);
    //rect(800,850,100,-85);
    
    text('-- 2021 water level',920,780);
    
    avgdepth = (0.035*waterlevel) + 12100;
    
    let i = 10;
    while (i <= 400){
      text('--',920,i+500);
      i += 30;
    }
    
    text('-- 1 foot above 2021 level',920,690);
    text('-- 2 foot above 2021 level',920,600);
    text('-- 3 foot above 2021 level',920,510);
    
    print(waterlevel);
    rect(800,850,100,-4*(waterlevel));
    textSize(25);
    text('Average ocean depth '+avgdepth,425,600);
    
    rect(1400,200,600,850);
    fill(0,200,50);
    
    if (waterlevel <= 30){
      rect(1600,350,200,400);
      rect(1800,350,50,50);
      rect(1550,500,50,50);
      rect(1600,300,50,50);
      rect(1600,750,50,50);
    } else if (waterlevel <= 40){
      rect(1600,350,200,400);
      rect(1800,350,50,50);
      rect(1550,500,50,50);
    } else if (waterlevel <= 50){
      rect(1600,350,200,400);
      rect(1800,350,50,50);
    } else if (waterlevel <= 60){
      rect(1600,350,200,400);
      rect(1800,350,50,50);
    } else if (waterlevel <= 70){
      rect(1600,350,150,300);
    } else if (waterlevel <= 75){
      rect(1600,350,75,200);
    } else if (waterlevel <= 80){
      rect(1600,350,50,100);
    } else if (waterlevel <= 70){
      rect(1600,350,25,50);
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
    
    fill(0,100,200);
    rect(300,100,50,700);
    fill(200,0,100);
    rect(250,slidery,150,30);
    
     
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

function mousePressed(){
  if (screen_to_display == 'main menu'){
    
    if (mouseX >= 200 && mouseX <= 900 && mouseY >= 100 && mouseY <= 400){
      
      print('in one rectangle');
      
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
    if (mouseX >= 250 && mouseX <= 400 && mouseY >= slidery && mouseY <= slidery+30){
      slidery = mouseY-15;
      print('clicked in');
    }
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 400 && mouseY <= 500 && slidery >= 100){
      slidery = slidery-10;
    }
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 500 && mouseY <= 600 && slidery <= 800){
      slidery = slidery+10;
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

function mouseDragged(){
  if (screen_to_display == 'climate change simulator'){
    if (mouseX >= 250 && mouseX <= 400){
      slidery = mouseY-15;
      print('clicked in');
    }
    if (slidery <= 100){
      slidery = 110;
    }
    if (slidery >= 800){
      slidery = 780;
    }
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 400 && mouseY <= 500 && slidery >= 100){
      slidery = slidery-10;
    }
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 500 && mouseY <= 600 && slidery <= 800){
      slidery = slidery+10;
    }
  }
}
