class Resortera{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
      this.pointB = pointB;
      this.resorte = Constraint.create(options);
      World.add(mundo, this.resorte);
    }
    
    fly(){
     this.resorte.bodyA=null;

    }


display(){
   if(this.resorte.bodyA){ var pointA = this.resorte.bodyA.position;
    var pointB = this.pointB;

    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
   }
    
}

}
