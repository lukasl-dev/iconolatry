import { Color, ColorPalette } from "~/colors"

const foreground: Color = { hex: "#bab2a6" }

export const nordSnowStorm: ColorPalette = {
  shapes: {
    primary: [
      {
        foreground,
        background: { hex: "#d8dee9" },
      },
      {
        foreground,
        background: { hex: "#e5e9f0" },
      },
      {
        foreground,
        background: { hex: "#eceff4" },
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
