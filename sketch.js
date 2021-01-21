
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,100,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  strokeWeight(3)
  stroke(3)
  rect(365,100,450,50);
  
  drawSprites();
  bobObject1.display();
}



