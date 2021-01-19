class Bob {
   constructor(x,y,width,height){
       var options = {
          isStatic:true,
          restitution: 1,
          friction: 0,
          density: 7.8,
       }
       this.body = Bodies.circle(x,y,25,options);
       World.add(world, this.body);
   }
   display(){
    push();
    ellipseMode(RADIUS);
    fill(254,0,255);
    ellipse(this.body.position.x,this.body.position.y,25,25);
    pop();

   }
};