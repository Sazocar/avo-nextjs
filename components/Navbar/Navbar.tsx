import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref legacyBehavior>
          <Menu.Item
            active={pathname === '/'}
            title="Home | All products"
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref legacyBehavior>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Basket" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
