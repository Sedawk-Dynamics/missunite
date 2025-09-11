import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MissionSection from "@/components/mission-section"
import LeadershipSection from "@/components/leadership-section"
import CompetitionSection from "@/components/competition-section"
import WinnersSection from "@/components/winners-section"
import ContactSection from "@/components/contact-section"
// Added footer and apply now button components
import Footer from "@/components/footer"
import ApplyNowButton from "@/components/apply-now-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <LeadershipSection />
      <CompetitionSection />
      <WinnersSection />
      <ContactSection />
      {/* Added footer and apply now functionality */}
      <Footer />
      <ApplyNowButton />
    </main>
  )
}
