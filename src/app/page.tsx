import Section from "./Components/Section";
import Header from "./Components/header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Header className="absolute top-0 z-10"/>
      {/* Add id directly to the root element of each section */}
      {/* Section */}
      {/* The Section component's root div should have id="home" */}
      <Section/>
      {/* Skills */}
      {/* The Skills component's root div should have id="skills" */}
      <Skills/>
      {/* Projects */}
      {/* The Projects component's root section should have id="projects" */}
      <Projects/>
      {/* Contact */}
      {/* The Contact component's root section should have id="contact" */}
      <Contact/>
    </div>
  );
}
