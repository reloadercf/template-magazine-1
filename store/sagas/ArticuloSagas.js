import React from 'react'
import { takeEvery, call, put } from 'redux-saga/effects';
import {obtenerArticulosPortadaFalse} from '../actions/ArticuloActions'
import CONSTANTES from '../constantes'

let ArticulosPortadaFalse = () => fetch(`${CONSTANTES.revista}/articulos/Lista-de-especiales/?portada=True`,
{
  method: 'GET',
}).then(response => response.json());


function* generadoraArticulosPortadaFalse(){
 try 
 {
   let ArticulosPFalse=yield call(ArticulosPortadaFalse)
   yield put(obtenerArticulosPortadaFalse(ArticulosPFalse)) 
 } catch (error) {
   console.log("error al obtener Articulos en portada")
 }
}
export default function* funcionesArticulos() {
    yield takeEvery(CONSTANTES.GET_ARTICULOS_PORTADA_FALSE, generadoraArticulosPortadaFalse)
}