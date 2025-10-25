import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter antialiased">
      <Hero />
      <Services />
      <CaseStudies />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
