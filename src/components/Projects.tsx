import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import houseupImage from "@/assets/houseup.png";
import kriyataImage from "@/assets/kriyata.png";
import nutrimatchImage from "@/assets/nutrimatch.png";

const projects = [
  {
    title: "HouseUp",
    description: "A comprehensive property management platform with advanced search and listing features.",
    image: houseupImage,
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Kriyata",
    description: "Sports tournament management system with lightning-fast registration and automated fixtures.",
    image: kriyataImage,
    tech: ["React", "TypeScript", "Firebase"],
    github: "#",
    demo: "#"
  },
  {
    title: "NutriMatch Pro",
    description: "AI-powered nutrition matchmaking platform helping users find their perfect dietary balance.",
    image: nutrimatchImage,
    tech: ["React", "Python", "TensorFlow"],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const scrollProgress = Math.min(
              (entry.intersectionRatio * 2),
              1
            );
            
            target.style.opacity = scrollProgress.toString();
            target.style.transform = `translateY(${(1 - scrollProgress) * 50}px) scale(${0.9 + scrollProgress * 0.1})`;
          }
        });
      },
      { 
        threshold: Array.from({ length: 20 }, (_, i) => i * 0.05),
        rootMargin: "-100px"
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
          Showcasing my best work in web development and design
        </p>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative overflow-hidden rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-500">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-4xl font-bold text-gradient">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-card border border-border rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
