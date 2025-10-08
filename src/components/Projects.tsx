import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import houseupImage from "@/assets/houseup.png";
import kriyataImage from "@/assets/kriyata.png";
import nutrimatchImage from "@/assets/nutrimatch.png";
import smartscheduleImage from "@/assets/smartschedule.png";
import customerSegImage from "@/assets/customerSegmentation.png";
import vrArImage from "@/assets/vrAr.png";

const projects = [
  {
    title: "HouseUp",
    description: "A comprehensive property management platform with advanced search and listing features.",
    image: houseupImage,
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/siddhesh-pawar/StudentNest",
    demo: "#"
  },
  {
    title: "Kriyata",
    description: "Sports tournament management system with lightning-fast registration and automated fixtures.",
    image: kriyataImage,
    tech: ["React", "TypeScript", "Firebase"],
    github: "#",
    demo: "https://kriyata.infinityfreeapp.com/?i=1"
  },
  {
    title: "NutriMatch Pro",
    description: "AI-powered nutrition matchmaking platform helping users find their perfect dietary balance.",
    image: nutrimatchImage,
    tech: ["React", "Python", "TensorFlow"],
    github: "https://github.com/aumkarringe/NutriMatchPro",
    demo: "#"
  },
  {
    title: "SmartSchedule",
    description: "A dynamic scheduling app to manage tasks and optimize productivity.",
    image: smartscheduleImage,
    tech: ["React", "TypeScript", "CSS"],
    github: "#",
    demo: "https://aumkarringe.github.io/"
  },
  {
    title: "Customer Segmentation using Unsupervised Learning",
    description: "A machine learning project to segment customers based on behavior using unsupervised learning techniques.",
    image: customerSegImage,
    tech: ["Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Viraj7k/Customer-Segmentaion-using-Unsupervised-Learning",
    demo: "#"
  },
  {
    title: "Virtual Reality AR Encyclopedia",
    description: "An immersive VR/AR encyclopedia platform for interactive learning and exploration.",
    image: vrArImage,
    tech: ["Unity", "C#", "AR/VR"],
    github: "https://github.com/aumkarringe/Virtual-Reality-AR-Enclycopedia",
    demo: "#"
  }
];

// The rest of your Projects component stays the same
export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;

        if (isVisible) {
          const scrollProgress = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
          );

          ref.style.opacity = Math.min(1, scrollProgress * 2).toString();

          const translateY = (1 - scrollProgress) * 100;
          const scale = 0.85 + scrollProgress * 0.15;
          const rotateX = (1 - scrollProgress) * -5;

          ref.style.transform = `
            translateY(${translateY}px) 
            scale(${scale})
            perspective(1000px)
            rotateX(${rotateX}deg)
          `;

          const imageRef = imageRefs.current[index];
          if (imageRef) {
            const imageTranslateY = (scrollProgress - 0.5) * -30;
            const imageScale = 1 + (scrollProgress * 0.1);
            imageRef.style.transform = `translateY(${imageTranslateY}px) scale(${imageScale})`;
          }
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
          Showcasing my best work in web development, design, and AI/ML projects
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
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
                    <div 
                      ref={(el) => (imageRefs.current[index] = el)}
                      className="relative overflow-hidden rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-700"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
