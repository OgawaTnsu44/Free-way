//Ator
let xAtor=85;
let yAtor=370;
let colisao=false;
let meusPontos=0;

function monstraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover(yAtor)){
      yAtor +=3;
    }
  }
}

function verificarColisao (){
  for(let i=0;i<imagemCarros.length;i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros, xAtor, yAtor, 15);
    if(colisao){
      voltaAtor();
      somDaColisao.play();
      if(pontosMaiorQueZero(meusPontos)){
              meusPontos-=1;
      }
    }
  }
}

function voltaAtor(){
  yAtor=370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,0,205));
  text(meusPontos, width/5, 27);
}

function marcaPontos (){
  if(yAtor<15){
    meusPontos +=1;
    voltaAtor();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero (meusPontos){
  return meusPontos>0;
}

function podeSeMover (yAtor){
  return yAtor <370;
}