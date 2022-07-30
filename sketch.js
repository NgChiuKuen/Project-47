var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState = "start";

function preload() {
  backgroundImage = loadImage("assets/IMG-5584.PNG");
  logoIMG = loadImage("assets/IMG-5591.PNG")
  characterIMG = loadImage("assets/IMG-5592.PNG")
  steakIMG = loadImage("assets/Steak.png")
  breadIMG = loadImage("assets/Bread.png")
  appleIMG = loadImage("assets/Apple.png")
  candyIMG = loadImage("assets/Candy.png")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  logo = createSprite(windowWidth/2+ 50, windowHeight/3-50 )
  logo.addImage(logoIMG)
  logo.scale = 8

  playButton = createImg("assets/IMG-5590.PNG");
  playButton.position(windowWidth/3-250, windowHeight/3-100);
  playButton.size(1200,1200);
  playButton.mouseClicked(gameState2)

  character = createSprite(windowWidth/3-300, windowHeight-100)
  character.addImage(characterIMG)
  character.visible = false

  
}

function draw() {
  //background(backgroundImage);
  background('white');
  drawSprites();

  if(gameState === "singlePlayergameState2"){
    spawnFood()
  }
}

function gameState2(){
 playButton.hide();
 logo.visible = false;
 
 singlePlayer = createImg("assets/IMG-5589.PNG");
 singlePlayer.position(windowWidth/3-400, windowHeight/3+400);
 singlePlayer.size(1000,1000);
 singlePlayer.mouseClicked(singlePlayergameState2)

 //multiPlayer = createImg("assets/IMG-5589.PNG");
 //multiPlayer.position(windowWidth/3+400, windowHeight/3+400);
 //multiPlayer.size(1000,1000);
 
}

function singlePlayergameState2(){
  singlePlayer.hide();
  //multiPlayer.hide();

  background('white');
  character.visible = true;

  gameState = "singlePlayergameState2"
}

function spawnFood(){
  if(frameCount % 60 === 0){
    steak = createSprite(random ( windowWidth/3-100, windowWidth-100), 10)
    steak.addImage(stealMG)
    steak.velocityY = 2
    steak.lifetime = windowHeight/2 // lifetime = distance / velocity
    
    bread = createSprite(random ( windowWidth/3-100, windowWidth-100), 10)
    bread.addImage(breadIMG)
    bread.velocityY = 4
    bread.lifetime = windowHeight/4

    apple = createSprite(random ( windowWidth/3-100, windowWidth-100), 10)
    apple.addImage(appleIMG)
    apple.velocityY = 1.5
    apple.lifetime = windowHeight/1.5

    candy = createSprite(random ( windowWidth/3-100, windowWidth-100), 10)
    candy.addImage(candyIMG)
    candy.velocityY = 3
    candy.lifetime = windowHeight/3

  }
}