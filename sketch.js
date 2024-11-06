function setup() {
  createCanvas(400, 400, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}


function draw() {
  background(100, 160, 765); //cor de fundo
  rotateY(millis()/1000); //rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(120,140); //esfera 3D
}
