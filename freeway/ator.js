//Ator

let yAtor = 366;
let xAtor = 150;
let yAtor2 = 366;
let xAtor2 = 300;
let colidiu = false;
let placar = 0;
let placar2 =0
  
function mostrarPlacar(){
  
  if(yAtor < 15){
  placar += 1;
  voltarAtorParaPosicaoInicial();
  somPontos.play();
    
  }
  
  textSize(25);
  textAlign(CENTER);
  fill(255,240,60)
  text(placar,160,30);
  
}

function mostrarPlacar2(){

    if(yAtor2 < 15){
  placar2 += 1;
  voltarAtorParaPosicaoInicial2();
  somPontos.play();
    
  }
  
  textSize(25);
  textAlign(CENTER);
  fill(255,240,60)
  text(placar2,300,30);
}

function verificaColisao(){
  
 for(let i=0; i < imagensCarros.length; i++){
 colidiu =  collideRectCircle (xCarros[i], yCarros[i],  comprimentoCarros[i], altura, xAtor, yAtor,15);
 if(colidiu){
  console.log("colidiu");
  voltarAtorParaPosicaoInicial();
  somColidiu.play();
   
  if(placar > 0)
  placar -= 1;
 
  }  
 } 
 
  for(let i=0; i < imagensCarros.length; i++){
 colidiu =  collideRectCircle (xCarros[i], yCarros[i],  comprimentoCarros[i], altura, xAtor2, yAtor2,15);
 if(colidiu){
  console.log("colidiu");
  voltarAtorParaPosicaoInicial2();
  somColidiu.play();
   
  if(placar2 > 0)
  placar2 -= 1;
 
  }  
 } 
  
  
}

function voltarAtorParaPosicaoInicial(){

yAtor = 366
  
} 

function voltarAtorParaPosicaoInicial2(){

yAtor2 = 366
  
} 

function mostraAutor() {

  image(imagemDoAtor,xAtor,yAtor,30,30);
  image(imagemDoAtor2,xAtor2,yAtor2,30,30);
  
}
 

function movimentaAutor(){

if(keyIsDown(87)){
  if(yAtor > 5)
  yAtor -= 5;
}


if(keyIsDown(83)){
  if(yAtor < 365)
  yAtor += 5;
}
  
if(keyIsDown(UP_ARROW)){
  if(yAtor2 > 5)
  yAtor2 -= 5;
}


if(keyIsDown(DOWN_ARROW)){
  if(yAtor2 < 365)
  yAtor2 += 5;
}
  
}



function pontuacao(){
  if(placar > 9){
    background(255);
    textSize(32);
    textAlign(CENTER);
    fill('black');
    text('jogador 1 venceu', 250, 200);
    frameRate(0);
  }
  if(placar2 > 9){
    background(255);
    textSize(32);
    textAlign(CENTER);
    fill('black');
    text('jogador 2 venceu', 250, 200);
    frameRate(0);
  }
}
