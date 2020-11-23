var bullets , speed, weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  speed= random(223,321);
  weight= random(30,52);
  thickness= random(22,83);
  bullets= createSprite(50,200,50,50);
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullets.velocityX= speed;
}

function draw() {
  background("black"); 
if(hasCollided(bullets, wall)){
  bullets.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    bullets.shapeColor=color(225,0,0);
  }
  if(damage<10){
    bullets.shapeColor=color(0,225,0);
  }
  
}
  drawSprites();
}
function hasCollided(lbullets, lwall){
  bulletsRightEdge= lbullets.x+lbullets.width;
  wallLeftEdge=lwall.x;
  if(bulletsRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
