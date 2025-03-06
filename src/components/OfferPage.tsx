import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, ChevronDown, MapPin, ThumbsUp, Heart, PenTool, Shield, Clock, Sparkles, ArrowRight, AlertTriangle, FileText, Users, Star, Gift, Zap } from 'lucide-react';
import { useForm } from '../components/FormContext';

const faqs = [
  {
    question: "¿Cómo funciona el Dibujo y Lectura del Alma Gemela?",
    answer: "Los bocetos se crean a partir de lecturas intuitivas de energía. Me conecto con las energías y vibraciones asociadas a ti en el momento de la solicitud, lo que me guía en la visualización y dibujo de una posible representación de tu alma gemela. Es una combinación de intuición, percepción espiritual y expresión artística. Para algunos, estos bocetos son una exploración divertida e intrigante de posibilidades; para otros, pueden tener un significado más profundo. De cualquier forma, la experiencia está diseñada para ser positiva y edificante."
  },
  {
    question: "¿Cuál es el precio de un dibujo?",
    answer: "Debido a la calidad de mi trabajo, normalmente cobro €59,90. Sin embargo, debido al gran interés en mis servicios, actualmente estoy cobrando €19,90."
  },
  {
    question: "¿Por qué debería confiar en ti si soy escéptico(a)?",
    answer: "Soy Isadora Lys, una sensitiva que desarrolló un don único desde la infancia. Crecí en una familia con profundas raíces en prácticas espirituales y psíquicas, y pasé años perfeccionando mis habilidades. No solo dibujo; me conecto con energías y emociones en un nivel que no es visible a los ojos, permitiéndome crear una representación de tu alma gemela, tanto en la forma física como en la esencia del ser."
  },
  {
    question: "¿Aún puedo encontrar mi alma gemela, incluso si soy mayor?",
    answer: "Absolutamente. El amor y la conexión no conocen límites de edad. La edad trae sabiduría, profundidad y un rico repertorio de experiencias, cualidades que pueden atraer a un alma gemela. ¡Nunca es demasiado tarde para que el amor entre en tu vida!"
  },
  {
    question: "¿En cuánto tiempo recibiré mi dibujo y lectura?",
    answer: "Tu dibujo y lectura serán enviados por correo electrónico dentro de 10 horas. En raras ocasiones, cuando la demanda es alta, la entrega puede tardar hasta 24 horas. También existe la opción de entrega rápida en menos tiempo, disponible por un costo adicional."
  },
  {
    question: "¿Qué está incluido en mi dibujo?",
    answer: "Además del dibujo de tu alma gemela, incluyo un archivo titulado \"Cómo atraer a tu alma gemela más rápido\", que contiene insights espirituales y prácticos valiosos. También puedes optar por recibir una descripción detallada de las características y cualidades de tu alma gemela para ayudarte a reconocerla cuando sea el momento adecuado. Esta opción adicional puede seleccionarse en la página de pago y requiere un pago extra."
  },
  {
    question: "¿Reconoceré a mi alma gemela a partir del dibujo?",
    answer: "Muchas personas han descubierto que el dibujo se asemeja a alguien que ya conocen, como una pareja actual, alguien que admiran o por quien tienen sentimientos."
  },
  {
    question: "¿Cuál es la precisión de la lectura?",
    answer: "Nuestras lecturas tienen una tasa de precisión sorprendente, con más del 90% de los clientes reportando una fuerte conexión con las características reveladas. La precisión también depende de la apertura energética del lector."
  },
  {
    question: "¿Este servicio puede ayudarme si tengo más de 40 años?",
    answer: "¡Por supuesto! La edad no es una barrera para encontrar el amor verdadero. Mi servicio ha ayudado a personas de todas las edades, incluyendo a aquellas mayores de 40 años."
  },
  {
    question: "¿Y si ya conocí a mi alma gemela en el pasado?",
    answer: "El servicio puede ayudarte a identificar si alguien de tu pasado es, de hecho, tu alma gemela, o guiarte hacia una nueva conexión, si ese es tu destino."
  },
  {
    question: "¿Hay alguna garantía de que encontraré a mi alma gemela?",
    answer: "Aunque no podemos garantizar resultados específicos, nuestro servicio proporciona insights y orientaciones valiosas para ayudarte en tu viaje para encontrar el amor verdadero."
  },
  {
    question: "¿Cuánto tiempo después de recibir mi boceto puedo encontrar a mi alma gemela?",
    answer: "El tiempo varía para cada individuo. Algunos clientes encuentran a su alma gemela en semanas, mientras que para otros puede llevar más tiempo."
  },
  {
    question: "¿Este servicio es solo para personas solteras?",
    answer: "Aunque está diseñado principalmente para aquellos que buscan a su alma gemela, los insights proporcionados pueden ser valiosos para cualquier persona que desee profundizar su comprensión sobre el amor y las relaciones."
  },
  {
    question: "¿Cómo puedo comenzar?",
    answer: "Simplemente haz clic en el botón \"Revelar Mi Alma Gemela\" y sigue los pasos para completar el cuestionario. Te guiaré por el resto del proceso."
  }
];

const OfferPage = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
      };
    const { formData } = useForm();
    const firstName = formData.fullName?.split(' ')[0] || 'Querida';
    const PAYMENT_URL = 'https://pay.hotmart.com/M98060773D?checkoutMode=10';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
        ¡Estás a punto de conocer a tu alma gemela!
        </h1>
      </div>

      {/* Warning Alert */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <p className="text-yellow-300 text-xl font-semibold">
          ATENCIÓN: Puede que sientas emociones intensas después de recibir tu dibujo.
          </p>
        </div>
      </div>


      {/* Social Proof */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-8 text-center">
          <div>
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">10,000+</p>
            <p className="text-purple-200">Clientes Satisfechos</p>
          </div>
          <div>
            <Star className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">4.9/5</p>
            <p className="text-purple-200">Calificación Promedio</p>
          </div>
          <div>
            <Heart className="w-8 h-8 mx-auto mb-2 text-purple-300" />
            <p className="text-2xl font-bold text-white">95%</p>
            <p className="text-purple-200">Tasa de Precisión</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* What You'll Get Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
            Lo que obtendrás hoy:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <PenTool className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Dibujo detallado y personalizado</h3>
                  <p className="text-purple-200">Un retrato increíblemente detallado que captura no solo la apariencia física de tu alma gemela, sino también su aura única y esencia espiritual.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Lectura energética profunda</h3>
                  <p className="text-purple-200">Descubre las características únicas, personalidad y conexión espiritual de tu alma gemela a través de una lectura intuitiva detallada.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Entrega express en 24 horas</h3>
                  <p className="text-purple-200">Recibe tu retrato y lectura en tiempo récord. ¡Cada momento cuenta cuando se trata del amor verdadero!</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Guía de manifestación del amor</h3>
                  <p className="text-purple-200">Recibe una guía exclusiva con técnicas y rituales para atraer a tu alma gemela más rápidamente a tu vida.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Bonos exclusivos</h3>
                  <p className="text-purple-200">
                    <span className="text-pink-300">BONO 1:</span> Ritual de conexión espiritual
                    <br />
                    <span className="text-pink-300">BONO 2:</span> Meditación guiada para atraer el amor
                    <br />
                    <span className="text-pink-300">BONO 3:</span> Calendario astrológico para el amor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Personalized Button */}
        <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, su alma gemela está lista para conocerla</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div> 

        {/* My Work Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">Ejemplos de mi trabajo...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/G7sBecU.jpg"
                alt="Exemplo 1"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/9YwNBtb.png"
                alt="Exemplo 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/IsXiQYE.jpg"
                alt="Exemplo 3"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
            <section className="py-16 px-4 bg-white/5 mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <PenTool className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Retrato Energético</h3>
                    <p className="text-purple-200">Dibujo único basado en tu energía personal y conexión espiritual</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Clock className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
                    <p className="text-purple-200">Tu retrato y análisis en hasta 24 horas después de la solicitud</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Heart className="w-8 h-8 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-2">Conexión Profunda</h3>
                    <p className="text-purple-200">Descubre detalles únicos sobre tu conexión predestinada</p>
                  </div>
                </div>
              </div>
            </section>

      {/* Personalized Button */}
      <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, su alma gemela está lista para conocerla</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        {/* New Offerings Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Si quieres vencer las probabilidades y encontrar a tu alma gemela a toda costa, quiero ayudarte
              </h2>
              <p className="text-xl text-purple-200">
              A través del LUZ DEL AMOR Sketch, tendrás una experiencia personalizada inigualable para encontrar a tu alma gemela, que incluye:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Detailed Soulmate Drawing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <PenTool className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Dibujo detallado del alma gemela
                </h3>
                <img 
                  src="https://i.imgur.com/xB4xd25.png"
                  alt="Retrato Exemplo"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                Un retrato meticulosamente dibujado que captura la esencia y apariencia de tu alma gemela, incluyendo detalles únicos y características distintivas.
                </p>
              </div>

              {/* 24h Response Time */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Clock className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Tiempo de respuesta de hasta 24 horas
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80"
                  alt="Relógio"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                En solo 24 horas, recibirás tu retrato, un dibujo especial de la persona con la que estás destinado(a) a estar. Este boceto te ayuda a identificar tu verdadero amor cuando lo conoces. Es como una mirada al futuro de tu amor, mostrándote el futuro con tu amor real y duradero.
                </p>
              </div>

              {/* Location Prediction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                Predicción del lugar del encuentro
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80"
                  alt="Local de Encontro"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                Además del retrato, recibirás una descripción detallada del lugar donde el destino proporcionará tu encuentro, permitiéndote estar preparado(a) para este momento especial.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Historias de Conexiones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/NMewwQ6.png"
                alt="Depoimento 1"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/3B5oDLj.png"
                alt="Depoimento 2"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/6UZAlvz.png"
                alt="Depoimento 3"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all">
              <img
                src="https://i.imgur.com/ed0QMIm.png"
                alt="Depoimento 4"
                className="w-full h-auto rounded-lg mb-4"
              />
            </div>
            
          </div>
        </div>
      </section> 

        {/* Special Offer */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-6">Oferta Especial</h2>
            <div className="mb-6">
              <p className="text-2xl text-purple-200 mb-2">Paquete de Dibujo del Alma Gemela</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-400 line-through text-2xl">€59,90</span>
                <span className="text-4xl font-bold text-white">€19,90</span>
              </div>
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] mb-6"
            >
              <span>Revelar Mi Alma Gemela Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Shield className="w-5 h-5" />
              <span>Garantía de satisfacción de 7 días o tu dinero de vuelta</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Estoy completamente encantada con el dibujo a color y la descripción detallada de mi futuro compañero que recibí de la Psíquica Isadora. Desde el momento en que vi el dibujo, supe que era una representación precisa del hombre con quien estoy destinada a estar. La atención a los detalles es increíble."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/WWnKs4v.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Beatriz Alonso</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Gente, ¡el dibujo de mi alma gemela quedó idéntico! Solo pensé que podría ser un poco más guapo, pero valió cada centavo."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/DMQxbG1.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Teresa Sánchez</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "¡La experiencia fue increíble! Ella se esmeró en los detalles, él es súper romántico, guapo y alto."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/09qTYPs.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Carmen Fernández</h4>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Compré el retrato con Isadora, y ella prometía que yo encontraría a mi alma gemela en hasta 30 días. ¡Qué mentira! En solo DOS SEMANAS, ya encontré al amor de mi vida. Mi único arrepentimiento fue no haberlo hecho antes."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.imgur.com/PwaZB2c.png"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Elena García</h4>
              </div>
            </div>
          </div>
        </section>

       {/* Detailed Description Section */}
       <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Detailed Description */}
            <div className="text-center space-y-4">
              <FileText className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">DESCRIPCIÓN DETALLADA</h3>
              <span className="text-red-400 text-sm font-normal">[Adición Recomendada]</span>
              <p className="text-purple-200">
              Proporcionaré una descripción detallada de tu futura alma gemela, incluyendo rasgos de personalidad, comportamiento, carrera potencial e iniciales del nombre.
              </p>
            </div> 

       {/* Prediction */}
       <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">PREVISIÓN</h3>
              <p className="text-purple-200">
              Si optas por la adición de Descripción del Alma Gemela, proporcionaré información sobre cuándo y dónde encontrarás a tu alma gemela, junto con detalles como signo del zodiaco, profesión e iniciales del nombre.
              </p>
            </div>

            {/* Soulmate Drawing */}
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">DIBUJO DEL ALMA GEMELA</h3>
              <p className="text-purple-200">
              Obtén un dibujo digital personalizado hecho específicamente para ti.
              </p>
            </div>

            {/* Satisfaction */}
            <div className="text-center space-y-4">
              <ThumbsUp className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">SATISFACCIÓN</h3>
              <p className="text-purple-200">
              Ofrezco un 100% de satisfacción en mis dibujos del alma gemela.
              </p>
            </div>
          </div>
        </section>  

      <div className="text-center mb-12">
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4">
                ¡No te lo pierdas! ¡Sólo hoy!
                ¡Al comprar ahora recibirás acceso exclusivo! 🎉
                </h1>
                <p className="text-xl text-purple-200">
                ¡Una actualización VIP con increíbles beneficios!
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
            Estos bonos suman €98, pero los recibes por solo €19,90 al elegir el Paquete Completo ahora.
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
                  ¡Sí! ¡Quiero saber todo sobre mi alma gemela ahora!
                </a>
              </div>
         {/* Timer */}
        <div className="text-center mt-8">
          <p className="text-purple-300">
            🕒 Oferta disponible solo para esta sesión. No pierdas esta oportunidad exclusiva.
          </p>
        </div>             

        {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              >
                <button
                  className="w-full px-6 py-4 cursor-pointer flex items-center justify-between"
                  onClick={() => handleFaqClick(index)}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 text-purple-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Personalized Button */}
    <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, su alma gemela está lista para conocerla.</span>
            <ArrowRight className="w-6 h-6" />
          </a>
    </div>

    {/* Footer */}
          <footer className="py-8 px-4 border-t border-purple-800">
            <div className="max-w-4xl mx-auto">
              {/* Disclaimer */}
              <div className="text-sm text-purple-300/80 mb-8 space-y-4">
                <h3 className="font-semibold mb-2">Exención de Responsabilidad</h3>
                <p>
                Los nombres de empresas, productos y servicios mencionados en este sitio web se utilizan solo con fines de identificación y no implican ningún tipo de respaldo. Todas las marcas registradas pertenecen exclusivamente a sus respectivos propietarios.
                </p>
                <p>
                Aviso Legal: Al adquirir nuestros servicios, reconoces que se trata de un producto destinado al entretenimiento y no a un servicio profesional de asesoramiento psicológico, legal o de salud. No soy psicólogo, abogado ni profesional de la salud, y las lecturas ofrecidas no sustituyen orientación profesional en estas áreas.
                </p>
                <p>
                Los retratos e interpretaciones proporcionados se basan en percepciones intuitivas y no garantizamos que la persona dibujada corresponda a alguien que encuentres en la vida real. Las experiencias varían de persona a persona y no hay promesas de resultados específicos.
                </p>
                <p>
                Además, los testimonios, estudios de caso y ejemplos presentados en esta página reflejan experiencias individuales y no garantizan que todos tengan los mismos o similares resultados. Todas las ventas son finales, pero garantizamos la entrega del servicio según lo descrito.
                </p>
                <p>
                Si tienes dudas, recomendamos que tomes tu decisión con discernimiento y, si es necesario, busques asesoramiento profesional.
                </p>
              </div>
    
              {/* Copyright and Links */}
              <div className="text-center space-y-4">
                <p className="text-purple-300">
                  © 2024 Luz Del Amor. Todos los derechos reservados.
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                  <Link to="/privacyPolicy" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Política de Privacidad
                  </Link>
                  <Link to="/terms" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Términos y Condiciones
                  </Link>
                  <Link to="/contact" className="text-purple-300 hover:text-purple-200 transition-colors">
                  Ponte en Contacto
                  </Link>
                </div>
              </div>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default OfferPage;