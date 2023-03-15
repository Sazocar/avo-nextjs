import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next';
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { Container } from 'semantic-ui-react'

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id
    }
  }))

  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product } : { product: TProduct }) => {
  

  return (
    <Layout>
      <Container text>
        {product == null ? null : <ProductSummary product={product} />}
      </Container>
    </Layout>
  )
}

export default ProductPage
