const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var earth,earth_animation;
var moon;
function preload()
{
   bg=loadImage("universe.jpg");
   astImg=loadImage("inew.png");
   dbi1=loadImage("pics/db1.png");
  dbi2=loadImage("pics/db2.png");
  dbi3=loadImage("pics/db3.png");
  dbi4=loadImage("pics/db4.png");
  dbi5=loadImage("pics/db5.png");
   //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    gif_createImg.position(250, 50);
    moon=createSprite(800,50,25,25);
    moon.addImage("ass", astImg)
    moon.scale=0.7;
    moon.velocityX=-2;

    moon.velocityY=1;
    
            
}

function draw(){
    background(bg);
    Engine.update(engine);
  //  rotateMoon(1);
  spawndebris();
    drawSprites();
    
}
function spawndebris() {
  if(frameCount % 60 === 0) {
    var debris = createSprite(displayWidth-20,300);
    
        var rand = Math.round(random(1,5));
        debris.x=random(0,400);
         debris.velocityY=random(-3,3);
           debris.velocityX=random(-3,3);
             debris.y=random(0,400);
   switch(rand){
case 1:
  debris.addImage(dbi1);
  break;
  case 2:
  debris.addImage(dbi2);
  break;
  case 3:
  debris.addImage(dbi3);
  break;
  case 4:
  debris.addImage(dbi4);
  break;
  case 5:
  debris.addImage(dbi5);
  break;
  

   }
    debris.scale = 0.5;
    debris.lifetime = 570;
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
    
    
  }