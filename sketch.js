function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  monstraAtor();
  monstraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicialDoCarro();
  verificarColisao ();
  incluiPontos();
  marcaPontos ();
}
