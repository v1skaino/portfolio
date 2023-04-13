import { colors } from "@src/shared/themes/colors";
import { t } from "i18next";
import { SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";

export const ContactMe = () => {
  const { wppColor, linkedin, gmail } = colors;
  const email = "custodio.viscaino@gmail.com";

  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${email}`);
  };

  return (
    <Container id="contact">
      <h2>{t("home:contactWay")}</h2>
      <p className="paragraph">{t("home:contactDesc")}</p>
      <ContactWay>
        <DataCard hover={wppColor} href="https://contate.me/lucas-viscaino">
          <SiWhatsapp />
          <p>(15) 981804807</p>
        </DataCard>
        <DataCard
          hover={linkedin}
          href="https://www.linkedin.com/in/lucas-viscaino-713a6b223/"
        >
          <SiLinkedin />
          <p>Lucas Viscaino</p>
        </DataCard>
        <DataCard href="https://www.instagram.com/lucsvi_/">
          <SiInstagram className="gradient" />
          <p className="insta">@lucsvi</p>
        </DataCard>
        <DataCard onClick={handleGmailIconClick} hover={gmail}>
          <SiGmail />
          <p>custodio.viscaino</p>
        </DataCard>
      </ContactWay>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding: 20px;
  background-color: ${colors.black};
  z-index: 1;

  h2 {
    color: ${colors.white};
  }

  .paragraph {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 30px;
  }
`;
const ContactWay = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DataCard = styled.a<{ hover?: string; insta?: boolean }>`
  display: flex;
  text-decoration: none;
  align-items: center;
  column-gap: 10px;
  padding: 0 10px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  color: ${colors.white};
  background: ${colors.softBlack};

  :hover {
    color: ${({ hover }) => hover};

    .gradient {
      color: #fd5949;
    }

    .insta {
      background-color: red;
      background-image: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );

      background-size: 100%;
      background-repeat: repeat;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
`;
