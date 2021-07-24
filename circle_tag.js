// Shubham Parab 7/23/21 set 1, problem 1 tag

// Hi Mr. Burns!! :)

var ellipse_x = 500;

var ellipse_y = 500;


function setup() {
  createCanvas(1000,1000);
  
  fill(0,200,0);
  
  ellipse(500,500,100,100);

}
function draw() {
  
  clear();
  
  //calculates the direct distance between the center of the circles using pythagorean theorem, so calculates exact touch
  let directDistance = Math.sqrt(((mouseX - ellipse_x)*(mouseX - ellipse_x))+((mouseY - ellipse_y)*(mouseY - ellipse_y)));
  
  
 // changes color if touched
  if (directDistance <= 100){
     fill(0,0,200);
  } else {
    fill(0,200,0);
  }
  
  // changes position if touched (it works the first time byt then after that it doesnt chage position)
  if (directDistance <= 100){
    clear();
    ellipse_x = Math.random(100,900);
    ellipse_y = Math.random(100,900);
    ellipse(ellipse_x,ellipse_y,100,100);
  } else {
    ellipse(ellipse_x,ellipse_y,100,100);
  }
  
  ellipse(mouseX,mouseY,100,100);
}
