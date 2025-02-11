import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, FileText, Palette, Gift } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const UpsellPage = () => {
  const PAYMENT_URL = 'https://pay.hotmart.com/E98068564N?checkoutMode=10';

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
            ¡Felicidades! ¡Has ganado un acceso exclusivo! 🎉
          </h1>
          <p className="text-xl text-purple-200">
            ¡Has sido seleccionada para desbloquear el Paquete Visión Completa del Alma Gemela – una actualización VIP con beneficios increíbles!
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">1️⃣ Entrega Prioritária Expressa</h3>
              <p className="text-purple-200">Recibe tu retrato en hasta 5 minutos, ahorrando tiempo precioso</p>
              <p className="text-purple-300 mt-2">(Valor original: €9.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">2️⃣ Descripción Detallada del Alma Gemela</h3>
              <p className="text-purple-200">Incluye cuándo y dónde se encontrarán, las iniciales de su nombre, su profesión, personalidad, signo zodiacal y mucho más.</p>
              <p className="text-purple-300 mt-2">(Valor original: €29.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Palette className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">3️⃣ Dibujo a Color Actualizado</h3>
              <p className="text-purple-200">Retrato en colores vivos y detallados, capturando cada trazo con perfección</p>
              <p className="text-purple-300 mt-2">(Valor original: €19.90)</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Gift className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">4️⃣ Bono Exclusivo</h3>
              <p className="text-purple-200">Este bono guarda un detalle esencial, pensado especialmente para ti que buscas entender y atraer tu alma gemela. Una revelación que puede hacer toda la diferencia en tu camino.</p>
            </div>
          </div>
        </div>

        {/* Offer Box */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">💡 Oferta Limitada</h2>
          <p className="text-xl text-purple-200 mb-6">
            Estos bonos suman €98, pero los recibes por solo €6,89 al elegir el Paquete Completo ahora.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-center transform hover:scale-[1.02] shadow-lg"
          >
            ¡Sí! ¡Quiero el Paquete Completo!
          </a>
          
          <Link
            to="/thanks"
            className="block w-full py-4 px-8 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 text-xl font-semibold rounded-lg transition-all duration-300 text-center"
          >
            ¡No, no acepto esta oferta especial!
          </Link>
        </div>

        {/* Timer */}
        <div className="text-center mt-8">
          <p className="text-purple-300">
            🕒 Oferta disponible solo para esta sesión. No pierdas esta oportunidad exclusiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;