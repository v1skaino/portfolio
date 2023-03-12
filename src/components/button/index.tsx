import { colors } from "@src/shared/themes/colors";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  anchor: string;
};

export const EnergyButton = ({ label, anchor }: ButtonProps) => {
  return (
    <ButtonEnergy href={anchor} data-text="Awesome">
      <span>{label}</span>
      <i></i>
    </ButtonEnergy>
  );
};

const ButtonEnergy = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  background: #333;
  border: none;
  color: #fff;
  cursor: pointer;

  :hover {
    letter-spacing: 0.25em;
    background: ${colors.primary};
    color: ${colors.primary};
    box-shadow: 0 0 45px ${colors.primary};
  }

  ::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #222222;
  }

  span {
    position: relative;
    z-index: 1;
  }

  i {
    position: absolute;
    inset: 0;
    display: block;
  }

  i::before {
    content: "";
    position: absolute;
    border: 2px solid ${colors.primary};
    width: 7px;
    height: 4px;
    top: -3.5px;
    left: 80%;
    background: #222222;
    transform: translateX(-50%);
    transition: 0.5s;
  }

  :hover i::before {
    width: 20px;
    left: 20%;
  }

  i::after {
    content: "";
    position: absolute;
    border: 2px solid ${colors.primary};
    width: 7px;
    height: 4px;
    bottom: -3.5px;
    left: 20%;
    background: #222222;
    transform: translateX(-50%);
    transition: 0.5s;
  }

  :hover i::after {
    width: 20px;
    left: 80%;
  }
`;
