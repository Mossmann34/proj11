var jax = createSprite(380,200,20,20);
var jaxIm;
var rua = createSprite(200,200,200,200);
var ruaIm;

function preload(){
  jaxIm = loadImage("Runner-1.png");
  jaxIm = loadImage("Runner-2.png");

  ruaIm = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
 
  

}

function draw() {
  background(0);
  
  rua.velocity = 3

  jax.x = World.mause.X;
  jax.setAnimation(jaxIm);
  
  rua.setAnimation(ruaIm);
  
  if (rua.y < 0){
    rua.y = rua.width/2;
  }


  drawSprites();
}
