import { Color, ColorPalette } from "~/colors"

const foreground: Color = { hex: "#bab2a6" }

export const nordAurora: ColorPalette = {
  shapes: {
    primary: [
      {
        foreground,
        background: { hex: "#bf616a" },
      },
      {
        foreground,
        background: { hex: "#d08770" },
      },
      {
        foreground,
        background: { hex: "#ebcb8b" },
      },
      {
        foreground,
        background: { hex: "#a3be8c" },
      },
      {
        foreground,
        background: { hex: "#b48ead" },
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
