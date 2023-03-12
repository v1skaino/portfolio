export interface ColorsType {
  primary: string;
  white: string;
  black: string;
  softBlack: string;
  wppColor: string;
  linkedin: string;
  gmail: string;
}

const primary = import.meta.env.VITE_PRIMARY_COLOR;

export const colors: ColorsType = {
  primary: "#2EC4B6",
  white: "#FFF",
  black: "#1C1C1F",
  softBlack: "#1F2023",
  wppColor: "#25D366",
  linkedin: "#0077b5",
  gmail: "#c71610",
};
