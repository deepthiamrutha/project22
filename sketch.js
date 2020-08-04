var h_img, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	h_img=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(h_img)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	/*box1 = createSprite(350,660,200,20);
	box1.shapeColor=("red");

	box2 = createSprite(450,620,20,100);
	box2.shapeColor=("red");

	box3 = createSprite(250,620,20,100);
	box3.shapeColor=("red");*/

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:-1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	/*box1 = Bodies.rectangle(350,660,200,20,{isStatic:true});
	box1.shapeColor=color("red");
	World.add(world,box1);

	box2 = Bodies.rectangle(550,660,20,100,{isStatic:true});
	box2.shapeColor=color("red");
	World.add(world,box1);

	box3 = Bodies.rectangle(550,660,20,200,{isStatic:true});
	box3.shapeColor=color("red");
	World.add(world,box1);


	console.log(box1)*/

}


function draw() {


	rectMode(CENTER);
  	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 }
}



