import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query: { id } } = useRouter()

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  })

  return (
    <section>
      <h1>Product page: {product?.id}</h1>
      <p>{product?.name}</p>
    </section>
  )
}

export default ProductPage
