import { colors } from "@src/shared/themes/colors";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";
import { handleAlert, ToastNotification } from "../toastNotification";

export const NavBar = () => {
  const gmail = "custodio.viscaino@gmail.com";
  const message = "Copiado para área de transferência!";

  const handleGmailIconClick = async () => {
    navigator.clipboard.writeText(gmail);

    await handleAlert();
  };
  return (
    <Container>
      <Logo>
        <LogoTitle size={28} color={colors.white}>
          L
        </LogoTitle>
        <LogoTitle size={24} color={colors.white}>
          V<span style={{ color: colors.primary, fontSize: 36 }}>.</span>
        </LogoTitle>
      </Logo>
      <Links>
        <Anchor>
          <AnchorA>Home</AnchorA>
          <AnchorA>About</AnchorA>
          <AnchorA>Skills</AnchorA>
          <AnchorA>Contact</AnchorA>
        </Anchor>
        <Icons>
          <SiWhatsapp size={18} className="icon iconWpp" />
          <SiLinkedin size={18} className="icon iconLinkedin" />
          <SiGmail
            size={18}
            className="icon iconGmail"
            onClick={handleGmailIconClick}
          />
        </Icons>
      </Links>
      <ToastNotification message={message} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  background-color: ${colors.black};
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.label<{ color: string; size: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
    transform: scale(1.1);
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;
`;

const Anchor = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 0px 15px;
  border-right: 2px solid ${colors.white};
`;

const AnchorA = styled.a`
  text-decoration: none;
  color: ${colors.white};
  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
    transform: scale(1.1);
  }
`;

const Icons = styled.div`
  display: flex;
  column-gap: 15px;

  .icon {
    color: ${colors.white};
    transition: 0.5s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }

  .iconWpp {
    :hover {
      color: ${colors.wppColor};
    }
  }
  .iconLinkedin {
    :hover {
      color: ${colors.linkedin};
    }
  }

  .iconGmail {
    :hover {
      color: ${colors.gmail};
    }
  }
`;
