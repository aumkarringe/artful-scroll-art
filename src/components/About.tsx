import { useEffect, useRef } from "react";
import profileImage from "@/assets/profile.jpeg";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".observe-animation");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 observe-animation">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="observe-animation">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src={profileImage} 
                alt="Aumkar Anant Ringe" 
                className="relative rounded-2xl w-full shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6 observe-animation" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where logic meets imagination — that’s where I build. I’m Aumkar Ringe, a Full Stack Engineer who blends code and creativity to craft AI-powered, RAG-driven systems that think beyond instruction. My passion lies in merging language models, structured data, and clean architecture to create digital experiences that feel both smart and human. With a background in design and art, I approach engineering as a form of creative expression, where every line of code carries intention and elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From FastAPI and Django backends to React frontends and cloud-deployed architectures, I bring ideas to life through precision, storytelling, and design intuition. I love transforming data pipelines into expressive, scalable systems where performance meets personality, and where backend intelligence powers beautiful, intuitive user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To me, software is an evolving dialogue between humans and machines. Through projects like FitGenie AI, NutriMatch Pro, and CineMatch, I explore how intelligence and creativity can coexist, turning static applications into living systems that understand, adapt, and inspire.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Python", "TensorFlow", "Node.js", "PostgreSQL", "RAG", "Django", "React"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:shadow-glow transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
