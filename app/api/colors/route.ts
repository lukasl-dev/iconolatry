import { NextResponse } from "next/server";
import { ColorPalette } from "~/colors";
import { ColorPaletteName, colorPalettes } from "~/colors/presets";

export async function GET(): Promise<
  NextResponse<Record<ColorPaletteName, ColorPalette>>
> {
  return NextResponse.json(colorPalettes);
}
