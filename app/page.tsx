import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 dark:border-gray-800 py-8 px-6 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {new Date().getFullYear()} Yuma Fujita
        </p>
      </footer>
    </>
  );
}
