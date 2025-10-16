  import { useEffect, useRef } from "react";
  import { ExternalLink, Github } from "lucide-react";
  import houseupImage from "@/assets/houseup.png";
  import kriyataImage from "@/assets/kriyata.png";
  import nutrimatchImage from "@/assets/nutrimatch.png";
  import vrImage from "@/assets/vrimage.jpg";
  import customerImage from "@/assets/customer.jpg";
  import smartscheduleImage from "@/assets/smartschedule.png";

  const projects = [
  {
    title: "HouseUp",
    description:
      "A comprehensive property management platform with advanced search and listing features.",
    image: houseupImage,
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/siddhesh-pawar/HouseUp",
    demo: "https://github.com/siddhesh-pawar/HouseUp",
  },
  {
    title: "Kriyata",
    description:
      "Sports tournament management system with lightning-fast registration and automated fixtures.",
    image: kriyataImage,
    tech: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/aumkarringe/kriyata",
    demo: "https://kriyata.infinityfreeapp.com/?i=1",
  },
  {
    title: "NutriMatch Pro",
    description:
      "AI-powered nutrition matchmaking platform helping users find their perfect dietary balance.",
    image: nutrimatchImage,
    tech: ["React", "Python", "TensorFlow"],
    github: "https://github.com/aumkarringe/NutriMatchPro",
    demo: "https://github.com/aumkarringe/NutriMatchPro",
  },
  {
    title: "Virtual-Reality-AR-Enclycopedia",
    description:
      "A VR and AR-based encyclopedia bringing immersive learning experiences to users through 3D visualizations.",
    image: vrImage,
    tech: ["Unity", "C#", "ARCore"],
    github: "https://github.com/aumkarringe/Virtual-Reality-AR-Enclycopedia",
    demo: "https://github.com/aumkarringe/Virtual-Reality-AR-Enclycopedia",
  },
  {
    title: "Customer-Segmentation-using-Unsupervised-Learning",
    description:
      "Machine learning project that identifies customer segments using clustering for targeted marketing.",
    image: customerImage,
    tech: ["Python", "Scikit-learn", "Matplotlib"],
    github: "https://aumkarringe.github.io/smartschedule/",
    demo: "https://aumkarringe.github.io/smartschedule/",
  },
  {
    title: "Smart Schedule",
    description:
      "An AI-driven schedule optimizer that automates task planning and improves productivity using predictive algorithms.",
    image: smartscheduleImage,
    tech: ["React", "Python", "Flask"],
    github: "https://github.com/aumkarringe/smartschedule",
    demo: "https://github.com/aumkarringe/smartschedule",
  },
  {
    title: "Anant Book Suppliers",
    description:
      "A robust online catalog and order management platform for a leading book distribution company.",
    image: kriyataImage,
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/aumkarringe/anantbooksuppliers",
    demo: "https://github.com/aumkarringe/anantbooksuppliers",
  },
  {
    title: "ResumeAI Match",
    description:
      "An AI-based resume analysis tool that evaluates resumes and provides tailored job recommendations.",
    image: nutrimatchImage,
    tech: ["React", "FastAPI", "OpenAI API"],
    github: "https://github.com/aumkarringe/resumeaimatch",
    demo: "https://aumkarringe.github.io/resumeaimatch/",
  },
  {
    title: "RecommendPro",
    description:
      "A movie recommendation system leveraging content-based and collaborative filtering algorithms.",
    image: customerImage,
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/aumkarringe/RecommendPro",
    demo: "https://aumkarringe.github.io/RecommendPro/",
  },
  {
    title: "RippleRent",
    description:
      "A modern rental platform designed for seamless property listings, tenant management, and payments.",
    image: houseupImage,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/aumkarringe/ripple-rent",
    demo: "https://aumkarringe.github.io/ripple-rent/",
  },
  {
    title: "Aumkar Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and achievements with a sleek UI and smooth animations.",
    image: vrImage,
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/aumkarringe/aumkarportfolio",
    demo: "https://aumkarringe.github.io/aumkarportfolio/",
  },
  {
    title: "MedicineMatch",
    description:
      "A health companion that suggests home remedies and medicines based on symptoms using AI-driven insights.",
    image: nutrimatchImage,
    tech: ["React", "Python", "FastAPI"],
    github: "https://github.com/aumkarringe/MedicineMatch",
    demo: "https://aumkarringe.github.io/MedicineMatch/",
  },
  {
    title: "RemedyFlow",
    description:
      "A smart remedy system that extracts keywords from symptoms and provides curated home treatments and health advice.",
    image: smartscheduleImage,
    tech: ["React", "FastAPI", "LangChain"],
    github: "https://github.com/aumkarringe/RemedyFlow",
    demo: "https://aumkarringe.github.io/RemedyFlow/",
  },
];


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

            const opacity = Math.min(1, scrollProgress * 2);
            ref.style.opacity = opacity.toString();

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
              const imageScale = 1 + scrollProgress * 0.1;
              imageRef.style.transform = `translateY(${imageTranslateY}px) scale(${imageScale})`;
            }
          }
        });
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <section
        id="projects"
        ref={sectionRef}
        className="py-32 px-6 bg-gradient-to-b from-background to-muted/20"
      >
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
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
                      <div
                        ref={(el) => (imageRefs.current[index] = el)}
                        className="relative overflow-hidden rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-700"
                        style={{
                          transformStyle: "preserve-3d",
                          willChange: "transform",
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

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                  >
                    <h3 className="text-4xl font-bold text-gradient">
                      {project.title}
                    </h3>
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
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg hover:shadow-glow transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
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
