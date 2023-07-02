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
