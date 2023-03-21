import { About } from "@src/components/about";
import { Template } from "@src/components/layout";
import { MainContent } from "@src/components/mainContent";
import { Skills } from "@src/components/skills";

const Home = () => {
  return (
    <Template>
      <MainContent />
      <About />
      <Skills />
    </Template>
  );
};

export default Home;
