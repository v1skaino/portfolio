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
  background-color: ${colors.black};
`;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  height: 100px;
  z-index: 2;
  background-color: ${colors.black};
`;

const Content = styled.div`
  display: flex;
  margin-top: 100px;
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: auto;
  background-color: ${colors.black};

  color: ${colors.black};
`;
