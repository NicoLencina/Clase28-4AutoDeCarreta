//accedo al boton, cuando haga click el usuario y ordeno que realice:
buttonOk.addEventListener("click", () => {
  //Que evalue el valor que ingreso en cada  imput y lo guarde en las variables Tiempo
  let tiempo1: number = Number(v1.value);
  let tiempo2: number = Number(v2.value);
  let tiempo3: number = Number(v3.value);
  let tiempo4: number = Number(v4.value);
  //Sumo tiempo total de todas las vueltas y saco el T.Total y lo mismo hago con promedio de vuelta
  let tiempoTotal: number = tiempo1 + tiempo2 + tiempo3 + tiempo4;
  let promedioTotal: number = tiempoTotal / 4;
  //Imprimo los resultados en pantalla
  console.log("El tiempo Total es:", tiempoTotal, " Segundos");
  console.log("Promedio de vuelta:", promedioTotal, "V/s");
});
