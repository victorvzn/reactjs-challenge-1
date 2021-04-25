import { API_URL } from './settings'

export default function getProduct({ id }) {
  const apiURL = `${API_URL}/products/${id}`

  return fetch(apiURL)
    .then((res) => res.json())
}
