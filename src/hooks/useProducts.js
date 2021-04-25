import React from 'react'
import {useContext, useEffect, useState} from 'react'
import getProducts from '../services/getProducts'
import ProductsContext from '../context/ProductsContext'

export function useProducts () {
  const [loading, setLoading] = useState(false)

  const {products, setProducts} = useContext(ProductsContext)

  useEffect(function () {
    setLoading(true)
    getProducts()
      .then(products => {
          setProducts(products)
            setLoading(false)
          })
        }, [setProducts])

  return { loading, products }
}