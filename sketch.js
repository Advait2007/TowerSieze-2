const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var ball, slingShot;
var gameState = "onSling"

function preload() {
    backgroundImg = loadImage("background.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(750,240);
    box2 = new Box(870,240);
    box3 = new Box(750,240);
    box4 = new Box(870,240);
    box5 = new Box(810,240);
    box6 = new Box(810,240);
    box7 = new Box(840,200);
    box8 = new Box(780,200);
    box9 = new Box(815,160);

    box10 = new Box(720,70);
    box11 = new Box(780,70);
    box12 = new Box(750,40);

    ball = new Ball(15,15);

    flyingGround = new Ground(750,100,200,20)

    slingShot = new SlingShot(ball.body,{x: 200, y: 50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    ground.display();
    flyingGround.display();

    ball.display();
    platform.display();
    slingShot.display();    
}

function mouseDragged(){
   ball.body.position.x = mouseX;
   ball.body.position.y = mouseY;
}

function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(ball.body,{x:200 , y:50});
       slingShot.attach(ball.body);
       gameState = "onSling"
    }
}

