import React from 'react'
import { Segment, Button, Container } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Container>
      <Segment clearing as="section" size='large'>
        <span>
          <strong>Sub total:</strong>
          {` ${totalAmount}`}
        </span>
        <Button color="black" floated="right" size='large'>
          Check out
        </Button>
      </Segment>
    </Container>
  )
}

export default CartSummary
