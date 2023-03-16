import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link
      key={id}
      href={`/product/${id}`}
      passHref
      legacyBehavior
    >
      <Card
        as="a"
        header={name}
        image={
          <Image src={image} priority width={230} height={230} alt={name} />
        }
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
        style={{ width: '230px', height: 'auto' }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group
    style={{ gap: '0px 30px', margin: '12px' }}
    centered
    doubling
  >
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
