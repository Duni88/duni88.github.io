function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

//Começo do Draw

function draw() { //Desenha o Jogo
  background(imagemDaEstrada);
  movimentaAutor();
  mostraCarro();
  movimentaCarro();
  mostraAutor();
  verificaColisao();
  mostrarPlacar(); 
  mostrarPlacar2();
  pontuacao();
}

//Fim do Draw



 