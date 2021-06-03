import Head from 'next/head'
import { createClient } from 'contentful'
import Product from '@components/Product'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'product' })

  return {
    props: {
      products: res.items
    }
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Katalog</title>
      </Head>
      
      <section className="index-wrapper">
        {products.map(product => (
          <Product key={product.sys.id} product={product} />
        ))}
      </section>
    </>
  )
}


