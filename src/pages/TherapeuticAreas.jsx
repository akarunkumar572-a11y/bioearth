
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { therapeuticAreas } from '../data/therapeuticAreas';
import TherapeuticAreaCard from '../components/TherapeuticAreaCard';

export default function TherapeuticAreas() {
  return (
    <>
      <SEO
        title="Therapeutic Areas | Bioearth – A Clinical Research Services"
        description="Discover the wide range of therapeutic areas covered by Bioearth, including Medicine, Surgery, Cardiology, Pediatrics, and more."
        canonical="https://bioearth.example.com/therapeutic-areas"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Therapeutic Areas</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {therapeuticAreas.map((area) => (
              <TherapeuticAreaCard key={area} area={area} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
