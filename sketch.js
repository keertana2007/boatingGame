var PLAY = 1;
var END = 0;
var gameState = PLAY;


var octopusGroup, othGroup, urchinGroup, coinGroup, creGroup;
var score = 0;
var crabGroup;
var boat;
var background;
var back;

function preload() {
  boatImg = loadImage("dolphin.png");
  waterImg = loadImage("ocean.png");
  octImg = loadImage("octupus.png");
  crabImg = loadImage("crab.png");
  othImage = loadImage("oth.png");
  urchinImage=loadImage("uerchin.png")
  coinImg = loadImage("coin.png");
  gameOverImg = loadImage("gameover.png");
   creImg=loadImage("cre.png")
  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
   dol = createSprite(400, 200, 20, 20);
  dol.addImage(boatImg)
  dol.scale=0.6

  back = createSprite(1200, 400, 200, 100);
  back.addImage(waterImg)
  back.scale = 2;
  //back.x = back.width / 2;

  crabGroup =  createGroup();
  octopusGroup = createGroup();
  coinGroup = createGroup();
  othGroup = createGroup();
  urchinGroup = createGroup();
  creGroup = createGroup();
 

  score=0
}

function draw() {
  background("blue");
  //sound.play();
  score.depth = back.depth + 1;

  if (gameState === PLAY) {
     back.velocityX = -60;
  
  if (back.x < 0) {
    back.x = back.width / 2;
  }
    //making dolphin move with mouse
  dol.y = World.mouseY;
    dol.x = World.mouseX;
    if (dol.isTouching(crabGroup)||dol.isTouching(octopusGroup)||dol.isTouching(othGroup)||dol.isTouching(urchinGroup)||dol.isTouching(creGroup)) {
      gameState = END;
   
  }
    if (dol.isTouching(coinGroup)) {
      coinGroup.destroyEach();
    score = score + 1;
  }
 
  if (crabGroup.isTouching(octopusGroup)) {
    octopusGroup.destroyEach();
    
  }
    
    if (crabGroup.isTouching(othGroup)||coinGroup.isTouching(urchinGroup)) {
      othGroup.destroyEach();
      urchinGroup.destroyEach();
  }
  spawnCrab();
  spawnOctopus();
    spawnCoins();
    spawnOths();
    spawnUrch();
    spawnCre();
    
    
  }
  if (gameState === END) {
    
    //textSize(40);
    //text("Game Over", 600, 250);
    background("black");
    game = createSprite(windowWidth/2,windowHeight/2 , 20, 20);
    game.addImage(gameOverImg);
    back.velocityX = 0;
    crabGroup.setVelocityXEach(0);
    octopusGroup.setVelocityXEach(0);
    othGroup.setVelocityXEach(0);
    urchinGroup.setVelocityXEach(0);
    creGroup.setVelocityXEach(0);
   
    crabGroup.destroyEach();
    octopusGroup.destroyEach();
    urchinGroup.destroyEach();
    othGroup.destroyEach();
    creGroup.destroyEach();
    
  }
  dol.depth = back.depth + 1;
  drawSprites();
  fill("white");
  textSize(20)
  text("SCORE:" + score, 600, 30);
 

}

function spawnCrab() {
  if (frameCount % 200 === 0) {
    var crab = createSprite( windowWidth, windowHeight,10, 10);
    crab.addImage(crabImg);
    crab.y = Math.round(random(0, 275));
    crab.velocityX = -60;
    crab.scale = 0.4
    crab.lifetime = windowWidth / 10;
    crab.depth = dol.depth
    dol.depth = dol.depth + 1;
    crabGroup.add(crab);
  }
}

function spawnOctopus() {
  if (frameCount % 100 === 0) {
    var octopus= createSprite( windowWidth-5, windowHeight-5,10, 10);
    octopus.addImage(octImg);
    octopus.y = Math.round(random(30, 405));
    octopus.velocityX = -60;
    octopus.scale = 0.3
    octopus.lifetime = windowWidth / 10;
    octopus.depth = dol.depth
    dol.depth = dol.depth + 1;
    octopusGroup.add(octopus);
  }
}

function spawnCoins() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(windowWidth - 5, windowHeight - 5, 10, 10);
    coin.addImage(coinImg);
    coin.y = Math.round(random(40, 500));
    coin.velocityX = -60;
    coin.lifetime = windowWidth / 10;
    coin.depth = dol.depth;
    dol.depth = dol.depth + 1;
    coinGroup.add(coin);
  }
}

function spawnOths() {
  if (frameCount % 150 === 0) {
    var oth= createSprite( windowWidth-5, windowHeight-5,10, 10);
    oth.addImage(othImage);
    oth.y = Math.round(random(70, 300));
    oth.velocityX = -30;
    oth.scale = 1.3;
    oth.lifetime = windowWidth / 10;
    oth.depth = dol.depth
    dol.depth = dol.depth + 1;
    othGroup.add(oth);
  }
}

function spawnUrch() {
  if (frameCount % 170 === 0) {
    var urch= createSprite( windowWidth-5, windowHeight-5,10, 10);
    urch.addImage(urchinImage);
     urch.y = Math.round(random(45, 400));
    urch.velocityX = -60;
    urch.scale = 0.6
    urch.lifetime = windowWidth / 10;
    urch.depth = dol.depth
    urch.depth = dol.depth + 1;
    urchinGroup.add(urch);
  }
}
function spawnCre() {
  if (frameCount % 130 === 0) {
    var cre= createSprite( windowWidth-5, windowHeight-5,10, 10);
    cre.addImage(creImg);
    cre.y = Math.round(random(180, 600));
    cre.velocityX = -60;
    cre.scale = 0.3;
    cre.lifetime = windowWidth / 10;
    cre.depth = dol.depth
    cre.depth = dol.depth + 1;
    creGroup.add(cre);
  }
}

