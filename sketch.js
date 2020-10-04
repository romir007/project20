var car_red,car_yellow,wall
var speed,weight
var line



function setup() {
  createCanvas(400,400);
  
speed=45;


wight=random(400,1500);
car_red=createSprite(50,130,50,20);
car_red.velocityX=60;
car_yellow=createSprite(50,250,50,20);
car_yellow.velocityX=50;

wall=createSprite(390,200,40,height/2);

line=createSprite(200,190,400,10)

}


function draw() {
  background(255,255,255);  
  if(car_red.isTouching(wall)){
    car_red.velocityX=0;
    car_red.shapeColor=color(225,0,0);
    
  }
  if(car_yellow.isTouching(wall)){
    car_yellow.velocityX=0;
    car_yellow.shapeColor=color(0,255,0);
    
  }
  
 


  drawSprites();

}
