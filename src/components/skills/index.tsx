import { SVGs } from "@src/assets";
import { colors } from "@src/shared/themes/colors";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SkillCard } from "../skillCard";

export const Skills = () => {
  const { react, typescript, git, vue, next, vite } = colors;
  const { reactSvg, typescriptSvg, gitSvg, vueSvg, nextSvg, viteSvg } = SVGs;
  const { t } = useTranslation();

  return (
    <Content id="skills">
      <h1>{t("home:skills")}</h1>
      <Container>
        <a href="https://legacy.reactjs.org/" target="_blank">
          <div className="item1 item">
            <SkillCard
              alt="React JS Icon with Rotate Animation"
              animated
              url={reactSvg}
              title="React JS"
              color={react}
            />
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <div className="item2 item">
            <SkillCard
              alt="Typescript icon"
              url={typescriptSvg}
              title="Typescript"
              color={typescript}
            />
          </div>
        </a>
        <a href="https://git-scm.com/" target="_blank">
          <div className="item3 item">
            <SkillCard alt="Git icon" url={gitSvg} title="Git" color={git} />
          </div>
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <div className="item4 item">
            <SkillCard alt="VUE Icon" url={vueSvg} title="Vue.js" color={vue} />
          </div>
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <div className="item5 item">
            <SkillCard alt="NextJS icon" url={nextSvg} title="" color={next} />
          </div>
        </a>
        <a href="https://vitejs.dev/" target="_blank">
          <div className="item6 item">
            <SkillCard
              alt="Vite icon"
              url={viteSvg}
              title="Vite"
              color={vite}
            />
          </div>
        </a>
      </Container>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${colors.black};
  z-index: 1;
  padding: 20px;
  h1 {
    color: ${colors.white};
  }
`;

const Container = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  height: auto;
  grid-template-areas:
    "area1  area2  area3"
    "area4  area5  area6";
  align-items: stretch;
  justify-items: stretch;

  a {
    text-decoration: none;
  }

  .item {
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: ${colors.softBlack};
    cursor: pointer;
  }

  .item1 {
    grid-area: area1;
  }

  .item2 {
    grid-area: area2;
  }

  .item3 {
    grid-area: area3;
  }

  .item4 {
    grid-area: area4;
  }

  .item5 {
    grid-area: area5;
  }

  .item6 {
    grid-area: area6;
  }

  @media (max-width: 630px) {
    display: grid;
    gap: 16px;
    grid-template-areas:
      "area1"
      "area2"
      "area3"
      "area5"
      "area4"
      "area6";
    align-items: stretch;
    justify-items: stretch;
  }

  @media (min-width: 630px) and (max-width: 1000px) {
    display: grid;
    gap: 16px;
    grid-template-areas:
      "area1 area2"
      "area3 area4"
      "area5 area6";
    align-items: stretch;
    justify-items: stretch;
  }
`;
