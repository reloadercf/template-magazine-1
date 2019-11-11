import CONSTANTES from '../constantes'

export const actionArticulosPortadaFals = () => ({
    type: CONSTANTES.GET_ARTICULOS_PORTADA_FALSE
})
export const obtenerArticulosPortadaFalse = articulosPortadaFalse => ({
    type: CONSTANTES.OBTENER_ARTICULOS_PORTADA_FALSE,
    articulosPortadaFalse
})