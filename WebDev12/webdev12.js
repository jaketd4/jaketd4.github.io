var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];


function setup() {
    createCanvas(500, 500);
    background(0);

    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 1;

    // var p = new Particle(300, 50, 50);
    // particles.push(p);
    for(let i = 0;i<400;i++){
        let p = new Particle(random(width), random(height),2);
        p.restitution =1;
        p.friction=1;
        particles.push(p);
    }
    

    let floor = Bodies.rectangle(width/2,height+10,width,20,{isStatic: true});
    let ceiling = Bodies.rectangle(width/2,-10,width,20,{isStatic: true});
    let left = Bodies.rectangle(-10,height/2,20,height,{isStatic: true});
    let right = Bodies.rectangle(width +10,height/2,20,height,{isStatic: true});
    let shape = Bodies.circle(width/2,height/2,width/6,{isStatic: true});
    floor.restitution=1;
    ceiling.restitution=1;
    left.restitution=1;
    right.restitution=1;
    // shape.friction=1;
    World.add(world, [floor, left, ceiling, right,shape]);

}
function draw() {
    colorMode(RGB, 255);
    background(0);

    world.gravity.x = 0.15;
    world.gravity.y = 0.15;

    for(let p of particles){
        p.show();


    let pos = p.body.position;

    let force = createVector(mouseX - pos.x, mouseY - pos.y);
    force.setMag(0.001);

    Matter.Body.applyForce(p.body,pos, {x: force.x, y: force.y});
    }

    Engine.update(engine);
}

class Particle {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);
        this.body.restitution=1;

        World.add(world, this.body);
        this.r = r;
    }
    show(hue){
        
        colorMode(HSB, 100);
        fill(60,(Math.pow(this.body.speed,6)),100);
        // stroke(220);
        noStroke();
        var pos = this.body.position;
        push();
        translate(pos.x ,pos.y);
        circle(0,0,this.r*1.5);
        pop();
    }
}