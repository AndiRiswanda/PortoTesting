function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/5">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <p>© {new Date().getFullYear()} Andi Riswanda. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/AndiRiswanda" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.instagram.com/andiriswandaa/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          <a href="mailto:andiriswanda@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
