import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Clock, Shield, ChevronDown, Sparkles, PenTool } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo funciona el Dibujo y Lectura del Alma Gemela?",
    answer: "Los bocetos se crean a partir de lecturas intuitivas de energía. Me conecto con las energías y vibraciones asociadas a ti en el momento de la solicitud, lo que me guía en la visualización y dibujo de una posible representación de tu alma gemela. Es una combinación de intuición, percepción espiritual y expresión artística. Para algunos, estos bocetos son una exploración divertida e intrigante de posibilidades; para otros, pueden tener un significado más profundo. De cualquier forma, la experiencia está diseñada para ser positiva y edificante."
  },
  {
    question: "¿Cuál es el precio de un dibujo?",
    answer: "Debido a la calidad de mi trabajo, normalmente cobro €59,90. Sin embargo, debido al gran interés en mis servicios, actualmente estoy cobrando €9,90."
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

function HomePage() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white">
      {/* Hero Section */}
      <header className="relative py-20 text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-purple-300 animate-pulse" />
          <h1 className="text-5xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          ¡Descubre la Apariencia de Tu Alma Gemela!
          </h1>
          <p className="text-xl text-purple-200 mb-8">
          A través de una lectura intuitiva, revelamos la apariencia de tu conexión predestinada
          </p>
          <button 
            onClick={() => navigate('/offerPage')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25"
          >
            Solicitar Mi Dibujo Ahora
          </button>
        </div>
      </header>

      {/* About Isadora Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-8">
          <img 
            src="https://i.imgur.com/v9fXwBq.png" 
            alt="Isadora" 
            className="w-64 h-64 object-cover rounded-lg shadow-xl"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-serif mb-6">Sobre Isadora Lys</h2>
            <p className="text-purple-200">
            Soy Isadora, una psíquica con más de 12 años de experiencia especializada en lectura de mapa astral, lecturas intuitivas y conexiones espirituales. Desde joven, descubrí mi don de ver más allá del plano físico y captar la esencia de las almas destinadas a encontrarse.
            </p>
            <p className="text-purple-200">
            Mi misión de reunir almas gemelas comenzó hace más de 15 años, cuando tuve una visión impactante sobre conexiones predestinadas. Desde entonces, he estado ayudando a miles de personas a reconocer y encontrar sus verdaderos amores, guiándolos con precisión y sensibilidad.
            </p>
            <p className="text-purple-200">
            Con mi habilidad única, ya he logrado unir innumerables almas gemelas, con un índice de acierto sorprendente. ¡Ahora, quiero ayudarte!
            </p>
          </div>
        </div>
      </section>

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
                src="https://i.imgur.com/dYF4eP3.jpg"
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
      <section className="py-16 px-4">
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

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Preguntas Frecuentes</h2>
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

      {/* Guarantee */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-purple-300" />
          <h2 className="text-3xl font-serif mb-4">Garantía de Satisfacción</h2>
          <p className="text-xl text-purple-200 mb-8">
          Si no quedas completamente satisfecho con tu revelación, te devolvemos tu inversión íntegramente en hasta 7 días.
          </p>
          <button 
            onClick={() => navigate('/offerPage')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25"
          >
            Revelar Mi Alma Gemela
          </button>
        </div>
      </section>

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
  );
}


export default HomePage;