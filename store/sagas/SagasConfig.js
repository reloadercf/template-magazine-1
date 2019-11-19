import {takeEvery, call, put, all} from 'redux-saga/effects';
import CONSTANTES from '../constantes';
import { actionPutConfig } from '../actions/ConfigActions';

let RegionesRevista = () =>fetch(`${CONSTANTES.revista}/publicos/Lista-Paises/`, {
    method: 'GET',
  }).then(response => response.json());

  let CategoriasRevista = (idRevista) =>fetch(`${CONSTANTES.revista}/publicos/Lista-Categorias/?idrevista=${idRevista}`, 
  {
    method: 'GET',
  }).then(response => response.json());
  

function* generadoraGetConfiguracion(values) {
  try {
    // let [regiones, categoriasRevista]= yield all([
    //     call(RegionesRevista),
    //     call(CategoriasRevista, values.idRevista)
    //   ])
    let regiones=yield call(RegionesRevista)
      console.log(regiones)
    // yield put(actionPutConfig({
    //     regiones,
    //     categoriasRevista
    // }));
    console.log('se llamaron las configuraciones')


  } catch (error) {
    console.log('error al traer los datos');
  }
}


export default function* SagasConfig() {
  yield takeEvery(
    CONSTANTES.GET_CONFIGURACIONES, generadoraGetConfiguracion);
}
