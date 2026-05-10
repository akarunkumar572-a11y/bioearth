
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { investigators } from '../data/investigators';
import InvestigatorCard from '../components/InvestigatorCard';

export default function Investigators() {
  return (
    <>
      <SEO
        title="Investigators | Bioearth – A Clinical Research Services"
        description="Meet the expert investigators at Bioearth, leading clinical research across multiple therapeutic areas at GSVM Medical College, Kanpur."
        canonical="https://bioearth.example.com/investigators"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Investigators</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investigators.map((inv) => (
              <InvestigatorCard key={inv.name} {...inv} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
