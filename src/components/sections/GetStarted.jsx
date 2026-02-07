export default function GetStarted() {
    return (
        <section className="bg-[#718241] py-24 md:py-30">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">
                    Get started today.
                </h2>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-xl leading-relaxed mb-14">
                    Ready to take the first step toward feeling calmer, more grounded, and supported?
                    Reach out to schedule your first session—therapy can be a space to slow down, reconnect, and begin meaningful change.
                </p>

                {/* BUTTON */}
                <a href="#"
                    className="inline-flex items-center gap-2 border-white border
                     text-white px-10 py-4 text-sm uppercase tracking-wider
                    transition-all duration-600 hover:bg-white hover:text-[#7f7a4b]">
                    Get in touch
                    <span>→</span>
                </a>

            </div>
        </section>
    );
}
