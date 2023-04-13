import { colors } from "@src/shared/themes/colors";
import styled from "styled-components";

import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <Content>
      <BiCopyright color={colors.white} />
      <p>Copyright - lucsvi - All rights reserved</p>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 20px;
  background-color: ${colors.black};
  border-top: 3px solid ${colors.softBlack};
  z-index: 1;

  p {
    font-size: 0.8rem;
    color: ${colors.white};
  }
`;
