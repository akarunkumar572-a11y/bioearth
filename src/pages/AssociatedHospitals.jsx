
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { hospitals } from '../data/hospitals';
import HospitalCard from '../components/HospitalCard';

export default function AssociatedHospitals() {
  return (
    <>
      <SEO
        title="Associated Hospitals | Bioearth – A Clinical Research Services"
        description="View the list of associated hospitals and research centers collaborating with Bioearth for clinical research excellence."
        canonical="https://bioearth.example.com/associated-hospitals"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Associated Hospitals</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitals.map((h) => (
              <HospitalCard key={h.name} name={h.name} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
