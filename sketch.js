var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var s1SpriteSprite,s2,s3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	
	
	s1Sprite=createSprite(width/2,665,300,15);
	s1Sprite.shapeColor="Red";

	s2Sprite=createSprite(255,620,10,100);
	s2Sprite.shapeColor="Red";
	
	s3Sprite=createSprite(545,620,10,100);
	s3Sprite.shapeColor="Red";
	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
     Engine.run(engine);
	
	 s1=Bodies.rectangle(width/2, 655, 300, 10 , {restitution:0,isStatic:true} );
	 s1=Bodies.rectangle(width/2, 655, 300, 10 , {isStatic:true} );
	 s1=Bodies.rectangle(width/2, 655, 300, 10 , {isStatic:true} );
    Matter.Body.setStatic(s1,true);
	 World.add(world,s1);
	 
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