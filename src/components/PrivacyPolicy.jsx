
import Seo from "./Seo";

const PrivacyPolicy = () => {
    const brandBlue = '#13AFFE';

    return (
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-16 transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
            <Seo
                title="Privacy Policy | Crystal Clean"
                description="Read how Crystal Clean collects, uses, stores, and protects personal information for website enquiries and detailing bookings."
                canonicalPath="/privacy-policy"
            />
            <h1 className="text-4xl font-bold text-center mb-8 pt-20 uppercase tracking-tight">
                Privacy Policy
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400">
                Last updated: 09/09/25
            </p>

            <div className="mt-8 space-y-10 max-w-6xl mx-auto">
                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>1. Information We Collect</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        When you complete a form on our website or contact us directly, we may collect:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Address (if relevant to the service)</li>
                        <li>Details of your enquiry or project</li>
                    </ul>
                    <p className="mt-4 leading-relaxed text-gray-800 dark:text-gray-200">
                        We may also collect limited technical data automatically when you visit our website, such as your IP address and browser type.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>2. Lawful Basis for Processing</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        We only process your personal data where we have a lawful basis to do so. This includes:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                        <li><span className="font-bold text-black dark:text-white">Contract</span> – to provide a quote, arrange services, or fulfil an agreement with you</li>
                        <li><span className="font-bold text-black dark:text-white">Consent</span> – when you give us permission to contact you for specific purposes</li>
                        <li><span className="font-bold text-black dark:text-white">Legitimate interests</span> – to respond to enquiries and manage our business effectively</li>
                        <li><span className="font-bold text-black dark:text-white">Legal obligation</span> – where we must comply with the law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>3. How We Use Your Information</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        We use your personal data to:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                        <li>Respond to enquiries and provide quotes</li>
                        <li>Communicate with you about your project</li>
                        <li>Maintain business records and comply with legal requirements</li>
                    </ul>
                    <p className="mt-4 font-medium text-gray-800 dark:text-gray-200">
                        We do not sell or trade your personal details to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>4. Sharing Your Information</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        We may share your personal data only with:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
                        <li>Trusted service providers (such as IT and hosting providers)</li>
                        <li>Professional advisers (such as accountants or insurers)</li>
                        <li>Regulatory bodies or law enforcement, if required by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>5. Cookies & Website Tracking</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        Our website may use cookies or similar technologies to improve user experience and monitor website performance. You can set your browser to refuse cookies if you prefer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>6. Data Security</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        We take appropriate measures to keep your personal information secure and prevent unauthorised access, disclosure, alteration, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>7. How Long We Keep Your Information</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>8. Your Rights</h2>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">
                        Under UK GDPR, you have the right to access, correct, or delete your data, as well as the right to restrict or object to its processing. To exercise your rights, please contact us using the details below.
                    </p>
                </section>

                <section className="border-t border-gray-200 dark:border-white/10 pt-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: brandBlue }}>9. Contact Us</h2>
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-800 dark:text-gray-200">
                        <p><strong className="text-black dark:text-white">Crystal Clean</strong></p>
                        <p>Email: <a href="mailto:crystal.cl34n@gmail.com" className="hover:underline font-semibold" style={{ color: brandBlue }}>crystal.cl34n@gmail.com</a></p>
                        <p>Phone: <span className="font-semibold">+44 7446 253967</span></p>
                        <p>Address: Unit 1B Cranmere Rd, Okehampton EX20 1UE, United Kingdom</p>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">
                        If you are not satisfied with our response, you have the right to lodge a complaint with the{' '}
                        <a
                            href="https://ico.org.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:underline"
                            style={{ color: brandBlue }}
                        >
                            Information Commissioner’s Office (ICO)
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
