import { EnergyButton } from "@src/components/button";
import Label from "@src/components/label";
import { Particle } from "@src/components/particle";
import { colors } from "@src/shared/themes/colors";
import { t } from "i18next";
import styled from "styled-components";

export const MainContent = () => {
  return (
    <Container>
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
          <EnergyButton anchor="#_" label={t("home:contactMe")} />
        </ButtonArea>
      </DataInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 60px;
`;

const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 10%;
  width: 30%;
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
