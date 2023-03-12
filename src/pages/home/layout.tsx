import { Template } from "@src/components/layout";
import { Particle } from "@src/components/particle";
import styled from "styled-components";
import { HomeLayoutPropTypes } from "./types";

const HomeLayout = ({}: HomeLayoutPropTypes) => {
  return (
    <Template>
      <Container>
        <Particle />
      </Container>
    </Template>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export { HomeLayout };
