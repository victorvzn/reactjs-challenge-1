import {useState, useEffect} from 'react'
import {useProducts} from '../hooks/useProducts'
import getProduct from '../services/getProduct'

export default function useProduct ({ id }) {
  const {products} = useProducts()
  const productFromCache = products.find(product => product.id === id)

  const [product, setProduct] = useState(productFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!product) {
      setIsLoading(true)
      
      getProduct({ id })
        .then(product => {
          setProduct(product)
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [product, id])

  return {product, isLoading, isError}
}