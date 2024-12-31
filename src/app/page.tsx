import { Footer, NavbarWithMegaMenu } from "@/components";
import Hero from "./hero";
import About from "./about";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Skills from "./skills";
import Projects from "./projects";

import Resume from "./resume";
import Technologies from "./technologies";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { WobbleCardDemo } from "./project";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <>
      {/* <BackgroundBeamsWithCollision className="flex flex-col"> */}

      <NavbarWithMegaMenu />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Technologies />
      <Testimonial />

      <ContactForm />
      <Footer />
      {/* </BackgroundBeamsWithCollision> */}
    </>
  );
}
