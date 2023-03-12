import { colors } from "@src/shared/themes/colors";
import { handleAlert, smoothScroll } from "@src/shared/utils/functions";
import { t } from "i18next";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";

export const Hamburguer = () => {
  const gmail = "custodio.viscaino@gmail.com";
  const message = "Copiado para área de transferência!";

  const handleGmailIconClick = async () => {
    navigator.clipboard.writeText(gmail);

    await handleAlert(message);
  };
  return (
    <HamburguerItems>
      <HamburguerDetail />
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
      </AnchorA>{" "}
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
  );
};

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

const HamburguerItems = styled.div`
  transition: 1s;
  position: absolute;
  right: 30px;
  top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  flex-direction: column;
  width: auto;
  padding: 15px 10px;
  row-gap: 10px;
  background-color: ${colors.black};
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
