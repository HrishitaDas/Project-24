class Paper{
    constructor(){
        var option = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(200,450,30,option);
        this.radius=30;
        World.add(world, this.body);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            fill("pink");
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,this.radius,this.radius);

        }

}