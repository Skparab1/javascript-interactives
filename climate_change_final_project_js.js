// Shubham Parab       Final project
// Climate change data visualizations
//  1. interactive map: tells which areas are affected by natural disasters caused by climate change
//  2. interactive graph: shows average global temperature over time
//  3. climate change simulator: shows the effects of climate change (water level, iceberg mass decrease)
//  4. wildfire and precipitation graph: shows amount of wildfires growing over time.

var graph_setting = true;

var fire_setting = true;

var drop_setting = true;

var graph_color = true;

var map_setting = true;

function setup() {
  createCanvas(2000,850);
  
  fire_setting = true;
  drop_setting = true;
  graph_setting = true;
  graph_color = true;
  map_setting = true;
  
}

var temp_over_time = [57.55,57.68,57.81,57.94,58.07,58.2,58.33,58.46,58.59,58.72,58.85,58.98,59.11];

var screen_to_display = 'main menu';

var slidery = 500;

var yearin = ((800-slidery)/7.5)+2000;

var averagetemp = round(58.12 + (0.018*(yearin-2000)));

var iceberg1 = 150-((yearin-2000)*2);
var iceberg2 = 150-((yearin-2020)*2);
var iceberg3 = 150-((yearin-2040)*2);

var waterlevel = (yearin-2000);

var avgdepth = 12100;


function preload(){
  map = loadImage("map.jpg");
  fire = loadImage("fire.png");
  drop = loadImage("drop.png");
  wildfiretable = loadTable("wildfires_fig-1.csv");
}

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
    textSize(45);
    text('How climate change is affecting your area',550,125);
    textSize(35);
    text('Hover over a natural disaster for more info',550,200);
    
    image(map, 520, 250, 700, 550);
    
    fill(215,0,0);
    ellipse(150,300,50,50);
    text('Wildfire',190,315);
    
    fill(180,180,0);
    ellipse(150,450,50,50);
    text('Drought',190,465);
    
    fill(0,215,0);
    ellipse(150,600,50,50);
    text('Hurricane',190,615);
    
    fill(0,0,215);
    ellipse(150,750,50,50);
    text('Flooding',190,765);
    
    fill(0,180,180);
    ellipse(1300,300,50,50);
    text('Tornado',1350,315);
    
    fill(180,0,180);
    ellipse(1300,450,50,50);
    text('Snowstorm',1350,465);
    
    if (mouseX >= 100 && mouseX <= 450 && mouseY >= 250 && mouseY <= 350 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Wildfires',1275,575);
      textSize(35);
      text('Climate change can cause low humidity ',1275,650);
      text('and high temperatures',1275,700);
      text('which can spark wildfires.',1275,750);
    }
    
    if (mouseX >= 100 && mouseX <= 450 && mouseY >= 400 && mouseY <= 500 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Droughts',1275,575);
      textSize(35);
      text('Climate change can cause high temperatures ',1275,650);
      text('which can quickly evaporate water from lakes',1275,700);
      text('causing a drought.',1275,750);
    }
    
    if (mouseX >= 100 && mouseX <= 450 && mouseY >= 700 && mouseY <= 800 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Flooding',1275,575);
      textSize(35);
      text('Climate change can cause more rainfall ',1275,650);
      text('and can raise water level,',1275,700);
      text('causing flooding.',1275,750);
    }
    
    if (mouseX >= 100 && mouseX <= 450 && mouseY >= 550 && mouseY <= 650 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Hurricanes',1275,575);
      textSize(35);
      text('Climate change can cause warmer weather ',1275,650);
      text('which fuels hurricanes and can cause',1275,700);
      text('them to be faster and more distructive.',1275,750); 
    }
    
    if (mouseX >= 1275 && mouseX <= 1575 && mouseY >= 250 && mouseY <= 350 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Tornados',1275,575);
      textSize(35);
      text('Climate change can cause warmer air ',1275,650);
      text('and faster winds,',1275,700);
      text('causing tornados.',1275,750);
    }
    
    if (mouseX >= 1275 && mouseX <= 1575 && mouseY >= 400 && mouseY <= 500 && map_setting == true){
      fill(0,0,0);
      textSize(60);
      text('Snowstorms',1275,575);
      textSize(35);
      text('Climate change can affect air currents',1275,650);
      text('in the atmosphere, which can change weather,',1275,700);
      text('patterns and cause snowstorms.',1275,750);
    }
    
    if ((mouseX >= 550 && mouseX <= 580 && mouseY >= 460 && mouseY <= 490) || (mouseX >= 623 && mouseX <= 653 && mouseY >= 500 && mouseY <= 530) || (mouseX >= 589 && mouseX <= 380 && mouseY >= 619 && mouseY <= 410)){
      fill(0,0,0);
      textSize(60);
      text('Wildfires',1275,575);
      textSize(35);
      text('Summer and fall wildfires',1275,650);
      text('are common on the west coast',1275,700);
    }
    
    fill(215,0,0);
    ellipse(550,460,30,30);
    ellipse(623,500,30,30);
    ellipse(589,380,30,30);
    ellipse(585,540,30,30);
    fill(180,180,0);
    ellipse(585,490,30,30);
    ellipse(600,580,30,30);
    ellipse(670,600,30,30);
    ellipse(730,600,30,30);
    ellipse(800,650,30,30);
    fill(0,215,0);
    ellipse(900,700,30,30);
    ellipse(1000,700,30,30);
    ellipse(1100,750,30,30);
    ellipse(1100,600,30,30);
    fill(0,0,215);
    ellipse(1080,700,30,30);
    ellipse(1140,500,30,30);
    ellipse(1170,400,30,30);
    ellipse(580,300,30,30);
    fill(0,180,180);
    ellipse(850,400,30,30);
    ellipse(900,500,30,30);
    ellipse(800,600,30,30);
    ellipse(950,550,30,30);
    fill(180,0,180);
    ellipse(1110,550,30,30);
    ellipse(1110,450,30,30);
    ellipse(800,500,30,30);
    ellipse(950,450,30,30);
    ellipse(1000,450,30,30);
    
    fill(0,0,0);
    textSize(23);
    text('Display info when hovering',1715,350);
    rect(1725,400,150,100);
    if (map_setting == true){
      fill(0,200,150);
      rect(1725,400,75,100);
      fill(255,255,255);
      textSize(30);
      text('On',1750,470);
    } else{
      fill(200,10,0);
      rect(1800,400,75,100);
      fill(255,255,255);
      textSize(30);
      text('Off',1825,470);
    }
    
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
    
    fill(255,255,255);
    stroke(0,0,0);
    rect(400,200,1000,500);
    fill(0,0,0);
    textSize(30);
    text('57 degrees --',205,670);
    text('58 degrees --',205,520);
    text('59 degrees --',205,370);
    text('60 degrees --',205,220);
    text('|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |',400,720);
    text('1990        2000        2010        2020        2030        2040        2050        2060',400,750);
    fill(255,100,0);
    
    for(i = 0; i < 13; i ++){
      if (graph_color){
        if ((i == 0 && mouseX > 400 && mouseX < 435 && mouseY <= 700) || (i == 1 && mouseX > 440 && mouseX < 480 && mouseY <= 700)|| (i == 2 && mouseX > 480 && mouseX < 520 && mouseY <= 700)|| (i == 3 && mouseX > 520 && mouseX < 560 && mouseY <= 700)|| (i == 4 && mouseX > 560 && mouseX < 600 && mouseY <= 700)|| (i == 5 && mouseX > 600 && mouseX < 640 && mouseY <= 700)|| (i == 6 && mouseX > 640 && mouseX < 680 && mouseY <= 700)|| (i == 7 && mouseX > 680 && mouseX < 720 && mouseY <= 700)|| (i == 8 && mouseX > 720 && mouseX < 760 && mouseY <= 700)|| (i == 9 && mouseX > 760 && mouseX < 770 && mouseY <= 700)|| (i == 10 && mouseX > 770 && mouseX < 780 && mouseY <= 700)|| (i == 11 && mouseX > 780 && mouseX < 800 && mouseY <= 700)|| (i == 12 && mouseX > 800 && mouseX < 820 && mouseY <= 700)|| (i == 13 && mouseX > 820 && mouseX < 840 && mouseY <= 700)){
          fill(225,200,0);
        } else {
          fill(255,100,0);
        }
      }
      rect(400+(35*i),700,30,(-100*(temp_over_time[i]-57)));
    }
    
    for(i = 0; i < 15; i ++){
      if (graph_color){
        if ((i == 0 && mouseX > 840 && mouseX < 870 && mouseY <= 700) || (i == 1 && mouseX > 870 && mouseX < 900 && mouseY <= 700)|| (i == 2 && mouseX > 900 && mouseX < 930 && mouseY <= 700)|| (i == 3 && mouseX > 930 && mouseX < 960 && mouseY <= 700)|| (i == 4 && mouseX > 960 && mouseX < 990 && mouseY <= 700)|| (i == 5 && mouseX > 990 && mouseX < 1020 && mouseY <= 700)|| (i == 6 && mouseX > 1020 && mouseX < 1050 && mouseY <= 700)|| (i == 7 && mouseX > 1050 && mouseX < 1080 && mouseY <= 700)|| (i == 8 && mouseX > 1080 && mouseX < 1210 && mouseY <= 700)|| (i == 9 && mouseX > 1210 && mouseX < 1240 && mouseY <= 700)|| (i == 10 && mouseX > 1240 && mouseX < 1270 && mouseY <= 700)|| (i == 11 && mouseX > 1270 && mouseX < 1300 && mouseY <= 700)|| (i == 12 && mouseX > 1300 && mouseX < 1330 && mouseY <= 700)|| (i == 13 && mouseX > 1330 && mouseX < 1360 && mouseY <= 700)|| (i == 14 && mouseX > 1360 && mouseX < 1390 && mouseY <= 700)|| (i == 15 && mouseX > 1390 && mouseX < 1420 && mouseY <= 700)){
          fill(225,200,0);
        } else {
          fill(255,100,0);
        }
      }
      rect(855+(35*i),700,30,(-100*((i*0.13)+59.11-57)));
    }
    
    fill(0,0,200);
    
    var tempyear = temp_over_time[12];
    
    var i = 0;
    
    print(graph_setting);
    
    if (graph_setting){
      
      if (mouseX > 400 && mouseX < 435 && mouseY <= 700){
        details = 'Year: 1992       Average global temperature: '+ temp_over_time[0];
        text(details,410,300);
      } else if (mouseX > 440 && mouseX < 480 && mouseY <= 700){
        details = 'Year: 1994       Average global temperature: '+ temp_over_time[1];
        text(details,410,300);
      } else if (mouseX > 480 && mouseX < 520 && mouseY <= 700){
        details = 'Year: 1996       Average global temperature: '+ temp_over_time[2];
        text(details,410,300);
      } else if (mouseX > 520 && mouseX < 560 && mouseY <= 700){
        details = 'Year: 1998       Average global temperature: '+ temp_over_time[3];
        text(details,410,300);
      } else if (mouseX > 560 && mouseX < 600 && mouseY <= 700){
        details = 'Year: 2000       Average global temperature: '+ temp_over_time[4];
        text(details,410,300);
      } else if (mouseX > 600 && mouseX < 640 && mouseY <= 700){
        details = 'Year: 2002       Average global temperature: '+ temp_over_time[5];
        text(details,410,300);
      } else if (mouseX > 640 && mouseX < 680 && mouseY <= 700){
        details = 'Year: 2004       Average global temperature: '+ temp_over_time[6];
        text(details,410,300);
      } else if (mouseX > 680 && mouseX < 720 && mouseY <= 700){
        details = 'Year: 2007       Average global temperature: '+ temp_over_time[7];
        text(details,410,300);
      } else if (mouseX > 720 && mouseX < 760 && mouseY <= 700){
        details = 'Year: 2010       Average global temperature: '+ temp_over_time[8];
        text(details,410,300);
      } else if (mouseX > 760 && mouseX < 800 && mouseY <= 700){
        details = 'Year: 2013       Average global temperature: '+ temp_over_time[9];
        text(details,410,300);
      } else if (mouseX > 800 && mouseX < 840 && mouseY <= 700){
        details = 'Year: 2016       Average global temperature: '+ temp_over_time[10];
        text(details,410,300);
      } else if (mouseX > 840 && mouseX < 880 && mouseY <= 700){
        details = 'Year: 2020       Average global temperature: '+ temp_over_time[11];
        text(details,410,300);
      } else if (mouseX > 880 && mouseX < 920 && mouseY <= 700){
        details = 'Year: 2024       Average global temperature: '+ temp_over_time[12];
        text(details,410,300);
      } else if (mouseX > 920 && mouseX < 960 && mouseY <= 700){
        i = 1;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2027       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 960 && mouseX < 1000 && mouseY <= 700){
        i = 2;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2031       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1000 && mouseX < 1040 && mouseY <= 700){
        i = 3;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2035       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1040 && mouseX < 1080 && mouseY <= 700){
        i = 4;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2039       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1080 && mouseX < 1120 && mouseY <= 700){
        i = 5;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2041       Average global temperature: ' + tempyear;
        text(details,410,300);
      } else if (mouseX > 1120 && mouseX < 1160 && mouseY <= 700){
        i = 6;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2044       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1160 && mouseX < 1200 && mouseY <= 700){
        i = 7;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2047       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1200 && mouseX < 1240 && mouseY <= 700){
        i = 8;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2050       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1240 && mouseX < 1280 && mouseY <= 700){
        i = 9;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2052       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1280 && mouseX < 1320 && mouseY <= 700){
        i = 10;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2055       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1320 && mouseX < 1360 && mouseY <= 700){
        i = 11;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2057       Average global temperature: '+ tempyear;
        text(details,410,300);
      } else if (mouseX > 1360 && mouseX < 1400 && mouseY <= 700){
        i = 12;
        tempyear = temp_over_time[12] + (0.03*i);
        details = 'Year: 2060       Average global temperature: '+ tempyear;
        text(details,410,300);
      }
    }
    
    print(tempyear);
    
    textSize(30);
    text('Display values when hovering',1600,550);
    rect(1600,600,400,100);
    if (graph_setting == true){
      fill(0,200,150);
      rect(1600,600,200,100);
      fill(255,255,255);
      textSize(60);
      text('On',1650,670);
    } else{
      fill(200,10,0);
      rect(1800,600,200,100);
      fill(255,255,255);
      textSize(60);
      text('Off',1850,670);
    }
    
    fill(0,0,200);
    textSize(30);
    text('Change color when hovering',1600,350);
    rect(1600,400,400,100);
    if (graph_color == true){
      fill(0,200,150);
      rect(1600,400,200,100);
      fill(255,255,255);
      textSize(60);
      text('On',1650,470);
    } else{
      fill(200,10,0);
      rect(1800,400,200,100);
      fill(255,255,255);
      textSize(60);
      text('Off',1850,470);
    }
    
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
    fill(0,0,0);
    text('Map of theoretical island', 1400,175);
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
    
    rect(200,200,1600,600);
    text('1995      2000      2005      2010      2015      2020      2025',200,850);
    
    image(fire, 50, 200, 75, 100);
    textSize(20);
    text('= 10,000 wildfires',25,350);
    
    image(drop, 50, 500, 75, 100);
    textSize(20);
    text('= 5 Extreme ',25,650);
    text('Precipitation ',25,680);
    text('Events in',25,710);
    text('United States ',25,740);
    
    if (fire_setting){
      image(fire, 200, 325, 50, 75);
      image(fire, 200, 400, 50, 75);
      image(fire, 200, 475, 50, 75);
      image(fire, 200, 550, 50, 75);
      image(fire, 200, 625, 50, 75);
      image(fire, 200, 700, 50, 75);
      image(fire, 450, 250, 50, 75);
      image(fire, 450, 325, 50, 75);
      image(fire, 450, 400, 50, 75);
      image(fire, 450, 475, 50, 75);
      image(fire, 450, 550, 50, 75);
      image(fire, 450, 625, 50, 75);
      image(fire, 450, 700, 50, 75);
      image(fire, 675, 250, 50, 75);
      image(fire, 675, 325, 50, 75);
      image(fire, 675, 400, 50, 75);
      image(fire, 675, 475, 50, 75);
      image(fire, 675, 550, 50, 75);
      image(fire, 675, 625, 50, 75);
      image(fire, 675, 700, 50, 75);
      image(fire, 885, 175, 50, 75);
      image(fire, 885, 250, 50, 75);
      image(fire, 885, 325, 50, 75);
      image(fire, 885, 400, 50, 75);
      image(fire, 885, 475, 50, 75);
      image(fire, 885, 550, 50, 75);
      image(fire, 885, 625, 50, 75);
      image(fire, 885, 700, 50, 75);
      image(fire, 885, 175, 50, 75);
      image(fire, 1150, 175, 50, 75);
      image(fire, 1150, 250, 50, 75);
      image(fire, 1150, 325, 50, 75);
      image(fire, 1150, 400, 50, 75);
      image(fire, 1150, 475, 50, 75);
      image(fire, 1150, 550, 50, 75);
      image(fire, 1150, 625, 50, 75);
      image(fire, 1150, 700, 50, 75);
      image(fire, 1350, 175, 50, 75);
      image(fire, 1350, 250, 50, 75);
      image(fire, 1350, 325, 50, 75);
      image(fire, 1350, 400, 50, 75);
      image(fire, 1350, 475, 50, 75);
      image(fire, 1350, 550, 50, 75);
      image(fire, 1350, 625, 50, 75);
      image(fire, 1350, 700, 50, 75);
      image(fire, 1600, 100, 50, 75);
      image(fire, 1600, 175, 50, 75);
      image(fire, 1600, 250, 50, 75);
      image(fire, 1600, 325, 50, 75);
      image(fire, 1600, 400, 50, 75);
      image(fire, 1600, 475, 50, 75);
      image(fire, 1600, 550, 50, 75);
      image(fire, 1600, 625, 50, 75);
      image(fire, 1600, 700, 50, 75);
    }
    
    if (drop_setting){
      image(drop, 985, 325, 50, 75);
      image(drop, 985, 400, 50, 75);
      image(drop, 985, 475, 50, 75);
      image(drop, 985, 550, 50, 75);
      image(drop, 985, 625, 50, 75);
      image(drop, 985, 700, 50, 75);
      image(drop, 775, 325, 50, 75);
      image(drop, 775, 400, 50, 75);
      image(drop, 775, 475, 50, 75);
      image(drop, 775, 550, 50, 75);
      image(drop, 775, 625, 50, 75);
      image(drop, 775, 700, 50, 75);
      image(drop, 1250, 250, 50, 75);
      image(drop, 1250, 325, 50, 75);
      image(drop, 1250, 400, 50, 75);
      image(drop, 1250, 475, 50, 75);
      image(drop, 1250, 550, 50, 75);
      image(drop, 1250, 625, 50, 75);
      image(drop, 1250, 700, 50, 75);
      image(drop, 300, 475, 50, 75);
      image(drop, 300, 550, 50, 75);
      image(drop, 300, 625, 50, 75);
      image(drop, 300, 700, 50, 75);
      image(drop, 1700, 175, 50, 75);
      image(drop, 1700, 250, 50, 75);
      image(drop, 1700, 325, 50, 75);
      image(drop, 1700, 400, 50, 75);
      image(drop, 1700, 475, 50, 75);
      image(drop, 1700, 550, 50, 75);
      image(drop, 1700, 625, 50, 75);
      image(drop, 1700, 700, 50, 75);
      image(drop, 550, 400, 50, 75);
      image(drop, 550, 475, 50, 75);
      image(drop, 550, 550, 50, 75);
      image(drop, 550, 625, 50, 75);
      image(drop, 550, 700, 50, 75);
      image(drop, 1450, 250, 50, 75);
      image(drop, 1450, 325, 50, 75);
      image(drop, 1450, 400, 50, 75);
      image(drop, 1450, 475, 50, 75);
      image(drop, 1450, 550, 50, 75);
      image(drop, 1450, 625, 50, 75);
      image(drop, 1450, 700, 50, 75);
    }
    
    textSize(23);
    text('Display drop icons',1815,350);
    rect(1825,400,150,100);
    if (drop_setting == true){
      fill(0,200,150);
      rect(1825,400,75,100);
      fill(255,255,255);
      textSize(30);
      text('On',1850,470);
    } else{
      fill(200,10,0);
      rect(1900,400,75,100);
      fill(255,255,255);
      textSize(30);
      text('Off',1925,470);
    }
    
    fill(0,0,0);
    textSize(23);
    text('Display fire icons',1815,550);
    rect(1825,600,150,100);
    if (fire_setting == true){
      fill(0,200,150);
      rect(1825,600,75,100);
      fill(255,255,255);
      textSize(30);
      text('On',1850,670);
    } else{
      fill(200,10,0);
      rect(1900,600,75,100);
      fill(255,255,255);
      textSize(30);
      text('Off',1925,670);
    }
    
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
    if (mouseX >= 1725 && mouseX <= 1875 && mouseY >= 400 && mouseY <= 500){
      if (map_setting){
        map_setting = false;
      } else {
        map_setting = true;
      }
    }
  } else if (screen_to_display == 'interactive graph'){
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'main menu';
    }
    if (mouseX >= 1750 && mouseX <= 1950 && mouseY >= 50 && mouseY <= 150){
      screen_to_display = 'climate change simulator';
    }
    if (mouseX >= 1600 && mouseX <= 2000 && mouseY >= 600 && mouseY <= 700){
      if (graph_setting){
        graph_setting = false;
      } else {
        graph_setting = true;
      }
    }
    if (mouseX >= 1600 && mouseX <= 2000 && mouseY >= 400 && mouseY <= 500){
      if (graph_color){
        graph_color = false;
      } else {
        graph_color = true;
      }
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
    if (mouseX >= 1825 && mouseX <= 1975 && mouseY >= 600 && mouseY <= 700){
      if (fire_setting){
        fire_setting = false;
      } else {
        fire_setting = true;
      }
    }
    if (mouseX >= 1825 && mouseX <= 1975 && mouseY >= 400 && mouseY <= 500){
      if (drop_setting){
        drop_setting = false;
      } else {
        drop_setting = true;
      }
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
