let numButacas: number = Number(prompt("Ingresar la cantidad de butacas"));

let butacas: boolean[] = new Array(numButacas);

let butacasLibres: number = 0;
for (let indice: number = 0; indice < numButacas; indice++) {
  butacas[indice] = Boolean(
    prompt("¿La butaca " + (indice + 1) + " está ocupada? (vacio=No)")
  );
  if (butacas[indice] === false) {
    butacasLibres++;
  }
}

console.log("La cantidad de butacas libres es " + butacasLibres);
alert("La cantidad de butacas libres es " + butacasLibres);
