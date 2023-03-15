import React from 'react'
import { Segment, Button, Container } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Container text>
      <Segment clearing as="section" size="large">
        <span>
          <strong>Sub total:</strong>
          {` $ ${totalAmount.toFixed(2)}`}
        </span>
        <Button color="black" floated="right" size="large">
          Check out
        </Button>
      </Segment>
    </Container>
  )
}

export default CartSummary
