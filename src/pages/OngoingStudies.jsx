
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

export default function OngoingStudies() {
  return (
    <>
      <SEO
        title="Ongoing Studies | Bioearth – A Clinical Research Services"
        description="Stay updated on ongoing clinical studies conducted by Bioearth at GSVM Medical College and affiliated sites. Contact us for study details."
        canonical="https://bioearth.example.com/ongoing-studies"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Ongoing Studies</SectionTitle>
          <p className="text-lg text-gray-700 mb-4">Details of ongoing clinical studies will be updated here. Please contact us for more information.</p>
        </section>
        <Footer />
      </div>
    </>
  );
}
