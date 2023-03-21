import rocketAnimation from "@assets/animations/rocket.json";
import universeAnimation from "@assets/animations/universe.json";
import { EnergyButton } from "@src/components/button";
import Label from "@src/components/label";
import { Particle } from "@src/components/particle";
import useWindowSize from "@src/shared/hooks/getWindowSize";
import { colors } from "@src/shared/themes/colors";
import { t } from "i18next";
import Lottie, { Options } from "react-lottie";
import styled from "styled-components";

export const MainContent = () => {
  const size = useWindowSize();
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: size.width > 1000 ? universeAnimation : rocketAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCalcSize = () => {
    return size.width * 0.9;
  };

  return (
    <Container id="home">
      <Particle />
      <DataInfo>
        <Title color={colors.white} size={36}>
          Lucas
        </Title>
        <Title style={{ marginLeft: 10 }} size={34} color={colors.white}>
          Viscaino<span style={{ color: colors.primary }}>.</span>
        </Title>
        <Divider />
        <Description>
          <Label color={colors.white}>
            {t("home:softwareDeveloper")}&nbsp;|&nbsp;
          </Label>
          <Label color={colors.white}>Typescript&nbsp;|&nbsp;</Label>
          <Label color={colors.white}>React JS&nbsp;|&nbsp;</Label>
          <Label color={colors.white}>React Native</Label>
        </Description>
        <ButtonArea>
          <EnergyButton anchor="#about" label={t("home:contactMe")} />
        </ButtonArea>
      </DataInfo>
      <AnimationContainer>
        <Lottie
          height={size.width > 1000 ? 800 : handleCalcSize()}
          width={size.width > 1000 ? 800 : handleCalcSize()}
          options={defaultOptions}
        />
      </AnimationContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 0px 0px 0px 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 10%;
  width: 20%;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.label<{ color: string; size: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;

const Divider = styled.div`
  margin: 20px 0px;
  height: 3px;
  width: 20%;
  background-color: ${colors.primary};
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  width: 50%;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 250px;
`;

const AnimationContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  pointer-events: none;
  @media (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
