import Head from 'next/head'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@libs/md'
import toHtml from '@libs/toHtml'

export default function Detail({ post }) {
    return (
        <>
            <Head>
                <title>Detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <img
                className="cover-image"
                src={post.coverImage}
                alt='cover image'
            />

            <h1>{post.title}</h1>
            <div className="post-body__inner" dangerouslySetInnerHTML={{ __html: post.content }} />

            {post.tags.map(tag => (
                <Link key={tag} href={`/tag/${tag}`}>
                    <a className="tag">
                        {tag}
                    </a>
                </Link>
            ))}

        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'tags',
        'content'
    ])
    const content = await toHtml(post.content || '')
    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}

