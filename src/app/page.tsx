import About from '../components/home/About';
import ExperienceEducation from '../components/home/ExperienceEducation';
import Certifications from '../components/home/Certifications';
import { Projects } from '../components/home/Projects';
import Home from '../components/home/Home';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

export default function Page() {
  return (
    <div className="overflow-x-hidden w-screen">
      <section className="relative h-screen w-full">
        <Home />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <About />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <Skills />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <Projects />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <ExperienceEducation />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <Certifications />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <Contact />
      </section>
    </div>
  );
}
