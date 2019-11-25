import CONSTANTES from '../constantes'

export const actionGetArticulosPortadaFalse = () => ({
    type: CONSTANTES.GET_ARTICULOS_PORTADA_FALSE
    
}

)
export const obtenerArticulosPortadaFalse = articulosPortadaFalse => ({
    type: CONSTANTES.OBTENER_ARTICULOS_PORTADA_FALSE,
    articulosPortadaFalse
})

export const getArticulosCategoria=(idCategoria)=>({
    type:CONSTANTES.GET_ARTICULOS_CATEGORIA,
    idCategoria
})

export const putArticulosCategoria=(articulos)=>({
    type:CONSTANTES.PUT_ARTICULOS_CATEGORIA,
    articulos
})