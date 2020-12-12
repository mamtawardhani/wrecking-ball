const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,350,50,50);
    box2 = new Box(800,300,50,100);
    box3=new Box(800,250,100,50)

    box4 = new Box(890,350,50,50);
    box5 = new Box(890,300,50,100);
    box6=new Box(890,250,50,50)

    box7 = new Box(970,350,50,50);
    box8 = new Box(970,300,50,100);
    box9=new Box(970,250,100,50)
    box10=new Box(970,200,50,50)


    ground = new Ground(600,370,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
 
    box1.display();
    box2.display();
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    ground.display();
}