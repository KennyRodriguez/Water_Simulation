class Ball {
   constructor()
   {
     //Ball movement details
     this.location = createVector(Math.random() * width, height/4);
     this.velocity = createVector(0,0);
     this.acceleration = createVector(0,0);
     
     
     //Ball color
     this.red = Math.random() * 255;
     this.green = Math.random() * 255;
     this.blue = Math.random() * 255;
     this.alpha = Math.random() * 255;
     
     //Ball physical details
     this.mass =  Math.random() * (2) + 2;
 }
   
   applyForce(force){
   let result = p5.Vector.div(force,this.mass);
   this.acceleration.add(result);
   }
   
   update()
   {
     this.velocity.add(this.acceleration);
     this.location.add(this.velocity);
     this.acceleration.mult(0); //reset acceleration(so it doesn't augment
   }
  
   edges()
   {
   if(this.location.x > width){
   this.location.x = width;
   this.velocity.x *= -1;
   }
   if(this.location.x < 0){
   this.location.x = 0;
   this.velocity.x *= -1;
   }
   if(this.location.y > height){
   this.location.y = height;
   this.velocity.y *= -1;
   }
   if(this.location.y < 0){
   this.location.y = 0;
   this.location.y *= -1;
   }
   }
  
   
   display()
   {
   fill(this.red, this.green, this.blue, this.alpha);
   ellipse(this.location.x, this.location.y,this.mass * 20,this.mass * 20);
   }

}
