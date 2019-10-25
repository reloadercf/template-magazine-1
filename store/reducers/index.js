import {combineReducers} from 'redux'
import ArticuloReducer from './ArticuloReducer'

export default combineReducers({
    articulos:ArticuloReducer,
})