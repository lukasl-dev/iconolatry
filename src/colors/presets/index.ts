import { ColorPalette } from "~/colors"
import { monokai } from "~/colors/presets/monokai"
import { nordPolarNight } from "~/colors/presets/nord_polar_night"
import { nordAurora } from "~/colors/presets/nord_aurora"
import { nordSnowStorm } from "~/colors/presets/nord_snow_storm"
import { catppuccinLatte } from "~/colors/presets/catppuccin_latte"

/**
 * An array of the color palette names.
 */
export const colorPaletteNames = [
  "monokai",
  "nord-polar-night",
  "nord-aurora",
  "nord-snow-storm",
  "catppuccin-latte",
] as const

/**
 * A string-union of the color palette names.
 */
export type ColorPaletteName = typeof colorPaletteNames[number]

/**
 * Returns whether the name is a valid color palette name.
 *
 * @param name The name of the color palette.
 * @returns Whether the name is a valid color palette name.
 */
export function isColorPaletteName(name: string): name is ColorPaletteName {
  return colorPaletteNames.includes(name as ColorPaletteName)
}

/**
 * The color palettes available.
 */
export const colorPalettes: Record<ColorPaletteName, ColorPalette> = {
  monokai,
  "nord-polar-night": nordPolarNight,
  "nord-aurora": nordAurora,
  "nord-snow-storm": nordSnowStorm,
  "catppuccin-latte": catppuccinLatte,
}
