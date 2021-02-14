// FUNCIONES

// busca el valor de apertura (de la propiedad OPEN) del mes (el valor de apertura de la primera posición del array)
function buscarApertura(array) {
  let res = array[0].OPEN;
  //console.log('Apertura:', res)
  return res;
}

// busca el valor de cierre (de la propiedad CLOSE) del mes (el valor de cierre de la ultima posición del array)
function buscarCierre(array) {
  let res = array[array.length - 1].CLOSE;
  //console.log('Cierre:', res)
  return res;
}

// busca el valor maximo (de la propiedad HIGH) del mes (recorre todo el array que se le pasa)
function valorMaxMes(array) {
  let res = array[0].HIGH;
  for (let i = 0; i < array.length; i++) {
    res = Math.max(res, array[i].HIGH);
  }
  //console.log('Maximo:', res);
  return res;
}

// busca el valor minimo (de la propiedad LOW)del mes (recorre todo el array que se le pasa)
function valorMinMes(array) {
  let res = array[0].LOW;
  for (let i = 0; i < array.length; i++) {
    res = Math.min(res, array[i].LOW);
  }
  //console.log('Minimo:', res);
  return res;
}

// crea un array 

function valoresAnuales(array) {
  let res = [];
  let apertura = [];
  let max = [];
  let min = [];
  let cierre = [];

  for (const key in array) {
    apertura.push(buscarApertura(array[key]));
    max.push(valorMaxMes(array[key]));
    min.push(valorMinMes(array[key]));
    cierre.push(buscarCierre(array[key]));
  }
  res.push(apertura);
  res.push(max);
  res.push(min,);
  res.push(cierre);

  return res;
}

export { valoresAnuales };