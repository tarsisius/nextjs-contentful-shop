import Head from 'next/head'

import { createClient } from 'contentful'
import Display from '@components/Display'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export default function Detail({ product }) {
    const {
        image,
        productName,
        tags,
        categories,
        price,
        quantity,
        size
    } = product.fields

    return (
        <>
            <Head>
                <title>Detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="detail">
                <Display image={image} />

                <div className="right">
                    <h2>{productName}</h2>
                    <div className="data">
                        <a className="price">Rp {price}</a>
                        <div className="size">
                            <label>SIZE</label>
                            <div className="size-item">
                                {size.map((sz, index) => (
                                    <span key={index}>{sz}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a className="buy-button">Whangsaff</a>
                </div>
            </div>

            {/* <img
                className="cover-image"
                src={post.coverImage}
                alt='cover image'
            /> */}

            {/* <h1>{post.title}</h1> */}


            {/* {post.tags.map(tag => (
                <Link key={tag} href={`/tag/${tag}`}>
                    <a className="tag">
                        {tag}
                    </a>
                </Link>
            ))} */}

        </>
    )
}

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'product'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'product',
        'fields.slug': params.slug
    })

    return {
        props: { product: items[0] }
    }
}
