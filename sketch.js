const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;

function preload(){
 // polygon_img=loadImage("polygon.png");
 // backgroundImg=loadImage("bg.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground(380,260,270,10);
  stand1 = new Stand(380,260,270,10);
  stand2 = new Stand(700,200,200,10);
 
  
  //level one
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level two
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level three
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level four
  block21 = new Block(385,115,30,40);

  //set two 
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three
  blocks9 = new Block(700,95,30,40);

  //polygon  with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  
 background("yellow")
  Engine.update(engine);
 
  
  ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15)
  fill("lightblue")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("pink")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("lightgreen")
  block19.display();
  block20.display();
 stroke(15)
 fill("grey")
  block21.display();

  stroke(15)
  fill("lightblue")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("lightgreen")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("pink")
  blocks9.display();
 
  
  text("Drag the Hexagonal Stone and Release it,to launch it the boxes",250,50)
  // imageMode(CENTER)
  //polygon = loadImage(polygon_img ,ball.position.x-50,ball.position.y-80,30,30);

  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
