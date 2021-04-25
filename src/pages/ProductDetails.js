import React from 'react';

import useProduct from '../hooks/useProduct'
import ProductListItemDetail from '../components/ProductListItemDetail'

import { Redirect } from 'react-router-dom';

function ProductDetails({ match }) {
  const {product, isLoading, isError} = useProduct({id: match.params.id})

  if (isLoading) {
    return (
      <h1>Loading product...</h1>
    )
  }

  if (isError) return <Redirect to='/404' />

  if (!product) return null

  return <>
    <ProductListItemDetail item={product} />
    </>
}

export default ProductDetails;
