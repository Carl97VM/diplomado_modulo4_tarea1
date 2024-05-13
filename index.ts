import axios from 'axios'
import { Product } from './interface/product.interface'
export type Lista = Product[]

async function obtenerPosts() {
  const respuesta = await axios.get<Lista>(
    'https://fakestoreapi.com/products'
  )

  const valores = respuesta.data
  console.log("Respuesta del endpoint", valores);
  
  const sortedProducts = valores.sort((a, b) => b.price - a.price);
  console.log("valores ordenados", sortedProducts);

  const filteredProducts = sortedProducts.filter(product => product.rating.rate > 2.9);
  console.log("Filtrado de los datos", filteredProducts);
  
}

obtenerPosts()
