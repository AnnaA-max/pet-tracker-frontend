export default function CTA() {
    return(
        <section id="get-started" className="w-full py-28">
            <div className="mx-auto max-w-7xl px-20">

                <div className="relative overflow-hidden rounded-3xl bg-accent px-20 py-20 text-center">
                    {/* Decorative soft shapes */}
                    <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white opacity-20" />
                    <div className="absolute -bottom-16 -right-16  h-64 w-64 rounded-full bg-white opacity-20" />

                    {/* Content */}
                    <h2>Everything you pet need all in one place</h2>
                    <p>Track health records, vaccinations, and daily care for your pet —
                    all in one simple, stress-free platform.</p>

                    <button className="relative mt-10 rounded-full bg-white px-10 py-3 text-accent font-medium tracking-wide transition-opacity duration-200 hover:opacity-90">
                        Start Tracking Today
                    </button>

                </div>
            </div>
        </section>
    )
}