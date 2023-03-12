import { Template } from "@src/components/layout";
import { About } from "./components/about";
import { MainContent } from "./components/mainContent";

const Home = () => {
  return (
    <Template>
      <MainContent />
      <About />
    </Template>
  );
};

export default Home;
