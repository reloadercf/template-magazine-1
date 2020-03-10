import CONSTANTES from '../constantes'

export const actionGetConfig = (idRevista) => ({
    type: CONSTANTES.GET_CONFIGURACIONES,
    idRevista
}
)
export const actionPutConfig = config => ({
    type: CONSTANTES.PUT_CONFIGURACIONES,
    config
})