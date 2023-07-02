export type SVGIcon = {
  /**
   * The SVG element as a string.
   */
  svg: string
}

export type SRCIcon = {
  /**
   * The source to the icon.
   */
  src: string
}

export type Icon = SVGIcon | SRCIcon

export function extractIcon(icon: Icon): string {
  if ("svg" in icon) {
    return icon.svg
  }

  return icon.src
}

export function extractIconSource(icon: Icon): string {
  if ("src" in icon) {
    return icon.src
  }
  return URL.createObjectURL(new Blob([icon.svg], { type: "image/svg+xml" }))
}
