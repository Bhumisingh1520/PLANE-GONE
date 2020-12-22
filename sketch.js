PLAY=1;
END=0;
var gameState=PLAY
var mode;
var ground,groundImage;
var plane1,planeImage;
var tokenGroup, token, tokenImage;
var score=0;



function preload(){
  
  groundImage=loadImage("ground.png");  
  planeImage = loadImage("plane.png")
  obstacleImage = loadImage ("obstacle.png")
  obstacleImage1 = loadImage ("obstacle2.png")
  tokenImage = loadImage("token.png");}


function setup() {
  
  
  mode=1;
  
    ground = createSprite(600, 300, 900, 20);
    ground.scale = 2;
    ground.addAnimation("background.png", groundImage);
    ground.x = ground.width / 2; 
  
  plane1 = createSprite(50,200,10,12) 
  plane1.addImage("plane.png",planeImage);
  
  tokenGroup = new Group();  }

function draw() {
  background("black");
  
  if(gameState===PLAY){
  if (ground.x < 0) {
  ground.x = ground.width / 2;}
    
   
 
  if(keyDown("space")){
     ground.velocityX = -(2 + 3* score/5);
     plane1.velocityY=3;
     mode=0;
     Spawntoken();}
  
  if(keyDown("up_arrow")){
    plane1.velocityY=-2   }
    
    if (plane1.isTouching(tokenGroup)) {
            score = score + 2;
    // score = score + Math.round(getFrameRate()/60);
     tokenGroup.destroyEach(); 
   }        }
  
  if(plane1.y>400  ||plane1.y<0) {
   ground.destroy();  
   plane1.destroy();
   tokenGroup.destroyEach();
    gameState=END;}     
  
  plane1.depth = 7;
  tokenGroup.depth =7 ;
  
 plane1.setCollider("circle", 1, 0, 30);
 //plane1.debug = true;
        
 
 
   
  drawSprites();                                     
    if(gameState===END){
    stroke("red");
    fill("yellow");
    strokeWeight(4);
    textSize(30);
    text ("GAMEOVER",100,200);  } 
 
  
  textSize(15);
  fill("white");
  stroke("purple")
  strokeWeight(3)
  text("score:" + score, 40, 30)
  
if(mode==1){
   textSize(20);
  fill("white");
  text("PRESS SPACE TO START ", 100, 200)
 
  textSize(15);
  fill("white");
  text("PRESS DOWN ARROW KEY TO MOVE UP  ", 100, 220)

 textSize(15);
  fill("white");
  text("PRESS SPACE TO MOVE DOWN  ", 100, 240)
 }
  
  }

function Spawntoken() {
          if (frameCount % 50 === 0) {
            token = createSprite(200, 0, 40, 10);
            token.y = Math.round(random(50, 550));
            token.addImage(tokenImage);
            token.scale = 0.5;
            token.velocityX = -(2+ 3* score/100);
            token.lifetime = 300;
           tokenGroup.add(token);
          }
        }


  