import CONSTANTES from '../constantes'

let initialState={
    articulos:[],
    articulosPortadaFalse:[],
    zonas:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case CONSTANTES.ARTICULOS_PORTADA:
            return{
                ...state,
                articulos:[...state.articulos,action.portada]
            }
        case CONSTANTES.OBTENER_ARTICULOS_PORTADA_FALSE:
                return {
                    ...state,
                     articulosPortadaFalse: [...state.articulosPortadaFalse,action.articulosPortadaFalse] }
        

        case CONSTANTES.OBTENER_ZONAS:
                return {
                        ...state,
                        zonas: [...state.zonas,action.zonas] }
        default:
            return state
    }
}