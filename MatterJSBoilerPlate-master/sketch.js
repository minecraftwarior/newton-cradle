const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, ground
var cb1, cb2, cb3, cb4, cb5, cb6
var c1, c2, c3, c4, c5, c6

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 100, 400, 50)
	ground = new Roof(400, 700, 800, 50)

	cb3 = new Cradleball(400, 50, 30, 30)
	cb2 = new Cradleball(430, 50, 30, 30)
	cb1 = new Cradleball(370, 150, 30, 30)
	cb4 = new Cradleball(460, 50, 30, 30)
	cb5 = new Cradleball(340, 50, 30, 30)
	cb6 = new Cradleball(310, 50, 30, 30)
	cb7 = new Cradleball(280, 50, 30, 30)



	c1 = new Chain(cb1, {x:250, y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  roof.display();
  cb1.display();
  cb2.display();
  cb3.display();
  cb4.display();
  cb5.display();
  cb6.display();
  cb7.display();


 // c1.display();

  
  drawSprites();
 
}



