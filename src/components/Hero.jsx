export default function Hero() {
    return(
        <section id="home" className="w-full bg-primary py-24">
            <div className="mx-auto flex max-w-7xl items-center px-20">
                {/* Left-Content */}
                <div className="w-1/2 pr-16">
                    <h1 className="text-5xl font-semibold leading-tight tracking-wide text-primary">Happy Pets, <br />
                    Happy Hearts </h1>
                    <p className="text-lg mt-6 text-muted leading-relaxed">
                        Track your pet's health, vaccinations, and daily care in one simple and friendly platform.
                    </p>
                    <button className="mt-10 rounded-full bg-accent px-8 py-3 text-accent font-medium tracking-wide transition-opacity duration-200 hover:opacity-90">
                        Get Started
                    </button>
                </div>

                    {/*Right-Image */}
                    <div className="w-1/2 flex justify-end">
                        <div className="relative">
                            <div className="absolute -top-24 -right-32 w-130 h-130 bg-accent rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                            opacity-40" />
                            <img src="/together.jpg" alt="Pets" className="w-full max-w-[520px]" />
                        </div>
                </div>
            </div>
        </section>

    )
}