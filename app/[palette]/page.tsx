"use client"

import { ReactElement } from "react"
import {
  ColorPaletteName,
  colorPalettes,
  isColorPaletteName,
} from "~/colors/presets"
import { Icon } from "~/icons"
import { Canvas } from "~/components"

type PageProps = {
  params: {
    palette: string | ColorPaletteName
  }
  searchParams: {
    gap?: number
    radius?: number
    icons?: string
  }
}

export default function Page({
  params,
  searchParams,
}: PageProps): ReactElement {
  if (!isColorPaletteName(params.palette)) {
    throw new Error("Unknown color palette")
  }

  const iconNames = searchParams.icons?.split(",") || []
  const icons = iconNames.map(
    (name): Icon => ({
      src: require(`lucide-static/icons/${name}.svg`).default.src,
    }),
  )

  return (
    <>
      <Canvas colors={colorPalettes.monokai} icons={icons} />
    </>
  )
}
