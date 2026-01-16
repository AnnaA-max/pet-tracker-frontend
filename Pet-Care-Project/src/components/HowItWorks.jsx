const steps = [
    { id: 1, title: "Create Account", description: "Sign up and create your personal pet care account"},
    {id: 2, title: "Add Your Pet", description: "Add pet profile with basic health and lifestyle information"},
    {id: 3, title: "Track & Care", description: "Track health ,activities, and get care reminders"}];

function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">How-It-work</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step) =>(
                        <div
                            key={step.id}
                            className= "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">

                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold"
                            >
                                {step.id}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;