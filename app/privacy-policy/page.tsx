import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
    return (
            <main className="min-h-screen bg-black text-white selection:bg-ai-accent/30 overflow-x-hidden">
<Navbar/>
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-300">
                        Y Axis is designed with user privacy as a core principle.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data Collection</h2>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>We may collect an email address if the user chooses to provide it voluntarily.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>We collect limited, anonymous usage data such as feature interactions (e.g., sidebar opens, navigation clicks).</span>
                            </li>
                        </ul>
                    </section>

                    {/* What We Do NOT Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">What We Do NOT Collect</h2>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>We do not collect, store, or transmit any chat content.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>We do not access personal messages beyond local processing required for functionality.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Data Usage */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data Usage</h2>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>Usage data is used solely to improve product functionality and user experience.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>Email addresses are used only for communication and product updates.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Data Storage */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data Storage</h2>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{`All chat-related processing happens locally in the user's browser.`}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>No conversation data is stored on our servers.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Data Sharing</h2>
                        <p className="text-slate-300">
                            We do not sell, rent, or share user data with third parties.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Contact</h2>
                        <p className="text-slate-300">
                            For questions, contact:{' '}
                            <a href="mailto:privacy@yaxis.com" className="text-cyan-400 hover:text-cyan-300 underline">
                                yaxis@adnankhan93.in
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}