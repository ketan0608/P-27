class bob {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:0.3,
          density:1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("Blue");
      ellipse(0, 0, this.radius, this.radius)
      pop();
    }
  }