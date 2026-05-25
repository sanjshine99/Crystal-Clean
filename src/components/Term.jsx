
import Seo from "./Seo";

const TermsConditions = () => {
  const brandBlue = '#13AFFE';

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white mx-auto px-4 py-8 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <Seo
          title="Terms and Conditions | Crystal Clean"
          description="Review Crystal Clean's website terms of use, intellectual property terms, privacy references, and contact information."
          canonicalPath="/terms-and-conditions"
        />
        <h1 className="text-3xl font-bold text-center mb-6 pt-20 uppercase tracking-tight">
          Website Terms of Use
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Last updated: 09/09/25
        </p>

        <div className="mt-8 space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>1. Use of Our Website</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              The content on this website is for general information only.
              You must not use this site for unlawful purposes or in any way that may damage our reputation or impair its availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>2. Accuracy of Information</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              We make reasonable efforts to keep information on this website up to date, but we do not guarantee accuracy, completeness, or reliability.
              Any reliance on website content is at your own risk. For project details, quotes, or professional advice, please contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>3. Intellectual Property</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              All content on this website (including text, images, graphics, and logos) is owned by or licensed to <span className="font-bold">Crystal Clean</span>.
              You may view, download, and print content for personal use only.
              You must not copy, reproduce, or distribute our website content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>4. Links to Other Websites</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              This site may include links to external websites for convenience.
              We are not responsible for the content or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>5. Liability</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              We are not liable for any loss or damage arising from use of this website, except where required by law.
              Nothing in these terms excludes or limits liability for death or personal injury caused by negligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>6. Privacy & Data Protection</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              Our use of your personal data is explained in our Privacy Policy, which forms part of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>7. Changes to These Terms</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              We may update these terms from time to time. Please check this page periodically for the latest version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: brandBlue }}>8. Governing Law</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-200">
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-white/10 pt-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: brandBlue }}>9. Contact Us</h2>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="space-y-2 text-gray-800 dark:text-gray-200">
              <p><strong className="text-black dark:text-white">Crystal Clean</strong></p>
              <p>Email: <a href="mailto:crystal.cl34n@gmail.com" className="hover:underline font-semibold" style={{ color: brandBlue }}>crystal.cl34n@gmail.com</a></p>
              <p>Phone: <span className="font-semibold">+44 7446 253967</span></p>
              <p>Address: Unit 1B Cranmere Rd, Okehampton EX20 1UE, United Kingdom</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
