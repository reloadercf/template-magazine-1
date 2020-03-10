import CONSTANTES from '../constantes';

let initialState = {
  articulos: [],
  articulosPortadaFalse: [],
  articulosCategoria:[]

};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.ARTICULOS_PORTADA:
      return {
        ...state,
        articulos: [...state.articulos, action.portada]
      };
    case CONSTANTES.OBTENER_ARTICULOS_PORTADA_FALSE:
      return {
          ...state, 
          articulosPortadaFalse: [...action.articulosPortadaFalse]
      };
    case CONSTANTES.PUT_ARTICULOS_CATEGORIA:
        //console.log(action.articulos)
      return{
        ...state,
        articulosCategoria:[...action.articulos]
      }
    default:
      return state;
  }
}
