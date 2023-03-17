import React from 'react'
import { Grid, Card, GridColumn } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Grid.Row>
      <Grid.Column>
        <Link key={id} href={`/product/${id}`} passHref legacyBehavior>
          <Card
            as="a"
            header={name}
            image={
              <Image
                src={image.toString()}
                priority
                width={230}
                height={230}
                alt={name.toString()}
              />
            }
            meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
            style={{ width: '230px', height: 'auto', margin: '12px' }}
          />
        </Link>
      </Grid.Column>
    </Grid.Row>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Grid container>
    <Grid.Row>
      <Card.Group centered doubling>
        {mapProductsToCards(products)}
      </Card.Group>
    </Grid.Row>
  </Grid>
)

export default ProductList
