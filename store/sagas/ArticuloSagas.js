import {takeEvery, call, put} from 'redux-saga/effects';
import {obtenerArticulosPortadaFalse,obtenerZonas} from '../actions/ArticuloActions';
import CONSTANTES from '../constantes';

//articulos normales
let ArticulosPortadaFalse = () =>
  fetch(`${CONSTANTES.revista}/articulos/Lista-de-especiales/?portada=False`, {
    method: 'GET',
  }).then(response => response.json());

function* generadoraArticulosPortadaFalse() {
  try {
    let ArticulosPFalse = yield call(ArticulosPortadaFalse);
    yield put(obtenerArticulosPortadaFalse(ArticulosPFalse));
    console.log('Sagas llamada a la api');
  } catch (error) {
    console.log('error al obtener Articulos en portada');
  }
}

//zonas de la revista
let TraerZonas = () =>
  fetch(`${CONSTANTES.revista}/revistas/Lista-de-revista/1`, {
    method: 'GET',
  }).then(response => response.json());

function* generadoraZonas() {
  try {
    let Zonas = yield call(TraerZonas);
    yield put(obtenerZonas(Zonas));
    console.log('Sagas llamada a la api de zonas/1');
  } catch (error) {
    console.log('error al obtener la revista');
  }
}

export default function* SagasArticulos() {
  yield takeEvery(
    CONSTANTES.GET_ARTICULOS_PORTADA_FALSE,
    generadoraArticulosPortadaFalse,
  );
  yield takeEvery(
    CONSTANTES.GET_ZONAS,
    generadoraZonas,
  );
}
