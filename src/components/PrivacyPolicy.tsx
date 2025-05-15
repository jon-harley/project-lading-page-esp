import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
      {/* Header with Icon */}
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <Lock className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
          Privacy Policy
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-8">
              At SOURCE FOUNDRY, accessible at SOURCE FOUNDRY, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that we collect and record at SOURCE FOUNDRY and how we use it.
            </p>

            <p className="text-gray-600 mb-8">
              If you have any additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Log Files</h2>
              <p className="text-gray-600">
                SOURCE FOUNDRY follows a standard procedure of using log files. These files log visitors when they access websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking user's movement on the site, and gathering demographic information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Cookies and Web Beacons</h2>
              <p className="text-gray-600">
                Like any other website, SOURCE FOUNDRY uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Third Party Privacy Policies</h2>
              <p className="text-gray-600 mb-4">
                Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information on their practices.
              </p>
              <p className="text-gray-600">
                Note that third parties may use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on SOURCE FOUNDRY. They automatically receive your IP address when this occurs. We have no control over third-party cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Children's Information</h2>
              <p className="text-gray-600">
                One of our priorities is adding protection for children while using the internet. SOURCE FOUNDRY does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Online Privacy Policy Only</h2>
              <p className="text-gray-600">
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or we collect in SOURCE FOUNDRY. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Consent</h2>
              <p className="text-gray-600">
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-800">
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

export default PrivacyPolicy;