
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//ground
box1= new Ground(400, 280, 800, 20);

//bin
box2=new Box(650, 265, 150, 5);
box3=new Box(580, 240, 5, 50);
box4=new Box(715, 240, 5, 50);

//player
box5=new Player(190, 100);

l=new launch (box5.body,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  //box2.display();
 // box3.display();
  box4.display();
  box5.display();
l.display();


  
  drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(box5.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    l.fly();
}




