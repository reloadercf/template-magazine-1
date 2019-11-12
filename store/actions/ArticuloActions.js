import CONSTANTES from '../constantes'

export const actionGetArticulosPortadaFalse = () => ({
    type: CONSTANTES.GET_ARTICULOS_PORTADA_FALSE
    
}
)
console.log('llamando acciones')
export const obtenerArticulosPortadaFalse = articulosPortadaFalse => ({
    type: CONSTANTES.OBTENER_ARTICULOS_PORTADA_FALSE,
    articulosPortadaFalse
})

//Traer las zonas al local
export const actionGetZonas = () => ({
    type: CONSTANTES.GET_ZONAS
}
)

export const obtenerZonas = zonas => ({
    type: CONSTANTES.OBTENER_ZONAS,
    zonas
})