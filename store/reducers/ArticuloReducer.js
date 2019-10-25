import CONSTANTES from '../constantes'

let initialState={
    articulos:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case CONSTANTES.ARTICULOS_PORTADA:
            return{
                ...state,
                articulos:[...state.articulos,action.portada]
            }
        default:
            return state
    }
}