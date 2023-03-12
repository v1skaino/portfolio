import { colors } from "@src/shared/themes/colors";
import { ReactNode } from "react";
import styled from "styled-components";
import { NavBar } from "../navBar";

type TemplateProps = {
  children: ReactNode;
};

export const Template = ({ children }: TemplateProps) => {
  return (
    <Layout>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <Content>{children}</Content>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.nav`
  width: 100%;
  height: 20vh;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: auto;

  color: ${colors.black};
`;
