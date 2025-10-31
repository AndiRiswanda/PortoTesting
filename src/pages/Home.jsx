import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import PostCard from '../components/PostCard'
import HeroImg from '../assets/Hero.png'

function Home() {
  const latest = posts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-0 md:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            {/* Left: Portrait pinned near the screen edge */}
            <div className="md:col-span-5">
              <div className="md:-ml-6 lg:-ml-10 xl:-ml-16 2xl:-ml-24">
                <img
                  src={HeroImg}
                  alt="Andi Riswanda portrait"
                  className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: Intro content */}
            <div className="md:col-span-7 text-center md:text-left px-4 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Hi, I’m Andi Riswanda
              </h1>
              <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl md:max-w-none md:pr-6">
                I build things for the web and beyond. Comfortable with Python, React, and C++, I enjoy turning ideas into fast, usable products.
              </p>
              <div className="mt-6 flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3">
                <Link to={`${import.meta.env.BASE_URL}about`} className="px-5 py-2 rounded-md bg-brand text-white hover:opacity-90">About me</Link>
                <Link to={`${import.meta.env.BASE_URL}blog`} className="px-5 py-2 rounded-md bg-white/10 text-gray-200 border border-white/20 hover:bg-white/20">Read blog</Link>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                {['Python', 'React', 'C++', 'Tailwind CSS', 'Git'].map(s => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Latest posts</h2>
          <Link to={`${import.meta.env.BASE_URL}blog`} className="text-brand hover:text-white text-sm">View all</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {latest.map(p => (
            <PostCard key={p.id} title={p.title} content={p.content} to={`${import.meta.env.BASE_URL}blog/${p.id}`} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
