import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import SagasArticulos from './sagas/ArticuloSagas';
import createSagaMiddleware from 'redux-saga';
import SagasConfig from './sagas/SagasConfig';

let sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  //initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(SagasArticulos);
sagaMiddleware.run(SagasConfig)
export default store;
