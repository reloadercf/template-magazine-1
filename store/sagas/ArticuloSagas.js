import {takeEvery, call, put} from 'redux-saga/effects';
import {obtenerArticulosPortadaFalse, putArticulosCategoria} from '../actions/ArticuloActions';
import CONSTANTES from '../constantes';

let ArticulosPortadaFalse = () =>
  fetch(`${CONSTANTES.revista}/articulos/Lista-de-articulos/`, {
    method: 'GET',
  }).then(response => response.json());

function* generadoraArticulosPortadaFalse() {
  try {
    let ArticulosPFalse = yield call(ArticulosPortadaFalse);

    console.log(ArticulosPFalse)
    yield put(obtenerArticulosPortadaFalse(ArticulosPFalse));

  } catch (error) {
    console.log(error);
  }
}


let getArticulosCategoria=(idCategoria)=> fetch(`${CONSTANTES.revista}/articulos/Lista-de-articulos/?idcategoria=${idCategoria}`,
{
  method: 'GET',
}).then(response => response.json());


function* generadoraArticulosCategoria(values) {
  try {
    let articulos= yield call(getArticulosCategoria, values.idCategoria);
    console.log(articulos)
    yield put(putArticulosCategoria(articulos.results));

  } catch (error) {
    console.log('error al obtener Articulos categoria');
  }
}


export default function* SagasArticulos() {
  yield takeEvery(CONSTANTES.GET_ARTICULOS_PORTADA_FALSE,generadoraArticulosPortadaFalse)
  yield takeEvery(CONSTANTES.GET_ARTICULOS_CATEGORIA,generadoraArticulosCategoria)
}
