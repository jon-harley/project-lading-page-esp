import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import OfferPage from './components/OfferPage';
import LoadingBar from './components/LoadingBar';
import { FormProvider } from './components/FormContext';
import UpSellPage from './components/UpSellPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
  <FormProvider>
    <LoadingBar />
    <Routes>
      <Route path="/" element={<Quiz />} />
     {/* <Route path="/homePage" element={<HomePage />} /> // using single page*/} 
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/offerPage" element={<OfferPage />} />
      <Route path="/upsell" element={<UpSellPage />} />
      <Route path="/thanks" element={<ThankYouPage />} />
    </Routes>
  </FormProvider>
  );
}

export default App;