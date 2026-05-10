
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

export default function Infrastructure() {
  return (
    <>
      <SEO
        title="Infrastructure | Bioearth – A Clinical Research Services"
        description="Explore the advanced medical infrastructure at Bioearth, including 1000+ bedded hospital, ICU, emergency, and modern operation theaters at GSVM Medical College, Kanpur."
        canonical="https://bioearth.example.com/infrastructure"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Infrastructure</SectionTitle>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>1000+ bedded hospital infrastructure</li>
            <li>24×7 emergency services</li>
            <li>Advanced ICU & critical care units</li>
            <li>Blood bank facilities</li>
            <li>Modern operation theaters</li>
            <li>Pathology & radiology services</li>
            <li>Specialized & super-specialized doctors</li>
            <li>Ventilator-enabled ambulance services</li>
          </ul>
        </section>
        <Footer />
      </div>
    </>
  );
}
