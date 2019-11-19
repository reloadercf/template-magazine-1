import {takeEvery, call, put, all} from 'redux-saga/effects';
import CONSTANTES from '../constantes';
import { actionPutConfig } from '../actions/ConfigActions';

let RegionesRevista = () =>fetch(`${CONSTANTES.revista}/publicos/Lista-paises/`, {
    method: 'GET',
  }).then(response => response.json());

  let CategoriasRevista = (idRevista) =>fetch(`${CONSTANTES.revista}/revistas/Lista-de-categorias/?idrevista=${idRevista}`, 
  {
    method: 'GET',
  }).then(response => response.json());
  

function* generadoraGetConfiguracion(values) {
  try {
    let [regiones, categoriasRevista]= yield all([
        call(RegionesRevista),
        call(CategoriasRevista, values.idRevista)
      ])

      let pikerValues= regiones.map(region=>{
        let regionPicker={}
        regionPicker.label=region.nombre_pais
        regionPicker.value=region.id
        return regionPicker
      })

    yield put(actionPutConfig({
        pikerValues,
        categoriasRevista
    }));

  } catch (error) {
    console.log('error al traer los datos');
  }
}


export default function* SagasConfig() {
  yield takeEvery(
    CONSTANTES.GET_CONFIGURACIONES, generadoraGetConfiguracion);
}
