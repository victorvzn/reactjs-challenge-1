import React from 'react';

import ProductList from '../components/ProductList'

import { useProducts } from '../hooks/useProducts'

import { Container } from 'react-bootstrap';

function Home() {
  const { products } = useProducts()

  if (products.length === 0) {
    return (
      <h3 className="text-center">No products were found.</h3>
    );
  }
  
  return (
    <Container className="my-5">
      <div className="ProductList">
        <ProductList items={products} />
      </div>
    </Container>
  );
}

export default Home;
