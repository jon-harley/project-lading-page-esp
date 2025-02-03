import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, ThumbsUp, Heart, PenTool, Shield, Clock, Sparkles, CheckCircle, ArrowRight, AlertTriangle, FileText } from 'lucide-react';
import { useForm } from '../components/FormContext';

const faqs = [
    {
      question: "Como funciona o Desenho e Leitura da Alma Gêmea?",
      answer: "Os esboços são criados a partir de leituras intuitivas de energia. Conecto-me com as energias e vibrações associadas a você no momento do pedido, o que me guia na visualização e desenho de uma possível representação da sua alma gêmea. É uma combinação de intuição, percepção espiritual e expressão artística. Para alguns, esses esboços são uma exploração divertida e intrigante de possibilidades; para outros, podem ter um significado mais profundo. De qualquer forma, a experiência é projetada para ser positiva e edificante."
    },
    {
      question: "Qual é o preço de um desenho?",
      answer: "Devido à qualidade do meu trabalho, normalmente cobro R$ 61,67. No entanto, devido ao grande interesse em meus serviços, atualmente estou cobrando R$ 37."
    },
    {
      question: "Por que devo confiar em você se estou cético(a)?",
      answer: "Sou Isadora Lys, uma sensitiva que desenvolveu um dom único desde a infância. Cresci em uma família com profundas raízes em práticas espirituais e psíquicas, e passei anos aperfeiçoando minhas habilidades. Não apenas desenho; conecto-me com energias e emoções em um nível que não é visível aos olhos, permitindo-me criar uma representação da sua alma gêmea, tanto na forma física quanto na essência do ser."
    },
    {
      question: "Ainda posso encontrar minha alma gêmea, mesmo sendo idoso(a)?",
      answer: "Absolutamente. O amor e a conexão não conhecem limites de idade. A idade traz sabedoria, profundidade e um rico repertório de experiências, qualidades que podem atrair uma alma gêmea. Nunca é tarde demais para o amor entrar em sua vida!"
    },
    {
      question: "Em quanto tempo receberei meu desenho e leitura?",
      answer: "Seu desenho e leitura serão enviados por e-mail dentro de 10 horas. Em raras ocasiões, quando a demanda é alta, a entrega pode levar até 24 horas. Há também a opção de entrega rápida em menos tempo, disponível por um custo adicional."
    },
    {
      question: "O que está incluído no meu desenho?",
      answer: "Além do desenho da sua alma gêmea, incluo um arquivo intitulado \"Como atrair sua alma gêmea mais rápido\", que contém insights espirituais e práticos valiosos. Você também pode optar por receber uma descrição detalhada das características e qualidades da sua alma gêmea para ajudá-lo(a) a reconhecê-la quando for o momento certo. Esta opção extra pode ser selecionada na página de checkout e requer pagamento adicional."
    },
    {
      question: "Vou reconhecer minha alma gêmea a partir do desenho?",
      answer: "Muitas pessoas descobriram que o desenho se assemelha a alguém que já conhecem, como um parceiro atual, alguém que admiram ou por quem têm sentimentos."
    },
    {
      question: "Qual é a precisão da leitura?",
      answer: "Nossas leituras têm uma taxa de precisão surpreendente, com mais de 90% dos clientes relatando forte conexão com as características reveladas. A precisão também depende da abertura energética do leitor."
    },
    {
      question: "Este serviço pode me ajudar se eu tiver mais de 40 anos?",
      answer: "Claro! A idade não é uma barreira para encontrar o amor verdadeiro. Meu serviço ajudou pessoas de todas as idades, incluindo aquelas com mais de 40 anos."
    },
    {
      question: "E se eu já tiver conhecido minha alma gêmea no passado?",
      answer: "O serviço pode ajudá-lo(a) a identificar se alguém do seu passado é, de fato, sua alma gêmea, ou guiá-lo(a) em direção a uma nova conexão, se esse for o seu destino."
    },
    {
      question: "Há alguma garantia de que encontrarei minha alma gêmea?",
      answer: "Embora não possamos garantir resultados específicos, nosso serviço fornece insights e orientações valiosas para ajudá-lo(a) em sua jornada para encontrar o amor verdadeiro."
    },
    {
      question: "Quanto tempo depois de receber meu esboço posso encontrar minha alma gêmea?",
      answer: "O tempo varia para cada indivíduo. Alguns clientes encontram sua alma gêmea em semanas, enquanto para outros pode levar mais tempo."
    },
    {
      question: "Este serviço é apenas para pessoas solteiras?",
      answer: "Embora seja projetado principalmente para aqueles que buscam sua alma gêmea, os insights fornecidos podem ser valiosos para qualquer pessoa que deseje aprofundar sua compreensão sobre amor e relacionamentos."
    },
    {
      question: "Como posso começar?",
      answer: "Basta clicar no botão \"Revelar Minha Alma Gêmea\" e seguir os passos para preencher o questionário. Eu o(a) guiarei pelo restante do processo."
    }
  ];

const OfferPage = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
      };
    const { formData } = useForm();
    const firstName = formData.fullName.split(' ')[0];
    const PAYMENT_URL = 'https://apphive.mycartpanda.com/checkout/171437752:1';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 py-16 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-300" />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
          Você Está Prestes a Conhecer Sua Alma Gêmea!
        </h1>
      </div>

      {/* Warning Alert */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-6 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <p className="text-yellow-300 text-xl font-semibold">
            ATENÇÃO: Você Pode Sentir Emoções Intensamente Após Receber Seu Desenho.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Benefits Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-serif text-center text-white mb-12">O Que Você Vai Receber:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Desenho Detalhado e Personalizado</h3>
                  <p className="text-purple-200">Você receberá um desenho incrivelmente detalhado que não apenas captura a aparência física de sua alma gêmea, mas também sua aura única, revelando sua essência e energia mais profundas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Versão Impressa em Alta Qualidade</h3>
                  <p className="text-purple-200">Imprima seu esboço de alta qualidade e mantenha-o por perto para aproveitar o poder da visualização. Ao focar regularmente nesta imagem, você estará ativamente manifestando sua combinação perfeita em sua vida.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Arquivo Digital em Alta Resolução</h3>
                  <p className="text-purple-200">Cada ilustração é criada em alta resolução e entregue em formato digital - garantindo que a imagem de sua alma gêmea esteja sempre com você, acessível em qualquer dispositivo, sempre que precisar de um lembrete do amor que o aguarda.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 flex-shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Entrega Expressa em até 24 Horas</h3>
                  <p className="text-purple-200">Receba seu esboço em até 24 horas. Cada momento conta quando se trata de se unir à sua alma gêmea, e estou comprometido em ajudá-lo a iniciar essa aventura transformadora o mais rápido possível.</p>
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
            <span>{firstName}, sua alma gêmea está pronta para conhecê-la</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div> 

        {/* My Work Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">Exemplos do meu trabalho...</h2>
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

      {/* Personalized Button */}
      <div className="text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{firstName}, sua alma gêmea está pronta para conhecê-la</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        {/* New Offerings Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Se você quer vencer as probabilidades e encontrar sua alma gêmea a todo custo, eu quero ajudar você
              </h2>
              <p className="text-xl text-purple-200">
                Por meio do LUZ DEL AMOR Sketch, você terá uma experiência personalizada inigualável para encontrar sua alma gêmea, que inclui:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Detailed Soulmate Drawing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <PenTool className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Desenho detalhado de alma gêmea
                </h3>
                <img 
                  src="https://i.imgur.com/G7sBecU.jpg"
                  alt="Retrato Exemplo"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                  Um retrato meticulosamente desenhado que captura a essência e aparência da sua alma gêmea, incluindo detalhes únicos e características distintivas.
                </p>
              </div>

              {/* 24h Response Time */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Clock className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Tempo de resposta de até 24 horas
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80"
                  alt="Relógio"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                  Em apenas 24 horas, você receberá seu Retrato - um desenho especial da pessoa com quem você está destinado a ficar. Este esboço ajuda você a identificar seu verdadeiro amor quando você o conhece. É como uma espiadinha no seu futuro amor, mostrando a você o futuro com seu amor real e duradouro.
                </p>
              </div>

              {/* Location Prediction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 mx-auto text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Previsão do local do encontro
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80"
                  alt="Local de Encontro"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-purple-200">
                  Além do retrato, você receberá uma descrição detalhada do local onde o destino proporcionará seu encontro, permitindo que você esteja preparado(a) para este momento especial.
                </p>
              </div>
            </div>
          </div>
        </section>  

        {/* Special Offer */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-6">Oferta Especial</h2>
            <div className="mb-6">
              <p className="text-2xl text-purple-200 mb-2">Pacote de Desenho da Alma Gêmea</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-400 line-through text-2xl">R$ 97</span>
                <span className="text-4xl font-bold text-white">R$ 37</span>
              </div>
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] mb-6"
            >
              <span>Revelar Minha Alma Gêmea Agora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Shield className="w-5 h-5" />
              <span>Garantia de satisfação de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Estou completamente encantada com o desenho colorido e a descrição detalhada do meu futuro companheiro que recebi da Psíquica Isadora.
               Desde o momento em que vi o desenho, soube que era uma representação precisa do homem com quem estou destinada a estar. A atenção aos detalhes é incrível."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Ana Paula</h4>
                <p className="text-sm text-purple-300">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Gente, o desenho da minha alma gêmea ficou idêntico! Só achei que ele poderia ser um pouco mais bonito, mas valeu cada centavo."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Maria Clara</h4>
                <p className="text-sm text-purple-300">São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "A experiência foi incrível! ela caprichou nos detalhes, ele é super romântico, gato e alto."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Maria Clara</h4>
                <p className="text-sm text-purple-300">São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-purple-200 text-lg italic mb-4">
              "Recomendo altamente o serviço da Psíquica Isa a todos que estão buscando sua alma gêmea.
               Sua habilidade em capturar a essência do meu parceiro ideal em um desenho e fornecer uma descrição precisa é realmente notável.
               É uma ferramenta valiosa para quem busca encontrar sua alma gêmea."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                alt="Cliente"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white">Maria Clara</h4>
                <p className="text-sm text-purple-300">São Paulo, SP</p>
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
              <h3 className="text-xl font-semibold text-white">DESCRIÇÃO DETALHADA</h3>
              <span className="text-red-400 text-sm font-normal">[Adição Recomendada]</span>
              <p className="text-purple-200">
                Fornecerei uma descrição detalhada de sua futura alma gêmea, incluindo traços de personalidade, comportamento, carreira potencial e iniciais do nome.
              </p>
            </div> 

       {/* Prediction */}
       <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">PREVISÃO</h3>
              <p className="text-purple-200">
                Se você optar pela adição de Descrição da Alma Gêmea, fornecerei insights sobre quando e onde você encontrará sua alma gêmea, juntamente com detalhes como signo do zodíaco, profissão e iniciais do nome.
              </p>
            </div>

            {/* Soulmate Drawing */}
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">DESENHO DA ALMA GÊMEA</h3>
              <p className="text-purple-200">
                Obtenha um desenho digital personalizado feito especificamente para você.
              </p>
            </div>

            {/* Satisfaction */}
            <div className="text-center space-y-4">
              <ThumbsUp className="w-12 h-12 mx-auto text-purple-400" />
              <h3 className="text-xl font-semibold text-white">SATISFAÇÃO</h3>
              <p className="text-purple-200">
                Estou oferecendo 100% de satisfação nos meus desenhos de alma gêmea.
              </p>
            </div>
          </div>
        </section>  

        {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Perguntas Frequentes</h2>
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
            <span>{firstName}, sua alma gêmea está pronta para conhecê-la</span>
            <ArrowRight className="w-6 h-6" />
          </a>
    </div>

    {/* Footer */}
          <footer className="py-8 px-4 border-t border-purple-800">
            <div className="max-w-4xl mx-auto">
              {/* Disclaimer */}
              <div className="text-sm text-purple-300/80 mb-8 space-y-4">
                <h3 className="font-semibold mb-2">Isenção de Responsabilidade</h3>
                <p>
                  Os nomes de empresas, produtos e serviços mencionados neste site são utilizados apenas para fins de identificação e não implicam em qualquer tipo de endosso. Todas as marcas registradas pertencem exclusivamente aos seus respectivos proprietários.
                </p>
                <p>
                  Aviso Legal: Ao adquirir nossos serviços, você reconhece que se trata de um produto voltado para entretenimento e não de um serviço profissional de aconselhamento psicológico, jurídico ou de saúde. Não sou psicólogo, advogado ou profissional da saúde, e as leituras oferecidas não substituem orientação profissional nessas áreas.
                </p>
                <p>
                  Os retratos e interpretações fornecidos são baseados em percepções intuitivas e não garantimos que a pessoa desenhada corresponda a alguém que você encontrará na vida real. As experiências variam de pessoa para pessoa e não há promessa de resultados específicos.
                </p>
                <p>
                  Além disso, depoimentos, estudos de caso e exemplos apresentados nesta página refletem experiências individuais e não garantem que todos terão os mesmos ou semelhantes resultados. Todas as vendas são finais, mas garantimos a entrega do serviço conforme descrito.
                </p>
                <p>
                  Se tiver dúvidas, recomendamos que tome sua decisão com discernimento e, se necessário, busque aconselhamento profissional.
                </p>
              </div>
    
              {/* Copyright and Links */}
              <div className="text-center space-y-4">
                <p className="text-purple-300">
                  © 2024 Luz Del Amor. Todos os direitos reservados.
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                  <Link to="/privacyPolicy" className="text-purple-300 hover:text-purple-200 transition-colors">
                    Política de Privacidade
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
    </div>
  );
};

export default OfferPage;