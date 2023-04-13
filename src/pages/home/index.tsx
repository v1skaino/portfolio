import { About } from "@src/components/about";
import { ContactMe } from "@src/components/contactMe";
import { Template } from "@src/components/layout";
import { MainContent } from "@src/components/mainContent";
import { Skills } from "@src/components/skills";

const Home = () => {
  return (
    <Template>
      <MainContent />
      <About />
      <Skills />
      <ContactMe />
    </Template>
  );
};

export default Home;
