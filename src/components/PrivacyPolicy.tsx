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
        Política de Privacidad
        </h1>
      </div>
        
        {/* Main Content */}
        <div className="max-w-[900px] mx-auto text-center mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-8">
            En LUZ DEL AMOR, accesible en https://luzdoamor.online/, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad describe los tipos de información que recopilamos y registramos en LUZ DEL AMOR y cómo las utilizamos.
            </p>

            <p className="text-gray-600 mb-8">
            Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes en contactarnos.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Archivos de Registro</h2>
              <p className="text-gray-600">
              LUZ DEL AMOR sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando acceden a los sitios web. Todas las empresas de alojamiento lo hacen como parte del análisis de servicios. La información recopilada incluye direcciones IP, tipo de navegador, proveedor de internet (ISP), fecha/hora, páginas de referencia/salida y posiblemente el número de clics. Estos datos no están vinculados a información personal identificable. El objetivo es analizar tendencias, administrar el sitio, rastrear la navegación de los usuarios y recopilar datos demográficos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Cookies y Web Beacons</h2>
              <p className="text-gray-600">
              Como cualquier otro sitio web, LUZ DEL AMOR utiliza "cookies". Estas almacenan las preferencias de los visitantes y las páginas visitadas, optimizando la experiencia del usuario según el tipo de navegador y otra información.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Políticas de Privacidad de Terceros</h2>
              <p className="text-gray-600 mb-4">
              Nuestra Política de Privacidad no se aplica a anunciantes o sitios web de terceros. Recomendamos que consultes las políticas específicas de esos socios para obtener detalles.
              </p>
              <p className="text-gray-600">
              Tecnologías como cookies, JavaScript o web beacons pueden ser utilizadas por terceros en los anuncios mostrados en LUZ DEL AMOR. Ten en cuenta que no tenemos control sobre las cookies de terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Información de Niños</h2>
              <p className="text-gray-600">
              Priorizamos la protección de los niños en línea. LUZ DEL AMOR no recopila intencionalmente datos personales de menores de 13 años. Si descubrimos que un niño ha proporcionado información sin el consentimiento parental, eliminaremos inmediatamente dichos datos de nuestros registros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Aplicación de la Política</h2>
              <p className="text-gray-600">
              Esta Política de Privacidad se aplica solo a las actividades en línea de LUZ DEL AMOR y es válida para los visitantes de nuestro sitio web. No se aplica a información recopilada fuera de línea o por otros canales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Consentimiento</h2>
              <p className="text-gray-600">
              Al utilizar nuestro sitio web, aceptas nuestra Política de Privacidad y nuestros Términos y Condiciones.
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
                                    <a 
                                      href="mailto:isador4.lys@gmail.com" 
                                      className="text-purple-300 hover:text-purple-200 transition-colors"
                                    >
                                      Ponte en Contacto
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </footer>  
    </div>
  );
};

export default PrivacyPolicy;