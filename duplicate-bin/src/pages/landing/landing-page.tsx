import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from './hero-section'
import { ValuePropositionSection } from './value-proposition-section'
import { CLIInstallationSection } from './cli-installation-section'
import { ComprehensiveFeaturesSection } from './comprehensive-features-section'
import { TestimonialsSection } from './testimonials-section'
import { GetStartedSection } from './get-started-section'
import { FAQSection } from './faq-section'
import { DownloadCTASection } from './download-cta-section'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <CLIInstallationSection />
        <ComprehensiveFeaturesSection />
        <TestimonialsSection />
        <GetStartedSection />
        <FAQSection />
        <DownloadCTASection />
      </main>
      
      <Footer />
    </div>
  )
}