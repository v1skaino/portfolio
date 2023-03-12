import useWindowSize from "@src/shared/hooks/getWindowSize";
import { colors } from "@src/shared/themes/colors";
import { handleAlert } from "@src/shared/utils/functions";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";

export const NavBar = () => {
  const gmail = "custodio.viscaino@gmail.com";
  const message = "Copiado para área de transferência!";
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleGmailIconClick = async () => {
    navigator.clipboard.writeText(gmail);

    await handleAlert(message);
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
      {size.width < 1000 && (
        <HamburguerMenuArea>
          <RxHamburgerMenu
            color={colors.white}
            size={22}
            onClick={() => setIsMenuOpen((state) => !state)}
          />
        </HamburguerMenuArea>
      )}
      {isMenuOpen && size.width < 1000 && (
        <HamburguerItems>
          <HamburguerDetail />
          <AnchorA>Home</AnchorA>
          <AnchorA>About</AnchorA>
          <AnchorA>Skills</AnchorA>
          <AnchorA>Contact</AnchorA>
          <Icons>
            <SiWhatsapp size={18} className="icon iconWpp" />
            <SiLinkedin size={18} className="icon iconLinkedin" />
            <SiGmail
              size={18}
              className="icon iconGmail"
              onClick={handleGmailIconClick}
            />
          </Icons>
        </HamburguerItems>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
  @media (max-width: 999px) {
    display: none;
  }
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

  @media (max-width: 1000px) {
    font-size: 22px;
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

const HamburguerMenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HamburguerItems = styled.div`
  transition: 1s;
  position: absolute;
  right: 30px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  flex-direction: column;
  width: 30%;
  padding: 15px 0px;
  row-gap: 10px;
`;

const HamburguerDetail = styled.div`
  position: absolute;
  top: -10px;
  right: -0px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${colors.white};
`;
