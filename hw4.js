function setup() {
  createCanvas(2000,2000);
  rect(100,100,1800,750);
  fill(255,0,0);
  line(100,200,250,200);
  line(100,230,250,230);
  
  let xpos = 110;
  
  while(xpos <= 240){
    line(xpos,190,xpos,240);
    xpos = xpos + 10;
  }
  
  text('Kharkiv, Ukraine: 38.1 km',260,215);
  
  fill(0,255,0);
  line(100,300,425,300);
  line(100,330,425,330);
  
  let xpos1 = 110;
  
  while(xpos1 <= 425){
    line(xpos1,290,xpos1,340);
    xpos1 = xpos1 + 10;
  }
  
  text('Prague, Czech Republic: 65.2 km',430,315);
  
  fill(0,0,255);
  line(100,400,600,400);
  line(100,430,600,430);
  
  let xpos2 = 110;
  
  while(xpos2 <= 600){
    line(xpos2,390,xpos2,440);
    xpos2 = xpos2 + 10;
  }
  
  text('S o Paulo, Brazil: 101.1 km',620,415);
  
  fill(255,0,255);
  line(100,500,700,500);
  line(100,530,700,530);
  
  let xpos3 = 110;
  
  while(xpos3 <= 700){
    line(xpos3,490,xpos3,540);
    xpos3 = xpos3 + 10;
  }
  
  text('Santiago, Chile: 140 km',720,515);
  
  fill(0,0,0);
  line(100,600,1700,600);
  line(100,630,1700,630);
  
  let xpos4 = 110;
  
  while(xpos4 <= 1700){
    line(xpos4,590,xpos4,640);
    xpos4 = xpos4 + 10;
  }
  
  text('Santiago, Chile: 140 km',1720,615);
  
}


function draw() {

}
