import { Color, ColorPalette } from "~/colors"

const foreground: Color = { hex: "#bab2a6" }

export const nordPolarNight: ColorPalette = {
  shapes: {
    primary: [
      {
        foreground,
        background: { hex: "#2e3440" },
      },
      {
        foreground,
        background: { hex: "#3b4252" },
      },
      {
        foreground,
        background: { hex: "#434c5e" },
      },
      {
        foreground,
        background: { hex: "#4c566a" },
      },
    ],
    secondary: [
      {
        foreground,
        background: { hex: "#383838" },
      },
    ],
    tertiary: [
      {
        foreground,
        background: { hex: "#282828" },
      },
    ],
    quaternary: [
      {
        foreground,
        background: { hex: "#262626" },
      },
    ],
  },
  canvas: {
    background: { hex: "#1d1f20" },
  },
}
