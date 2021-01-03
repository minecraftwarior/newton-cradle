class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB = pointB
    

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

  
    attach(body){
        this.rope.bodyA = body

    }
    display(){
       
        if(this.rope.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            strokeWeight(10);
            stroke("black")
          line(pointA.x, pointA.y,pointB.x,pointB.y)

            pop();


        }
    }
}