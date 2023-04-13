import { About } from "@src/components/about";
import { ContactMe } from "@src/components/contactMe";
import { Footer } from "@src/components/footer";
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
      <Footer />
    </Template>
  );
};

export default Home;
