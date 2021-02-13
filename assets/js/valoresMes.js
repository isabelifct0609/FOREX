// IMPORTACIONES

import { ValoresObjeto } from './ValoresObjeto.js';

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

// crea los objetos con los valores de cada mes y los convierte en un array y  devuelve un array con los valores del mes
function obtenerValoresPorMes(array) {
  let valores = new ValoresObjeto(
    buscarApertura(array),
    valorMaxMes(array),
    valorMinMes(array),
    buscarCierre(array)
  )
  let res = Object.values(valores);
  return res;
}

// crea un array con los valores de cada mes

function valoresAnuales(array) {
  let res = [];
  for (const key in array) {
    res.push(obtenerValoresPorMes(array[key]));
  }
  return res;
}

export { valoresAnuales };