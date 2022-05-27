const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var block1, block2;


function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(660,height,1330,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(1200,580,20,150,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(1340,580,20,200,plane_options);
    World.add(world,block2);
	

    //created multiple of particle bodies 
    var ball_options = {
	   isStatic: false,
	   restitution:0.5,
       friction:0,
	   density:1.2,
    }
    ball = Bodies.circle(250,10,10,ball_options);
    World.add(world,ball);


    
    //styling the bodies here
    fill("blue");
    rectMode(CENTER);
    ellipseMode(RADIUS);
	

}

function draw(){
    background("black");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1350,20);
  rect(block1.position.x,block1.position.y,20,150);
  rect(block2.position.x,block2.position.y,20,200);

  //created shape for all the paticles
  ellipse(ball.position.x,ball.position.y,20,20);

}

function keyPressed(){
if (keyCode==UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:40,y:-7})
}

}

