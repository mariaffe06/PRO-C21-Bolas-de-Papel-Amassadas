const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball;
var ground;
var left;
var right;

function setup() {

	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
	  isStatic: false,
	  restitution: 0.3,
	  friction: 0,
	  density: 1.2
	}

  ball = Bodies.circle(300,50,50,ball_options);
  World.add(world,ball);

  var ground_options = {
    isStatic : true
  }

  ground = new Ground(width/2,590,width,20);
  left = new Ground(1100,520,20,120);
  right = new Ground(900,520,20,120);


  rectMode(CENTER);
	Engine.run(engine); 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    ball.velocityY = -15
    ball.velocityX = 10
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y,100);

  ground.show();
  left.show();
  right.show();

  drawSprites();
}



