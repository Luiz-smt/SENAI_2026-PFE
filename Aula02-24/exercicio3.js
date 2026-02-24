class Bicicleta {
  #modelo;
  #marca;
  #cor;
  #velocidadeMaxima;

  set modelo(valor) {
    this.#modelo = valor;
 }
  get modelo() {
    return this.#modelo; }


  set marca(valor) {
    this.#marca = valor;
 }
  get marca() {
    return this.#marca; }


  set cor(valor) {
    this.#cor = valor;
 }
  get cor() {
    return this.#cor; }


  set velocidadeMaxima(valor) {
    if (valor > 35) {
      console.log("Erro: A velocidade máxima não pode ser superior a 35 km/h.");
    } else {
      this.#velocidadeMaxima = valor;
    }
    }
  get velocidadeMaxima() {
    return this.#velocidadeMaxima; }
 
}
 