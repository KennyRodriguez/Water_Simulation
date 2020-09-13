class Liquid {
  
  constructor()
  {
    this.xPos = 0;
    this.w = width;
    this.yPos = height/2;
    this.h = height/2;
  }
  
  contains(h)
  {
    if(h > this.yPos)
    {
      return true;
    }
  }
  
  
  
  display()
  {
    fill(15,75,255,100); 
    rect(this.xPos,this.yPos,this.w,this.h);
  }
  
}
