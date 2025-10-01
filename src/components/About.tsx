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
              I'm a passionate frontend developer and full-stack engineer based in the US, 
              currently pursuing my Master's in Computer Science at Portland State University.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend technologies and AI/ML, I create 
              seamless digital experiences that blend technical excellence with artistic vision. 
              My work spans from building responsive web applications to developing innovative 
              solutions in machine learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, intuitive design, and continuous learning. 
              Whether it's crafting pixel-perfect interfaces or architecting scalable systems, 
              I bring creativity and precision to every project.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Python", "TensorFlow", "Node.js", "PostgreSQL"].map((skill) => (
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
