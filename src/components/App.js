import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';

import { ProductsContextProvider } from "../context/ProductsContext";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;