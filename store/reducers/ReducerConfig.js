import CONSTANTES from '../constantes';

let initialState = {
  regiones:[
  ],
  categoriasRevista:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.PUT_CONFIGURACIONES:
      console.log("reducer_config")
      console.log(action.config)
      return {
        ...state,
        regiones: action.config.pikerValues,
        categoriasRevista:action.config.categoriasRevista
      }
    default:
      return state;
  }
}

