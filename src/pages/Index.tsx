import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience"; // <-- import Experience
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { YouTube } from "@/components/YouTube";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience /> {/* <-- added Experience section */}
      <Projects />
      <Skills />
      <YouTube />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Aumkar Anant Ringe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
