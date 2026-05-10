import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { contacts } from '../data/contacts';
import ContactCard from '../components/ContactCard';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Bioearth – A Clinical Research Services"
        description="Contact Bioearth for clinical research collaborations, study inquiries, and partnerships. Reach us via phone or email."
        canonical="https://bioearth.example.com/contact"
      />
      <div className="bg-accent/10 min-h-screen flex flex-col pt-[140px]">
        <Navbar />
        <section className="max-w-5xl mx-auto py-16 px-4 flex-1">
          <SectionTitle>Contact Us</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {contacts.map((c) => (
              <ContactCard key={c.email} {...c} />
            ))}
          </div>
          <a href="mailto:bioearth.research@gmail.com" className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary transition">Email Us</a>
        </section>
        <Footer />
      </div>
    </>
  );
}
