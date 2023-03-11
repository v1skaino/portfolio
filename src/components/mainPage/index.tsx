import svgReact from "@assets/react.svg";
import "./mainPage.css";

export const MainPageTitle = () => {
  return (
    <div className="mainPage">
      <h1>
        Module Alias - <span>Epiousion IT</span>
      </h1>
      <img src={svgReact} alt="React SVG" />
    </div>
  );
};
