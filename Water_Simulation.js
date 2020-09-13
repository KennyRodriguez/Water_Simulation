let balls = [];
let gravity, wind,water;

function setup() {
createCanvas(2000,1000);
water = new Liquid();
for(let i = 0; i<=5; i++)
  {
    balls[i] = new Ball();
  }
}

function draw() {
background(173,216,230);
//Physics//
force();
friction();
//Ball//
  balls.forEach(b => {
    b.update();
    b.edges();
    b.display();
  });
  
//Liquid//
water.display();

  balls.forEach(b =>{
    if(water.contains(b.location.y) == true)
    {
       let drag = b.velocity.copy();
        drag.normalize();
        const c = -0.05;
        let speed =  b.velocity.mag();
        drag.mult(c*speed*speed);
        b.applyForce(drag);
    }
    
  });
}

function force(){ 
  balls.forEach(b => {
   gravity = createVector(0,0.25);
   gravity.mult(b.mass);
   b.applyForce(gravity);
  });
 }
 
 function friction(){
   if(mouseIsPressed){
    balls.forEach(b => {
    let friction = b.velocity.copy();
    friction.normalize();
    const c = -0.01;
    friction.mult(c);
    b.applyForce(friction);
   });
   }
 }
 
 function waterPhysics()
 {
   
 }
 
 
 //Wind//
 //if(mouseIsPressed){
     // wind = createVector(0.15,0);
      //b.applyForce(wind);
     //}
  
