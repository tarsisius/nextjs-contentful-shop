import Head from 'next/head'
import { getPostsByTag, getAllTags } from '@libs/md'
import Post from '@components/Post'

export default function tag({ allPosts, tag }) {
    return (
        <div>
            <Head>
                <title>tag BLog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>

                <h1>
                    {tag}
                </h1>

                <h4>
                    Panjang: {allPosts.length}
                </h4>

                <section className="index-wrapper">
                    {allPosts.length > 0 && (
                        <>
                            {allPosts.map((post, key) => (
                                <Post key={key} {...post} />
                            ))}
                        </>
                    )}
                </section>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const allPosts = getPostsByTag(params.tag)
    return {
        props: {
            allPosts,
            tag: params.tag
        }
    }
}

export async function getStaticPaths() {
    const tags = getAllTags()

    return {
        paths: tags.map((tag) => {
            return {
                params: {
                    tag: tag
                }
            }
        }),
        fallback: false
    }
}

