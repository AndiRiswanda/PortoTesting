import { Link } from 'react-router-dom'

function PostCard({ title, content, to }) {
  const Card = (
    <article className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition-colors h-full">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-2 text-gray-200 leading-relaxed">{content}</p>
    </article>
  )
  return to ? <Link to={to} className="block">{Card}</Link> : Card
}

export default PostCard
