class Ball{
  constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,20, options);
      this.image=loadImage("pentagon.png")
      this.image.scale=0.5
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = 20;
      
      
     
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //rect(this.x,this.y,6,20)
      image(this.image,0, 0,this.width,this.height);
      pop();
    }
  }