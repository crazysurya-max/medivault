import Hero from "@/components/Hero";
import InteractiveExperience from "@/components/InteractiveExperience";
import IdeaSection from "@/components/IdeaSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <IdeaSection />
      <InteractiveExperience />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
