import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BellRing as Ring, Heart, Calendar } from 'lucide-react';
import { useForm } from '../components/FormContext';

interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: 'button' | 'text' | 'date' | 'zodiac' | 'relationship' | 'tarot' | 'testimonials';
  options?: {
    id: string;
    label: string;
    icon?: string;
    color?: string;
    image?: string;
  }[];
}

const zodiacSigns = [
  { id: "aries", label: "Aries", icon: "https://i.imgur.com/jpcOOvk.png", color: "from-black-600 to-black-800" },
  { id: "taurus", label: "Tauro", icon: "https://i.imgur.com/wMMeiNR.png", color: "from-black-600 to-black-800" },
  { id: "gemini", label: "Géminis", icon: "https://i.imgur.com/l3f0Ui5.png", color: "from-black-600 to-black-800" },
  { id: "cancer", label: "Cáncer", icon: "https://i.imgur.com/jiwlVl8.png", color: "from-black-600 to-black-800" },
  { id: "leo", label: "Leo", icon: "https://i.imgur.com/Wz3j0L7.png", color: "from-black-600 to-black-800" },
  { id: "virgo", label: "Virgo", icon: "https://i.imgur.com/eIfUFjf.png", color: "from-black-600 to-black-800" },
  { id: "libra", label: "Libra", icon: "https://i.imgur.com/VCBcWdy.png", color: "from-black-600 to-black-800" },
  { id: "scorpio", label: "Escorpio", icon: "https://i.imgur.com/EZU0CcR.png", color: "from-black-600 to-black-800" },
  { id: "sagittarius", label: "Sagitario", icon: "https://i.imgur.com/dn7kiMq.png", color: "from-black-600 to-black-800" },
  { id: "capricorn", label: "Capricornio", icon: "https://i.imgur.com/GMBggtR.png", color: "from-black-600 to-black-800" },
  { id: "aquarius", label: "Acuario", icon: "https://i.imgur.com/IaYqayy.png", color: "from-black-600 to-black-800" },
  { id: "pisces", label: "Piscis", icon: "https://i.imgur.com/dzFRtPw.png", color: "from-black-600 to-black-800" }
];

const relationshipStatus = [
  { id: "married", label: "Casado(a)", icon: "💑" },
  { id: "dating", label: "En una relación", icon: "💕" },
  { id: "single", label: "Soltero(a)", icon: "💝" },
  { id: "engaged", label: "Comprometido(a)", icon: "💍" },
  { id: "separated", label: "Separado(a)", icon: "💔" },
  { id: "widowed", label: "Viudo(a)", icon: "🕊️" }
];

const tarotCards = Array(8).fill(null).map((_, index) => ({
  id: `card-${index + 1}`,
  label: `Carta ${index + 1}`,
  image: "https://i.imgur.com/RYZmlAr.png"
}));

const testimonials = [
  { id: "4", label: "Depoimento 4", type: "video", url: "https://i.imgur.com/kqC6iRz.mp4" },
  { id: "1", label: "Depoimento 1", type: "image", url: "https://i.imgur.com/pgVFxCx.png" },
  { id: "2", label: "Depoimento 2", type: "image", url: "https://i.imgur.com/3FUiOLX.png" },
  { id: "3", label: "Depoimento 3", type: "image", url: "https://i.imgur.com/Ib8Xf4s.png" },
  { id: "5", label: "Depoimento 5", type: "image", url: "https://i.imgur.com/NBED6aI.png" },
  { id: "6", label: "Depoimento 6", type: "image", url: "https://i.imgur.com/WmXqTlV.jpg" }
];

const questions: Question[] = [
  {
    id: 14,
    title:"ES HORA DE CONOCER A LA PERSONA QUE EL UNIVERSO RESERVÓ PARA TI EN 2025!",
    subtitle:"👇🏻 Responde a la lectura a continuación para descubrir quién es tu alma gemela 👇🏻",
    type: "tarot",
    options: tarotCards
  },
  {
    id: 1,
    title: "¿Crees que existe alguien especial destinado para ti?",
    type: "button",
    options: [
      { id: "yes", label: "Sí" },
      { id: "maybe", label: "No lo sé aún" }
    ]
  },
  {
    id: 2,
    title: "¿Cuál es tu estado civil?",
    type: "relationship",
    options: relationshipStatus
  },
  {
    id: 3,
    title: "¿Cuál es tu primer nombre?",
    type: "text"
  },
  {
    id: 4,
    title: "¿Cuál es tu fecha de nacimiento?",
    type: "date"
  },
  {
    id: 5,
    title: "¿Cuál es tu signo?",
    type: "zodiac",
    options: zodiacSigns
  },
  {
    id: 6,
    title: "¿Te has decepcionado con relaciones que parecían prometedoras al principio?",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "no", label: "NO" }
    ]
  },
  {
    id: 7,
    title: "¿Alguna vez has sentido que estás destinada a estar sola y nunca encontrar a alguien que realmente te entienda y ame tal como eres?",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "no", label: "NO" }
    ]
  },
  {
    id: 8,
    title: "¿Te sientes así?",
    subtitle: "¿Alguna vez te has preguntado si existe alguien que realmente te ame por lo que eres? A veces, la soledad puede ser abrumadora, el miedo a pasar la vida sin encontrar a esa persona especial puede ser paralizante. Esto puede hacerte sentir que algo falta, que quizás nunca encontrarás a alguien que llene ese vacío.",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "maybe", label: "Tal vez" }
    ]
  },
  {
    id: 9,
    title: "¿Crees que la astrología es capaz de revelar el rostro de tu alma gemela?",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "no", label: "NO" }
    ]
  },
  {
    id: 10,
    title: "¿Te gustaría ver hoy mismo el rostro de tu alma gemela a través de la astrología?",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "no", label: "NO" }
    ]
  },
  {
    id: 11,
    title: "¿Y te gustaría saber también exactamente cuándo y dónde encontrarás a tu alma gemela?",
    type: "button",
    options: [
      { id: "yes", label: "SÍ" },
      { id: "no", label: "NO" }
    ]
  },
  {
    id: 12,
    title: "¿Y si te dijera que existe un camino para encontrar esa conexión profunda que tanto deseas?",
    subtitle: "Al dar este primer paso, estarás más cerca de vivir el amor verdadero que siempre has soñado.",
    type: "button",
    options: [
      { id: "continue", label: "Continuar" }
    ]
  },
  {
    id: 15,
    title: "Ahora mira estos testimonios:",
    type: "testimonials",
    options: testimonials
  }
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { setFormData } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    const duration = 3000;
    const steps = 100;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsAnalyzing(false);
        navigate('/offerPage');
      } else {
        setAnalysisProgress(currentProgress);
      }
    }, stepDuration);
  };

  const handleFinishQuiz = () => {
    setFormData(prev => ({
      ...prev,
      fullName: firstName.trim(),
      birthDate,
      quizAnswers: answers
    }));
    simulateAnalysis();
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: optionId }));
    
    if (question.type === 'button' || question.type === 'relationship' || question.type === 'zodiac') {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedOption(answers[questions[currentQuestion + 1]?.id] || null);
        } else {
          handleFinishQuiz();
        }
      }, 300);
    }
  };

  const handleTextSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && firstName.trim() !== '') {
      setFormData(prev => ({
        ...prev,
        fullName: firstName.trim()
      }));
      handleNext();
    }
  };

  const handleDateSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
    if (e.target.value) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleCardSelect = (cardId: string) => {
    const newSelectedCards = selectedCards.includes(cardId)
      ? selectedCards.filter(id => id !== cardId)
      : [...selectedCards, cardId].slice(0, 3);
    
    setSelectedCards(newSelectedCards);
    
    if (newSelectedCards.length === 3) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (question.type === 'text') {
        setFormData(prev => ({
          ...prev,
          fullName: firstName.trim()
        }));
      }
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(answers[questions[currentQuestion + 1]?.id] || null);
      setSelectedCards([]);
    } else {
      handleFinishQuiz();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null);
    }
  };

  const question = questions[currentQuestion];

  const canProceed = () => {
    switch (question.type) {
      case 'text':
        return firstName.trim() !== '';
      case 'date':
        return birthDate !== '';
      case 'tarot':
        return selectedCards.length === 3;
      case 'testimonials':
        return true;
      default:
        return selectedOption !== null;
    }
  };

  const renderTestimonial = (testimonial: any) => {
    if (testimonial.type === 'video') {
      return (
        <video
          src={testimonial.url}
          controls
          className="w-full rounded-xl"
          style={{ maxHeight: '70vh' }}
        />
      );
    }
    return (
      <img
        src={testimonial.url}
        alt={testimonial.label}
        className="w-full object-contain rounded-xl"
        style={{ maxHeight: '70vh' }}
      />
    );
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Analisando seus dados...</h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-200">
                    Taxa de carregamento
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-purple-200">
                    {Math.round(analysisProgress)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200/20">
                <div
                  style={{ width: `${analysisProgress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderQuestion = () => {
    switch (question.type) {
      case 'text':
        return (
          <div className="w-full max-w-md mx-auto">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyPress={handleTextSubmit}
              placeholder="Escribe tu nombre"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
            />
          </div>
        );

      case 'date':
        return (
          <div className="w-full max-w-md mx-auto">
            <input
              type="date"
              value={birthDate}
              onChange={handleDateSubmit}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        );

      case 'zodiac':
        return (
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {question.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  relative p-4 rounded-xl transition-all duration-300
                  ${selectedOption === option.id
                    ? 'bg-purple-500/30 border-2 border-purple-500'
                    : 'bg-purple-500/10 border-2 border-transparent hover:border-purple-500/50'
                  }
                `}
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${option.color} p-2 mb-2`}>
                  <img src={option.icon} alt={option.label} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        );

      case 'relationship':
        return (
          <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            {question.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  relative p-4 rounded-xl transition-all duration-300
                  ${selectedOption === option.id
                    ? 'bg-purple-500/30 border-2 border-purple-500'
                    : 'bg-purple-500/10 border-2 border-transparent hover:border-purple-500/50'
                  }
                `}
              >
                <div className="text-4xl mb-2">{option.icon}</div>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        );

      case 'tarot':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-300 mt-8">
                Elige 3 cartas
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {question.options?.map((card) => (
                <div key={card.id} className="flex flex-col items-center">
                  <div 
                    className="relative w-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => handleCardSelect(card.id)}
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                      style={{
                        borderImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") 30 stretch',
                        borderWidth: '8px',
                        borderStyle: 'solid'
                      }}
                    />
                    <div 
                      className={`
                        absolute -bottom-4 left-1/2 -translate-x-1/2 
                        w-8 h-8 
                        border-2 border-purple-500 
                        flex items-center justify-center
                        transition-colors duration-300
                        ${selectedCards.includes(card.id) 
                          ? 'bg-purple-500' 
                          : 'bg-transparent hover:bg-purple-500/20'
                        }
                      `}
                    >
                      {selectedCards.includes(card.id) && (
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-xl overflow-hidden">
              {renderTestimonial(question.options?.[currentTestimonial])}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 p-4">
                {question.options?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-purple-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            {question.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  relative p-4 rounded-xl transition-all duration-300
                  ${selectedOption === option.id
                    ? 'bg-purple-500/30 border-2 border-purple-500'
                    : 'bg-purple-500/10 border-2 border-transparent hover:border-purple-500/50'
                  }
                `}
              >
                <span className="text-lg font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-4 left-4">
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
        )}
      </div>

      <div className="fixed top-0 left-0 right-0">
        <div className="h-2 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-lg text-purple-200">{question.subtitle}</p>
            )}
          </div>

          {renderQuestion()}

          {(question.type === 'text' || question.type === 'testimonials') && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`
                  flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm
                  ${canProceed()
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gray-700 cursor-not-allowed opacity-50'
                  }
                  transition-all duration-300
                `}
              >
                {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próximo'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;