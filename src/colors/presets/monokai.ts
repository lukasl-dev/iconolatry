import { Color, ColorPalette } from "~/colors"

const foreground: Color = { hex: "#141414" }

export const monokai: ColorPalette = {
  shapes: {
    primary: [
      {
        foreground,
        background: { hex: "#ff6188" },
      },
      {
        foreground,
        background: { hex: "#fc9867" },
      },
      {
        foreground,
        background: { hex: "#ffd866" },
      },
      {
        foreground,
        background: { hex: "#a9dc76" },
      },
      {
        foreground,
        background: { hex: "#78dce8" },
      },
      {
        foreground,
        background: { hex: "#ab9df2" },
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
    background: { hex: "#222222" },
  },
}
