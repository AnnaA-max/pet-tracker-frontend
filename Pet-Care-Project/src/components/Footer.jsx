export default function Footer() {
    return(
        <foote className="w-full bg-primary py-16">
            <div className="mx-auto max-w-7xl px-20 text-center">
                {/* Brand */}
                <div className="mb-4 flex items-center justify-center gap-2 text-2xl font-semibold text-primary">
                    <span>🐾</span>
                    <span>PetTracker</span>
                </div>

                {/* Desctription */}
                <p className="mx-auto max-w-md text-muted leading-relaxed ">
                    Helping pet owners track health, vaccinations, and daily care with love and simplicity.
                </p>
                {/* Divider */}
                <div className="mx-auto my-8 h-px w-24 bg-accent opacity-40"></div>

                {/* Copyright */}
                <p className="">© 2025 PetTracker. All rights reserved.</p>
            </div>
        </foote>
    )
}