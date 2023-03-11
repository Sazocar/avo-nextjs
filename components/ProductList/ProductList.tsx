import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link
      key={id}
      href="/product/[id]"
      as={`/product/${id}`}
      passHref
      legacyBehavior
    >
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
        style={{ width: '230px', height: 'auto' }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group centered doubling>{mapProductsToCards(products)}</Card.Group>
)

export default ProductList
