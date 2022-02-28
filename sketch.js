var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW))
  {
    background("blue")
  }
  if(keyIsDown(LEFT_ARROW))
  {
   background("red")
  }
  if(keyIsDown(UP_ARROW))
  {
    background("yellow")
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background("green")
  }
drawSprites()
}




