
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

export default function WhyChooseUs() {
  return (
    <>
      <SEO
        title="Why Choose Us | Bioearth – A Clinical Research Services"
        description="Reasons to choose Bioearth for clinical research: trust, medical excellence, regulatory compliance, and premium infrastructure at GSVM Medical College."
        canonical="https://bioearth.example.com/why-choose-us"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col pt-[140px]">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Why Choose Us</SectionTitle>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Trust and medical excellence</li>
            <li>Clinical research expertise</li>
            <li>International standards and compliance</li>
            <li>Government medical collaboration</li>
            <li>Premium research infrastructure</li>
          </ul>
        </section>
        <Footer />
      </div>
    </>
  );
}
