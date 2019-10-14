/**
 * Descobre o menor preço de uma lista
 */
function buscaMenor(lista) {
  let menor = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] < lista[menor]) {
      menor = i;
    }
  }

  console.log("A menor posição é", menor);
  console.log("O valor do menor é", lista[menor]);
}

const lista = [22500, 12700, 69890, 5000, 45270, 10001, 9999];
buscaMenor(lista);
