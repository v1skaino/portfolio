import { SVGs } from "@src/assets";
import useWindowSize from "@src/shared/hooks/getWindowSize";
import { colors } from "@src/shared/themes/colors";
import { changeAppLanguage, smoothScroll } from "@src/shared/utils/functions";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";
import { Hamburguer } from "../hamburguer";

export const NavBar = () => {
  const gmail = "custodio.viscaino@gmail.com";
  const size = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { i18n, t } = useTranslation();

  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${gmail}`);
  };

  const { brazil, usa } = SVGs;

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
          <AnchorA onClick={(e) => smoothScroll(e, "home")}>
            {t("home:home")}
          </AnchorA>
          <AnchorA onClick={(e) => smoothScroll(e, "about")}>
            {t("home:about")}
          </AnchorA>
          <AnchorA onClick={(e) => smoothScroll(e, "skills")}>
            {t("home:skills")}
          </AnchorA>
          <AnchorA onClick={(e) => smoothScroll(e, "contact")}>
            {t("home:contact")}
          </AnchorA>
        </Anchor>
        <Icons>
          <a href="https://contate.me/lucas-viscaino" target="_blank">
            <SiWhatsapp size={18} className="icon iconWpp" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-viscaino-713a6b223/"
            target="_blank"
          >
            <SiLinkedin size={18} className="icon iconLinkedin" />
          </a>

          <SiGmail
            size={18}
            className="icon iconGmail"
            onClick={handleGmailIconClick}
          />
          <img
            onClick={() => {
              i18n.changeLanguage("pt-BR");
              changeAppLanguage("pt-BR");
            }}
            className="languageSelector"
            src={brazil}
            alt="Brazil Flag"
          />
          <img
            onClick={() => {
              i18n.changeLanguage("en");
              changeAppLanguage("en");
            }}
            className="languageSelector"
            src={usa}
            alt="USA Flag"
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
        <Hamburguer setIsMenuOpen={setIsMenuOpen} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-area: NB;
  background-color: ${colors.black};
  z-index: 2;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    background-color: #0a4f4f;
    z-index: 2;
    height: 70px;
    align-items: center;
    background-color: ${colors.black};
    width: 100%;
    position: fixed;
    top: 0;
  }
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

  .languageSelector {
    cursor: pointer;
    width: 30px;
    height: 20px;
  }

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
  padding: 10px 0px;
`;
