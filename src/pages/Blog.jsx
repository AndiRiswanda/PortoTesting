import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">Blog</h1>
      <p className="text-gray-300 text-center mt-3">Short notes and study summaries</p>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map(p => (
          <PostCard key={p.id} title={p.title} content={p.content} to={`/blog/${p.id}`} />
        ))}
      </section>

    </main>
  )
}

export default Blog
