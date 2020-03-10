import {combineReducers} from 'redux';
import ArticuloReducer from './ArticuloReducer';
import ReducerConfig from './ReducerConfig'

export default combineReducers({
  
  articulos: ArticuloReducer,
  ReducerConfig:ReducerConfig

});
