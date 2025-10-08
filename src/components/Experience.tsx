// src/components/Experience.tsx
import React, { useEffect, useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    company: "American Dog Society",
    location: "Oneonta, NY",
    date: "Sep 2024 – Jun 2025",
    responsibilities: [
      "Engineered a unified Python (pandas, NumPy, SciPy) data pipeline for Zoom and Calendly datasets, performing feature extraction, trend analysis, and statistical validation to uncover insights on meeting engagement.",
      "Developed interactive dashboards and KPI reports in Tableau and Power BI to visualize event frequencies, cancellation trends, and user behavior metrics, empowering stakeholders with real-time decision-making insights and operational visibility.",
      "Designed and tested predictive models using regression and tree-based techniques to forecast no-show probabilities and engagement likelihoods, improving attendance prediction accuracy and informing data-driven scheduling strategies.",
      "Built React modules with Tailwind CSS and GPT API via GraphQL, boosting engagement by 25%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Gravita Cloud",
    location: "Hillsboro, OR",
    date: "Jul 2024 – Sep 2024",
    responsibilities: [
      "Built a scalable FastAPI pipeline integrating Claude AI, RAG, and AWS Bedrock to convert natural language queries into SQL, boosting data retrieval precision and contributing to a $10K monthly client deal.",
      "Developed automated data reporting and visualization workflows by fetching and processing JSON data into interactive HTML dashboards, reducing report generation time by 40% and accelerating data-driven decisions.",
      "Applied rigorous statistical validation and developed unit tests using Python’s unittest and unittest.mock frameworks to achieve 95% code coverage, ensuring backend stability and data integrity.",
    ],
  },
  {
    title: "Senior Data Analyst",
    company: "Microscan",
    location: "Mumbai, India",
    date: "Jul 2022 – Jul 2023",
    responsibilities: [
      "Built secure AWS-based data pipelines to process 10,000+ patient and billing records/month, cleaning and structuring data for accurate analysis and predictive modeling.",
      "Developed and deployed AI/ML models using AWS SageMaker and Lambda to detect billing anomalies and automate revenue alerts, reducing manual review time by 60% and improving financial accuracy.",
      "Analyzed EHR usage patterns and created actionable dashboards, implementing workflow improvements that enhanced clinical documentation quality, system efficiency, and compliance.",
    ],
  },
  {
    title: "Cloud Engineer Intern",
    company: "AICTE Cloud Virtual Internship",
    location: "Mumbai, India",
    date: "Aug 2021 – Dec 2021",
    responsibilities: [
      "Automated AWS workflows and managed large datasets using EC2, S3, IAM with CI/CD pipelines, reducing errors by 25% and enabling faster, reliable data processing for analysis.",
    ],
  },
];

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
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
          const translateY = (1 - scrollProgress) * 50;
          const rotateX = (1 - scrollProgress) * -10; // 3D rotation
          const scale = 0.9 + scrollProgress * 0.1;

          ref.style.opacity = opacity.toString();
          ref.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`;
          ref.style.transition = `transform 0.8s ease-out, opacity 0.8s ease-out`;
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={(el) => (itemRefs.current[idx] = el)}
              className="opacity-0 bg-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:rotate-1 hover:scale-105"
            >
              <h3 className="text-3xl font-semibold mb-1 text-gradient">
                {exp.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-2 font-medium">
                {exp.company} – {exp.location}
              </p>
              <p className="text-sm text-muted-foreground mb-4 italic">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-base text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
