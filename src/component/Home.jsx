import HeroImg from '../assets/Hero.png'
import WelcomeImg from '../assets/Welcome.png'

function Home() {
    return (
        <section id="home" className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
            {/* Decorative purple triangle */}
            <div className="polygon-shape" />

                    {/* Hero image: large and anchored bottom-left */}
                    <img
                        src={HeroImg}
                        alt="Portrait"
                        className="pointer-events-none select-none absolute left-1 sm:left-3 md:left-6 bottom-0 z-10 h-44 sm:h-56 md:h-[60vh] lg:h-[68vh] xl:h-[72vh] w-auto"
                    />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 pt-12 md:pt-16 pb-24">
                        <div className="flex flex-col items-center text-center gap-6 md:translate-x-10 lg:translate-x-16 xl:translate-x-24">
                    <img
                        src={WelcomeImg}
                        alt="WELCOME"
                                className="w-[min(70%,640px)] max-w-[640px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"
                    />

                    <div className="text-brand">
                                <p className="text-lg sm:text-xl md:text-2xl">
                            Im a Programmer and Graphic
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl -mt-1">Designer</p>
                    </div>

                    <div>
                        <a
                            href="#projects"
                                    className="inline-block mt-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm sm:text-base text-gray-200 border border-white/20 transition-colors"
                        >
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home