import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const root = join(process.cwd(), 'src/_posts')

export function getPostSlugs() {
  return fs.readdirSync(root)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(root, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export function getAllTags() {
  const posts = getAllPosts(['tags'])
  const set = new Set()

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((t) => {
        set.add(t)
      })
    }
  })

  return Array.from(set)
}

export function getPostsByTag(tag) {
  const matchSlug = new Set()
  const matchPost = []
  const posts = getAllPosts(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags']
  )

  posts.forEach((post) => {
    if (post.tags) {
      const isMatched = post.tags.find((t) => t.toLowerCase() === tag.toLowerCase())
      const isHaveSlug = matchSlug.has(post.slug)
      if (isMatched && !isHaveSlug) {
        matchPost.push(post)
      }
    }
  })

  return matchPost
}


