import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga'; 
import reducer from './reducers';
import mainSaga from './sagas'; 


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares), 
  );
  sagaMiddleware.run(mainSaga);

  return store;
};

export default configureStore;
