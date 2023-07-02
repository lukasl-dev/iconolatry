import { ReactElement } from "react"
import {
  ColorPaletteName,
  colorPalettes,
  isColorPaletteName,
} from "~/colors/presets"
import { Icon } from "~/icons"
import { Canvas } from "~/components"
import { iconLoaders } from "../../src/icons/loaders"

type PageProps = {
  params: {
    palette: string | ColorPaletteName
  }
  searchParams: {
    gap?: number
    radius?: number
    icons?: string
    disortion?: number
  }
}

export default async function Page({
  params,
  searchParams,
}: PageProps): Promise<ReactElement> {
  if (!isColorPaletteName(params.palette)) {
    throw new Error(`Unknown color palette: ${params.palette}`)
  }

  const iconNames = searchParams.icons?.split(",") || []

  const icons = await Promise.all(
    iconNames.map(async (name): Promise<Icon> => {
      const loader = iconLoaders.find((loader) =>
        name.startsWith(loader.prefix),
      )
      if (!loader) {
        throw new Error(`Unknown icon: ${name}`)
      }

      return loader.loadIcon(name)
    }),
  )

  return (
    <>
      <Canvas
        colors={colorPalettes[params.palette]}
        icons={icons}
        disortion={searchParams.disortion}
        gap={searchParams.gap}
        radius={searchParams.radius}
      />
    </>
  )
}
