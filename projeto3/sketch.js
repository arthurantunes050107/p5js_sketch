function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white")
  fill("black"); 
  textSize(64);
  textAlign(CENTER, CENTER);
 
  if(mousex < 50) {
  let palavra = "Caminhante";
  text(palavra, 200, 200); 
  
}