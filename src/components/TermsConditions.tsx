import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollText, Shield, FileText } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
      {/* Header with Icon */}
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <ScrollText className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
          Terms and Conditions
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="max-w-[900px] mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="border-l-4 border-purple-500 pl-6 mb-8">
              <p className="text-gray-600">
                Welcome to SOURCE FOUNDRY
              </p>
              <p className="text-gray-600 mt-4">
                These terms and conditions outline the rules and regulations for the use of SOURCE FOUNDRY's Website, located at https://www.sourcefoundry.online/.
              </p>
              <p className="text-gray-600 mt-4">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use SOURCE FOUNDRY if you do not agree to all of the terms and conditions stated on this page.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Terminology</h2>
              <p className="text-gray-600">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
              </p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Cookies</h2>
              <p className="text-gray-600">
                We employ the use of cookies. By accessing SOURCE FOUNDRY, you agreed to use cookies in agreement with the SOURCE FOUNDRY's Privacy Policy.
              </p>
              <p className="text-gray-600 mt-4">
                Most interactive websites use cookies to let them retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">License</h2>
              <p className="text-gray-600">
                Unless otherwise stated, SOURCE FOUNDRY and/or its licensors own the intellectual property rights for all material on SOURCE FOUNDRY. All intellectual property rights are reserved. You may access this from SOURCE FOUNDRY for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-gray-600 mt-4">You must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Republish material from SOURCE FOUNDRY</li>
                <li>Sell, rent or sub-license material from SOURCE FOUNDRY</li>
                <li>Reproduce, duplicate or copy material from SOURCE FOUNDRY</li>
                <li>Redistribute content from SOURCE FOUNDRY</li>
              </ul>
              <p className="text-gray-600 mt-4">This Agreement shall begin on the date hereof.</p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Hyperlinking to our Content</h2>
              <p className="text-gray-600">
                The following organizations may link to our Website without prior written approval:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Content Liability</h2>
              <p className="text-gray-600">
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
              </p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Reservation of Rights</h2>
              <p className="text-gray-600">
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to remove immediately all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Disclaimer</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 px-4 border-t border-purple-800">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="text-sm text-purple-300/80 mb-8 space-y-4">
            <h3 className="font-semibold mb-2">Disclaimer</h3>
            <p>
              The names of companies, products and services mentioned on this website are used for identification purposes only and do not imply any kind of endorsement. All trademarks belong exclusively to their respective owners.
            </p>
            <p>
              Legal Notice: By acquiring our services, you acknowledge that this product is intended for entertainment purposes and not a professional psychological, legal or health advisory service. I am not a psychologist, lawyer or health professional, and the readings offered do not substitute professional guidance in these areas.
            </p>
            <p>
              The portraits and interpretations provided are based on intuitive perceptions and we do not guarantee that the person drawn corresponds to someone you will meet in real life. Experiences vary from person to person and there are no guarantees of specific results.
            </p>
            <p>
              Furthermore, the testimonials, case studies and examples presented on this page reflect individual experiences and do not guarantee that everyone will have the same or similar results. All sales are final, but we guarantee the delivery of the service as described.
            </p>
            <p>
              If you have any doubts, we recommend that you make your decision with discernment and, if necessary, seek professional advice.
            </p>
          </div>
  
          {/* Copyright and Links */}
          <div className="text-center space-y-4">
            <p className="text-purple-300">
              © 2025 SOURCE FOUNDRY. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/privacyPolicy" className="text-purple-300 hover:text-purple-200 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-purple-300 hover:text-purple-200 transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;