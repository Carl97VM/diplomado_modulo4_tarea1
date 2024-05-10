import axios from 'axios'
import { Product } from './interface/product.interface'
export type Lista = Product[]

async function obtenerPosts() {
  const respuesta = await axios.get<Lista>(
    'https://fakestoreapi.com/products'
  )

  const valores = respuesta.data

  const sortedProducts = valores.sort((a, b) => b.price - a.price);

  const filteredProducts = sortedProducts.filter(product => product.rating.rate > 2.9);

  console.log(filteredProducts);
}

obtenerPosts()
