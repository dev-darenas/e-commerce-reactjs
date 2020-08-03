import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import StoreContainer from './containers/StoreContainer';
import ProductContainer from './containers/ProductContainer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={IndexContainer} />
      <Route path="/store" component={StoreContainer} />
      <Route path="/product/:slug_id" component={ProductContainer} />
    </Switch>
  )
}
