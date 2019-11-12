const PARAMETROS = {
  revista: 'https://beertual.pythonanywhere.com',
};

let ARTICLE = {
  ARTICULOS_PORTADA: 'ARTICULOS_PORTADA',
  GET_ARTICULOS_PORTADA: 'GET_ARTICULOS_PORTADA',
  //Traer los articulos que no estan en portada
  GET_ARTICULOS_PORTADA_FALSE: 'GET_ARTICULOS_PORTADA_FALSE',
  OBTENER_ARTICULOS_PORTADA_FALSE: ' OBTENER_ARTICULOS_PORTADA_FALSE',
  //traerme las zonas 
  GET_ZONAS:'GET_ZONAS',
  OBTENER_ZONAS:'OBTENER_ZONAS',
};

let ESTADISTICA = {
  GETCONFIGURACION_ESTADISTICA: 'GETCONFIGURACION_ESTADISTICA',
  OBTENERCONFIGURACION_ESTADISTICA: 'OBTENERCONFIGURACION_ESTADISTICA',
};

let CONSTANTES = Object.assign(PARAMETROS, ARTICLE, ESTADISTICA);

export default CONSTANTES;
