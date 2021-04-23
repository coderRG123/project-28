class Player{
    constructor(x,y){
    var options = {
    'restitution':2,          
}
this.body = Bodies.circle(x, y, 10);
this.image=loadImage("paper.png");
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("white");
    strokeWeight(3);
    image(this.image, 0, 0, 30, 30);
    pop();
  }

}