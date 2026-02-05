import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import Specialities from '@/components/Specialities';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import BackgroundSection from '@/components/BackgroundSection';
import CTASection from '@/components/CTASection';
import SupportSection from '@/components/SupportSection';
import DedicatedSection from '@/components/DedicatedSection';
import Office from '@/components/Office';

export default function Home() {
  return (
    <div className='bg-[var(--color-background-alt)]'>
      {/* <div className='relative z-10'> */}
      <Navbar />
      <Hero />
      <IntroSection />
      <AboutSection />
      <Specialities />
      <SupportSection />
      <DedicatedSection />
      <Office />
      <BackgroundSection />
      <CTASection />
      <Footer />
    </div>
  );
}