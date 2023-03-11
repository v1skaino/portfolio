export interface ColorsType {
  primary: string;
  white: string;
  black: string;
  softBlack: string;
}

const primary = import.meta.env.VITE_PRIMARY_COLOR;

export const colors: ColorsType = {
  primary: "#297373",
  white: "#FFF",
  black: "#1C1C1F",
  softBlack: "#1F2023",
};
