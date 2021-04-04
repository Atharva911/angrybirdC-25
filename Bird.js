class Bird extends Cake {
    constructor(x, y) {
      super(x,y,100,100)
      this.image=loadImage("sprites/bird.png")
    
     
    };
    display(){
      super.display();
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      
    }
    
  };
  