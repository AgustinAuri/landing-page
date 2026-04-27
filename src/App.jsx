import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
