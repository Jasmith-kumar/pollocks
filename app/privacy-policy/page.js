"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-600 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            At Pollocks School, we collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Personal information (name, email address, phone number) when you fill out admission forms or contact us</li>
            <li>Student information for enrollment purposes</li>
            <li>Communication records when you contact us via email or phone</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Process admission applications and enquiries</li>
            <li>Communicate with parents and guardians about student progress</li>
            <li>Send important notifications about school activities and events</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">3. Information Security</h2>
          <p className="text-gray-600 mb-8">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and access is restricted to authorized personnel only.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">4. Information Sharing</h2>
          <p className="text-gray-600 mb-8">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect the rights, property, or safety of our school, students, or others.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">5. Cookies</h2>
          <p className="text-gray-600 mb-8">
            Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and improve our services. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">6. Children's Privacy</h2>
          <p className="text-gray-600 mb-8">
            We are committed to protecting the privacy of children. Any information collected about students is used solely for educational purposes and is handled with the utmost care and confidentiality.
          </p>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">7. Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">8. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-pollocks-sky rounded-xl p-6 mb-8">
            <p className="text-pollocks-black font-medium">Pollocks School</p>
            <p className="text-gray-600">Email: info@pollocks.in</p>
            <p className="text-gray-600">Phone: +91 93914 01900</p>
            <p className="text-gray-600">Location: Visakhapatnam, Andhra Pradesh</p>
          </div>

          <h2 className="text-2xl font-serif font-bold text-pollocks-black mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

