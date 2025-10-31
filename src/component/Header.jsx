import githubIcon from '../assets/Icon/githubIcon.svg'
import instagramIcon from '../assets/Icon/Instagramicon.svg'

function Header() {
    return (
        <header className="w-full">
            <nav className="max-w-7xl mx-auto px-4 md:px-10 py-5 flex items-center justify-between font-rubik">
                {/* Left: Social icons */}
                <ul className="flex items-center gap-4 text-brand">
                    <li>
                        <a href="#" aria-label="Instagram" className="inline-flex hover:opacity-80">
                            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="GitHub" className="inline-flex hover:opacity-80">
                            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                        </a>
                    </li>
                </ul>

                {/* Right: Nav links */}
                <ul className="hidden sm:flex items-center gap-8 text-brand font-medium">
                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#home" className="text-white relative after:block after:w-1.5 after:h-1.5 after:bg-brand after:rounded-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2">Home</a></li>
                    <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#art" className="hover:text-white transition-colors">Art</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header