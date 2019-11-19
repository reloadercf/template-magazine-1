import CONSTANTES from '../constantes';

let initialState = {
  regiones:[
    {label: 'MEXICO', value: 'mexico'},
    {label: 'ESPAÑA', value: 'españa'},
    {label: 'INDIA', value: 'india'},
  ],
  categoriasRevista:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.PUT_CONFIGURACIONES:
      console.log(action.config)
      return {
        ...state,
        regiones: action.config.regiones,
        categoriasRevista:action.config.categorias
      }
    default:
      return state;
  }
}

