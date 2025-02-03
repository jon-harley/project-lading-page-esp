import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useForm } from '../components/FormContext';

interface QuizFormData {
  attraction: string;
  ageRange: string;
  relationshipStatus: string;
  ethnicity: string;
  birthDate: string;
  zodiacSign: string;
  fullName: string;
  email: string;
}

interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder, error, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${error ? 'border-red-400' : 'border-purple-700'} text-white focus:outline-none focus:border-purple-500 flex items-center justify-between`}
      >
        <span className={selectedOption ? 'text-white' : 'text-purple-300'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-indigo-950 border border-purple-700 rounded-lg shadow-xl max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                value === option.value ? 'bg-white/20 text-purple-300' : 'text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

const Quiz: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  const { setFormData } = useForm();
  const [localFormData, setLocalFormData] = useState<QuizFormData>({
    attraction: '',
    ageRange: '',
    relationshipStatus: '',
    ethnicity: '',
    birthDate: '',
    zodiacSign: '',
    fullName: '',
    email: ''
  });

  const [errors, setErrors] = useState<Partial<QuizFormData>>({});

  const calculateZodiacSign = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const monthDay = (month * 100) + day;

    if ((monthDay >= 321 && monthDay <= 419)) return "Aries";
    if ((monthDay >= 420 && monthDay <= 520)) return "Tauro";
    if ((monthDay >= 521 && monthDay <= 620)) return "Géminis";
    if ((monthDay >= 621 && monthDay <= 722)) return "Cáncer";
    if ((monthDay >= 723 && monthDay <= 822)) return "Leo";
    if ((monthDay >= 823 && monthDay <= 922)) return "Virgo";
    if ((monthDay >= 923 && monthDay <= 1022)) return "Libra";
    if ((monthDay >= 1023 && monthDay <= 1121)) return "Escorpio";
    if ((monthDay >= 1122 && monthDay <= 1221)) return "Sagitario";
    if ((monthDay >= 1222) || (monthDay <= 119)) return "Capricornio";
    if ((monthDay >= 120 && monthDay <= 218)) return "Acuario";
    return "Piscis";
  };

  useEffect(() => {
    if (localFormData.birthDate) {
      const zodiacSign = calculateZodiacSign(localFormData.birthDate);
      setLocalFormData(prev => ({ ...prev, zodiacSign }));
    }
  }, [localFormData.birthDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Partial<QuizFormData> = {};
    
    if (!localFormData.attraction) newErrors.attraction = 'Campo obligatorio';
    if (!localFormData.ageRange) newErrors.ageRange = 'Campo obligatorio';
    if (!localFormData.relationshipStatus) newErrors.relationshipStatus = 'Campo obligatorio';
    if (!localFormData.ethnicity) newErrors.ethnicity = 'Campo obligatorio';
    if (!localFormData.birthDate) newErrors.birthDate = 'Campo obligatorio';
    if (!localFormData.fullName) newErrors.fullName = 'Campo obligatorio';
    if (!localFormData.email) {
      newErrors.email = 'Campo obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData(localFormData);
    navigate('/offerPage');
  };

  const handleInputChange = (name: string, value: string) => {
    setLocalFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-serif text-center mb-8 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
      Solo responde algunas preguntas para que pueda dibujar el rostro de tu alma gemela y el lugar del encuentro con precisión.
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label className="text-xl font-semibold block">1. ¿Por quién te sientes atraído(a)?</label>
          <Dropdown
            name="attraction"
            options={[
              { value: 'men', label: 'Me atraen los hombres' },
              { value: 'women', label: 'Me atraen las mujeres' },
              { value: 'both', label: 'Me atraen ambos' }
            ]}
            value={localFormData.attraction}
            onChange={(value) => handleInputChange('attraction', value)}
            placeholder="Selecciona una opción"
            error={errors.attraction}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">2. ¿Cuál es tu rango de edad?</label>
          <Dropdown
            name="ageRange"
            options={[
              { value: '18-24', label: '18-24' },
              { value: '25-34', label: '25-34' },
              { value: '35-44', label: '35-44' },
              { value: '45-54', label: '45-54' },
              { value: '55+', label: '55+' }
            ]}
            value={localFormData.ageRange}
            onChange={(value) => handleInputChange('ageRange', value)}
            placeholder="Selecciona tu rango de edad"
            error={errors.ageRange}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">3. ¿Cuál es tu estado actual de relación?</label>
          <Dropdown
            name="relationshipStatus"
            options={[
              { value: 'single', label: 'Soltero(a)' },
              { value: 'relationship', label: 'En una relación' },
              { value: 'engaged', label: 'Comprometido(a)' },
              { value: 'married', label: 'Casado(a)' },
              { value: 'complicated', label: 'Es complicado' }
            ]}
            value={localFormData.relationshipStatus}
            onChange={(value) => handleInputChange('relationshipStatus', value)}
            placeholder="Selecciona tu estado"
            error={errors.relationshipStatus}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">4. Elige tu origen étnico preferido</label>
          <Dropdown
            name="ethnicity"
            options={[
              { value: 'caucasian', label: 'Caucásico/Blanco' },
              { value: 'eastAsian', label: 'Asiático Oriental' },
              { value: 'hispanic', label: 'Hispano/Latino' },
              { value: 'middleEastern', label: 'Medio Oriente' },
              { value: 'mixedAsian', label: 'Mixto - Asiático-Americano' },
              { value: 'mixedHispanic', label: 'Mixto - Hispano/Latino-Americano' },
              { value: 'mixedMiddleEastern', label: 'Mixto - Medio Oriente-Americano' },
              { value: 'southAsian', label: 'Surasiático' },
              { value: 'universe', label: 'Deja que el universo decida' }
            ]}
            value={localFormData.ethnicity}
            onChange={(value) => handleInputChange('ethnicity', value)}
            placeholder="Selecciona un origen étnico"
            error={errors.ethnicity}
          />
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">5. Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={localFormData.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white focus:outline-none focus:border-purple-500"
          />
          {errors.birthDate && <p className="text-red-400 text-sm">{errors.birthDate}</p>}
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block flex items-center gap-2">
          6. Tu signo del zodiaco
            <span className="text-red-400 text-sm font-normal">*generado por el sistema</span>
          </label>
          <input
            type="text"
            value={localFormData.zodiacSign}
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white focus:outline-none focus:border-purple-500 cursor-not-allowed"
          />
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">7. ¿Cuál es tu nombre y apellido?</label>
          <input
            type="text"
            name="fullName"
            value={localFormData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Ingrese su nombre completo"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
          />
          {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
        </div>

        <div className="space-y-3">
          <label className="text-xl font-semibold block">8. ¿A qué correo electrónico puedo enviarte tu dibujo?</label>
          <input
            type="email"
            name="email"
            value={localFormData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-300 text-sm font-medium">
          IMPORTANTE: Al pagar tu pedido, por favor asegúrate de usar la misma dirección de correo electrónico proporcionada arriba.
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <span>Continuar</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Quiz;