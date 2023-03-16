import { AppProps } from 'next/app'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Head>
        <title>Avo Store | Simón A. Azócar</title>
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
