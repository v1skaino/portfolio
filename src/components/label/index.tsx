import { colors, ColorsType } from "@src/shared/themes/colors";
import { fontSize } from "@src/shared/themes/fonts";
import React from "react";
import styled, { css } from "styled-components";

export interface LabelPropsType {
  color?: string;
  disabledColor?: string;
  size?: string | number;
  fontFamily?: string;
  textAlign?: string;
  lineHeight?: string;
  opacity?: number;
  minHeight?: number;
  width?: number;
  pad?: string;
  marg?: string;
  children?: React.ReactNode;
  textDecorationLine?: string;
  textTransform?: string;
  letterSpacing?: string;
  flex?: string;
  fontWeight?: string;
  disabled?: boolean;
  cursor?: string;
  onClick?: () => void;
}

interface LabelStyleType extends LabelPropsType {
  colors: ColorsType;
}

const Label = (props: LabelPropsType) => {
  const { children } = props;
  return (
    <Txt
      onClick={props.onClick}
      data-testid="@label_component"
      colors={colors}
      {...props}
    >
      {children}
    </Txt>
  );
};

const Txt = styled.label<LabelStyleType>`
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.size ? props.size : fontSize.medium)}px;
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Roboto")};
  color: ${({ color, disabled, colors, disabledColor }) => {
    if (disabled) {
      return disabledColor || colors.black;
    }
    return color ? color : colors.black;
  }};
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `};
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};
  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight}px;
    `};
  ${(props) =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `};
  ${(props) => {
    let css = "";

    if (props.pad) {
      css = css + `padding: ${props.pad};`;
    }

    if (props.marg) {
      css = css + `margin: ${props.marg};`;
    }

    if (props.letterSpacing) {
      css = css + `letter-spacing: ${props.letterSpacing};`;
    }

    if (props.textDecorationLine) {
      css = css + `text-decoration: ${props.textDecorationLine}`;
    }
    return css;
  }}
`;

export default Label;
