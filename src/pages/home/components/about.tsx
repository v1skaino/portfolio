import Label from "@src/components/label";
import { colors } from "@src/shared/themes/colors";
import styled from "styled-components";
import profilePicture from "../../../assets/me.jpg";
export const About = () => {
  return (
    <Container id="about">
      <Image url={profilePicture} />
      <TextArea>
        <h1>Sobre</h1>
        <Label color={colors.white}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </Label>
      </TextArea>
      {/* <label>{ageCalc("2001-10-09")}</label> */}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  column-gap: 50px;
  z-index: 1;
  align-items: center;
  background-color: ${colors.softBlack};
  width: 100%;
  min-height: 100vh;
  padding: 20px 25px;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const Image = styled.div<{ url: string }>`
  display: flex;
  width: 350px;
  height: 600px;
  border-radius: 10px;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;

  @media (max-width: 1000px) {
    width: 90%;
    height: 300px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  justify-content: center;
  color: ${colors.white};
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
