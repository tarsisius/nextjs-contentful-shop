import Head from 'next/head'
import Post from '@components/Post'
import Pagination from '@components/Pagination'
import { postsPerPage } from '@libs/config'
import { getAllPosts } from '@libs/md'

export default function PagedPost({ posts, prevPosts, nextPosts, pageIndex, numPages }) {
  return (
    <>
      <Head>
        <title>Halaman {pageIndex + 1}</title>
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

export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  const pageIndex = parseInt(params.page) - 1
  const startIndex = pageIndex * postsPerPage
  const endIndex = (pageIndex + 1) * postsPerPage

  const prevPosts = pageIndex > 0 ? pageIndex : null
  const nextPosts = endIndex >= posts.length ? null : pageIndex + 2

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts,
      pageIndex
    },
  }
}

export async function getStaticPaths() {
  const numPages = (postsPerPage % getAllPosts().length) + 1

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}
