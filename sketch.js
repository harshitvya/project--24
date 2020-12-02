const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3, ball;
var ground;

function setup() {
    createCanvas(800, 500);

    engine = Engine.create();
    world = engine.world;

    var p = {
        isStatic: true
    }

    ball = new Ball(100, 100, 20);

    rect1 = Bodies.rectangle(600, 460, 150, 20, p);
    rect2 = Bodies.rectangle(600 + 65, 425, 20, 50, p);
    rect3 = Bodies.rectangle(600 - 65, 425, 20, 50, p);
    World.add(world, rect1);
    World.add(world, rect2);
    World.add(world, rect3);


    ground = Bodies.rectangle(400, 490, 800, 20, { isStatic: true });
    World.add(world, ground);

    Engine.run(engine);

}


function draw() {
    background(0);
    //Engine.update(engine);
    ball.display();
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 800, 20);
    rect(rect1.position.x, rect1.position.y, 150, 20);
    rect(rect2.position.x, rect2.position.y, 20, 50);
    rect(rect3.position.x, rect3.position.y, 20, 50);

    if (keyWentDown("up")) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 80, y: -80 });
    }
}