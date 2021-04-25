import { API_URL } from './settings'

export default function getProducts() {
  const apiURL = `${API_URL}/products`

  return fetch(apiURL)
    .then((res) => res.json())
}
