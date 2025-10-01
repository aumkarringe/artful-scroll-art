import { useEffect, useRef } from "react";
import { Youtube, Play, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const YouTube = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleSubscribe = () => {
    window.open("https://www.youtube.com/@AumkarR/videos", "_blank");
  };

  return (
    <section id="youtube" ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-6xl mx-auto">
        {/* Channel Header */}
        <div className="text-center mb-16 observe-animation">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              My <span className="text-gradient">YouTube</span> Channel
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Tutorials, coding challenges, and tech insights
          </p>
          <Button
            size="lg"
            onClick={handleSubscribe}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe Now
          </Button>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 observe-animation" style={{ animationDelay: "0.2s" }}>
          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-red-600 hover:shadow-glow transition-all duration-300 group">
            <div className="inline-flex p-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Videos</h3>
            <p className="text-muted-foreground">Tech & Coding Content</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-red-600 hover:shadow-glow transition-all duration-300 group">
            <div className="inline-flex p-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Views</h3>
            <p className="text-muted-foreground">Growing Community</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-red-600 hover:shadow-glow transition-all duration-300 group">
            <div className="inline-flex p-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Tutorials</h3>
            <p className="text-muted-foreground">Step-by-Step Guides</p>
          </div>
        </div>

        {/* Featured Content Card */}
        <div className="observe-animation" style={{ animationDelay: "0.4s" }}>
          <div className="relative group cursor-pointer" onClick={handleSubscribe}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-red-600 transition-all duration-500 hover:shadow-2xl">
              {/* Thumbnail Area */}
              <div className="relative aspect-video bg-gradient-to-br from-red-950/50 via-background to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-2xl font-bold">Watch on YouTube</p>
                </div>
              </div>

              {/* Channel Info */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      @AumkarR
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Join me on my YouTube channel for coding tutorials, tech reviews, and insights into frontend development and AI/ML. 
                      Subscribe to stay updated with the latest content!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Web Development", "AI/ML", "Tutorials"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-red-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 observe-animation" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4">
            Don't miss out on new videos and updates
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleSubscribe}
            className="border-red-600/50 hover:border-red-600 hover:bg-red-600/10 text-lg px-8"
          >
            Visit Channel
          </Button>
        </div>
      </div>
    </section>
  );
};
