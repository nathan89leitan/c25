class paperball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.4
        }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        this.radius=radius
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var position=this.body.position
        imageMode(CENTER);
        fill("brown");
        image(this.image,position.x,position.y,30,30)
        }
}