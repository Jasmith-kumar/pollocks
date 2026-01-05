"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen pt-16 md:pt-20">
      <Navigation />
      
      {/* Hero */}
      <section className="bg-pollocks-navy text-white py-20 md:py-28 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pollocks-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pollocks-blue rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-pollocks-blue uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-3">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-600 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-8">
            By accessing and using the Pollocks School website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">2. Use of Website</h2>
          <p className="text-gray-600 mb-6">
            You agree to use this website only for lawful purposes and in a way that does not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Infringe the rights of others or restrict their use of the website</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit any harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-8">
            All content on this website, including text, graphics, logos, images, and software, is the property of Pollocks School and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">4. User Submissions</h2>
          <p className="text-gray-600 mb-8">
            When you submit information through our forms (such as admission enquiries or contact forms), you grant us the right to use this information for the purposes stated in our Privacy Policy. You are responsible for ensuring that all information you provide is accurate and complete.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-gray-600 mb-8">
            This website is provided "as is" without any warranties, express or implied. We do not guarantee that the website will be error-free, secure, or continuously available. While we strive to provide accurate information, we make no warranties regarding the completeness or accuracy of any content.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-8">
            Pollocks School shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or any content obtained from it. This includes, but is not limited to, damages for loss of data or other intangible losses.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600 mb-8">
            Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume responsibility for the content or practices of any third-party websites. Your use of external websites is at your own risk.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">8. Admission Terms</h2>
          <p className="text-gray-600 mb-6">
            Regarding admissions to Pollocks School:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>All admission decisions are at the sole discretion of the school</li>
            <li>Submission of an enquiry does not guarantee admission</li>
            <li>Parents/guardians must provide accurate information during the admission process</li>
            <li>Fees and payment terms are subject to change and will be communicated separately</li>
            <li>Admission is subject to availability of seats and meeting eligibility criteria</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">9. Modifications</h2>
          <p className="text-gray-600 mb-8">
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">10. Governing Law</h2>
          <p className="text-gray-600 mb-8">
            These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Visakhapatnam, Andhra Pradesh.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">11. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            For any questions regarding these Terms of Use, please contact us:
          </p>
          <div className="bg-pollocks-sky rounded-xl p-6 mb-8">
            <p className="text-pollocks-black font-medium">Pollocks School</p>
            <p className="text-gray-600">Email: info@pollocks.in</p>
            <p className="text-gray-600">Phone: +91 93914 01900</p>
            <p className="text-gray-600">Location: Visakhapatnam, Andhra Pradesh</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">12. Severability</h2>
          <p className="text-gray-600">
            If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

