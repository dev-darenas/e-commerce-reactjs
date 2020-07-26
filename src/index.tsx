import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
let WithRouter = () => <BrowserRouter><App /></BrowserRouter>
let WithStore = () => <Provider store={store} ><WithRouter /></Provider>

ReactDOM.render(
  <React.StrictMode>
    <WithStore />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
