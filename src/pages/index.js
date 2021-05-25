import Head from 'next/head'
import Post from '@components/Post'
import Pagination from '@components/Pagination'
import { postsPerPage } from '@libs/config'
import { getAllPosts } from '@libs/md'

export default function Home({ posts, prevPosts, nextPosts }) {
  return (
    <>
      <Head>
        <title>Aryo</title>
      </Head>

      <section className="index-wrapper">
        {posts.map((post, key) => (
          <Post key={key} {...post} />
        ))}
      </section>

      <Pagination prev={prevPosts} next={nextPosts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  const startIndex = 0
  const endIndex = postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts
    },
  }
}

