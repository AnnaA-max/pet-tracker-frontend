export default function Features() {
    return(
        <section id="features" className="w-full bg-primary py-24">
            <div className="mx-auto max-w-7xl px-20">
                {/* Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-4xl font-semibold tracking-wide text-primary">Everything your pet needs</h2>
                    <p className="mt-4 text-lg text-muted">Simple tools to help you care for your furry friends better.</p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-3 gap-12">
                    {/* Card1 */}
                    <div className="rounded-3xl bg-white p-10 shadow-sm">
                        <div className="mb-6 text-4xl">🐶</div>
                            <h3 className="mb-3 text-xl font-semibold text-primary">Pet Profiles</h3>
                            <p className="text-muted leading-relaxed">Create detailed profiles foe each pet including agem weight, and health information</p>
                    </div>
                    {/* Card2 */}
                    <div className="rounded-3xl bg-white p-10 shadow-sm">
                        <div className="mb-6 text-4xl">💉</div>
                            <h3 className="mb-3 text-xl font-semibold text-primary">Vaccination Tracking</h3>
                            <p className="text-muted leading-relaxed">Keep track of vaccination record and never miss an importand shot</p>
                    </div>
                     {/* Card3 */}
                    <div className="rounded-3xl bg-white p-10 shadow-sm">
                        <div className="mb-6 text-4xl">⏰</div>
                            <h3 className="mb-3 text-xl font-semibold text-primary">Smart Reminders</h3>
                            <p className="text-muted leading-relaxed">Get reminder for upcoming vaccinations, checkup, and daily care routines.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}