import { colors } from "@src/shared/themes/colors";
import { ReactNode } from "react";
import styled from "styled-components";
import { NavBar } from "../navBar";

type TemplateProps = {
  children: ReactNode;
};

export const Template = ({ children }: TemplateProps) => {
  return (
    <Grid>
      <NavBar />
      <Content>{children}</Content>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  background-color: ${colors.black};
  grid-template-columns: 250px auto;
  grid-template-rows: 118px auto;
  grid-template-areas:
    "NB NB NB"
    "CT CT CT";
  @media (max-width: 600px) {
    height: auto;

    grid-template-areas:
      "NB NB"
      "CT CT";
  }
  min-height: 100vh;
  height: 100vh;
`;

const Content = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;

  grid-auto-flow: row;
  grid-auto-rows: 25%;
  grid-template-rows: unset;
  overflow: auto;
  grid-template-columns: unset;

  ::-webkit-scrollbar {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;
