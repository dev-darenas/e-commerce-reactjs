import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import products from '../reducers/ProductReducers';

const rootReducer = combineReducers({
  products
});

export type AppState = ReturnType<typeof rootReducer>;

export default function generateStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore (
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  return store;
}
