
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import TherapeuticAreas from './pages/TherapeuticAreas';
import Investigators from './pages/Investigators';
import ClinicalTrialServices from './pages/ClinicalTrialServices';
import AssociatedHospitals from './pages/AssociatedHospitals';
import OngoingStudies from './pages/OngoingStudies';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/therapeutic-areas" element={<TherapeuticAreas />} />
      <Route path="/investigators" element={<Investigators />} />
      <Route path="/clinical-trial-services" element={<ClinicalTrialServices />} />
      <Route path="/associated-hospitals" element={<AssociatedHospitals />} />
      <Route path="/ongoing-studies" element={<OngoingStudies />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
