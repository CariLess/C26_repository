class Resortera{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
      this.resorte1= loadImage("sprites/resortera1.png");
      this.resorte2= loadImage("sprites/resortera2.png");
      this.resorte3 = loadImage("sprites/resortera3.png");
      this.pointB = pointB;
      this.resorte = Constraint.create(options);
      World.add(mundo, this.resorte);
    }
    
    fly(){
     this.resorte.bodyA=null;

    }


display(){
  image(this.resorte1,200,20);
  image(this.resorte2,170,20);
   if(this.resorte.bodyA){ 
    var pointA = this.resorte.bodyA.position;
    var pointB = this.pointB;
push();


    //color del resorte
   stroke()
   
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);




    pop();
   }
    
}

}
