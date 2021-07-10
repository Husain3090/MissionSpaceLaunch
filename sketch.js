var iss,issI
var spaceship,s1,s2,s3,s4
var space
var hasDocked=false
function preload(){
issI = loadImage("Docking-undocking/iss.png")
s1 = loadImage("Docking-undocking/spacecraft1.png")
s2 = loadImage("Docking-undocking/spacecraft2.png")
s3 = loadImage("Docking-undocking/spacecraft3.png")
s4 = loadImage("Docking-undocking/spacecraft4.png")
space = loadImage("Docking-undocking/spacebg.jpg")
}
function setup() {
  createCanvas(800,400);
  spaceship=createSprite(400, 400, 50, 50);
spaceship.addImage(s1)
spaceship.scale=0.15
iss=createSprite(400, 200, 50, 50);
iss.addImage(issI)
}

function draw() {
  background(space);  

  if(!hasDocked){
    spaceship.x=spaceship.x+random(-1,1)
    

    if(keyDown("UP_ARROW")){
      spaceship.y=spaceship.y-2
      spaceship.addImage(s2)
    }

    if(keyDown("LEFT_ARROW")){
      spaceship.x=spaceship.x-2
      spaceship.addImage(s3)
    }

    if(keyDown("RIGHT_ARROW")){
      spaceship.x=spaceship.x+2
      spaceship.addImage(s4)
    }
  }

    if(spaceship.y<=(iss.y+70)&&spaceship.x<=iss.x-10){
      hasDocked=true
      fill("red")
      textSize(30)
      text("DOCKING SUCCESSFUL",200,400)
    }
  drawSprites();
}