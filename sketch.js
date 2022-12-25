var hunter , hunter_image;
var bg , bg_image;
var cage , cage_image;
var lion , lion_image;


function preload() {
  hunter_image = loadImage("assets/hunter1.png");
  bg_image = loadImage("assets/jungle.1.jpg");
  cage_image = loadImage("assets/cage.png");
  lion_image = loadImage("assets/lion2.png");
}
function setup() {
  createCanvas(windowWidth , windowHeight);

  hunter = createSprite(1352 , 554 ,60 , 70);
  hunter.addImage(hunter_image)
  hunter.scale = 0.8;

  lion = createSprite(723 , 560 , 180 , 180);
  lion.addImage(lion_image);
  

  cage = createSprite(720 , 105 , 200 , 200);
  cage.addImage(cage_image);
  cage.scale = 0.8;

}

function draw() {
  background(0);  
  image(bg_image , 0 , 0 , windowWidth , windowHeight)


  if(keyDown("DOWN_ARROW")){
    cage.y = cage.y+10;

  }

  if(keyDown("UP_ARROW")){
    cage.y = cage.y-10;
  }

  if(keyDown("LEFT_ARROW")){
    cage.x = cage.x-10;
  }

  if(keyDown("RIGHT_ARROW")){
    cage.x = cage.x+10;
  }

  text(" x "+World.mouseX +" "+" y "+World.mouseY,World.mouseX,World.mouseY)
  drawSprites();
}