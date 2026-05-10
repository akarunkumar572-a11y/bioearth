
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

export default function ClinicalTrialServices() {
  return (
    <>
      <SEO
        title="Clinical Trial Services | Bioearth – A Clinical Research Services"
        description="Explore the full range of clinical trial services offered by Bioearth, including site management, regulatory submissions, patient recruitment, and more."
        canonical="https://bioearth.example.com/clinical-trial-services"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Clinical Trial Services</SectionTitle>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Site management and coordination</li>
            <li>Regulatory and ethics submissions</li>
            <li>Patient recruitment and retention</li>
            <li>Data collection and management</li>
            <li>Quality assurance and compliance</li>
            <li>Pharmacovigilance and safety monitoring</li>
          </ul>
        </section>
        <Footer />
      </div>
    </>
  );
}
