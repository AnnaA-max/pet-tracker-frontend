export default function Navbar () {
    return (
        <nav className="w-full bg-primary px-20 py-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-2xl font-semibold tracking-wider text-primary">
                    <span className="text-3xl">🐾</span>
                    <span>PetTracker</span>
                </div>

            {/* Menu */}
                <ul className="flex gap-14 text-lg text-primary tracking-wide"> 
                    <li>
                        <a href="#home" className="transition-colors duration-200 hover:text-[#ff6201]">Home</a>
                    </li>
                    <li>
                        <a href="#features" className="transition-colors duration-200  hover:text-[#ff6201]">Features</a>
                    </li>
                    <li>
                        <a href="#how-it-works" className="transition-colors duration-200 hover:text-[#ff6201]">How it work</a>
                    </li>
                    
                    <li>
                        <a href="#get-started" className="transition-colors duration-200 hover:text-[#ff6201]">get started</a>
                    </li>
                </ul>

                {/* <button className="rounded-full bg-accent px-6 py-2.5 font-medium text-accent transition-opacity duration-200 hover:opacity-90">
                    Get Started
                </button> */}
            </div>
        </nav>
    )
}