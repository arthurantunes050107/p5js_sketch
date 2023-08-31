let cor;
let  posicaohorintal; // x
let posicaovertical; // y

function setup() {
 
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255) ,random(0, 255), random (0, 255));
  posicaohorizontal = 200;
  posicaovertical = 200;
}

function draw() {
  
  fill(cor);
  circle(200, 200, 50);

}