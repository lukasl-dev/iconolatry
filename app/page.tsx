"use client"

import { RedirectType } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"
import { ReactElement } from "react"

export default async function Page(): Promise<ReactElement> {
  redirect("/monokai", RedirectType.replace)

  return <></>
}
