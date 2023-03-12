import { colors } from "@src/shared/themes/colors";
import styled from "styled-components";

export const About = () => {
  return <Container id="about"></Container>;
};
const Container = styled.div`
  display: flex;
  z-index: 1;
  background-color: ${colors.softBlack};
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 0px 0px 0px 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
