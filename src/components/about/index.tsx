import astronautAnimation from "@assets/animations/astronaut.json";
import profilePicture from "@assets/me.jpg";
import Label from "@src/components/label";
import useWindowSize from "@src/shared/hooks/getWindowSize";
import { colors } from "@src/shared/themes/colors";
import { ageCalc } from "@src/shared/utils/functions";
import { t } from "i18next";
import Lottie, { Options } from "react-lottie";
import styled from "styled-components";
export const About = () => {
  const size = useWindowSize();
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: astronautAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container id="about">
      <Image url={profilePicture} />
      <TextArea>
        <h1 style={{ marginBottom: 10 }}>{t("home:about")}</h1>
        <Label color={colors.white}>
          {t("home:resume")}
          {ageCalc("2001-10-09")}
          &nbsp;
          {t("home:yearsOld")}
          <br />
          <br />
          {t("home:resumeII")}
          <br />
          <br />
          {t("home:resumeIII")}
          <br />
          <br />
          {t("home:resumeIV")}
        </Label>
      </TextArea>
      <AnimationContainer>
        <Lottie
          width={size.width > 1000 ? 400 : "auto"}
          height={size.width > 1000 ? 400 : "auto"}
          options={defaultOptions}
        />
      </AnimationContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;

  z-index: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.softBlack};
  width: 100%;

  padding: 20px 25px;
  height: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    row-gap: 50px;
  }

  @media (max-width: 300px) {
    padding: 0px;
  }
`;

const Image = styled.div<{ url: string }>`
  display: flex;
  width: 350px;
  height: 600px;
  min-width: 300px;

  border-radius: 10px;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;

  @media (min-width: 300px) and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 300px) {
    width: 90%;
    height: 300px;
    min-width: 100px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;

  width: 40%;
  justify-content: center;
  color: ${colors.white};
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: none;
  @media (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
