var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cactus1 , cactus2,cactus3, cactus4 , cactus5 , cactus6;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  cactus1 = loadImage("obstacle1.png")
  cactus2 = loadImage("obstacle2.png")
  cactus3 = loadImage("obstacle3.png")
  cactus4 = loadImage("obstacle4.png")
  cactus5 = loadImage("obstacle5.png")
  cactus6 = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("black");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   spawnClouds();
   spawnObstacles();
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds(){
  if(frameCount % 60 === 0){
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(10,120);
    cloud.addImage("cloud", cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 134;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
}
} 

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(600,165,40,10);
    obstacle.velocityX = -3;
    obstacle.scale = 0.5; 
    var rand = Math.round (random(1,6));
    switch(rand){
      case 1: obstacle.addImage(cactus1) ;
              break;
       case 2: obstacle.addImage(cactus2) ;
              break;       
       case 3: obstacle.addImage(cactus3) ;
              break;
              
      case 4: obstacle.addImage(cactus4) ;
              break;   
              
      case 5: obstacle.addImage(cactus5) ;
              break; 
              
      case 6: obstacle.addImage(cactus6) ;
              break;
              
          default:break;   
    }
    
    
    
    
    
  }
}














