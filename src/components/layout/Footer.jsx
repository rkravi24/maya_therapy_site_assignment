export default function Footer() {
    return (
        <footer className="bg-[#d5d5d5] text-textDark">

            {/* TOP FOOTER */}
            <div className="max-w-8xl mx-auto px-6 md:px-16 py-24 md:py-28
                      grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* LEFT */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8"> Dr. Maya Reynolds, PsyD </h3>
                    <p className="text-lg leading-relaxed mb-10">
                        123th Street 45 W <br /> Santa Monica, CA 90401
                    </p>
                    <p className="text-lg underline underline-offset-4 mb-2"> hello@drmayareynolds.com </p>
                    <p className="text-lg underline underline-offset-4">  (310) 555-0198 </p>
                </div>

                {/* CENTER */}
                <div className="md:text-center">
                    <h4 className="text-xl font-semibold mb-8"> Hours </h4>
                    <p className="text-lg"> Monday – Friday <br /> 10am – 6pm </p>
                </div>

                {/* RIGHT */}
                <div className="md:text-right">
                    <h4 className="text-xl font-semibold mb-8"> Find </h4>

                    <ul className="space-y-3 text-lg underline underline-offset-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="bg-[#b1b0af] px-6 py-12 text-center text-sm md:text-base">

                {/* LEGAL LINKS */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 underline underline-offset-4">
                    <a href="#">Privacy & Cookies Policy</a>
                    <a href="#">Good Faith Estimate (No Surprises Act)</a>
                    <a href="#">Website Terms & Conditions</a>
                    <a href="#">Professional Disclaimer</a>
                </div>

                {/* CREDITS */}
                <p className="mb-8">
                    Website Template Credits:{" "}
                    <span className="underline underline-offset-4">
                        Grow My Therapy
                    </span>
                </p>

                {/* COPYRIGHT */}
                <p>
                    All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD. All rights reserved.
                </p>
            </div>

        </footer>
    );
}
