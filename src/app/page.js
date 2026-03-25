import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import ScrollIndicator from "@/components/ScrollIndicator";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
      <main className="min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <Socials />
        <ScrollIndicator />
        <ThemeToggle />
        <Hero />
        <Projects />
        <Contact />
      </main>
  );
}