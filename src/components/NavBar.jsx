import { NavLink } from 'react-router-dom'

function NavBar() {
  const base = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const active = 'text-white bg-brand/70';
  const normal = 'text-brand hover:text-white hover:bg-white/10';

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/5">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <div className="text-lg font-semibold text-white">Andi Riswanda</div>
        <ul className="flex items-center gap-1">
          <li>
            <NavLink to="/" end className={({isActive})=>`${base} ${isActive?active:normal}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=>`${base} ${isActive?active:normal}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({isActive})=>`${base} ${isActive?active:normal}`}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
