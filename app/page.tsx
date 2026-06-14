import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Page assembly — a hybrid bento layout.
 *
 * Top block: Hero + About + Skills composed on a 3-column grid (mixed cell
 * sizes). Mid blocks: Experience and Projects as calmer 2-column card rows.
 * Education + Certifications share a 3-column row. All copy lives in
 * lib/resume-data.ts; each block is a self-contained component.
 */
export default function Home() {
  return (
    <>
      <Header />
      {/*
        On-load entrance: every block fades up once on load, staggered top to
        bottom (reveal-1 … reveal-6). This is a load animation only — there is
        no scroll-triggered motion. The Hero animates its own cells.
      */}
      <main className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <Hero />

        {/* About + Skills bento row. */}
        <div className="reveal reveal-1 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <About />
          <Skills />
        </div>

        <div className="reveal reveal-2">
          <Experience />
        </div>
        <div className="reveal reveal-3">
          <Projects />
        </div>

        {/* Education + Certifications bento row. */}
        <div className="reveal reveal-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <Education />
          <Certifications />
        </div>

        <div className="reveal reveal-5">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
