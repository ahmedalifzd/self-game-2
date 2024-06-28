var char1 , char2 
var ball
var volleyball
var character1 , character2
var bot , top1   , left , right
var net
var score1 = 0
var score2 = 0
var PLAY = 1
var END = 0
var gamestate = PLAY

function preload(){
  character1 = loadImage("char1.png")
  character2 = loadImage("char2.png")
  volleyball = loadImage("ball.png")
}


function setup() {
  createCanvas(1500,750);

 


  char1 = createSprite(200,650,20,20)
  char1.addImage(character1)
  char1.scale = .35

  char2 = createSprite(1200,650,20,20)
  char2.addImage(character2)
  char2.scale = .35

  ball = createSprite(350,75,10,10)
  ball.addImage(volleyball)
  ball.scale = .05

  net = createSprite(750,550,10,300)
  
  bot = createSprite(750,700,1500,50)
  top1 = createSprite(750,50,1500,10)
  right = createSprite(1500,350,10,1500)
  left = createSprite(5,350,10,1500)
  
  

  
  createEdgeSprites() 
}


function draw() {
  background(211, 211, 211);
  
  if (gamestate === PLAY){

    ball.velocityY+=.35
    ball.bounceOff(bot)
    ball.bounceOff(left)
    ball.bounceOff(right)
    ball.bounceOff(top1)
    ball.bounceOff(net)
    ball.bounceOff(char1)
    
  } 
  
  //if(ball.bounceOff(char1)){
   // ball.velocityX=3
  //}

    
  if ( keyIsDown(LEFT_ARROW)){
    char1.x-=15
  }
  if ( keyIsDown(RIGHT_ARROW)){
    char1.x+=15
  }
  
  
  
  
  

  drawSprites();
}