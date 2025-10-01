import { useEffect, useRef } from "react";
import { Code2, Database, Palette, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Express", "GraphQL"]
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Python", "Data Analysis"]
  },
  {
    icon: Palette,
    title: "Design & Tools",
    skills: ["Figma", "Git", "Docker", "AWS", "CI/CD"]
  }
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
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
    <section id="skills" ref={sectionRef} className="py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 observe-animation">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto observe-animation">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="observe-animation opacity-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-glow transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-muted border border-border rounded-lg text-sm hover:border-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
