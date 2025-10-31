import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

function Post() {
  const { id } = useParams()
  const postId = Number(id)
  const post = posts.find(p => p.id === postId)

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Post not found</h1>
        <p className="mt-4 text-gray-300">The post you’re looking for doesn’t exist.</p>
        <Link to="/blog" className="inline-block mt-6 px-5 py-2 rounded-md bg-brand text-white hover:opacity-90">Back to Blog</Link>
      </main>
    )
  }

  const body = post.body || post.content

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <Link to="/blog" className="text-brand hover:text-white text-sm">← Back to Blog</Link>
      <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">{post.title}</h1>
      <article className="mt-6 prose prose-invert max-w-none">
        <p className="text-gray-200 leading-8 whitespace-pre-line">{body}</p>
      </article>
    </main>
  )
}

export default Post
