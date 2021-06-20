class SlingShot{
    constructor(bodyA, PointB){
        var options ={
            bodyA: bodyA,
            PointB: PointB,
            stiffness:0.4,
            length: 10
        }
        this.pointB = PointB
        this.sling = Constraint.create(options);
        world.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    if(this.sling.bodyA){
        var PointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,PointB.y);

    }

    }
}