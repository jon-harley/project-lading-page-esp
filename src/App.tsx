import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import OfferPage from './components/OfferPage';
import LoadingBar from './components/LoadingBar';
import { FormProvider } from './components/FormContext';

function App() {
  return (
  <FormProvider>
    <LoadingBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/offerPage" element={<OfferPage />} />
    </Routes>
  </FormProvider>
  );
}

export default App;