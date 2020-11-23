
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var ground;
var dustbinbottom,dustbinleft,dustbinright;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  paper = new Paper();
  ground = new Ground(400,650,800,10);
  dustbinbottom = new Dustbin(600,635,200,20);
  dustbinleft = new Dustbin(510,575,20,100);
  dustbinright = new Dustbin(690,575,20,100);


  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbinright.display();
  dustbinleft.display();
  dustbinbottom.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:180,y:-110});
  }
}