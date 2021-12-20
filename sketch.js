const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
world=engine.world;
groundoption={isStatic:true} 
ground=Bodies.rectangle(200,390,200,20,groundoption);
World.add(world,ground)
balloption={restitution:1.0}
ball=Bodies.circle(200,300,10,balloption)
World.add(world,ball)



}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  groundoption={isStatic:true} 
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);

 
}