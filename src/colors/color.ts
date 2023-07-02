export type HEXColor = {
  hex: `#${string}`
}

export type RGBColor = {
  rgb: `rgb(${number}, ${number}, ${number})`
}

export type HSLColor = {
  hsl: `hsl(${number}, ${number}%, ${number}%)`
}

export type Color = HEXColor | RGBColor | HSLColor

/**
 * Extracts the string representation of a color.
 *
 * @param color The color to extract the string from.
 * @returns The string representation of the color.
 */
export function extractColor(color: Color): string {
  if ("hex" in color) {
    return color.hex
  } else if ("rgb" in color) {
    return color.rgb
  } else {
    return color.hsl
  }
}
