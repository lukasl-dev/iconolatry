import { ReactElement, useEffect, useRef, useState } from "react"
import { ColorPalette, ColorPaletteShape, extractColor } from "~/colors"
import { Icon, extractIconSource } from "~/icons"
import { choice } from "~/probability"

export type WallpaperShapeColorDistribution = {
  /**
   * The probabilty of a shape being primary-colored.
   */
  primary: number

  /**
   * The probabilty of a shape being secondary-colored.
   */
  secondary: number

  /**
   * The probabilty of a shape being tertiary-colored.
   */
  tertiary: number

  /**
   * The probabilty of a shape being quaternary-colored.
   */
  quaternary: number

  /**
   * The probability of a shape being hidden.
   */
  hidden: number
}

export type CanvasProps = {
  /**
   * The palette to choose the colors from.
   */
  colors: ColorPalette

  /**
   * The icons to use for the shapes.
   */
  icons: Icon[]

  /**
   * The disortion factor of every second row.
   */
  disortion?: number

  /**
   * The gap between shapes.
   */
  gap?: number

  /**
   * The radius of the shapes.
   */
  radius?: number
}

type CanvasShape = {
  /**
   * The column of the shape.
   */
  column: number

  /**
   * The row of the shape.
   */
  row: number

  /**
   * The actual x-coordinate of the shape.
   */
  x: number

  /**
   * The actual y-coordinate of the shape.
   */
  y: number

  /**
   * The color settings of the shape.
   */
  settings: ColorPaletteShape | undefined
}

export function Canvas({
  colors,
  icons,
  disortion = 2.25,
  radius = 20,
  gap = 3.8 * radius,
}: CanvasProps): ReactElement {
  /**
   * The reference to the canvas element.
   */
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /**
   * The shapes to draw on the canvas.
   */
  const [shapes, setShapes] = useState<CanvasShape[]>([])

  /**
   * Rescales the canvas to increase the resolution of the shapes.
   */
  function scaleDimensions(): void {
    const canvas = canvasRef.current
    const context = canvasRef.current?.getContext("2d")
    if (!canvas || !context) {
      return
    }

    const devicePixelRatio = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * devicePixelRatio
    canvas.height = window.innerHeight * devicePixelRatio

    context.scale(devicePixelRatio, devicePixelRatio)
  }

  /**
   * Draws a solid background on the canvas.
   */
  function drawBackground(): void {
    const canvas = canvasRef.current
    const context = canvasRef.current?.getContext("2d")
    if (!canvas || !context) {
      return
    }

    context.clearRect(0, 0, canvas.width, canvas.height)

    const devicePixelRatio = window.devicePixelRatio || 1

    context.fillStyle = extractColor(colors.canvas.background)
    context.fillRect(
      0,
      0,
      canvas.width / devicePixelRatio,
      canvas.height / devicePixelRatio,
    )
  }

  /**
   * Returns a random shape settings from the color palette.
   *
   * @returns A random shape settings from the color palette
   */
  function randomShapeSettings(): ColorPaletteShape | undefined {
    const { primary, secondary, tertiary, quaternary } = colors.shapes

    return choice<{ value: ColorPaletteShape | undefined }>([
      {
        value: primary[Math.floor(Math.random() * primary.length)],
        probability: 0.1,
      },
      {
        value: secondary[Math.floor(Math.random() * secondary.length)],
        probability: 0.1,
      },
      {
        value: tertiary[Math.floor(Math.random() * tertiary.length)],
        probability: 0.4,
      },
      {
        value: quaternary[Math.floor(Math.random() * quaternary.length)],
        probability: 0.1,
      },
      {
        value: undefined,
        probability: 0.3,
      },
    ]).value
  }

  /**
   * Draws a shape on the canvas.
   *
   * @param param0 The shape to draw
   */
  function drawShape({ x, y, settings }: CanvasShape): void {
    if (!settings) {
      return
    }

    const canvas = canvasRef.current
    const context = canvasRef.current?.getContext("2d")
    if (!canvas || !context) {
      return
    }

    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.fillStyle = extractColor(settings.background)
    context.fill()

    const icon = icons[Math.floor(Math.random() * icons.length)]

    const image = new Image()
    image.onload = () => {
      context.fillStyle = extractColor(settings.foreground)
      context.drawImage(
        image,
        x - image.width / 2,
        y - image.height / 2,
        image.width,
        image.height,
      )
    }
    image.src = extractIconSource(icon)
  }

  /**
   * Generates the shapes to draw on the canvas.
   */
  function generateShapes(): void {
    const columns = Math.ceil(window.innerWidth / (2 * radius))
    const rows = Math.ceil(window.innerHeight / (2 * radius))

    const generated: CanvasShape[] = []

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        generated.push({
          column,
          row,
          x: column * gap + column * disortion * (row % 2),
          y: row * gap,
          settings: randomShapeSettings(),
        })
      }
    }

    setShapes([...generated])
  }

  function reset(): void {
    scaleDimensions()
    drawBackground()

    shapes.forEach(drawShape)
  }

  useEffect(() => generateShapes(), [])

  useEffect(() => {
    function onResize(): void {
      reset()
    }

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => reset(), [shapes])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-screen h-screen" />
    </>
  )
}
