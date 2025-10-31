function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">About</h1>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <p className="text-gray-200 leading-relaxed text-lg">
          Hi! My name is Andi Riswanda, an Information Systems student at Universitas Hasanuddin, Makassar. I love to work on Python, React, and C++ projects.
        </p>

        <div className="mt-6">
          <h2 className="text-white font-semibold">Skills & Tools</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {['Python', 'React', 'C++', 'Tailwind CSS', 'Node.js', 'Git', 'Vite'].map(s => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{s}</span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-white font-semibold">Contact</h2>
          <p className="mt-2 text-gray-300">
            I’m open to collaboration and learning opportunities. Reach me at
            {' '}<a className="text-brand hover:text-white" href="mailto:andi@example.com">andi@example.com</a>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
