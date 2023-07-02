import { Color } from "~/colors"

export type ColorPalette = {
  /**
   * Contains the colors used for shapes.
   */
  shapes: {
    /**
     * The primary color themes for shapes.
     */
    primary: ColorPaletteShape[]

    /**
     * The secondary color themes for shapes.
     */
    secondary: ColorPaletteShape[]

    /**
     * The tertiary color themes for shapes.
     */
    tertiary: ColorPaletteShape[]

    /**
     * The quaternary color themes for shapes.
     */
    quaternary: ColorPaletteShape[]
  }

  /**
   * Contains the colors used in the canvas.
   */
  canvas: {
    /**
     * The background color of the canvas.
     */
    background: Color
  }
}

export type ColorPaletteShape = {
  /**
   * The foreground color of the shape. Used for the icon or text.
   */
  foreground: Color

  /**
   * The background color of the shape.
   */
  background: Color
}
