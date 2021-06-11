const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//declare global variables
var engine,world;
var pencil,yp,rp,bp,gp;
var bgImage;
var windowTime;
var window1=wi;
var wi="Images/w1.png";

function preload() {
  
  getWindowTime();
  bgImage=loadImage("Images/bg.png");
  wi=loadImage("Images/w1.png");

  if(hour>=5 && hour<=20){
    wi=loadImage("Images/w1.png");

}
else
{
    wi=loadImage("Images/w2.png");
}
  
}

function setup() {

  window1=createSprite(130,400,100,100);
  window1.addImage("window",wi);
  window1.scale=0.5;

  //create a canvas
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  
  //Create pencil for sketches
 pencil= new Pencil(60,50,40,90);

  //Create Window
 //window= new Window(80,50,50,50);

  
 // window1=addImage(wi);
 
}

function draw() {
  //update engine
  Engine.update(engine);
//background img
  background(bgImage); 
  

 //display pencil
  pencil.display();
  //display window
  window1.display();

  move();
  
  back();


  textSize(20);
  fill("orange");
  text("Press space to move pencil, Press d to draw and Press enter to place pencil back",300,30);
  drawSprites();
}



function move(){
  if(keyCode === 32){
    Matter.Body.setPosition(pencil.body, {x: mouseX , y: mouseY});
  }
}


function back(){
  if(keyCode === 13){
    Matter.Body.setPosition(pencil.body, {x:40 , y: 90});
  }
}


async function getWindowTime()
{var response= await fetch("http://worldclockapi.com/api/json/est/now");
var responseJSON=await response.json();

var dateTime=responseJSON.currentDateTime;
var hour=dateTime.slice(11,13);

if(hour>=5 && hour<=20){
    wi=loadImage("Images/w1.png");

}
else
{
    wi=loadImage("Images/w2.png");
}
windowTime=loadImage(wi);
console.log(windowTime);
}
