function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(200,140,25,35);
 fixedRect.shapeColor="pink";
 movingRect=createSprite(300,58,25,35);
 movingRect.shapeColor="pink";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2
  )
{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="pink";
  fixedRect.shapeColor="pink";
}

  drawSprites();
}