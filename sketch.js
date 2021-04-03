const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,rope1,roof1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,700);

    roof1 = new roof(400,250);
	engine = Engine.create();
	world = engine.world;

    bob1 = new bob(300,450);
	bob2 = new bob(350,450);
    bob3 = new bob(400,450);
	bob4 = new bob(450,450);
	bob5 = new bob(500,450);

    rope1 = new rope(bob3.body,roof1.body,0,0);
    rope2 = new rope(bob2.body,roof1.body,-50,0);
    rope3 = new rope(bob1.body,roof1.body,-100,0);
    rope4 = new rope(bob4.body,roof1.body,50,0);
    rope5 = new rope(bob5.body,roof1.body,100,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(100000);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}