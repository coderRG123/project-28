class launch {
constructor(BodyA, pointB) {
    var options= {
     bodyA:BodyA,
     pointB:pointB,
     length:50,
     stiffness:1
    }
    this.pointB=pointB
 this.launch=Constraint.create(options);
 World.add(world, this.launch);
}

 fly(){
  this.launch.bodyA=null
}

  display(){
    if(this.launch.bodyA){
      strokeWeight(3);
     line(this.launch.bodyA.position.x, this.launch.bodyA.position.y,
        this.launch.pointB.x, this.launch.pointB.y); 
     }
  }
}
