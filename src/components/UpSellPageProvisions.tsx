import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, FileText, Palette, Gift } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const UpsellPageProvisions = () => {
  const PAYMENT_URL = 'https://pay.cakto.com.br/bRGZJSU';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
        {/* Countdown Timer - Moved to top */}
      <div className="max-w-4xl mx-auto mb-12">
        <CountdownTimer />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4">
          Congratulations! You've unlocked exclusive access! 🎉
          </h1>
          <p className="text-xl text-purple-200">
          You've been selected to unlock the Complete Guide Package: Destiny Revelations – a VIP upgrade with amazing benefits!
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-300" />
            </div>
            <div>
            <h3 className="text-xl font-semibold text-white mb-2">1️⃣ Express Priority Delivery</h3>
            <p className="text-purple-200">Receive your guide in under 5 minutes, saving you precious time.</p>
            <p className="text-purple-300 mt-2">(Original price: $4,90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2️⃣ Spiritual Portrait of Your Soulmate</h3>
              <p className="text-purple-200">Have you ever imagined seeing your soulmate’s face before even meeting them? Based on your name, date of birth, and energetic vibrations, we’ll create a spiritual portrait of your soulmate – revealing who they are and when you’re destined to meet!
              <br/><br/>
              🖼️ You’ll receive an exclusive digital portrait plus a complete astrological analysis of this spiritual connection.
              <br/><br/>
              📌 Special offer: Available only for those who purchased the eBook!</p>
              <p className="text-purple-300 mt-2">(Original price: $19.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Palette className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3️⃣ Secret Money Attraction Ritual</h3>
              <p className="text-purple-200">The universe is already working to bring you abundance – but you can speed up the process with this powerful ritual to unlock your financial flow.
              <br/><br/>
              🔥 You’ll receive:<br/>
              ✔️ An exclusive ritual used by mystics to attract wealth quickly.<br/>
              ✔️ A guided audio to align your energy with money.<br/>
              ✔️ A millionaire mindset guide to eliminate prosperity blocks forever.
              <br/><br/>
              💰 This technique has already transformed many lives! Are you ready to activate your abundance?</p>
              <p className="text-purple-300 mt-2">(Original price: $19.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Gift className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4️⃣ Exclusive Bonus</h3>
              <p className="text-purple-200">This bonus contains an essential insight crafted especially for those seeking to understand and attract their soulmate. A revelation that could change your journey entirely.</p>
            </div>
          </div>
        </div>

        {/* Offer Box */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">💡 Limited-Time Offer</h2>
          <p className="text-xl text-purple-200 mb-6">
          These bonuses are worth $44 – but you get everything for just $11.90 when you choose the Complete Package now.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kirvano-payment-trigger block w-full py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-center transform hover:scale-[1.02] shadow-lg"
          >
            Yes! I want the Complete Package!
          </a>
          
          <Link
            to="/thanks"
            className="kirvano-refuse-trigger block w-full py-4 px-8 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 text-xl font-semibold rounded-lg transition-all duration-300 text-center"
          >
            No, I don’t accept this special offer.
          </Link>
        </div>

        {/* Timer */}
        <div className="text-center mt-8">
          <p className="text-purple-300">
          🕒 Offer available only during this session. Don’t miss this exclusive opportunity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellPageProvisions;