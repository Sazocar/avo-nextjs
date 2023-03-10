import { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data))
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <p key={product.id}>{product.price}</p>
      ))}
    </div>
  )
}

export default HomePage
