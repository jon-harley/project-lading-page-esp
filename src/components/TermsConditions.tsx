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
        Términos y Condiciones
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="max-w-[900px] mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <div className="border-l-4 border-purple-500 pl-6 mb-8">
              <p className="text-gray-600">
              ¡Bienvenido(a) a LUZ DEL AMOR!
              </p>
              <p className="text-gray-600 mt-4">
              Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de LUZ DEL AMOR, ubicado en https://luzdoamor.online/.
              </p>
              <p className="text-gray-600 mt-4">
              Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes utilizando LUZ DEL AMOR si no estás de acuerdo con todos los términos y condiciones aquí establecidos.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Terminología</h2>
              <p className="text-gray-600">
              La siguiente terminología se aplica a estos Términos y Condiciones, Declaración de Privacidad y Aviso de Exención de Responsabilidad, así como a todos los Acuerdos: "Cliente", "Tú" y "Tu" se refieren a ti, la persona que accede a este sitio y está de acuerdo con los términos y condiciones de la Empresa. "La Empresa", "Nosotros", "Nuestro(a)" y "Nos" se refieren a nuestra Empresa. "Parte", "Partes" o "Nosotros" se refieren tanto al Cliente como a nosotros. Todos los términos se refieren a la oferta, aceptación y consideración del pago necesario para realizar nuestra atención al Cliente de la forma más adecuada, con el propósito expreso de satisfacer las necesidades del Cliente en relación con la prestación de los servicios declarados por la Empresa, de acuerdo con y sujeto a las leyes vigentes en los Países Bajos. Cualquier uso de la terminología anterior u otras palabras en singular, plural, con mayúsculas y/o él/ella o ellos/ellas se considera intercambiable y, por lo tanto, se refiere a lo mismo.
              </p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Cookies</h2>
              <p className="text-gray-600">
              Utilizamos cookies. Al acceder a LUZ DEL AMOR, aceptas el uso de cookies de acuerdo con la Política de Privacidad de LUZ DEL AMOR.
              </p>
              <p className="text-gray-600 mt-4">
              La mayoría de los sitios web interactivos utilizan cookies para recuperar detalles del usuario en cada visita. Las cookies son utilizadas por nuestro sitio para permitir funcionalidades específicas y facilitar la navegación. Algunos de nuestros socios afiliados/anunciantes también pueden utilizar cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Licencia</h2>
              <p className="text-gray-600">
              Salvo disposición en contrario, LUZ DEL AMOR y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material contenido en LUZ DEL AMOR. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a este contenido para uso personal, sujeto a las restricciones establecidas en estos términos y condiciones.
              </p>
              <p className="text-gray-600 mt-4">No debes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Republicar material de LUZ DEL AMOR;</li>
                <li>Vender, alquilar o sublicenciar material de LUZ DEL AMOR;</li>
                <li>Reproducir, duplicar o copiar material de LUZ DEL AMOR;</li>
                <li>Redistribuir contenido de LUZ DEL AMOR.</li>
              </ul>
              <p className="text-gray-600 mt-4">Este Acuerdo entra en vigencia en la fecha actual.</p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Hyperlinks a Nuestro Contenido</h2>
              <p className="text-gray-600">
              Las siguientes organizaciones pueden crear enlaces a nuestro sitio sin aprobación previa por escrito:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Agencias gubernamentales;</li>
                <li>Motores de búsqueda;</li>
                <li>Organizaciones de noticias;</li>
                <li>Distribuidores de directorios en línea pueden vincularse a nuestro sitio de la misma manera que lo hacen con otros negocios listados; y</li>
                <li>Empresas Acreditadas en todo el sistema, excepto organizaciones sin fines de lucro solicitantes, centros comerciales de caridad y grupos de recaudación de fondos para caridad, que no pueden crear enlaces a nuestro sitio.</li>
              </ul>
              <p className="text-gray-600 mt-4">
              Estas organizaciones pueden crear enlaces a nuestra página de inicio, publicaciones u otra información del sitio, siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos/servicios; y (c) esté dentro del contexto del sitio de la parte vinculante.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Responsabilidad del Contenido</h2>
              <p className="text-gray-600">
              No seremos responsables por ningún contenido que aparezca en tu sitio. Aceptas protegernos y defendernos contra todas las reclamaciones que puedan surgir en tu sitio. Ningún enlace debe aparecer en ningún sitio que pueda interpretarse como difamatorio, obsceno, criminal o que infrinja, viole o defienda la violación de derechos de terceros.
              </p>
            </section>

            <section className="mb-12 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Reserva de Derechos</h2>
              <p className="text-gray-600">
              Nos reservamos el derecho de solicitar la eliminación de cualquier enlace o de todos los enlaces a nuestro sitio. Aceptas eliminar inmediatamente todos los enlaces a nuestro sitio a petición. También nos reservamos el derecho de modificar estos términos y condiciones y nuestra política de enlaces en cualquier momento. Al continuar enlazando a nuestro sitio, aceptas estar vinculado y seguir estos términos y condiciones de vinculación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Exención de Responsabilidad</h2>
              <p className="text-gray-600">
              En la medida máxima permitida por la legislación aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio y el uso de este sitio. Nada en esta exención de responsabilidad:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Limitará o excluirá nuestra o tu responsabilidad por muerte o daño personal;</li>
                <li>Limitará o excluirá nuestra o tu responsabilidad por fraude o declaración fraudulenta;</li>
                <li>Limitará cualquiera de nuestras o tus responsabilidades de una manera no permitida por la legislación aplicable; o</li>
                <li>Excluirá cualquiera de nuestras o tus responsabilidades que no puedan ser excluidas de acuerdo con la legislación aplicable.</li>
              </ul>
              <p className="text-gray-600 mt-4">
              Dado que el sitio y la información y servicios en el sitio se proporcionan de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.
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
                    <h3 className="font-semibold mb-2">Isenção de Responsabilidade</h3>
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

export default TermsConditions;